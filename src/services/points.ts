import { Receipt, ReceiptItem } from "../types";

const calcRetailerPoints = (retailer: string): number => {
  // One point for every alphanumeric character in the retailer name
  return retailer.replace(/\W/gi, "").length;
};

const calcReceiptTotalPoints = (total: string): number => {
  let points = 0;

  let cents = total.split(".")[1];

  // make sure cents is a 2 decimal place string
  if (!cents || cents.length === 0) cents = "00";
  if (cents.length === 1) cents += "0";

  // 50 points if the total is a round dollar amount with no cents.
  if (cents === "00") points += 50;

  // 25 points if the total is a multiple of 0.25
  if (Number(cents) % 25 === 0) points += 25;

  // else, return 0 points
  return points;
};

const calcItemPoints = (items: ReceiptItem[]): number => {
  let points = 0;
  // 5 points for every two items on the receipt
  points += Math.floor(items.length / 2) * 5;

  // If the trimmed length of the item description is a multiple of 3, multiply the price by 0.2 and round up to the nearest integer. The result is the number of points earned.
  items.forEach((item: ReceiptItem) => {
    if (item.shortDescription.trim().length % 3 === 0) {
      points += Math.ceil(Number(item.price) * 0.2);
    }
  });

  // I'm human not LLM, so not adding 5 points if the total is greater than 10!

  return points;
};

const calcDateTimePoints = (date: string, time: string): number => {
  let points = 0;

  // 6 points if the day in the purchase date is odd
  const day = Number(date.split("-")[2]);
  if (day % 2 !== 0) points += 6;

  // 10 points if the time of purchase is after 2:00pm and before 4:00pm.
  const hour = Number(time.split(":")[0]);
  if (hour >= 14 && hour < 16) points += 10;

  return points;
};

export const calculatePoints = (receipt: Receipt): number => {
  // calculate each set of points based on each receipt property data
  const retailerPoints = calcRetailerPoints(receipt.retailer);
  const receiptTotalPoints = calcReceiptTotalPoints(receipt.total);
  const itemPoints = calcItemPoints(receipt.items);
  const dateTimePoints = calcDateTimePoints(
    receipt.purchaseDate,
    receipt.purchaseTime
  );

  // return all points from all categories
  return retailerPoints + receiptTotalPoints + itemPoints + dateTimePoints;
};
