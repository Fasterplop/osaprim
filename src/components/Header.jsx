import React from "react";
import Image from "next/image";
import { header } from "@/images";

const Header = () => {
  return (
    <div className=" flex flex-row items-center text-center justify-center h-auto z-50 overflow-hidden">
      <Image src={header} alt="Logo" height={200} priority quality={100} />
      <h1 className="text-[#A16939] hidden sm:block ml-16 text-[36px] font-AlfaFont font-semibold">
        AUGUSTINIAN MONKS OF <br /> THE PRIMITIVE OBSERVANSE
      </h1>
    </div>
  );
};

export default Header;
