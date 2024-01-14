import express from "express";
import cors from "cors";
import connect from "./database/index.js";
import {
  AuthRouter,
  CartRouter,
  CateRouter,
  ProductRouter,
  uploadRouter,
  mailRouter,
  orderRouter,
} from "./routers/index.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || "3001";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", ProductRouter);
app.use("/users", AuthRouter);
app.use("/category", CateRouter);
app.use("/image", uploadRouter);
app.use("/mail", mailRouter);
app.use("/card", CartRouter);
app.use("/order", orderRouter);

import paypal from "paypal-rest-sdk";
paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SERECT,
});

app.post("/paypal", (req, res) => {
  const { data, price } = req.body;
  console.log(price);
  // const sumPrice = data?.reduce((sum, item) => sum + item.price, 0);
  // console.log(data, sumPrice);

  const obj = [
    {
      name: "ao",
      quantity: 1,
      price: 1000,
      currency: "USD",
    },
    {
      name: "quan",
      quantity: 1,
      price: 2000,
      currency: "USD",
    },
    {
      name: "dep",
      quantity: 1,
      price: 500,
      currency: "USD",
    },
  ];

  const totalMoney = 3500;

  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: process.env.RETURN_URL,
      cancel_url: process.env.CANCEL_URL,
    },
    transactions: [
      {
        item_list: {
          items: obj,
        },
        amount: {
          currency: "USD",
          total: totalMoney,
        },
        description: "Hat for the best team ever",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      console.log("Error pay: " + error);
      res.json({
        statusCode: 500,
        message: "Server Error When Create Payment",
      });
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.json(payment.links[i]);
        }
      }
    }
  });
});

app.get("/success", (req, res) => {
  res.send(`
    <html>
        <head>
            <script>
                toast.success("Thanh toán thành công!");
                window.location.href = "http://localhost:7000";
            </script>
        </head>
        <body>
            <p>Đang chuyển hướng...</p>
        </body>
    </html>
`);
});

app.get("/cancel", (req, res) => {
  res.send(`
    <html>
        <head>
            <script>
                alert("Bạn đã hủy thanh toán!");
                window.location.href = "http://localhost:7000";
            </script>
        </head>
        <body>
            <p>Đang chuyển hướng...</p>
        </body>
    </html>
`);
});

app.listen(7000, async () => {
  await connect();
  console.log(`Example app listening on port ${port}`);
});
