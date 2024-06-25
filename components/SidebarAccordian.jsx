import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HiPlus, HiSearch } from "react-icons/hi";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  {
    id: 1,
    label: "Flows",
    sublabel: [
      { label: "Inventory Flow", link: "/#" },
      { label: "Channel Flow", link: "/#" },
      { label: "Regional Distribution", link: "/#" },
      { label: "New Product Integration", link: "/#" },
    ],
  },
  {
    id: 2,
    label: "Dashboards",
    sublabel: [
      { label: "Inventory Flow", link: "/#" },
      { label: "Channel Flow", link: "/#" },
      { label: "Regional Distribution", link: "/#" },
      { label: "New Product Integration", link: "/#" },
    ],
  },
  {
    id: 3,
    label: "Datasets",
    sublabel: [
      { label: "Inventory Flow", link: "/#" },
      { label: "Channel Flow", link: "/#" },
      { label: "Regional Distribution", link: "/#" },
      { label: "New Product Integration", link: "/#" },
    ],
  },
  {
    id: 4,
    label: "Conectors",
    sublabel: [
      { label: "Inventory Flow", link: "/#" },
      { label: "Channel Flow", link: "/#" },
      { label: "Regional Distribution", link: "/#" },
      { label: "New Product Integration", link: "/#" },
    ],
  },
];

const SidebarAccordian = () => {
  return (
    <>
      <div className="order-1 lg:h-full md:h-[312px] md:overflow-y-scroll lg:w-[260px] w-full lg:pt-8 lg:shadow-md">
        <div className="lg:container h-full space-y-6">
          <div className="space-y-2">
            <h1 className="font-bold text-lg tracking-wide text-black">
              Project Name
            </h1>
            <div className="relative flex items-center mb-2">
              <input
                type="text"
                placeholder="Search..."
                className="block w-full p-2 pl-10 rounded-md border-2 border-gray-300 focus:border-gray-300"
              />
              <HiSearch className="absolute left-3 text-[#7822ff] text-xl" />
            </div>
          </div>
          <Accordion type="single" collapsible>
            {links.map((item, index) => (
              <React.Fragment key={index}>
                <AccordionItem value={`item-${item.id}`}>
                  <AccordionTrigger className="!justify-start gap-x-3 font-bold">
                    <span>{item.label}</span>
                    <span className="cursor-pointer bg-[#7822ff] hover:bg-[#7822ff] bg-opacity-25 hover:bg-opacity-40 rounded-md size-5 p-[2px] ml-auto">
                      <HiPlus className="text-white text-base" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-[28px] space-y-1.5">
                      {item.sublabel.map((sublabel, index) => (
                        <li key={index}>
                          <Link href={sublabel.link}>{sublabel.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </React.Fragment>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default SidebarAccordian;
