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
        <div className=" xl:w-[70%] w-[100%] mx-auto">
          <Carousel autoPlay>
            <div>
              <Image src={first} alt="image 1" className=" max-h-[500px]" />
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
          <div className="">
            <Image
              src={child_jesus}
              alt="Divine Child Jesus"
              height={500}
              className="object-contain "
              priority
            />
          </div>

          <div className="max-w-[1080px] text-[14px] sm:text-[16px] text-center leading-8 py-3 font-OpenSans ">
            <h2 className="  text-[#a06837d9] font-semibold">
              This image resides in the Monk’s Oratory of Mary our Mother,
              Undoer of Knots <br />
              It is an original statue carved in Portugal <br />
              Intitled: Divine child Jesus, Mirror of our Merciful Father <br />
              donated by the Aires and Maria Gomes and Maria Oliveira Family.
            </h2>

            <p className="text-justify font-normal indent-6 my-6">
              You alone do I love, you alone do I follow, and you alone I seek.
              I am prepared to serve only you, because you alone govern justly,
              and I wish to be under your rule. I ask that only in your great
              mercy you convert me wholly to yourself and allow nothing to
              prevent me from coming to you. Grant that, while I live, I may be
              temperate, strong, just, and prudent, in love with your wisdom and
              capable of understanding, worthy of your blessed kingdom, and one
              day a dweller in that kingdom.
            </p>

            <p className="text-justify font-normal indent-6 my-6">
              At the moment St. Augustine and his close friend Alypius were
              converted, they resolved to leave all and follow Christ in the
              monastic life. “Then we went in to my mother and told her, to her
              great joy. We related how it had come about; she was filled with
              triumphant exultation, and praised you who are mighty beyond what
              we ask or conceive…. For you converted me to Yourself so that I no
              longer sought a wife nor any of this world's promises, but stood
              upon that same rule of faith in which You had shown me to her so
              many years before. Thus you changed her mourning into joy, a joy
              far richer than she had thought to wish, a joy much dearer and
              purer than she had thought to find in grandchildren of my flesh.”
              (Confessions, book 8, ch. 12) In fact, learning about the life
              that St. Antony the Abbot had embraced and how others had adopted
              his way of life was the catalyst that brought Augustine to the
              moment of his conversion. As yet there was no developed rule for
              monks in the west, and so Augustine, Alypius, and others were
              inspired to embrace monasticism, adapting it to the west. When St.
              Augustine was chosen to be the successor to the see of Hippo, the
              venerable Bishop Valerius gave him a garden for his monastery, and
              even after taking possession of his see Augustine lived as far as
              possible the monastic vocation. As bishop of Hippo he wrote the
              rule for monks and later the rule for nuns that have been handed
              down throughout the ages. His first biographer, Possidius, gives
              us an insight into the primitive Augustinian monastic life, and we
              also have the model of the Monastery at Gafsa. Under the guidance
              of the Abbot Liberatus, the Monastery with its seven monks bore
              witness to the way of life under the Rule of St. Augustine. These
              holy monks bore witness to Christ and the monastic life by the
              shedding of their blood as martyrs in 490 A.D.
            </p>

            <p className="text-justify font-normal indent-6 my-6">
              We set before us this primitive observance and embrace as our own
              the Rule of St. Augustine. Our Father Augustine begins the Holy
              Rule with the statement, “Above all else, dear brothers, love God
              and then your neighbor, for the main purpose of our coming
              together in the monastery is to be one in mind and heart intent
              upon God.” The heart of our vocation is to give ourselves to God
              through the monastic way of life, being one in mind and heart with
              our fellow monks, under the care and guidance of an abbot,
              according to the teachings of St. Augustine of Hippo and the early
              Augustinian Monks.
            </p>

            <p className="text-justify font-normal indent-6 my-6">
              Augustinian Monks of the Primitive Observance have
              <strong> relocated </strong> their monastery on January 3, 2004,
              from Peaks Island Maine to Glenwood DeLand Florida. The Monks hope
              you will enjoy their site and come back often. The Brothers pray
              daily for all who visit their site.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
