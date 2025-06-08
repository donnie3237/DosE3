import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="border-x-[1px]">
      <div className="w-[100%] h-[500px] border-b-[1px]">
      <h1 className="sm:text-5xl text-3xl font-bold mb-4">
        Welcome to Dose3 Documentation
      </h1>
      <p className="sm:text-lg text-base text-muted-foreground mb-6">
        Explore our comprehensive guides and resources to get started with Dose3.
      </p>
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
      </div>
      <div className="w-[100%] h-[500px] border-b-[1px]">
      <h1 className="sm:text-5xl text-3xl font-bold mb-4">
        Welcome to Dose3 Documentation
      </h1>
      <p className="sm:text-lg text-base text-muted-foreground mb-6">
        Explore our comprehensive guides and resources to get started with Dose3.
      </p>
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
      </div>

    </div>
  );
}
