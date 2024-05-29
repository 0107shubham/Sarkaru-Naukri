import React from "react";
import { useParams } from "react-router-dom";

const formdata = [
  {
    id: 1,
    postDetails: {
      postName:
        "Railway Recruitment Board RRB Assistant Loco Pilot ALP CEN 01/2024 Re Upload Photo Signature for 5696 Post",
      postDate: "09 December 2023 | 06:08 PM",
      shortInformation:
        "Indian Railway (Railway Recruitment Board) has released Assistant Loco Pilot ALP Recruitment 2024. Those candidates who are interested in this RRB Prayagraj, RRB Gorakhpur, RRB Ajmer, RRB Kolkata, RRB Mumbai, RRB Secunderabad, RRB Chennai and Other recruitment can apply online from 20 January 2024 to 19 February 2024. Read the notification for recruitment eligibility, post information, selection procedure, age limit, pay scale and all other information.",
      applicationBegin: "10/05/2024",
      lastDateToApply: "09/06/2024",
      payExamFeeLastDate: "09/06/2024",
      examDate: "As per Schedule",
      admitCardAvailable: "Before Exam",
    },
    applicationFee: {
      generalObcEws: 500,
      scStPh: 250,
      femaleAllCategory: 250,
    },
    ageLimit: {
      minimumAge: 21,
      maximumAgeMale: 45,
      maximumAgeFemale: 48,
      ageRelaxation:
        "Extra as per Bihar Panchayati Raj Department PRD, Bihar Gram Swaraj Yojna Society Recruitment Rules 2024.",
    },
    vacancyDetails: {
      totalPosts: 1300,
      ageLimitAsOn: "01/03/2024",
      ageRange: "18-27 as on 02/09/2017",
    },
    posts: {
      postName: "ACIO II",
      gen: 951,
      sc: 109,
      st: 56,
      obc: 184,
      total: 1300,
      eligibility:
        "Bachelor Degree in Any Stream in Any Recognized University in India. Basic Knowledge of Computer",
    },
    // Add data for 4 more posts here (same structure as ACIO II)
  },
  {
    id: 2,
    postDetails: {
      postName:
        "CRPF Constable Technical / Tradesman Recruitment 2023 Result for 9212 Post",
      postDate: "18 May 2024 | 09:58 AM",
      shortInformation:
        "Central Reserve Police Force (CRPF) has issued a Constable Technical & Tradesman Recruitment 2023 Notification. Any candidate who is interested in this CRPF Constable Driver, Mochi, Motor Mechanic, Carpenter, Tailor, Band, Cook, Mali, Painter, Safai Karmchari, Dhobi, Barber Recruitment Result. Those candidates who are enrolled with the vacancy can download the answer key. For recruitment details, pay scale, age limit, selection procedure, job information, and all other information, read the advertisement and then apply.",
      applicationBegin: "27/03/2023",
      lastDateToApply: "09/06/2024",
      payExamFeeLastDate: "02/05/2023",
      examDate: "01-12 July 2023",
      admitCardAvailable: "24/06/2023",
    },
    applicationFee: {
      generalObcEws: 500,
      scStPh: 250,
      femaleAllCategory: 250,
    },
    ageLimit: {
      minimumAge: 21,
      maximumAgeMale: 45,
      maximumAgeFemale: 48,
      ageRelaxation:
        "Extra as per Bihar Panchayati Raj Department PRD, Bihar Gram Swaraj Yojna Society Recruitment Rules 2024.",
    },
    vacancyDetails: {
      totalPosts: 1300,
      ageLimitAsOn: "01/03/2024",
      ageRange: "18-27 as on 02/09/2017",
    },
    posts: {
      postName: "Driver Post",
      gen: 951,
      sc: 109,
      st: 56,
      obc: 184,
      total: 1300,
      eligibility:
        "Bachelor Degree in Any Stream in Any Recognized University in India. Basic Knowledge of Computer",
    },
    // Add data for 4 more posts here (same structure as ACIO II)
  },
  // Add more data objects here...
];

const FormData = () => {
  const { formId } = useParams();
  const id = Number(formId);

  const item = formdata.find((item) => item.id === id);

  if (!item) {
    return <div>No data found for the provided form ID.</div>;
  }

  return (
    <div className="w-full p-[2vw]">
      <div className="w-full lg:w-[80%]" key={item.id}>
        <h2 className="text-red-500 font-bold flex my-[1vw]">
          <span className="w-[20%] text-[2.6vw] lg:text-[1.6vw]">
            Name of Post:
          </span>{" "}
          <span className="text-black font-normal w-[80%]  text-[1.8vw] lg:text-[1.4vw]">
            {item.postDetails.postName}
          </span>
        </h2>
        <p className="text-red-500 font-bold flex  my-[1vw]">
          <span className="w-[20%]  text-[2.6vw] lg:text-[1.6vw]">
            Post Date / Update:
          </span>

          <span className="text-black font-normal w-[80%]   text-[1.8vw] lg:text-[1.4vw]">
            {item.postDetails.postDate}
          </span>
        </p>
        <p className="text-red-500 flex font-bold w-full  my-[1vw]">
          <span className="w-[20%]  text-[2.6vw] lg:text-[1.6vw]">
            Short Information:
          </span>
          <span className="text-black w-[80%] font-normal   text-[1.8vw] lg:text-[1.4vw]">
            {item.postDetails.shortInformation}
          </span>{" "}
        </p>
        <div className="flex w-full">
          <div className="border-2 border-black w-[50%]">
            <p className="text-center text-[#008000] border-black border-b font-bold  text-[3vw] lg:text-[2.5vw]">
              Important Dates
            </p>
            <ul className="pl-[2vw]  my-[2vw] text-[2.1vw] lg:text-[1.8vw] ">
              <li>Application Begin: {item.postDetails.applicationBegin}</li>
              <li>
                Last Date for Apply Online:
                <span className="text-red-600 font-medium">
                  {" "}
                  {item.postDetails.lastDateToApply}
                </span>
              </li>
              <li>
                Last Date Pay Exam Fee: {item.postDetails.payExamFeeLastDate}
              </li>
              <li>Exam Date: {item.postDetails.examDate}</li>
              <li>
                Admit Card Available: {item.postDetails.admitCardAvailable}
              </li>
            </ul>
          </div>
          <div className="border-2 border-black w-[50%]">
            <p className="text-center  text-[#008000] font-bold  border-black border-b text-[3vw] lg:text-[2.5vw]">
              Application Fee
            </p>
            <ul className="pl-[2vw] my-[2vw]  text-[2.1vw] lg:text-[1.8vw] ">
              <li>General / OBC / EWS: {item.applicationFee.generalObcEws}</li>
              <li>SC / ST / PH: {item.applicationFee.scStPh}</li>
              <li>
                Female (All Category): {item.applicationFee.femaleAllCategory}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-2 border-black w-full mt-4 ">
          <p className="text-center text-[#008000] font-bold border-b-2 border-black text-[3vw] lg:text-[2.5vw]">
            CRPF Constable Tradesman Notification 2023 Age Limit as on
            01/08/2023
          </p>
          <ul className=" text-[2.1vw] lg:text-[1.8vw]  my-[2vw] mx-[2vw]">
            <li>Minimum Age: {item.ageLimit.minimumAge}</li>
            <li>Maximum Age (Male): {item.ageLimit.maximumAgeMale}</li>
            <li>Maximum Age (Female): {item.ageLimit.maximumAgeFemale}</li>
            <li>{item.ageLimit.ageRelaxation}</li>
          </ul>
        </div>

        <div className="w-full mt-[2vw]">
          <table className="min-w-full border-2 border-black">
            <thead>
              <tr>
                <th className="py-[1vw] w-[33%] border-black px-4 border-b border-r text-[#008000] font-bold text-[3vw] lg:text-[2.5vw]">
                  Post Name
                </th>
                <th className="py-[1vw] w-[33%] border-black  px-4 border-b border-r text-[#008000] font-bold text-[3vw] lg:text-[2.5vw]">
                  Total Post
                </th>
                <th className="py-[1vw] w-[33%] border-black px-4 border-b text-[#008000] font-bold text-[3vw] lg:text-[2.5vw]">
                  Eligibility
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-[1vw] px-[2vw]  border-black border-b border-r    text-[2.1vw] lg:text-[1.8vw] ">
                  {item.posts.postName}
                </td>
                <td>
                  <tr className="py-[1vw] px-[2vw]  flex flex-col     text-[2.1vw] lg:text-[1.8vw] ">
                    <td className="py-[1vw] px-[2vw] ">
                      GEN: {item.posts.gen}
                    </td>
                    <td className="py-[1vw] px-[2vw] ">SC: {item.posts.sc}</td>
                    <td className="py-[1vw] px-[2vw]  ">
                      ST : {item.posts.st}
                    </td>
                    <td className="py-[1vw] px-[2vw]  ">
                      OBC : {item.posts.obc}
                    </td>
                    <td className="py-[1vw] px-[2vw] ">
                      {" "}
                      TOTAL : {item.posts.total}
                    </td>
                  </tr>
                </td>
                <td className="py-2 px-4 border-black border-b border-l    text-[2.1vw] lg:text-[1.8vw] ">
                  {item.posts.eligibility}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full p-5 mt-[10%]">
        <div className="mt-5 text-lg text-gray-900 space-y-4">
          <p className="text-center text-[1.6vw] lg:text-[1.1vw] leading-tight">
            Welcome to this official website of Sarkari Result. There are many
            websites similar to the name of Sarkari Result, so you have to be
            careful. To open the real SarkariResult website, just open
            <a href="http://www.sarkariresult.com" className="text-blue-600">
              {" "}
              WWW.SARKARIRESULT.COM{" "}
            </a>
            and after SarkariResult .Com must be checked, for all kinds of
            updates related to jobs. For you, our Mobile App is also available
            for free on Google Play, Apple Store, and Microsoft Store.
            Additionally, you can connect with us on our social media accounts:
            Twitter, Facebook, Instagram, Koo, Telegram, and YouTube.
          </p>
          <p className="text-center text-[2.2vw] lg:text-[1.5vw] leading-tight">
            © Copyright 2024-2025 at www.sarkariresult.com <br />
            For advertising on this website contact us at
            sarkariresult@gmail.com{" "}
          </p>

          <p className="text-center text-sm text-red-600 text-[1.5vw] lg:text-[1vw]">
            <span className="">Disclaimer:</span> The Examination Results /
            Marks published on this Website are only for the immediate
            information to the Examinees and do not constitute a Legal Document.
            While all efforts have been made to make the Information available
            on this Website as Authentic as possible, we are not responsible for
            any inadvertent error that may have crept into the Examination
            Results / Marks being published on this Website and for any loss to
            anybody or anything caused by any Shortcoming, Defect, or Inaccuracy
            of the Information on this Website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormData;
