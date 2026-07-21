import { z } from "zod";

export const shippingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  contactInfo: z.string().refine((val) => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    const isPhone = /^\+?[\d\s-]{10,}$/.test(val);
    return isEmail || isPhone;
  }, "Enter a valid phone number or email"),
  address: z.string().min(3, "Address is required"),
  city: z.string().min(1, "City is required"),
  provinceState: z.string().min(1, "State/Province is required"),
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
