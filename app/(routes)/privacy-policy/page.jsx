import Footer from "@/app/(components)/Footer";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
export const runtime = "edge";

const page = () => {
  return (
    <div className="bg-[url('/BgPatterns.jpg')] bg-contain  overflow-hidden">
      <div className="relative max-w-7xl text-[#2a2663]  md:mx-auto px-5 py-10 bg-[#F3C168] ">
        <Link className="hover:underline flex gap-1" href={"/"}>
          <span>
            <ChevronLeft />
          </span>
          <span>Go back</span>
        </Link>
        <div className="py-4">
          <h1 className=" font-bold text-4xl">Our Privacy Policy</h1>
        </div>
        <div className="space-y-5">
          <div>
            <h1 className="text-2xl tracking-wider font-bold">Introduction</h1>
            <p className="tracking-wide leading-7">
              At wizresu.me, we value your privacy and are committed to being
              transparent about how we handle your personal information. This
              Privacy Policy explains how we collect, use, store, and share
              information when you use our services. By using wizresu.me to
              create and manage your resume, you trust us with sensitive data,
              and we take that responsibility seriously. This document is
              designed to help you understand our data practices so that you can
              make informed decisions about using our services with confidence.
            </p>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl tracking-wider font-bold">
              Data Collection
            </h1>
            <div>
              <h1 className="text-xl font-bold py-2">Personal Data</h1>
              <p className="font-bold">
                {" "}
                We collect the information you provide to create your resume,
                including but not limited to:
              </p>

              <ul className="">
                <li>
                  <strong>Contact Information:</strong> Your name, email
                  address, phone number, and address.
                </li>
                <li>
                  <strong>Professional Details: </strong> Work history,
                  education, skills, certifications, and other information you
                  input to build your resume.
                </li>
                <li>
                  <strong>Account Information:</strong> If you create an
                  account, we store your login credentials and preferences
                  securely.
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-bold py-2">Usage Data</h1>
              <p className="font-bold">
                {" "}
                To improve site functionality and user experience, we may
                collect data about how you interact with wizresu.me. This
                includes:
              </p>

              <ul className="">
                <li>
                  <strong>Device Information:</strong> Information about the
                  device you use to access the site, such as device type,
                  browser type, and operating system.
                </li>
                <li>
                  <strong>IP Address: </strong> Collected to understand location
                  patterns and enhance security.
                </li>
                {/* <li>
                  <strong>Site Interaction:</strong> Data on how you navigate
                  our site, including page views, time spent on each page,
                  clicks, and search queries.
                </li> */}
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-bold py-2">
                How We Collect Information
              </h1>
              <ul className="">
                <li>
                  <strong>Directly from Users:</strong> We collect personal
                  information when you input details to generate a resume or
                  create an account.
                </li>
                <li>
                  <strong>Automatically </strong> Some information, such as IP
                  address and device type, is collected automatically using
                  cookies, analytics tools, and server logs. This helps us
                  analyze usage trends and optimize the site for better
                  performance.
                </li>
                {/* <li>
                  <strong>Site Interaction:</strong> Data on how you navigate
                  our site, including page views, time spent on each page,
                  clicks, and search queries.
                </li> */}
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-2xl tracking-wider font-bold">
              Use of Collected Information
            </h1>
            <p>
              Your data is solely used to generate your resume and improve your
              experience throughout the app.
            </p>
          </div>
          <div>
            <h1 className="text-2xl tracking-wider font-bold">
              Third-Party Integrations
            </h1>
            <p>
              To provide an optimal experience on wizresu.me, we integrate with
              certain third-party services. The main integration we use is the
              Gemini API, which helps analyze resume content to make it
              Applicant Tracking System (ATS)-friendly. This enables us to
              improve your resume's compatibility with hiring systems. In some
              cases, third-party providers may access limited user data to
              perform essential functions. These third parties are required to
              comply with industry-standard privacy practices and use data
              solely for the intended purpose. We do not share any unnecessary
              user data, and we strive to work only with partners who prioritize
              data security.
            </p>
          </div>
          <div>
            <h1 className="text-2xl tracking-wider font-bold">
              Data Storage and Security
            </h1>
            <p>
              We are committed to safeguarding your personal information with a
              high level of security. User data is stored on secure servers
              protected by encryption protocols and monitored for any security
              risks. Key measures include:
            </p>
            <ul className="py-2">
              <li>
                <strong>Data Encryption:</strong> We use SSL (Secure Socket
                Layer) encryption to protect data transmission on the platform.
              </li>
              <li>
                <strong>Access Controls:</strong> Only authorized personnel have
                access to user data, and access is limited to those who require
                it to provide or improve services.
              </li>
              <li>
                <strong>Regular Security Audits:</strong> Our system is
                regularly reviewed and updated to defend against potential
                threats and vulnerabilities.
              </li>
            </ul>
            <p>
              Your data will only be retained as long as necessary to fulfill
              the purposes outlined in this policy or as required by law.
            </p>
          </div>
          <div>
            <h1 className="text-2xl tracking-wider font-bold">
              User Rights and Control
            </h1>
            <p>
              We respect your rights regarding your personal information. You
              have the following rights and options:
            </p>
            <ul className="py-2">
              <li>
                <strong>Access and Edit Information:</strong> You may access and
                edit your personal information at any time by logging into your
                account.
              </li>
              <li>
                <strong>Delete Account and Data:</strong> You can request the
                deletion of your account and all associated data by contacting
                us. Once processed, all personal data will be removed from our
                servers.
              </li>
              <li>
                <strong>Export Data:</strong> Users have the option to request a
                downloadable file containing the personal data stored on our
                platform.
              </li>
            </ul>
            <p>
              Your data will only be retained as long as necessary to fulfill
              the purposes outlined in this policy or as required by law.
            </p>
          </div>
          <div>
            <h1 className="text-2xl tracking-wider font-bold">
              Contact Information
            </h1>
            <p>
              If you have questions, concerns, or requests regarding your data
              or this Privacy Policy, please reach out to us. You can contact
              our support team at:
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
