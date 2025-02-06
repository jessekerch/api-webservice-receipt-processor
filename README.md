# Sir Points-a-Lot 🏰👑

A receipt points processor for Fetch, as per your takehome quest. <br />
Developed by: Jesse Kercheval, [LinkedIn](https://www.linkedin.com/in/jessekercheval/)

## Built With 🛠️

- **Node.js** & **Express** (Backend)
- **TypeScript** (For type safety)
- **Docker** (For easy deployment)

## How to Start 🏹

### **Using Docker**

```sh
docker build -t sir-points-a-lot .
docker run -p 3030:3030 sir-points-a-lot
```

## How It Works

1. **Submit a Receipt**

   - Send a `POST` request to `/receipts/process` with a receipt in JSON format.
   - You'll receive a **unique receipt ID** in response.

2. **Check Receipt Points**
   - Use `GET /receipts/:id/points` to retrieve the points earned for a given receipt ID.

## 📜 Example Receipt

```json
{
  "retailer": "Target",
  "purchaseDate": "2022-01-01",
  "purchaseTime": "13:01",
  "items": [
    {
      "shortDescription": "Mountain Dew 12PK",
      "price": "6.49"
    },
    {
      "shortDescription": "Emils Cheese Pizza",
      "price": "12.25"
    },
    {
      "shortDescription": "Knorr Creamy Chicken",
      "price": "1.26"
    },
    {
      "shortDescription": "Doritos Nacho Cheese",
      "price": "3.35"
    },
    {
      "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
      "price": "12.00"
    }
  ],
  "total": "35.35"
}
```

## 🏆 Example Points Tally

```text
Total Points: 28
Breakdown:
     6 points - retailer name has 6 characters
    10 points - 5 items (2 pairs @ 5 points each)
     3 points - "Emils Cheese Pizza" is 18 characters (a multiple of 3)
                item price of 12.25 * 0.2 = 2.45, rounded up is 3 points
     3 points - "Klarbrunn 12-PK 12 FL OZ" is 24 characters (a multiple of 3)
                item price of 12.00 * 0.2 = 2.4, rounded up is 3 points
     6 points - purchase day is odd
  + ---------
  = 28 points

```

## Sally Forth! ⚔️

# api-webservice-receipt-processor
