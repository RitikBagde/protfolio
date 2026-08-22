import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. AI & Full-Stack
          Developer.
        </p>
        <p className="text-center sm:text-right">
          Built for clients who need results, not résumés.
        </p>
      </div>
    </footer>
  );
}
