import React, { useState }  from "react";
import Head from "next/head";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import { AiOutlineRead } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { galleryImages } from "@/images/gallery";
import {
  oblates1,
  oblates2,
  oblates3,
  oblates4,
  oblates5,
} from "@/images";


const oblates = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (title) => {
    setTempImgSrc(title);
    setModel(true);
  };
  return (
    <>
      <Head>
        <title>Oblates - Osaprim</title>
        <meta
          name="description"
          content="The heart of our vocation is to give ourselves to God through the monastic way of life, being one in mind and heart with our fellow monks, under the care and guidance of an abbot, according to the teachings of St. Augustine of Hippo and the early Augustinian Monks."
        />
        <meta name="author" content="Osaprim" />
      </Head>

      <Layout>
        <div className="overflow-hidden flex flex-col justify-center items-center px-6 sm:px-16 py-6">
          <div className=" max-w-[1080px] text-[14px] sm:text-[16px] text-center leading-8 py-3 font-OpenSans ">
            <h1 className="mb-6 font-semibold text-[24px]">Oblates</h1>
            <h2 className="text-justify font-normal indent-6">
              <span className="font-semibold underline">Job Description: </span>
            </h2>
    
            <p className="text-justify font-normal indent-6">
            We are seeking a dedicated and spiritually-minded individual to serve as the Oblates Program Manager for our Augustinian Monastery. The Oblates Program Manager will play a pivotal role in overseeing and nurturing the Oblates of the Augustinian Monks, a public association of faithful members in the Catholic Church dedicated to promoting holiness and the sanctification of its members through the spirituality of St. Augustine.
            </p> 



            <h2 className="text-justify font-normal indent-6 mt-8">
              <span className="font-semibold underline">Responsibilities: </span>
            </h2>
              
            <ul className="text-start list-disc ml-6">
              <li className="my-2"><span className="font-semibold">Program Leadership: </span> Provide visionary leadership for the Oblates Program, ensuring alignment with the mission, vision, and values of the Augustinian Monks and the Catholic Church.</li>
              <li className="my-2"><span className="font-semibold">Member Engagement: </span> Foster a sense of community and spiritual growth among Oblates through regular communication, organizing events, retreats, and workshops, and providing pastoral support as needed.</li>
              <li className="my-2"><span className="font-semibold">Formation and Education: </span> Develop and implement a comprehensive formation program for Oblates, including spiritual, theological, and practical aspects of Augustinian spirituality and tradition.</li>
              <li className="my-2"><span className="font-semibold">Administrative Duties: </span> Manage the administrative aspects of the Oblates Program, including membership records, communications, event planning, and budget management.</li>
              <li className="my-2"><span className="font-semibold">Collaboration: </span> Work closely with the leadership of the Augustinian Monastery, as well as other staff members and volunteers, to integrate the Oblates Program into the broader mission and activities of the organization.</li>
              <li className="my-2"><span className="font-semibold">Advocacy and Outreach: </span> Promote the Oblates Program within the local community and beyond, recruiting new members and raising awareness of the Augustinian spirituality and tradition.</li>
              <li className="my-2"><span className="font-semibold">Spiritual Direction: </span> Provide spiritual direction and guidance to Oblates, helping them deepen their relationship with God and live out their vocation as members of the association.</li>
            </ul>


            <h2 className="text-justify font-normal indent-6 mt-8">
              <span className="font-semibold underline">Qualifications:</span>
            </h2>

            <ul className="text-start list-disc ml-6">
              <li className="my-2">A practicing Catholic in good standing with the Church, with a deep commitment to the Catholic faith and the teachings of the Church. </li>
              <li className="my-2">A strong understanding of and appreciation for the spirituality of St. Augustine and the Augustinian tradition. </li>
              <li className="my-2">Previous experience in pastoral ministry, spiritual direction, or religious education preferred. </li>
              <li className="my-2">Excellent communication and interpersonal skills, with the ability to connect with people from diverse backgrounds. </li>
              <li className="my-2">Strong organizational and administrative abilities, with attention to detail and the ability to multitask effectively. </li>
              <li className="my-2">Flexibility and adaptability, with a willingness to work evenings and weekends as needed.Bachelor’s degree in theology, religious studies, pastoral ministry, or a related field preferred. </li>
            </ul>


            <h2 className="text-justify font-normal indent-6 mt-8">
              <span className="font-semibold underline">Application Process:</span>
            </h2>
            <p className="text-justify font-normal indent-6">
            Please submit a resume, cover letter, and three professional references to [contact information]. In your cover letter, please explain your interest in the position and how your skills and experiences align with the mission and goals of the Oblates Program.
            </p> 
            <p className="text-justify font-normal indent-6 my-6">
            We thank all applicants for their interest in the Oblates Program Manager position. Only those selected for an interview will be contacted.
            </p> 


            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="Oblates of the Augustinian Monks.pdf" alt="alt text" target="_blank" rel="noopener noreferrer">
            <AiOutlineRead className="items-center flex justify-center mx-auto text-2xl font-bold"/>Read Program
            </a>
            
            </button>
         
          </div>

          <div className="max-w-[1480px] mx-auto flex flex-wrap flex-row gap-8 mt-6 justify-center">
 
          <div className={model ? "model open" : "model"}>
            <Image src={tempImgSrc} />
            <AiOutlineCloseCircle onClick={() => setModel(false)} />
          </div>

          <div className="gallery ">
            {galleryImages.map((item, index) => {
              return (
                <div
                  className="pics"
                  key={index}
                  onClick={() => getImg(item.title)}
                >
                  <Image
                    src={item.title}
                    alt={item.id}
                    className="w-[100%] h-auto sm:w-[300px] sm:h-[200px] hover:bg-gray-400  bg-gray-300 object-contain shadow-xl"
                  />
                </div>
              );
            })}
          </div> 

            {/* <Image
              src={oblates1}
              alt="Oblates image"
              width={300}
              height={200}
              className=" cursor-pointer"
            />
            <Image
              src={oblates2}
              alt="Oblates image"
              width={300}
              height={200}
              className=" cursor-pointer"
            />
            <Image
              src={oblates3}
              alt="Oblates image"
              width={300}
              height={200}
              className=" cursor-pointer"
            />
            <Image
              src={oblates4}
              alt="Oblates image"
              width={300}
              height={200}
              className=" cursor-pointer"
            />
            <Image
              src={oblates5}
              alt="Oblates image"
              width={300}
              height={200}
              className=" cursor-pointer"
            /> */}

          
          </div>
        </div>
      </Layout>
    </>
  );
};

export default oblates;
