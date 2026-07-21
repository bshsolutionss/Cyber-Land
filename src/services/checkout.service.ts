import type { CheckoutPayload, CheckoutResult } from "@/types";

/**
 * Checkout service — mock order placement for clone.
 */
export const checkoutService = {
  async placeOrder(
    payload: CheckoutPayload,
    total: number
  ): Promise<CheckoutResult> {
    const { shipping, paymentMethod, note } = payload;
    
    // Construct WhatsApp message
    let message = `*New Order*\n\n`;
    message += `*Customer Info:*\n`;
    message += `Name: ${shipping.fullName}\n`;
    message += `Contact: ${shipping.contactInfo}\n`;
    message += `Address: ${shipping.address}, ${shipping.city}, ${shipping.provinceState}\n\n`;
    
    if (note) {
      message += `*Order Notes:*\n${note}\n\n`;
    }
    
    message += `*Order Total:* Rs. ${total.toLocaleString()}\n`;
    message += `*Payment Method:* ${paymentMethod}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923458006009?text=${encodedMessage}`;
    
    // In a real app we'd redirect or use window.open
    if (typeof window !== "undefined") {
      window.location.href = whatsappUrl;
    }

    return {
      orderId: `WA-${Date.now()}`,
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
