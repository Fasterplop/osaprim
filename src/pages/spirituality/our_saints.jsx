import React from "react";
import Layout from "@/layouts/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { header } from "@/images";

const our_saints = () => {
  return (
    <>
      <Head>
        <title>Our Saints - Osaprim</title>
        <meta
          name="description"
          content="The heart of our vocation is to give ourselves to God through the monastic way of life, being one in mind and heart with our fellow monks, under the care and guidance of an abbot, according to the teachings of St. Augustine of Hippo and the early Augustinian Monks."
        />
        <meta name="author" content="Osaprim" />
      </Head>

      <Layout>
        <div className="overflow-hidden flex gap-16 flex-row justify-center mx-auto px-6 sm:px-16 sm:py-16 py-6 max-w-[1080px] text-[14px] sm:text-[16px] text-center leading-8 font-OpenSans ">
          <div className="my-16  sm:block hidden">
            <ul className="list-none text-start uppercase text-[#bbbbbb]">
              <h1 className="text-[24px] mb-2 normal-case text-[#a06837d9] font-semibold">
                Spirituality
              </h1>
              <li className="hover:text-[#a06837d9]">
                <Link
                  href="/spirituality/our_charism"
                  className="hover:text-[#a06837d9]"
                >
                  Our Charism
                </Link>
              </li>
              <li>
                <Link
                  href="/spirituality/our_values"
                  className="hover:text-[#a06837d9]"
                >
                  Our Values
                </Link>
              </li>
              <li>
                <Link
                  href="/spirituality/our_saints"
                  className="text-[#a06837d9]"
                >
                  Our Saints
                </Link>
              </li>
              <li>
                <Link
                  href="/spirituality/resources"
                  className="hover:text-[#a06837d9]"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/spirituality/secular_fraternities"
                  className="hover:text-[#a06837d9] whitespace-nowrap"
                >
                  Secular Fraternities
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[740px]">
            <h1 className=" font-semibold text-[32px] text-[#a06837d9] mb-6">
              Our Saints
            </h1>

            <Image
              src={header}
              alt="logo"
              width={250}
              height={200}
              className="object-contain mx-auto  sm:mx-0 float-none sm:float-left sm:mr-3 my-3"
            />

            <p className="text-justify font-normal indent-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
              lacinia dolor. Sed faucibus placerat ante id tincidunt. Nam porta
              lorem sit amet cursus tempor. Morbi efficitur odio at tortor
              volutpat, egestas placerat odio ullamcorper. Donec viverra tortor
              non leo posuere auctor. Nulla varius, urna eget volutpat laoreet,
              velit elit pharetra enim, vitae mollis odio velit sed lacus.
              Phasellus pellentesque pulvinar facilisis. Cras egestas, massa ac
              maximus gravida, risus dui efficitur diam, sed aliquet odio risus
              quis tortor. Donec eros sem, tincidunt non venenatis vel, lobortis
              vitae ipsum. Sed et dui magna. Donec tincidunt turpis ac felis
              volutpat, non facilisis massa iaculis. Nulla maximus leo at nibh
              posuere, ac maximus metus tristique. Duis sollicitudin quis magna
              ac tempus. Fusce ac finibus lectus. Duis vel eros sit amet erat
              congue ullamcorper. Curabitur sed tristique augue. Mauris molestie
              semper lectus vitae ultrices. Curabitur justo sapien, tempus nec
              aliquam et, aliquam nec arcu.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default our_saints;
