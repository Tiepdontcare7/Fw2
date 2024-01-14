import order from "../models/order.js";

export const getAllOrder = async (req, res) => {
  try {
    const orders = await order.find({});
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const addOrder = async (req, res) => {
  try {
    const {
      userId,
      products,
      dateTime,
      name,
      phone,
      address,
      message,
      paymentMethod,
    } = req.body;

    // Kiểm tra đồng bộ để tránh tình trạng race condition
    const userOrder = await order.findOne({ userId });

    // Nếu không tìm user, tạo mới order
    if (!userOrder) {
      const newOrder = await order.create({
        userId,
        name,
        address,
        phone,
        paymentMethod,
        products: products.map((p) => ({
          productId: p.productId,
          name: p.name,
          price: p.price,
          quantity: p.quantity,
          message,
          dateTime,
        })),
      });

      if (!newOrder) {
        return res.status(500).json({ message: "Tạo mới đơn hàng thất bại!" });
      }

      return res
        .status(200)
        .json({ message: "Thêm sản phẩm vào order thành công!" });
    }

    // Nếu đã có đơn hàng, thêm từng sản phẩm vào đơn hàng hiện tại
    products.forEach((p) => {
      userOrder.products.unshift({
        productId: p.productId,
        name: p.name,
        price: p.price,
        quantity: p.quantity,
        dateTime,
      });
    });

    // Lưu lại đơn hàng đã cập nhật
    await userOrder.save();

    return res
      .status(200)
      .json({ message: "Thêm sản phẩm vào order thành công!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { userId, productId, quantity, name } = req.body;
    const Cart = await cart.findOne({ userId });

    if (!Cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const productIndex = Cart.products.findIndex((item) => item.name == name);

    if (productIndex === -1) {
      return res.status(404).json({ error: "Product not found in cart" });
    }

    Cart.products[productIndex].quantity = quantity;

    const updatedCart = await Cart.save();

    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeCartItem = async (req, res) => {
  try {
    const { userId, productId, name } = req.body;

    const userCart = await cart.findOne({ userId });

    if (!userCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    userCart.products = userCart.products.filter((item) => item.name != name);

    const updatedCart = await userCart.save();

    return res.status(200).json({ deleted: true, updatedCart });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
