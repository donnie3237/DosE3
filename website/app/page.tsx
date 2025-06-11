import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="border-x-[1px]">
      <div
      style={{
        backgroundImage:
      'repeating-linear-gradient(-45deg, #0f0f0f 0px, #0f0f0f 10px, #080808 10px, #080808 20px)',
      }}
      className="w-full h-[500px] border-b flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="sm:text-5xl text-3xl font-bold mb-4">
        Welcome to Dose3 Documentation
      </h1>
      <p className="sm:text-lg text-base text-muted-foreground mb-6">
        Explore our comprehensive guides and resources to get started with Dose3.
      </p>
      <Link
        href={`/docs${page_routes[0].href}`}
        className='bg-white text-black py-3 px-5'
      >
        Get Started
      </Link>
    </div>

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
      <div className="w-[100%] h-[500px] border-b-[1px]">
        
      </div>
    </div>
  );
}
