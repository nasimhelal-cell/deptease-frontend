import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { nanoid } from "nanoid";

interface List {
  value: string;
  question: string;
  answer: string;
}

interface PropsTypes {
  lists: List[];
}

const GetAccordion: React.FC<PropsTypes> = ({ lists }) => {
  return (
    <Accordion type="single" collapsible>
      {lists?.map(({ value, question, answer }) => (
        <AccordionItem value={value} key={nanoid()}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default GetAccordion;
