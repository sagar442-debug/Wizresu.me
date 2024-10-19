import Link from "next/link";

// app/not-found.js
export const runtime = "edge";

export default function NotFound() {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#1a272b]">
      <div className="text-center text-white">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">Go back home</Link>
      </div>
    </div>
  );
}
