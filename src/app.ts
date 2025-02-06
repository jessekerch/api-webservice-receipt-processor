// challenge info: https://github.com/fetch-rewards/receipt-processor-challenge

import express from "express";
import receiptsRouter from "./routes/receipts";
import path from "path";

const app = express();
const port = 3030;

app.use(express.json());
app.use("/receipts", receiptsRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
