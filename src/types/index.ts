export interface ReceiptItem {
  shortDescription: string;
  price: string; // "XXX.XX"
}

export interface Receipt {
  retailer: string;
  purchaseDate: string; // "YYYY-MM-DD"
  purchaseTime: string; // "HH:mm"
  total: string; // "XXX.XX"
  items: ReceiptItem[];
}
