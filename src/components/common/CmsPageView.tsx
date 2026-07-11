import Link from "next/link";
import type { CmsPage } from "@/constants/pages-content";

export default function CmsPageView({ page }: { page: CmsPage }) {
  return (
    <section className="section section--padding">
      <div className="page-width max-w-3xl py-6 md:py-10">
        <h1 className="section-title mb-2">{page.title}</h1>
        {page.subtitle && (
          <p className="mb-6 text-sm font-medium text-black/50 md:text-base">
            {page.subtitle}
          </p>
        )}
        <div className="flex flex-col gap-4 text-base leading-relaxed text-black/75">
          {page.blocks.map((block, i) => {
            if (block.type === "p") {
              return <p key={i}>{block.text}</p>;
            }
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="heading mt-4 text-xl font-medium tracking-tight text-[#171717] md:text-2xl"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="list-disc space-y-2 pl-5">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            const external =
              block.href.startsWith("http") || block.href.startsWith("mailto");
            return (
              <div key={i} className="pt-1">
                <Link
                  href={block.href}
                  className="btn btn-primary btn-sm inline-flex"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {block.label}
                </Link>
              </div>
            );
          })}
        </div>
        <Link
          href="/"
          className="mt-10 inline-block text-sm font-medium text-black/50 underline-offset-2 hover:text-black hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
