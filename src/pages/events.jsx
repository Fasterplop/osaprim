import React from "react";
import Layout from "@/layouts/Layout";
import Head from "next/head";

const events = () => {
  return (
    <>
      <Head>
        <title>Events- Osaprim</title>
        <meta
          name="description"
          content="The heart of our vocation is to give ourselves to God through the monastic way of life, being one in mind and heart with our fellow monks, under the care and guidance of an abbot, according to the teachings of St. Augustine of Hippo and the early Augustinian Monks."
        />
        <meta name="author" content="Osaprim" />
      </Head>

      <Layout>

      <div className="overflow-hidden flex flex-col justify-center items-center px-6 sm:px-16 py-6">
          <div className=" max-w-[1080px] text-[14px] sm:text-[16px] text-center leading-8 py-3 font-OpenSans ">
          
          <p className="text-justify font-normal  my-6">
      Dear friends and benefactors: <br />
Praised be Jesus Christ! <br />
Every year we look forward to our celebration in August of the great Solemnity of Our Holy Father Saint Augustine. As Augustinians, we regard this as one of the greatest feasts of the liturgical year. This year we are transferring the solemnity to a week end so that more people may be able to join with us in our annual celebration.
We hope that you, too, will be able to join us on Saturday, August 26, 2023, for Mass at 5:00 p.m. and for a light reception afterward. We are very grateful to Rev. Gilbert Medina, the pastor of St. Peter Catholic Church in Deland, who will be the main celebrant.    
The feast has been a cherished tradition in our community as we honor our spiritual father and renew our vows. It is a wonderful opportunity for all the members and friends of our community to come together in prayer and express our gratitude to God and each other.
Your presence at our feast will be greatly appreciated. It is through the support that you have shown us over the years that we are encouraged in our monastic life.
We look forward to sharing our monastic celebration with you. Should you have any questions, please contact our monastery at <a className="underline text-[#0000EE]" href="tel:3863496277">(386) 349-6277</a> or <a className="underline text-[#0000EE]" href="tel:5416928627">(541) 692-8627</a> . Please use these numbers also to RSVP so that we may have an idea of how many will be attending.
May our holy father, Saint Augustine, intercede for you. <br />  <br /> In the Hearts of Jesus and Mary,
<br /> <br />
Br. Nicholas of the Immaculate Heart, O.S.A.Prim., Prior

</p>
</div>


</div>
      </Layout>
    </>
  );
};

export default events;
