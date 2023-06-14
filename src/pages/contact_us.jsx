import React from "react";
import Layout from "@/layouts/Layout";
import Head from "next/head";

const contact_us = () => {
  return (
    <>
      <Head>
        <title>Holy Father St. Augustin - Osaprim</title>
        <meta
          name="description"
          content="The heart of our vocation is to give ourselves to God through the monastic way of life, being one in mind and heart with our fellow monks, under the care and guidance of an abbot, according to the teachings of St. Augustine of Hippo and the early Augustinian Monks."
        />
        <meta name="author" content="Osaprim" />
      </Head>

      <Layout>
        <div className=" m-16 text-center h-[600px] text-[16px] font-bold font-OpenSans leading-6">
          <h1>
            CONTACT US <br /> Br. JohnPaul Anthony Tran, O.S.APrim.
            <br />
            Tel.:
            <a className="underline text-[#0000EE]" href="tel:3863495277">
              {" "}
              (386) 349-5277
            </a>
            <br />
            Cell:
            <a className="underline text-[#0000EE]" href="tel:5416928627">
              {" "}
              (541) 692-8627
            </a>
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default contact_us;
