import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div id="faq" className=" my-20 flex justify-between">
      <div>
        <h1 className="text-3xl py-4 md:text-5xl font-bold text-left">FAQ</h1>
      </div>
      <div className="w-[60%] mr-10 md:mr-0">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:text-lg font-semibold text-left">
              What is wizresu.me?
            </AccordionTrigger>
            <AccordionContent className="tracking-wider">
              Wizresu.me is an online resume-making platform that helps users
              create professional, ATS-friendly resumes quickly and easily. We
              offer a range of services tailored for different career levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:text-lg font-semibold">
              What is ATS, and why does it matter for resumes?
            </AccordionTrigger>
            <AccordionContent className="tracking-wider">
              ATS stands for Applicant Tracking System. It’s software used by
              employers to filter resumes based on keywords and formatting.
              Wizresu.me helps you create ATS-friendly resumes to improve your
              chances of getting shortlisted.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:text-lg font-semibold ">
              What is the difference between Basic, Premium, and Exclusive
              plans?
            </AccordionTrigger>
            <AccordionContent className="tracking-wider">
              <strong>Basic Plan (Free):</strong> Ideal for starters, offering
              limited access to some of the premium features.
              <br></br>
              <br></br>
              <strong>Premium Plan ($2.99/month):</strong> You will be able to
              access premium features like unlimited resumes generation,
              unlimited one click resume builds, unlimited resume saves and
              unlimited ats scores(BETA) checks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:text-lg font-semibold ">
              Are there any hidden fees or additional charges?
            </AccordionTrigger>
            <AccordionContent className="tracking-wider">
              No, the listed prices are all-inclusive. You only pay the monthly
              subscription fee for Premium or Exclusive plans.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="md:text-lg font-semibold ">
              Can I upgrade or downgrade my plan?
            </AccordionTrigger>
            <AccordionContent className="tracking-wider">
              Yes, you can change your subscription plan at any time through
              your account settings.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
