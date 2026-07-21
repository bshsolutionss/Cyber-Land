"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutSchema,
  type CheckoutFormValues,
} from "@/features/checkout/schemas/checkout.schema";
import { checkoutService } from "@/services/checkout.service";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [orderId, setOrderId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "easypaisa",
      shipping: {
        provinceState: "Punjab",
      },
    },
  });

  if (items.length === 0 && !orderId) {
    return (
      <section className="section section--padding">
        <div className="page-width max-w-md py-16 text-center">
          <h1 className="section-title mb-3">Checkout</h1>
          <p className="mb-6 text-sm text-black/60">Your cart is empty.</p>
          <Link href="/collections/shop-all" className="btn btn-primary">
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  if (orderId) {
    return (
      <section className="section section--padding">
        <div className="page-width max-w-md py-16 text-center">
          <h1 className="section-title mb-3">Order confirmed</h1>
          <p className="mb-2 text-sm text-black/60">
            Thank you. Your order ID is:
          </p>
          <p className="mb-6 font-semibold tracking-wide">{orderId}</p>
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  const onSubmit = async (values: CheckoutFormValues) => {
    try {
      const result = await checkoutService.placeOrder(values, subtotal);
      clearCart();
      setOrderId(result.orderId);
    } catch (e) {
      setError("root", {
        message: e instanceof Error ? e.message : "Checkout failed",
      });
    }
  };

  return (
    <section className="section section--padding">
      <div className="page-width">
        <h1 className="section-title mb-8">Checkout</h1>
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <h2 className="heading text-lg font-medium">Shipping</h2>
            <Input placeholder="Full name" {...register("shipping.fullName")} />
            <Input placeholder="Phone Number (Preferred) or Email Address" {...register("shipping.contactInfo")} />
            <Input placeholder="Address" {...register("shipping.address")} />
            <div className="grid gap-3 sm:grid-cols-2">
              <Input placeholder="City" {...register("shipping.city")} />
              <Input placeholder="Province / State" {...register("shipping.provinceState")} />
            </div>
            <Input placeholder="Order notes (optional)" {...register("note")} />

            <h2 className="heading mt-4 text-lg font-medium">Payment</h2>
            <select
              className="input"
              {...register("paymentMethod")}
            >
              <option value="easypaisa">Easypaisa</option>
              <option value="jazzcash">JazzCash</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Card</option>
            </select>

            {errors.root && (
              <p className="text-sm text-red-600">{errors.root.message}</p>
            )}

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Placing order…" : `Pay ${formatPrice(subtotal)}`}
            </Button>
          </form>

          <aside className="h-fit rounded-2xl border border-black/8 bg-[#fafafa] p-6">
            <h2 className="heading mb-4 text-base font-medium">Order summary</h2>
            <ul className="mb-4 flex flex-col gap-3 text-sm">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.variant ?? ""}`}
                  className="flex justify-between gap-2"
                >
                  <span className="line-clamp-2">
                    {item.product.title} × {item.quantity}
                  </span>
                  <span className="shrink-0 font-medium">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between border-t border-black/10 pt-3 text-sm font-semibold">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs text-black/45">
              Tax included. Shipping calculated at checkout.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
