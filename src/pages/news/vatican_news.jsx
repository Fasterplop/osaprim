import React from "react";
import Layout from "@/layouts/Layout";
import Head from "next/head";

const vatican_news = () => {
  return (
    <>
      <Head>
        <title>Vatican News - Osaprim</title>
        <meta
          name="description"
          content="The heart of our vocation is to give ourselves to God through the monastic way of life, being one in mind and heart with our fellow monks, under the care and guidance of an abbot, according to the teachings of St. Augustine of Hippo and the early Augustinian Monks."
        />
        <meta name="author" content="Osaprim" />
      </Head>

      <Layout>
        <div className=" m-16 text-center h-[600px] text-[16px] font-bold font-OpenSans">
          <h1>Our page is temporary unavailable</h1>
        </div>
      </Layout>
    </>
  );
};

export default vatican_news;
