import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Receipt } from "../types";
import { receiptStore } from "../data/store";
import { calculatePoints } from "../services/points";

const router = express.Router();

router.post("/process", (req, res) => {
  try {
    const receipt: Receipt = req.body;
    const receiptId = uuidv4();

    receiptStore[receiptId] = receipt;

    res.json({ id: receiptId });
  } catch (error) {
    res.status(400).json({ error: `Invalid receipt data: ${error}` });
  }
});

router.get("/all", (req, res) => {
  const receipts = Object.entries(receiptStore);
  res.json({ all: receipts });
});

router.get(
  "/:id/points",
  (req: Request<{ id: string }>, res: Response): void => {
    try {
      // retrieve receipt from receipt store based on url params id
      const id: string = req.params.id.trim();

      // check if receipt exists
      if (!receiptStore[id]) {
        console.error("Unable to find receipt id: ", req.params.id);
        res.status(404).send(`Receipt not found with id: ${id}`);
      } else {
        // calculate points and send response as json
        const points = calculatePoints(receiptStore[id]);
        res.json({ points });
      }
    } catch (error) {
      console.error(
        "Unable to calculate points for receipt id: ",
        req.params.id,
        error
      );
      res.status(500).json({ error: "Internal server error" });
      return;
    }
  }
);

export default router;
