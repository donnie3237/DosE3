import { page_routes } from "@/lib/routes-config";
import Link from "next/link";
  import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Cover } from "@/components/ui/cover";
export default function Home() {
  return (
    <div className="border-x-[1px]">
      <div className="h-[500px] relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-5xl text-2xl text-white font-extrabold relative z-20")}>
        Dose3 starter kit
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 px-[10%]">
        Explore our comprehensive guides and resources to get started with Dose3.
      </p>
       <Link
          href={`/docs${page_routes[0].href}`}
          className="bg-white text-black py-3 px-5 z-30 mt-4"
        >
          Get Started
        </Link>
    </div>
      {/* <Boxes/>
      <div
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #0f0f0f 0px, #0f0f0f 10px, #080808 10px, #080808 20px)",
        }}
        className="w-full h-[500px] border-b flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="sm:text-5xl text-3xl font-bold mb-4">
          Welcome to Dose3 Documentation
        </h1>
        <p className="sm:text-lg text-base text-muted-foreground mb-6">
          Explore our comprehensive guides and resources to get started with
          Dose3.
        </p>
        <Link
          href={`/docs${page_routes[0].href}`}
          className="bg-white text-black py-3 px-5"
        >
          Get Started
        </Link>
      </div> */}

      <div className="w-[100%] h-[100%] border-b-[1px]">
        <div className="flex flex-col sm:flex-row">
          <div className="h-[350px] w-[100%] border-[0.5px]">
            <h1>Website</h1>
          </div>
          <div className="h-[350px] w-[100%]  border-[0.5px]">
            <h1>API</h1>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] border-b-[1px]">
        <div className="flex flex-col sm:flex-row">
          <div className="h-[250px] w-[100%]  border-[0.5px]">
            <h1>Native app</h1>
          </div>
          <div className="h-[250px] w-[100%]  border-[0.5px]">
            <h1>Script</h1>
          </div>
          <div className="h-[250px] w-[100%]  border-[0.5px]">
            <h1>Cli tools</h1>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] border-b-[1px] pb-[50px]">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Build amazing project <br /> at <Cover>speed of light</Cover>
      </h1>
      </div>
    </div>
  );
}
