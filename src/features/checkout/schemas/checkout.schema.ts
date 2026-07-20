import { z } from "zod";

export const shippingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  address1: z.string().min(3, "Address is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(4, "Postal code is required"),
  country: z.string().min(2, "Country is required"),
});

export const checkoutSchema = z.object({
  shipping: shippingSchema,
  paymentMethod: z.enum([
    "easypaisa",
    "jazzcash",
    "bank_transfer",
    "cod",
    "card",
  ]),
  note: z.string().optional(),
});

export type ShippingFormValues = z.infer<typeof shippingSchema>;
export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
