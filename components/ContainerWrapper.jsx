import React from "react";

const ContainerWrapper = ({ children }) => {
  return (
    <div className="lg:bg-gray-100 lg:overflow-y-scroll lg:container lg:w-[calc(100%-520px)] w-full lg:flex-grow md:h-full lg:py-8 grid xxl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4 justify-items-center lg:order-2 md:order-3 order-2 md:col-span-2">
      {children}
    </div>
  );
};

export default ContainerWrapper;
