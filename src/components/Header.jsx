import React from "react";
import Image from "next/image";
import { header } from "@/images";

const Header = () => {
  return (
    <div className="flex justify-center h-auto z-50 overflow-hidden">
      <Image src={header} alt="Logo" height={200} priority quality={100} />
    </div>
  );
};

export default Header;
