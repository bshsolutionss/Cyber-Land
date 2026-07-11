import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/forms/LoginForm";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Cyber Land account.",
};

export default function LoginPage() {
  return (
    <section className="section section--padding">
      <div className="page-width max-w-md py-10">
        <h1 className="section-title mb-2">Log in</h1>
        <p className="mb-6 text-sm text-black/55">
          Welcome back. Enter your email and password.
        </p>
        <LoginForm />
        <p className="mt-6 text-center text-sm text-black/55">
          New here?{" "}
          <Link href="/account/register" className="font-semibold text-[#171717] underline-offset-2 hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </section>
  );
}
