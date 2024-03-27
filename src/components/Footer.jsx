import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { footer_img } from "@/images";

const Footer = () => {
  return (
    <footer className="py-4 overflow-hidden bg-gray-200 font-OpenSans sm:text-[16px] text-[14px]">
      <div className=" mx-auto flex sm:flex-row flex-col justify-center sm:gap-24">
        <div className="max-w-[350px] mx-auto sm:mx-0">
          <Image
            src={footer_img}
            alt="Footer Image"
            w={500}
            className=" max-h-[260px] object-contain"
          />
        </div>
        <div className="text-[#1e140a] flex flex-col sm:text-start text-center">
          <p>Br. Nicholas of the Immaculate Heart, O.S.A.Prim.</p>
          <a className="underline text-[#0000EE]" href="tel:5416928627">
            (541) 692-8627{" "}
          </a>
          <a className="underline text-[#0000EE]" href="tel:3863496277">
            (386) 349-6277{" "}
          </a>
          <a className="underline text-[#0000EE]" href="tel:3863272772">
            (386) 327-2772{" "}
          </a>
          <div className="flex flex-row text-[24px] gap-2 my-2 mx-auto sm:mx-0">
            <a target="_blank" href="https://www.facebook.com/OSAPrim">
              <FaFacebook />
            </a>

            <FaInstagram />
            <FaTwitter />
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCiAcQYge-yTtJxqGWEtEJ2A"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="border-[1px] border-[#444444] w-[70%] my-2 text-[16px] mx-auto" />
      <div className="text-center text-[#1e140a]  font-OpenSans">
        <p>Copyright &copy; {new Date().getFullYear()} Osaprim</p>
        <Link href="https://wa.me/7866692775?text=">
          <p className="text-gray-600 flex flex-row justify-center hover:text-green-500">
            Website created by:
            <span className="underline ml-2 font-semibold ">
              Luis Lozada
            </span>{" "}
            <FaWhatsapp className="items-center text-2xl text-green-500 font-bold" />
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
