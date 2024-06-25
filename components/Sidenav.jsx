"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  HiOutlineHome,
  HiPlay,
  HiShoppingCart,
  HiShare,
  HiChat,
  HiEye,
  HiLogout,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const NavigationLinks = [
  { id: "1", icon: <HiOutlineHome />, label: "Home", link: "/" },
  { id: "2", icon: <HiPlay />, label: "Get Demo", link: "/#" },
  { id: "3", icon: <HiShare />, label: "Share it", link: "/#" },
  { id: "4", icon: <HiShoppingCart />, label: "Add to Cart", link: "/#" },
  { id: "5", icon: <HiChat />, label: "Comment", link: "/#" },
  { id: "6", icon: <HiEye />, label: "Preview", link: "/#" },
];

const Sidenav = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-full">
      <nav
        className={`fixed left-0 top-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#4a346e] to-[#24174b] h-full transition ${
          isCollapsed ? "xl:max-w-[200px] max-w-[88px]" : "max-w-[88px]"
        } w-full flex flex-col transition-all duration-300`}
      >
        <div className="w-full px-3 py-4 flex flex-row relative">
          <Image
            src="/images/logo.png"
            className="mx-auto"
            width={70}
            height={70}
            alt="img"
          />
          <button
            onClick={toggleCollapse}
            className="text-white text-2xl focus:outline-none absolute right-[-12px] rounded-full bg-[#7822ff] hover:bg-[#7822ff] xl:flex hidden"
          >
            {isCollapsed ? <HiChevronLeft /> : <HiChevronRight />}
          </button>
        </div>
        <div className="overflow-y-auto flex flex-col justify-between h-full">
          <ul className="flex flex-col items-start justify-center gap-y-3 px-3">
            {NavigationLinks.slice(0, 6).map((item, index) => (
              <React.Fragment key={index}>
                <li className="w-full text-white hover:bg-[#7822ff] py-2 px-2 rounded-md transition font-light capitalize text-base">
                  <Link
                    href={item.link}
                    className={`flex flex-row items-center justify-center ${
                      isCollapsed
                        ? "gap-x-2 xl:justify-start"
                        : "justify-center"
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="xl:flex hidden">
                      {isCollapsed && item.label}
                    </span>
                  </Link>
                </li>
                {index === 3 && (
                  <Separator
                    orientation="horizontal"
                    className="bg-[#C0C0C0]"
                  />
                )}
              </React.Fragment>
            ))}
          </ul>

          <div className="flex flex-col justify-center items-center gap-y-8 px-3 py-4">
            <Avatar
              className={`${isCollapsed ? "xl:size-16 size-14" : "size-14"}`}
            >
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>admin</AvatarFallback>
            </Avatar>
            <span></span>
            {isCollapsed ? (
              <Button className="text-white bg-[#7822ff] hover:bg-white hover:text-[#0c0c14] transition font-medium capitalize text-sm xl:flex hidden">
                Scroll Top
                <span className="ml-1">
                  <HiLogout />
                </span>
              </Button>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-white cursor-pointer hover:text-red-500 transition font-medium capitalize text-xl">
                      <HiLogout />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm font-normal">Logout</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <TooltipProvider >
              <Tooltip>
                <TooltipTrigger className="xl:hidden flex">
                  <span className="text-white cursor-pointer hover:text-red-500 transition font-medium capitalize text-xl">
                    <HiLogout />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm font-normal">Logout</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </nav>
      <main
        className={`h-full ${
          isCollapsed
            ? "xl:w-[calc(100%-200px)] xl:absolute xl:left-[200px] w-[calc(100%-88px)] absolute left-[88px]"
            : "w-[calc(100%-88px)] absolute left-[88px]"
        } flex flex-col`}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidenav;
