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
docker run -p 3000:3000 sir-points-a-lot
```

## How It Works

1. **Submit a Receipt**

   - Send a `POST` request to `/receipts/process` with a receipt in JSON format.
   - You'll receive a **unique receipt ID** in response.

2. **Check Receipt Points**
   - Use `GET /receipts/:id/points` to retrieve the points earned for a given receipt ID.

## Sally Forth! ⚔️

# api-webservice-receipt-processor
