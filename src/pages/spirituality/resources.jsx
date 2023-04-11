import React from "react";
import Layout from "@/layouts/Layout";
import Head from "next/head";
import Link from "next/link";

const resources = () => {
  return (
    <>
      <Head>
        <title>Resources - Osaprim</title>
        <meta
          name="description"
          content="The heart of our vocation is to give ourselves to God through the monastic way of life, being one in mind and heart with our fellow monks, under the care and guidance of an abbot, according to the teachings of St. Augustine of Hippo and the early Augustinian Monks."
        />
        <meta name="author" content="Osaprim" />
      </Head>

      <Layout>
        <div className="overflow-hidden flex gap-16 flex-row justify-center mx-auto px-6 sm:px-16 sm:py-16 py-6 max-w-[1080px] text-[14px] sm:text-[16px] text-center leading-8 font-OpenSans ">
          <div className="my-16 sm:block hidden">
            <ul className="list-none text-start uppercase text-[#bbbbbb]">
              <h1 className="text-[24px] mb-2 normal-case text-[#a06837d9]  font-semibold">
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
                  className="hover:text-[#a06837d9]"
                >
                  Our Saints
                </Link>
              </li>
              <li>
                <Link
                  href="/spirituality/resources"
                  className=" text-[#a06837d9]"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[740px]">
            <h1 className=" font-semibold text-[32px] text-[#a06837d9] mb-6">
              Resources
            </h1>
            <p className="text-justify font-normal indent-6 my-6 ">
              Other useful sites:
            </p>

            <ul className="list-none">
              <li className="text-justify font-normal indent-6 my-6 flex flex-col">
                United States Conference of Catholic Bishops
                <a
                  href="https://www.usccb.org"
                  className="underline"
                  target="_blank"
                >
                  https://www.usccb.org
                </a>
              </li>
              <li className="text-justify font-normal indent-6 my-6 flex flex-col">
                Diocese of Orlando
                <a
                  href="https://www.orlandodiocese.org"
                  className="underline"
                  target="_blank"
                >
                  https://www.orlandodiocese.org
                </a>
              </li>
              <li className="text-justify font-normal indent-6 my-6 flex flex-col">
                New advent
                <a
                  href="https://www.newadvent.org"
                  className="underline"
                  target="_blank"
                >
                  https://www.newadvent.org
                </a>
              </li>
              <li className="text-justify font-normal indent-6 my-6 flex flex-col">
                Zenit
                <a
                  href="https://www.zenit.org"
                  className="underline"
                  target="_blank"
                >
                  https://www.zenit.org
                </a>
              </li>
              <li className="text-justify font-normal indent-6 my-6 flex flex-col">
                Catholic Answers
                <a
                  href="https://www.catholic.org"
                  className="underline"
                  target="_blank"
                >
                  https://www.catholic.org
                </a>
              </li>
              <li className="text-justify font-normal indent-6 my-6 flex flex-col">
                Catholic Exchange
                <a
                  href="https://catholicexchange.com"
                  className="underline"
                  target="_blank"
                >
                  https://catholicexchange.com
                </a>
              </li>
              <li className="text-justify font-normal indent-6 my-6 flex flex-col">
                Eternal Word
                <a
                  href="https://www.ewtn.com"
                  className="underline"
                  target="_blank"
                >
                  https://www.ewtn.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default resources;
