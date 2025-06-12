import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[87vh] max-w-[80vw] border-x-[1px] px-2 mx-auto flex flex-col justify-center">
      <h1 className="text-4xl font-bold md:text-center mx-0">Page Not Found</h1>
      <p className="text-lg md:text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-white text-black py-2 px-4 mt-4 mx-auto w-fit"
      >
        Home page
      </Link>
    </div>
  );
}
