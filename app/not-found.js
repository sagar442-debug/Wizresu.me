import Link from "next/link";

// app/not-found.js
export const runtime = "edge";

export default function NotFound() {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#000]">
      <div className="text-center text-white">
        <h1>404 - Page Not Found</h1>
        <Link href="/" className="hover:underline duration-150 transition-all">
          Go back home
        </Link>
      </div>
    </div>
  );
}
