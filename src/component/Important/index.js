import React from "react";
import { Link } from "react-router-dom";

const latestJob = [
  {
    id: 1,
    formId: 1,
    name: "DDA Junior Engineer JE Civil 2023 Result",
  },
  {
    id: 2,
    formId: 2,
    name: "EMRS Teaching / Non Teaching Various Post Cutoff 2024",
  },
  {
    id: 3,
    formId: 1,
    name: "DSSSB Senior Personal Assistant SPA, Personal Assistant, PA Result 2024",
  },
  {
    id: 4,
    formId: 2,
    name: "SSC CPO SI 2023 Final Result with Marks",
  },
  {
    id: 5,
    formId: 1,
    name: "CBSE Board Class 10th Result 2024",
  },
  {
    id: 6,
    formId: 2,
    name: "CBSE Board Class 12th Result 2024 Declared",
  },
  {
    id: 7,
    formId: 1,
    name: "Haryana Board HBSE Class 10th Result 2024",
  },
  {
    id: 8,
    formId: 2,
    name: "UPSC CDS I Result 2024",
  },
  {
    id: 9,
    formId: 1,
    name: "UPSC NDA I Result 2024",
  },
  {
    id: 10,
    formId: 2,
    name: "Chhattisgarh Board CGBSE Class 10th, 12th Result 2024",
  },
  {
    id: 11,
    formId: 1,
    name: "NTA NIFT Admissions Stage II Result 2024",
  },
  {
    id: 12,
    formId: 2,
    name: "AIIMS NORCET 6th Stage II Result 2024",
  },
  {
    id: 13,
    formId: 1,
    name: "UPSC Forest Services 2023 Final Result",
  },
  {
    id: 14,
    formId: 2,
    name: "West Bengal Board Class 12th HS Result 2024",
  },
  {
    id: 15,
    formId: 1,
    name: "Bihar Board Class 10th Matric Revised Result 2024",
  },
  {
    id: 16,
    formId: 2,
    name: "CISCE Board Class 10th, 12th Result 2024",
  },
  {
    id: 17,
    formId: 1,
    name: "CBSE Board Result 2024 Date",
  },
  {
    id: 18,
    formId: 2,
    name: "Indian Navy Chargeman II Result 2024",
  },
  {
    id: 19,
    formId: 1,
    name: "Indian Navy Charge II Result 2024",
  },
  {
    id: 20,
    formId: 2,
    name: "West Bengal Board Class 10th Madhyamic Result 2024",
  },
  {
    id: 21,
    formId: 1,
    name: "PGCIL Diploma Trainee 2023 Result",
  },
  {
    id: 22,
    formId: 2,
    name: "Haryana Board Class 12th Result 2024",
  },
  {
    id: 23,
    formId: 1,
    name: "Uttarakhand Board Class 10th, 12th Result 2024",
  },
  {
    id: 24,
    formId: 2,
    name: "Jharkhand Board Class 12th Inter Result 2024",
  },
  {
    id: 25,
    formId: 1,
    name: "NTA JEEMAIN April 2024 Result",
  },
  {
    id: 26,
    formId: 2,
    name: "MPBSE MP Board 10th, 12th Result 2024",
  },
  {
    id: 27,
    formId: 1,
    name: "MP Class 5th, 8th Result 2024",
  },
  {
    id: 28,
    formId: 2,
    name: "Jharkhand JPSC Pre Result 2024",
  },
  {
    id: 29,
    formId: 1,
    name: "UP Board Class 10th High School Result 2024",
  },
  {
    id: 30,
    formId: 2,
    name: "UP Board Class 12th Intermediate Result 2024",
  },
  {
    id: 31,
    formId: 1,
    name: "UP Board Class 10th, 12th Result 2024",
  },
  {
    id: 32,
    formId: 2,
    name: "AIIMS NORCET 6th Stage I Result 2024",
  },
  {
    id: 33,
    formId: 1,
    name: "Jharkhand Board JAC Class 10th Matric Result 2024",
  },
  {
    id: 34,
    formId: 2,
    name: "NTA Uttarakhand High Court Junior Assistant, Steno Result 2024",
  },
  {
    id: 35,
    formId: 1,
    name: "RBI Assistant 2023 Phase II Main Exam Marks, Cutoff",
  },
  {
    id: 36,
    formId: 2,
    name: "UPPSC Pre / Mains 2023 Marks / Cutoff",
  },
  {
    id: 37,
    formId: 1,
    name: "UPSC Civil Services IAS 2023 Final Result",
  },
  {
    id: 38,
    formId: 2,
    name: "BHU SET Admissions 2024 E Lottery Result",
  },
  {
    id: 39,
    formId: 1,
    name: "CRPF Paramedical Staff Final Result 2024",
  },
  {
    id: 40,
    formId: 2,
    name: "NTA CUET PG 2024 Result",
  },
  {
    id: 41,
    formId: 1,
    name: "Indian Airforce Agniveer Vayu Intake 01/2025 Result",
  },
  {
    id: 42,
    formId: 2,
    name: "Bihar Board BSEB 10th, 12th Compartment Exam Time Table 2024",
  },
  {
    id: 43,
    formId: 1,
    name: "SSC CPO SI 2023 Final Result",
  },
  {
    id: 44,
    formId: 2,
    name: "Delhi High Court PA Stage II Exam Result 2024",
  },
  {
    id: 45,
    formId: 1,
    name: "UPSC NDA II 2023 Final Result",
  },
  {
    id: 46,
    formId: 2,
    name: "IBPS Clerk 13th Final Result 2024",
  },
  {
    id: 47,
    formId: 1,
    name: "IBPS PO 13th Final Result 2024",
  },
  {
    id: 48,
    formId: 2,
    name: "IBPS SO 13th Final Result 2024",
  },
  {
    id: 49,
    formId: 1,
    name: "UPSSSC PET 2023 Revised Result",
  },
  {
    id: 50,
    formId: 2,
    name: "SEBI Assistant Manager Final Result 2023",
  },
];

const Important = () => {
  return (
    <div className="w-full">
      <div className=" my-[3vw] border-2 border-black">
        <h1 className="text-black font-semibold  lg:text-[1.5vw] text-[1.4w]">
          Short Details :
        </h1>
        <p className="text-black font-normal lg:text-[1.2vw] text-[1vw]">
          The important section of SarkariResult.Com is a very important page as
          you all know that Sarkari Result is a very important website which
          gives job and admission related information from time to time, but due
          to user demand, apart from job and admission. Some information is
          given in this section such as Corona Vaccine, Driving License, UPSSSC
          OTR, High Security Number Plate, Scholarship, Employment Registration,
          and other important information is available on it. Whose purpose is
          only to make content accessible to its user easily. .
        </p>
      </div>
      <ul className="w-full pl-[10%]">
        {latestJob.map((items) => (
          <Link to={`/form/${items.formId}`}>
            <li className="text-blue-600 m-3 list-disc text-[2vw] lg:text-[1.5vw]">
              {items.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Important;
