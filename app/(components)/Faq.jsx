import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div id="faq" className="h-[70vh] mt-52 flex justify-between">
      <div>
        <h1 className="text-3xl py-4 md:text-5xl font-bold text-left">FAQ</h1>
      </div>
      <div className="w-[60%] mr-10 md:mr-0">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:text-xl font-semibold text-left">
              Is there a trial version for premium or exclusive plans?
            </AccordionTrigger>
            <AccordionContent>
              Yes. We do provide trial for our premium and exclusive plans.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:text-xl font-semibold">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:text-xl font-semibold">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
