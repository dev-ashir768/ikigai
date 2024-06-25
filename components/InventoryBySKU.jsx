import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HiDotsVertical, HiFilter } from "react-icons/hi";
import { Button } from "./ui/button";
import Channel_BarChart from "./charts/Channel_BarChart";

const InventoryBySKU = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center space-y-0">
        <CardTitle className="font-bold text-base tracking-wide text-black">
          InventoryBySKU
        </CardTitle>
        <div className="space-x-2">
          <Button className="p-2 px-3 h-9 min-w-8 text-[12px] leading-5 font-bold text-[#7822ff] bg-[#7822ff] hover:bg-[#7822ff] bg-opacity-25 hover:bg-opacity-40 transition-colors duration-300">
            <HiFilter className="text-base" />
          </Button>
          <Button className="p-2 px-3 h-9 min-w-8 text-[12px] leading-5 font-bold text-[#7822ff] bg-[#7822ff] hover:bg-[#7822ff] bg-opacity-25 hover:bg-opacity-40 transition-colors duration-300">
            <HiDotsVertical className="text-base" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Channel_BarChart />
      </CardContent>
    </Card>
  );
};

export default InventoryBySKU;