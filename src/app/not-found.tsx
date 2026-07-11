import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section section--padding">
      <div className="page-width max-w-lg py-20 text-center">
        <h1 className="section-title mb-3">404</h1>
        <p className="text-black/60">This page could not be found.</p>
        <Link href="/" className="btn btn-primary mt-6">
          Continue shopping
        </Link>
      </div>
    </section>
  );
}
