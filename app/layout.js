import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://wizresu.me/"),
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
  openGraph: {
    images: "https://wizresu.me/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
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
