import { product } from "../models/index.js";
import { schemaProduct } from "../validate/index.js";
import category from "../models/category.js";
import cloudinary from "../config/cloudinary.js";

const getAllproducts = async (req, res) => {
  try {
    const {
      _limit = 10,
      _page = 1,
      _order = "asc",
      _sort = "createdAt",
    } = req.query;

    const options = {
      page: _page,
      limit: _limit,
      order: _order,
      sort: {
        [_sort]: _order === "asc" ? 1 : -1,
      },
    };
    const data = await product.paginate({}, options);

    // const data = await product.find({}).populate("categoryId");

    //* !data.docs
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const data = await product.findById(req.params.id).populate("categoryId");

    if (!data) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm!",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const { error } = schemaProduct.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    } else {
      const data = await product.create(req.body);
      if (!data) {
        return res.status(404).json({
          message: "Tạo mới sản phẩm thất bại!",
        });
      }

      const updateCategory = await category.findByIdAndUpdate(data.categoryId, {
        $addToSet: {
          products: data._id,
        },
      });
      if (!updateCategory) {
        throw new Error("Cập nhật danh mục thất bại!");
      }

      return res.status(200).json({
        message: "Tạo mới sản phẩm thành công!",
        data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const { error } = schemaProduct.validate(body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    } else {
      const data = await product
        .findByIdAndUpdate(req.params.id, body, { new: true })
        .populate("categoryId");
      console.log(data);

      if (!data) {
        return res.status(404).json({
          message: "Cập nhật sản phẩm thất bại!",
        });
      }

      return res.status(200).json({
        message: "Cập nhật sản phẩm thành công!",
        data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const data = await product.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(500).json({
        message: "Xóa sản phẩm thất bại!",
      });
    }

    return res.status(200).json({
      message: "Xoá sản phẩm thành công!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default {
  getAllproducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
