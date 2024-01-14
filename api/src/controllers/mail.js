import { sendMailPassword, sendMailOrder } from "../services/nodemailer.js";

export const sendMailController = async (req, res) => {
  try {
    const { email, action, code, data } = req.body;

    if (action == "order") {
      await sendMailOrder({ email, data });
    } else {
      await sendMailPassword({ email, code });
    }

    return res.status(200).json({ message: "Send email successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
