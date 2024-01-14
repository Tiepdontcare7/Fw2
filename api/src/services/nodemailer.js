import nodemailer from "nodemailer";

const sendMailOrder = async ({ email, data }) => {
  const subToltal = data?.reduce((a, b) => (a += b.price * b.quantity), 0);
  const toltal = subToltal - (subToltal * 10) / 100;

  const productHTML = data
    .map((product) => {
      return `
      <p><b>Sản phẩm:</b> ${product.name}, <b>Số lượng:</b> ${product.quantity}, <b>Đơn giá:</b> $${product.price}</p>
      <hr />
    `;
    })
    .join("");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS_MAIL,
    },
  });

  const info = await transporter.sendMail({
    from: '"TShop" <tatiep179@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Bạn đã đặt đơn hàng thành công!", // Subject line
    text: "Hello world?", // plain text body
    html: `<p><b>Danh sách sản phẩm:</b></p>
    ${productHTML}
    <b>Tổng tiền cần thanh toán: $ ${toltal}</b>
    <p><b>Đơn hàng của bạn sẽ được giao đến trong vài ngày nữa. Cảm ơn bạn đã mua hàng!</b></p>`, // html body
  });
};

const sendMailPassword = async ({ email: { email }, code }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS_MAIL,
    },
  });

  const info = await transporter.sendMail({
    from: '"TShop" <tatiep179@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "TShop - RESET PASSWORD", // Subject line
    text: "Hello world?", // plain text body
    html: `<span>Code: ${code}</span>`, // html body
  });
};

export { sendMailOrder, sendMailPassword };
