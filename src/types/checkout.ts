export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export type PaymentMethod = "upi" | "card" | "cod" | "netbanking";

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
