import Footer from "@/app/(components)/Footer";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
export const runtime = "edge";

const page = () => {
  return (
    <div className="bg-[url('/BgPatterns.jpg')] bg-contain overflow-hidden">
      <div className="relative max-w-7xl text-[#2a2663] md:mx-auto px-5 py-10 bg-[#F3C168]">
        <Link className="hover:underline flex gap-1" href={"/"}>
          <span>
            <ChevronLeft />
          </span>
          <span>Go back</span>
        </Link>
        <div className="py-4">
          <h1 className="font-bold text-4xl">Terms and Conditions</h1>
        </div>
        <div className="space-y-5">
          <div className="space-y-5">
            <h1 className="text-2xl tracking-wider font-bold">Introduction</h1>
            <p className="tracking-wide leading-7">
              Welcome to wizresu.me. By using our website and services, you
              agree to comply with and be bound by the following terms and
              conditions. If you do not agree to these terms, please do not use
              our services.
            </p>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl tracking-wider font-bold">
              Use of Services
            </h1>
            <p>
              Wizresu.me provides tools to create and manage resumes. By
              accessing or using our services, you agree:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                To use our platform only for lawful purposes and in accordance
                with these terms.
              </li>
              <li>
                Not to misuse our services by attempting to gain unauthorized
                access, disrupt functionality, or introduce harmful software.
              </li>
              <li>
                That any information you provide on the platform is accurate,
                complete, and up to date.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl tracking-wider font-bold">User Accounts</h1>
            <p>
              To access some features, you may need to create an account. By
              creating an account, you agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Maintain the confidentiality of your login credentials and
                notify us immediately if you suspect unauthorized access.
              </li>
              <li>
                Be responsible for all activities under your account and ensure
                compliance with these terms.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl tracking-wider font-bold space-y-2">
              Intellectual Property
            </h1>
            <p>
              All content, designs, logos, and software on wizresu.me are
              protected by intellectual property laws. You agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Reproduce, distribute, modify, or create derivative works of our
                content without explicit permission.
              </li>
              <li>
                Use our trademarks, logos, or branding in any manner that may
                confuse users or harm our reputation.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl tracking-wider font-bold">
              Third-Party Integrations
            </h1>
            <p>
              Our platform integrates with third-party services like the Gemini
              API to enhance functionality. While we strive to work with trusted
              partners, we are not responsible for the actions of these third
              parties. Use of third-party services is subject to their terms and
              conditions.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl tracking-wider font-bold">
              Limitation of Liability
            </h1>
            <p>
              Wizresu.me is provided on an "as is" and "as available" basis. To
              the fullest extent permitted by law:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We disclaim all warranties, whether express or implied,
                including but not limited to warranties of merchantability,
                fitness for a particular purpose, and non-infringement.
              </li>
              <li>
                We are not liable for any indirect, incidental, special, or
                consequential damages arising from your use of our services.
              </li>
              <li>
                Our total liability for any claims relating to our services is
                limited to the amount paid by you (if any) to use our platform.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl tracking-wider font-bold">Termination</h1>
            <p>
              We reserve the right to suspend or terminate your access to
              wizresu.me at our discretion if we believe you have violated these
              terms or engaged in unlawful activity. Upon termination, your
              right to use our services will immediately cease.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl tracking-wider font-bold">
              Changes to Terms
            </h1>
            <p>
              We may update these terms from time to time. Continued use of our
              services after changes are made indicates your acceptance of the
              updated terms. We encourage you to review this page periodically
              for updates.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl tracking-wider font-bold">Governing Law</h1>
            <p>
              These terms are governed by the laws of Canada. Any disputes
              arising from these terms or your use of the platform will be
              resolved in the courts of Canada.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl tracking-wider font-bold">Contact Us</h1>
            <p>
              If you have any questions or concerns regarding these terms,
              please contact us at:
            </p>
            <ul className="py-2">
              <li>
                <strong>Email:</strong> sagarsapkota@wizresu.me
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
