import React from "react";
import Layout from "@/layouts/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { saints } from "@/images";

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
            </ul>
          </div>

          <div className="max-w-[740px]">
            <h1 className=" font-semibold text-[32px] text-[#a06837d9] mb-6">
              Our Saints
            </h1>

            <Image
              src={saints}
              alt="logo"
              width={250}
              height={200}
              className="object-contain mx-auto  sm:mx-0 float-none sm:float-left sm:mr-3 "
            />

            <p className="text-justify font-semibold indent-6 my-6">
              Saint Augustine
            </p>
            <p className="text-justify font-normal indent-6 my-6">
              Aurelius Augustine was born in 354 at Tagaste, Algeria, in North
              Africa, the son of Patricius, a non-believer, and his devout
              Catholic wife, Monica. Though he was enrolled as a catechumen by
              his mother when he was a boy, Augustine's baptism was deferred to
              a later time in accordance with the prevailing custom. From his
              earliest years, Augustine possessed an inquisitive mind and an
              attractive personality and set his sights on a career that would
              bring him both wealth and fame, goals that were heartily endorsed
              by his parents, who sought out opportunities to provide their son
              with the finest education possible.
            </p>
            <p className="text-justify font-normal indent-6 my-6">
              Following studies in Tagaste and later in Carthage, Augustine
              became a teacher of rhetoric, first in his native town, then in
              Rome and finally in Milan. His journey from city to city,
              occasioned by various opportunities and challenges, was suggestive
              of a more important spiritual journey that he made over a long
              period of time, in search of inner peace and lasting happiness.
              The example, prayers, and influence of Monica had no little part
              to play in the drama of her son’s spiritual itinerary, and
              Augustine ascribes largely to her his conversion to the Catholic
              faith. He was baptized at the age of 33 by Bishop Ambrose of
              Milan. Augustine’s decision to embrace the Catholic faith was at
              the same time a commitment to spend the remainder of his life as a
              "servant of God," that is, in celibacy, even though he had been
              living for years with a woman whom he deeply loved, and with whom
              he had fathered a son, to whom he gave the name Adeodatus.
            </p>

            <p className="text-justify font-normal indent-6 my-6">
              Following baptism, which Augustine received together with
              Adeodatus and with Augustine's own good friend, Alypius, he set
              out for his native town where he wished to pursue a monastic style
              of life together with other men who had likewise experienced a
              radical conversion to the faith. On the journey, at Ostia Antica,
              just outside of Rome, Monica took sick and died suddenly but
              happily, having witnessed Augustine’s total commitment to Christ
              and the Church.
            </p>

            <p className="text-justify font-normal indent-6 my-6">
              At Tagaste, Augustine, Adeodatus, and several companions lived an
              intense life of prayer, work and fellowship, sharing their
              insights about Scripture and the Christian vocation. After three
              years, however, while on a visit to the city of Hippo, about fifty
              miles distant from Tagaste, Augustine was called to become a
              priest, contrary to his wishes, but disposed, nevertheless, to
              accept what he believed was God’s will for him. In Hippo, too, he
              established a monastic community, which he directed while
              assisting the bishop, Valerius. Several years later Augustine
              succeeded Valerius as head of the diocese, and feeling constrained
              to move to the bishop’s house so as not to disturb the peace of
              the monastic community, he wrote his Rule for its continued
              direction, and then established yet a third community for clerics
              in his new episcopal residence. Thus from the time of his return
              to Tagaste until his death, Augustine resolutely opted for a
              monastic style of life in community.
            </p>

            <p className="text-justify font-normal indent-6 my-6">
              As bishop, Augustine found his desired life of contemplation and
              separation from worldly concerns necessarily influenced and
              refashioned by his many obligations as leader of the local Church
              and as a civil official, which the office of bishop at the time
              included. In addition to his pastoral duties within Hippo, he
              traveled to church councils in the region of North Africa – forty
              to fifty times over the course of the 35 years he served as
              bishop. He made the nine-day journey to Carthage, the metropolitan
              see, for meetings with other bishops some thirty times. But even
              these extensive travels, which Augustine always found to be a
              hardship physically, were modest in comparison with the great
              output of writings and sermons which he produced: over two hundred
              books and nearly a thousand sermons, letters and other works.
            </p>

            <p className="text-justify font-normal indent-6 my-6">
              In the year 430 Augustine fell ill and took to his bed. His days
              and nights were spent praying the penitential psalms, which he
              asked to have written on the wall of his room. He died on August
              28th, as the city of Hippo was being sacked by the Vandals. His
              body was laid to rest in Hippo, but was later taken to Sardinia
              for safe keeping, and finally to Pavia in Northern Italy, where it
              now rests in the Basilica of San Pietro in Ciel d'Oro.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default our_saints;
