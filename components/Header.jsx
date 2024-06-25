"use client";
import React, { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineRefresh,
  HiDotsHorizontal,
} from "react-icons/hi";

import { Button } from "./ui/button";
import BreadcrumbNavigation from "./BreadcrumbNavigation";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <nav className="shadow-md">
      <div className="container py-3">
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center sm:space-y-0 space-y-4">
          <div className="space-x-4 flex justify-center items-center">
            <Button
              onClick={toggleCollapse}
              className="p-2 h-9 text-[#7822ff] bg-[#7822ff] hover:bg-[#7822ff] bg-opacity-25 hover:bg-opacity-40 text-2xl transition-colors duration-300"
            >
              {isCollapsed ? <HiChevronLeft /> : <HiChevronRight />}
            </Button>
            <div>
              <BreadcrumbNavigation />
              <h1 className="font-bold text-xl tracking-wider text-black">
                2022 Inventory Dashboard
              </h1>
            </div>
          </div>

          <div className="md:space-x-4 md:space-y-0 space-y-4 space-y-reverse flex md:flex-row flex-col justify-center items-center">
            <div className="space-x-2 md:order-1 order-2">
              <Button className="p-2 h-9 text-gray-400 bg-gray-400 hover:bg-gray-400 bg-opacity-25 hover:bg-opacity-40 text-2xl transition-colors duration-300">
                <HiOutlineRefresh />
              </Button>
              <Button className="p-2 h-9 text-gray-400 bg-gray-400 hover:bg-gray-400 bg-opacity-25 hover:bg-opacity-40 text-2xl transition-colors duration-300">
                <HiOutlineRefresh />
              </Button>
            </div>
            <div className="space-x-2 md:order-2 order-1 flex justify-between items-center">
              <Button className="p-2 px-3 h-9 min-w-8 text-[12px] leading-5 font-bold text-[#7822ff] bg-[#7822ff] hover:bg-[#7822ff] bg-opacity-25 hover:bg-opacity-40 transition-colors duration-300">
                Discard Changes
              </Button>
              <Button className="p-2 px-3 h-9 min-w-8 text-[12px] leading-5 font-bold text-[#7822ff] bg-[#7822ff] hover:bg-[#7822ff] bg-opacity-25 hover:bg-opacity-40 transition-colors duration-300">
                Save
              </Button>
              <Button className="p-2 px-3 h-9 min-w-8 text-[12px] leading-5 font-bold text-[#7822ff] bg-[#7822ff] hover:bg-[#7822ff] bg-opacity-25 hover:bg-opacity-40 transition-colors duration-300">
                <HiDotsHorizontal />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
