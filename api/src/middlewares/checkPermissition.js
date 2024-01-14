import jwt from "jsonwebtoken";

export const checkPermission = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new Error("Token not found!");
    }

    const decoded = jwt.verify(token, process.env.TOKEN);

    if (decoded.findUser && decoded.findUser.role === 1) {
      next();
    } else {
      throw new Error("Ban không phải admin, bạn không có quyền làm việc này!");
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
