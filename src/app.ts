// challenge info: https://github.com/fetch-rewards/receipt-processor-challenge

import express from "express";
import receiptsRouter from "./routes/receipts";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/receipts", receiptsRouter);

app.get("/", (req, res) => {
  res.send("GET request received");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
