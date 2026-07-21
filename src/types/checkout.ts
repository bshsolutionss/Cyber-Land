export interface ShippingAddress {
  fullName: string;
  contactInfo: string;
  address: string;
  city: string;
  provinceState: string;
}

export type PaymentMethod =
  | "easypaisa"
  | "jazzcash"
  | "bank_transfer"
  | "cod"
  | "card";

export interface CheckoutPayload {
  shipping: ShippingAddress;
  paymentMethod: PaymentMethod;
  note?: string;
}

export interface CheckoutResult {
  orderId: string;
  status: "pending" | "confirmed" | "failed";
  total: number;
}
