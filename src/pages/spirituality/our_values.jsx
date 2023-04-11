import React from "react";
import Layout from "@/layouts/Layout";
import Head from "next/head";
import Link from "next/link";

const our_values = () => {
  return (
    <>
      <Head>
        <title>Our Charism - Osaprim</title>
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
              <h1 className="text-[24px] mb-2 normal-case text-[#a06837d9] font-semibold">
                Spirituality
              </h1>
              <li>
                <Link
                  href="/spirituality/our_charism"
                  className="hover:text-[#a06837d9]"
                >
                  Our Charism
                </Link>
              </li>
              <li className="text-[#a06837d9]">
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
                  className="hover:text-[#a06837d9]"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-w-[740px]">
            <h1 className=" font-semibold text-[32px] text-[#a06837d9] mb-6">
              Our Values
            </h1>
            <p className="text-justify font-normal indent-6 my-6">
              The spirituality of our Order proceeds from the following of
              Christ according to the wisdom of the Gospel and the action of the
              Holy Spirit. Its principal point of reference is the teaching and
              example of Saint Augustine, complemented by the tradition of the
              Order. The principal document of our spirituality is Augustine's
              Rule, which directs our lives and actions and informs our
              characteristic values of unity, truth and charity.
            </p>
            <p className="text-justify font-normal indent-6 my-6">
              Community is the axis around which Augustinian religious life
              turns: a community of brothers who live harmoniously together,
              united by a single soul and a single heart, seeking God together
              and open to the service of the Church. This community is the fruit
              of charity and is expressed in friendship, which brings forth and
              nourishes loyalty, trust, sincerity and mutual understanding.
              Charity unites us in Christ, helping us to recognize the signs of
              God’s love in the events and circumstances of life. Thus, united
              in charity, we share mutually the gifts given to us and to others.
              Our friendship in Christ not only favors the development of each
              one’s personality, but it also increases freedom within the
              community itself, in which a healthy openness of mind fosters
              dialogue and enjoys a necessary autonomy with which to serve God
              better.
            </p>
            <p className="text-justify font-normal indent-6 my-6">
              Humility and poverty are the foundation of our common life and
              spiritual life, and are so closely related that no one can be
              called a “poor man of God” as was Augustine, without being humble.
              By reason of poverty and humility we consider all of our
              possessions, both material and spiritual, as the possessions of
              all, for we do not hold them as personal property, but as given to
              us by God to be administered. We are all beggars before God.
              Therefore, we make use of the goods of the earth as tools on our
              way toward our heavenly homeland.
            </p>
            <p className="text-center italic font-normal">
              Adapted from the Order's Constitutions
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default our_values;
