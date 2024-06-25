"use client";
import React, { useRef } from "react";
import Draggable from "react-draggable";
import {
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineDocumentText,
  HiOutlineMinus,
  HiOutlineTemplate,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DraggableSidenav = () => {
  const dragComp = [
    { id: 1, label: "Tabs", icon: <HiOutlineViewGrid /> },
    { id: 2, label: "Row", icon: <HiOutlineViewList /> },
    { id: 3, label: "Column", icon: <HiOutlineViewList /> },
    { id: 4, label: "Header", icon: <HiOutlineViewGrid /> },
    { id: 5, label: "Markdown", icon: <HiOutlineDocumentText /> },
    { id: 6, label: "Divider", icon: <HiOutlineMinus /> },
    { id: 7, label: "Table", icon: <HiOutlineViewGrid /> },
    { id: 8, label: "Process Diagram", icon: <HiOutlineTemplate /> },
    { id: 9, label: "Trigger Flow", icon: <HiOutlineLightningBolt /> },
  ];

  const handleStart = (e, ui) => {
    console.log("Drag started:", ui);
  };

  const handleDrag = (e, ui) => {
    console.log("Dragging:", ui);
  };

  const handleStop = (e, ui) => {
    console.log("Drag stopped:", ui);
  };

  return (
    <div className="lg:h-full h-[312px] overflow-y-scroll lg:pt-8 lg:shadow-md lg:order-3 md:order-2 lg:mx-0 mx-auto lg:w-max w-full">
      <div className="lg:container h-full lg:w-[260px] w-full space-y-6">
        <Tabs defaultValue="components">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger className="" value="components">
              Components
            </TabsTrigger>
            <TabsTrigger className="" value="charts">
              Charts
            </TabsTrigger>
          </TabsList>
          <TabsContent value="components">
            <ul className="space-y-3">
              {/* Draggable items */}
              {dragComp.map((item) => (
                <Draggable
                  key={item.id}
                  axis="both"
                  handle=".handle"
                  defaultPosition={{ x: 0, y: 0 }}
                  grid={[25, 25]} // Adjust grid as needed for better alignment
                  scale={1}
                  onStart={handleStart}
                  onDrag={handleDrag}
                  onStop={handleStop}
                >
                  <li className="border-2 bg-transparent border-gray-300 rounded-md flex justify-start items-center px-2 py-[10px] gap-x-3 cursor-move">
                    <span className="text-[#7822ff] text-lg handle">
                      {item.icon}
                    </span>
                    <span className="text-[#7822ff] text-base font-semibold">
                      {item.label}
                    </span>
                  </li>
                </Draggable>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="charts">
            <ul className="space-y-3">
              {dragComp.slice(0, 5).map((item) => (
                <Draggable
                  key={item.id}
                  axis="both"
                  handle=".handle"
                  defaultPosition={{ x: 0, y: 0 }}
                  grid={[25, 25]}
                  scale={1}
                  onStart={handleStart}
                  onDrag={handleDrag}
                  onStop={handleStop}
                >
                  <li className="border-2 border-gray-300 rounded-md flex justify-start items-center px-2 py-[10px] gap-x-3 cursor-move">
                    <span className="text-[#7822ff] text-lg handle">
                      {item.icon}
                    </span>
                    <span className="text-[#7822ff] text-base font-semibold">
                      {item.label}
                    </span>
                  </li>
                </Draggable>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DraggableSidenav;
