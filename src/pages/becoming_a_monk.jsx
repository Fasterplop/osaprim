import React from "react";
import Head from "next/head";
import Layout from "@/layouts/Layout";

const becoming_a_monk = () => {
  return (
    <>
      <Head>
        <title>Memorial Bricks - Osaprim</title>
        <meta
          name="description"
          content="The heart of our vocation is to give ourselves to God through the monastic way of life, being one in mind and heart with our fellow monks, under the care and guidance of an abbot, according to the teachings of St. Augustine of Hippo and the early Augustinian Monks."
        />
        <meta name="author" content="Osaprim" />
      </Head>

      <Layout>
        <div className="overflow-hidden flex flex-col justify-center items-center px-6 sm:px-16 py-6">
          <div className=" max-w-[1080px] text-[14px] sm:text-[16px] text-center leading-8 py-3 font-OpenSans ">
            <h1 className="mb-6 font-semibold text-[24px]">Vocations</h1>
            <h2 className="text-justify font-normal indent-6 my-6">
              <span className="font-semibold">Vocation Information: </span>
              Entrance and Formation
            </h2>
            <p className="text-justify font-normal indent-6 my-6">
              Men who feel they may be called by the Holy Spirit to live this
              way of life are invited to come and visit the Monastery. We look
              for men who desire to search for God, to draw ever close to Jesus
              Christ, and to live in oneness of mind and heart in community with
              their brothers.
            </p>

            <ul className="text-start list-disc ml-6">
              <li>Candidates need to have a life of daily prayer</li>
              <li>To be active in the sacramental life of the Church</li>
              <li>To be mentally sound</li>
              <li>To demonstrate stability and responsibility in life</li>
              <li>
                They must be faithful to the teaching of the Catholic Church and
                her Magisterium.
              </li>
              <li>
                We find that good candidates are usually between the ages of 25
                and 40.
              </li>
            </ul>

            <p className="text-justify font-normal indent-6 my-6">
              After a man visits the Monastery several times and, after prayer
              and discernment, and when both he and the monks feel he may be
              called to enter the life, an invitation is offered to the man to
              apply for entrance. The candidate must complete an application
              form and have both a physical and a psychological evaluation. When
              he is accepted the candidate becomes a postulant. The postulancy
              usually lasts 6 months to a year.
            </p>
            <p className="text-justify font-normal indent-6 my-6">
              After postulancy, he is clothed in the monastic habit, and the
              one-year novitiate begins. After completion of the canonical year,
              the novice makes his first profession of vows for one year. The
              monk may make his solemn profession as an Augustinian Monk of the
              Primitive Observance after three to six years of vows. As part of
              the solemn profession, the monk joins with our Holy Father St.
              Augustine in turning single-heartedly to God:
            </p>

            <p className="text-justify font-normal indent-6 my-6">
              "You alone do I love, You alone do I follow, You alone do I seek."
            </p>

            <p className="text-justify font-normal indent-6 my-6">
              "I am prepared to serve only you, because you alone govern justly,
              and I wish to be under your rule. I ask that only in your great
              mercy you convert me wholly to yourself and allow nothing to
              prevent me from coming to you. Grant that while I live, I may be
              temperate, strong, just, and prudent, in love with your wisdom and
              capable of understanding, worthy of your blessed kingdom, and one
              day a dweller in that Kingdom." (St. Augustine)
            </p>

            <p className="text-justify font-semibold my-6 ">
              Augustinian Monks of the Primitive Observance
              <br /> Mother of the Good Shepherd Monastery <br />
              2075 Mercers Fernery <br />
              Road DeLand, Florida 32720 <br /> United States of America <br />{" "}
              Phone: 386-736-4321
              <br /> E-Mail: monks@augustinianmonks.com
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default becoming_a_monk;
