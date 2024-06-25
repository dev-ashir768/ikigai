import ContainerWrapper from "@/components/ContainerWrapper";
import DraggableSidenav from "@/components/DraggableSidebar";
import Filter from "@/components/Filter";
import Header from "@/components/Header";
import InventoryByChannel from "@/components/InventoryByChannel";
import InventoryByPath from "@/components/InventoryByPath";
import InventoryBySKU from "@/components/InventoryBySKU";
import SidebarAccordian from "@/components/SidebarAccordian";
import Image from "next/image";

export default function Home({}) {
  return (
    <>
      <Header />
      <div className="lg:flex lg:flex-row h-full md:grid md:grid-cols-2 container lg:pl-0 lg:pr-0 lg:mx-0 lg:max-w-full lg:gap-0 gap-10 lg:py-0 py-8 md:space-y-0 space-y-8">
        <SidebarAccordian />
        <ContainerWrapper>
          <Filter />
          <InventoryByPath />
          <InventoryByChannel />
          <InventoryBySKU />
        </ContainerWrapper>
        <DraggableSidenav />
      </div>
    </>
  );
}
