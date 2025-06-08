import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-1 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-1">
            © {new Date().getFullYear()}
            <Link
              className="px-0 underline underline-offset-2"
              href="https://dossware.com"
            >
              DOSSWARE
            </Link>
            All rights reserved.
        </div>
      </div>
    </footer>
  );
}