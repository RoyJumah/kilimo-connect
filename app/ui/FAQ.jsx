import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

export default function FAQ() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What types of tours are offered at the featured farms?
        </AccordionTrigger>
        <AccordionContent>
          Our featured farms offer a variety of guided tours to cater to
          different interests. From immersive farm-to-table experiences to
          educational tours showcasing sustainable farming practices, there's
          something for everyone. Check out the individual farm pages for
          detailed information on tour options.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Can visitors bring pets to the farms?
        </AccordionTrigger>
        <AccordionContent>
          While we love animals, for the safety and comfort of all visitors, we
          kindly ask that you leave your pets at home. Some of our farms have
          resident animals, and bringing additional pets could disrupt their
          routine and potentially pose safety concerns.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          Are there age restrictions for certain activities on the farms?
        </AccordionTrigger>
        <AccordionContent>
          Most activities are family-friendly, but some may have age or height
          restrictions for safety reasons. Please review the specific details of
          each activity on the farm pages or inquire with our staff during your
          visit to ensure a safe and enjoyable experience for all.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          How can I book a guided tour or accommodations?
        </AccordionTrigger>
        <AccordionContent>
          Booking a tour or accommodations is easy! Simply visit the booking
          section on each farm's page, where you'll find detailed information
          and links to secure your spot. If you have any questions or need
          assistance, feel free to reach out to our dedicated booking team.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>
          What COVID-19 safety measures are in place at the farms?
        </AccordionTrigger>
        <AccordionContent>
          Your safety is our priority. We have implemented enhanced cleaning
          protocols, social distancing measures, and capacity limits in line
          with current health guidelines. Please refer to our dedicated COVID-19
          information page for the latest updates on the safety measures in
          place at each farm.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
