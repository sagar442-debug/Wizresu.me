import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Wiz Resume | Quick Resume Build",
    template: "%s - Wiz Resume | Quick Resume Build",
  },
  description:
    "WizResume is a web app that lets you create and customize resumes quickly. Easily adjust your resume for different job applications in minutes, without the hassle of editing a Word document each time.",
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    image:
      process.env.NEXT_PUBLIC_NODE_ENV == "production"
        ? "https://wizresu.me/opengraph-image.png"
        : "http://localhost:3000/opengraph-image.png", // Fallback for dev
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
