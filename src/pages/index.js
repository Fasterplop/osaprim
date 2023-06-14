import Head from "next/head";
import Image from "next/image";
import Layout from "@/layouts/Layout";
import {
  child_jesus,
  first,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  god1,
  god2,
  god3,
  god4,
  god5,
} from "@/images";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Osaprim</title>
        <meta
          name="description"
          content="The heart of our vocation is to give ourselves to God through the monastic way of life, being one in mind and heart with our fellow monks, under the care and guidance of an abbot, according to the teachings of St. Augustine of Hippo and the early Augustinian Monks."
        />
        <meta name="author" content="Osaprim" />
      </Head>

      <Layout>
        {/* <div className=" xl:w-[70%] w-[100%] mx-auto -z-10"> */}
        <div className=" w-[70%] mx-auto -z-10 max-w-6xl mt-1">
          <Carousel autoPlay showThumbs={false}>
            <div>
              <Image
                src={first}
                alt="image 1"
                priority
                className=" max-h-[500px] -z-10"
              />
            </div>
            <div>
              <Image src={one} alt="image 2" className=" max-h-[500px]" />
            </div>
            <div>
              <Image src={two} alt="image 3" className=" max-h-[500px]" />
            </div>
            <div>
              <Image src={three} alt="image 4" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={four} alt="image 5" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={five} alt="image 6" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={six} alt="image 7" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={seven} alt="image 8" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={eight} alt="image 9" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={nine} alt="image 10" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={ten} alt="image 11" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={eleven} alt="image 12" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={twelve} alt="image 13" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={thirteen} alt="image 14" className="max-h-[500px]" />
            </div>
          </Carousel>
        </div>

        <div className="overflow-hidden flex flex-col justify-center items-center px-6 sm:px-16 py-6">
          <div className="max-w-[1080px] text-[14px] sm:text-[16px] text-center leading-8 py-3 font-OpenSans ">
            <h1 className=" text-[#A16939] text-center font-bold indent-6 my-6 mb-10 italic sm:text-[28px] text-[24px] ">
              Augustinian Monks of the Primitive Observance
            </h1>

            <p className="text-center font-normal indent-6 my-6 italic sm:text-[22px] text-[18px]">
              A community of monks striving to live a simple, genuine and full
              monastic life according to the Rule of St. Augustine. And our Holy
              Father Augustine begins the Holy Rule with the statement: "Above
              all else, dear brothers, love God and then your neighbor, for the
              main purpose of our coming together in the monastery is to be one
              in mind and heart intent upon God"
            </p>
          </div>
        </div>

        <div className=" w-[70%] mx-auto -z-10 max-w-6xl mt-1 mb-6">
          <Carousel autoPlay showThumbs={false}>
            <div>
              <Image
                src={god1}
                alt="image 1"
                priority
                className=" max-h-[500px] -z-10"
              />
            </div>
            <div>
              <Image src={god2} alt="image 2" className=" max-h-[500px]" />
            </div>
            <div>
              <Image src={god3} alt="image 3" className=" max-h-[500px]" />
            </div>
            <div>
              <Image src={god4} alt="image 4" className="max-h-[500px]" />
            </div>
            <div>
              <Image src={god5} alt="image 5" className="max-h-[500px]" />
            </div>
          </Carousel>
        </div>

        <div className="overflow-hidden flex flex-col justify-center items-center px-6 sm:px-16 pb-6">
          <div className="max-w-[1080px] text-[14px] sm:text-[16px] text-center leading-8 py-3 font-OpenSans ">
            <p className=" text-red-600 text-center font-bold indent-6  italic sm:text-[22px] text-[18px]">
              The Brothers pray daily for all who visit their site.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
