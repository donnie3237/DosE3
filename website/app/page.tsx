import { page_routes } from "@/lib/routes-config";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import {
  Globe,
  Server,
  Smartphone,
  Code2,
  TerminalSquare,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="border-x-[1px]">
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
      </div> 

        <div className="w-[100%] h-[100%] border-b-[1px]">
        <div className="flex flex-col sm:flex-row">
          <div className="h-[350px] w-[100%] border-[0.5px] p-6">
            <div className="flex items-center gap-3 mb-2 mt-4">
              <Globe className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-semibold">Website</h1>
            </div>
            <p className="text-gray-200 mb-4">
              Build powerful web interfaces with modern frontend frameworks that are fast, scalable, and reactive.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">React</span>
              <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">Svelte</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Next.js</span>
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">Astro</span>
            </div>
          </div>
          <div className="h-[350px] w-[100%] border-[0.5px] p-6">
            <div className="flex items-center gap-3 mb-2 mt-4">
              <Server className="w-6 h-6 text-green-600" />
              <h1 className="text-xl font-semibold">API</h1>
            </div>
            <p className="text-gray-200 mb-4">
              Design robust APIs using flexible or high-performance backend frameworks.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Express.js</span>
              <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">Hono</span>
              <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">Gin</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[100%] border-b-[1px]">
        <div className="flex flex-col sm:flex-row">
          <div className="h-[250px] w-[100%] border-[0.5px] p-6">
            <div className="flex items-center gap-3 mb-2 mt-4">
              <Smartphone className="w-6 h-6 text-pink-600" />
              <h1 className="text-xl font-semibold">Native App</h1>
            </div>
            <p className="text-gray-200 mb-4">
              Develop native mobile apps that deliver smooth performance and deep platform integration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">React Native</span>
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Tauri</span>
            </div>
          </div>
          <div className="h-[250px] w-[100%] border-[0.5px] p-6">
            <div className="flex items-center gap-3 mb-2 mt-4">
              <Code2 className="w-6 h-6 text-purple-600" />
              <h1 className="text-xl font-semibold">Script</h1>
            </div>
            <p className="text-gray-200 mb-4">
              Write scripts to automate tasks, run jobs, or manage your system with ease.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Turborepo</span>
            </div>
          </div>
          <div className="h-[250px] w-[100%] border-[0.5px] p-6">
            <div className="flex items-center gap-3 mb-2 mt-4">
              <TerminalSquare className="w-6 h-6 text-red-600" />
              <h1 className="text-xl font-semibold">CLI Tools</h1>
            </div>
            <p className="text-gray-200 mb-4">
              Create powerful command-line tools to boost productivity and control workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">Kill port</span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">Scan port</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[100%] border-b-[1px] pb-[90px] pt-[40px]">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Build amazing project <br /> at <Cover>speed of light</Cover>
      </h1>
      </div>
    </div>
  );
}
