import type { CheckoutPayload, CheckoutResult } from "@/types";

/**
 * Checkout service — mock order placement for clone.
 */
export const checkoutService = {
  async placeOrder(
    payload: CheckoutPayload,
    total: number
  ): Promise<CheckoutResult> {
    await new Promise((r) => setTimeout(r, 600));
    if (!payload.shipping.email || !payload.shipping.address1) {
      throw new Error("Incomplete shipping address");
    }
    return {
      orderId: `CL-${Date.now()}`,
      status: "confirmed",
      total,
    };
  },

  async estimateShipping(
    postalCode: string,
    country = "PK"
  ): Promise<{ amount: number; etaDays: number }> {
    void postalCode;
    void country;
    await new Promise((r) => setTimeout(r, 300));
    return { amount: 0, etaDays: 3 };
  },
};
