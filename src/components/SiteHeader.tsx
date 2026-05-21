import Link from "next/link";
import ThemeToggle from "@/src/components/ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="border-border/70 bg-background/80 sticky top-0 z-20 border-b backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <Link
          href="/"
          className="text-foreground inline-flex items-center gap-3 text-sm font-semibold tracking-normal"
        >
          <span
            className="bg-accent size-2.5 rounded-full"
            aria-hidden="true"
          />
          My Ramen
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
