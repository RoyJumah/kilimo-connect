import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Logo from "../ui/Logo";

import SocialIcons from "../ui/SocialIcons";
export default function Footer() {
  return (
    <>
      <footer
        id="Footer"
        className=" mt-8 hidden border-t px-2  sm:mt-20 sm:block "
      >
        <div className="min-w-6xl max-w-8xl mx-auto flex flex-col  p-4 sm:flex-row  sm:justify-between sm:px-4 sm:py-10">
          <ul className="mb-8 w-full sm:mb-0 sm:w-1/3">
            <Logo />
            <SocialIcons />
          </ul>
          <ul className="mb-8 w-full  text-gray-700 sm:mb-0 sm:w-1/3">
            <li className=" text-lg font-bold">
              <span className="border-b-2 border-[#9da452] py-2">Links</span>
            </li>
            <li className="mt-2 cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Registration
            </li>
            <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Money Back Guarantee
            </li>
            <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Bidding & buying help
            </li>
            <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Stores
            </li>
          </ul>

          <ul className="w-full text-gray-700 sm:w-1/3">
            <li className="text-lg font-bold">
              <span className="border-b-2 border-[#9da452] py-2">
                Our Foods
              </span>
            </li>
            <li className="mt-2 cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Start selling
            </li>
            <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Learn to sell
            </li>
            <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Affiliates
            </li>
          </ul>

          <ul className="w-full text-gray-700 sm:w-1/3">
            <li className=" text-lg font-bold">
              {" "}
              <span className=" border-b-2 border-[#9da452] py-2">
                Our Partners
              </span>
            </li>
            <li className="mt-2 cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Company info
            </li>
            <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
              News
            </li>
            <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Investors
            </li>
            <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Careers
            </li>
            <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Government relations
            </li>
            <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
              Policies
            </li>
          </ul>
        </div>
      </footer>
      {/* here i used the accordion component from shadcn ui to display the mobile footer */}
      <footer className="mt-8 block px-2 sm:hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>About us</AccordionTrigger>
            <AccordionContent>
              <Logo />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Follow us</AccordionTrigger>
            <AccordionContent>
              <SocialIcons />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Links</AccordionTrigger>
            <AccordionContent>
              <ul className="w-full text-gray-700">
                <li className="mt-1 cursor-pointer py-1 text-xs hover:text-[#9da452]">
                  Start selling
                </li>
                <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
                  Learn to sell
                </li>
                <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
                  Affiliates
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Our Partners</AccordionTrigger>
            <AccordionContent>
              <ul className="w-full text-gray-700">
                <li className="mt-1 cursor-pointer py-1 text-xs hover:text-[#9da452]">
                  Start selling
                </li>
                <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
                  Learn to sell
                </li>
                <li className="cursor-pointer py-1 text-xs hover:text-[#9da452]">
                  Affiliates
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </footer>
    </>
  );
}
