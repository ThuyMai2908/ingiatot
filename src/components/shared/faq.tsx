import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Text from "@/components/ui/text";
import { FAQType } from "@/types/core/block";
import React from "react";

interface FAQProps {
  questionData: FAQType[];
}

const FAQ = ({ questionData }: FAQProps) => {
  return (
    <Accordion className="w-full" type="single">
      {questionData.map((item, idx) => (
        <AccordionItem
          className={`border-b-secondary ${
            item?.id === 1 ? "border-t border-t-secondary" : ""
          }`}
          key={idx}
          value={idx.toString()}
        >
          <AccordionTrigger className="py-4 lg:py-5 hover:no-underline">
            <Text as="h3" fontWeight={"bold"} variant={"body"}>
              {item.question}
            </Text>
          </AccordionTrigger>
          <AccordionContent className="pb-4 lg:pb-6">
            <Text variant={"body"}>{item.answer}</Text>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
