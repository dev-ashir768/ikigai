import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { HiDotsVertical, HiFilter } from "react-icons/hi";
import { Button } from "./ui/button";

const InventoryByPath = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex sm:flex-row flex-col justify-between sm:items-center sm:space-y-0 space-y-3">
        <CardTitle className="font-bold text-base tracking-wide text-black">
          Inventory By Path
        </CardTitle>
        <div className="space-x-2">
          <Button className="p-2 px-3 h-9 min-w-8 w-max text-[12px] leading-5 font-bold text-[#7822ff] bg-[#7822ff] hover:bg-[#7822ff] bg-opacity-25 hover:bg-opacity-40 transition-colors duration-300">
            <HiFilter className="text-base" />
          </Button>
          <Button className="p-2 px-3 h-9 min-w-8 text-[12px] leading-5 font-bold text-[#7822ff] bg-[#7822ff] hover:bg-[#7822ff] bg-opacity-25 hover:bg-opacity-40 transition-colors duration-300">
            <HiDotsVertical className="text-base" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="channel">Channel or Location</Label>
              <Select className="appearance-none">
                <SelectTrigger id="channel">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="demo_test1">Demo Test</SelectItem>
                  <SelectItem value="demo_test2">Demo Test</SelectItem>
                  <SelectItem value="Demo Test3">Demo Test</SelectItem>
                  <SelectItem value="demo_test4">Demo Test</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="master_sku">Master SKU</Label>
              <Select>
                <SelectTrigger id="master_sku">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="demo_test1">Demo Test</SelectItem>
                  <SelectItem value="demo_test2">Demo Test</SelectItem>
                  <SelectItem value="demo_test3">Demo Test</SelectItem>
                  <SelectItem value="demo_test4">Demo Test</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="product_name">Product name or description</Label>
              <Select>
                <SelectTrigger id="product_name">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="demo_test1">Demo Test</SelectItem>
                  <SelectItem value="demo_test2">Demo Test</SelectItem>
                  <SelectItem value="demo_test3">Demo Test</SelectItem>
                  <SelectItem value="demo_test4">Demo Test</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default InventoryByPath;
