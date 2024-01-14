import cart from "../models/cart.js";

export const getAllCart = async (req, res) => {
  try {
    const carts = await cart.find({});
    return res.status(200).json({ data: carts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, name, price, img, quantity = 1 } = req.body;

    let userCart = await cart.findOne({ userId });

    if (!userCart) {
      userCart = await cart.create({
        userId,
        products: [{ productId, name, price, img, quantity }],
      });
      if (!userCart) {
        return res.status(500).json({ message: "Tạo mới giỏ hàng thất bại!" });
      }
    } else {
      const existingProduct = userCart.products.find(
        (product) => product.productId == productId
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        userCart.products.unshift({ productId, name, price, img, quantity });
      }

      userCart = await userCart.save();

      if (!userCart) {
        return res.status(500).json({ message: "Cập nhật giỏ hàng thất bại!" });
      }
    }

    return res
      .status(200)
      .json({ message: "Thêm sản phẩm vào giỏ hàng thành công!" });
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
