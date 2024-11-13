import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Montserrat({ subsets: ["latin"] });

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

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
  twittter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <html lang="en">
        <body className={inter.className}>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
