import React from "react";
import { Link } from "react-router-dom";

const admitcardList = [
  {
    id: 1,
    exam_name: "IIT JEE Advanced Admit Card 2024",
    formId: 1,
  },
  {
    id: 2,
    exam_name: "UPSC ESIC Nursing Officer Exam Date and Syllabus 2024",
    formId: 2,
  },
  {
    id: 3,
    exam_name: "UPSC EPFO PA Exam Date and Syllabus 2024",
    formId: 1,
  },
  {
    id: 4,
    exam_name: "DSSSB PA, SPA, JJA Stage II Exam Date 2024",
    formId: 2,
  },
  {
    id: 5,
    exam_name: "CUET UG 2024 Admit Card",
    formId: 1,
  },
  {
    id: 6,
    exam_name: "Bihar BSEB STET Admit Card 2024",
    formId: 2,
  },
  {
    id: 7,
    exam_name: "UP Polytechnic JEECUP 2024 Exam Date",
    formId: 1,
  },
  {
    id: 8,
    exam_name: "CBSE Various Post Exam Date 2024",
    formId: 2,
  },
  {
    id: 9,
    exam_name: "UPSSSC Van Daroga 2022 Document Verification Letter",
    formId: 1,
  },
  {
    id: 10,
    exam_name: "Delhi High Court SPA Stage III Admit Card 2024",
    formId: 2,
  },
  {
    id: 11,
    exam_name: "NIELIT CCC Admit Card May 2024",
    formId: 1,
  },
  {
    id: 12,
    exam_name: "NTA CMAT 2024 Admit Card",
    formId: 2,
  },
  {
    id: 13,
    exam_name: "CUET UG 2024 Exam City",
    formId: 1,
  },
  {
    id: 14,
    exam_name: "SSC Selection Post XII New Exam Date",
    formId: 2,
  },
  {
    id: 15,
    exam_name: "SSC Junior Engineer JE 2024 Exam Date",
    formId: 1,
  },
  {
    id: 16,
    exam_name: "SSC CPO SI 2024 Exam Date",
    formId: 2,
  },
  {
    id: 17,
    exam_name: "NTA NEET UG 2024 Admit Card",
    formId: 1,
  },
  {
    id: 18,
    exam_name: "NTA NCHMJEE Admit Card 2024",
    formId: 2,
  },
  {
    id: 19,
    exam_name: "UP Metro Various Post Admit Card 2024",
    formId: 1,
  },
  {
    id: 20,
    exam_name: "NTA UGC NET June 2024 New Exam Date",
    formId: 2,
  },
  {
    id: 21,
    exam_name: "NTA CMAT 2024 Exam Date",
    formId: 1,
  },
  {
    id: 22,
    exam_name: "NTA NEET UG 2024 Exam City Details",
    formId: 2,
  },
  {
    id: 23,
    exam_name: "Chandigarh JBT Teacher Admit Card 2024",
    formId: 1,
  },
  {
    id: 24,
    exam_name: "NTA CUET UG 2024 Subject Wise Exam Schedule",
    formId: 2,
  },
  {
    id: 25,
    exam_name: "BPSC TRE 3 Exam Date, BPSC Exam Calendar Download",
    formId: 1,
  },
  {
    id: 26,
    exam_name: "UPBED 2024 Entrance Exam Date",
    formId: 2,
  },
  {
    id: 27,
    exam_name: "UPSSSC Gram Vikas Adhikari VDO 2018 DV Schedule",
    formId: 1,
  },
  {
    id: 28,
    exam_name: "Army Agniveer CEE Exam Admit Card 2024",
    formId: 2,
  },
  {
    id: 29,
    exam_name: "UPSC NDA I Admit Card 2024",
    formId: 1,
  },
  {
    id: 30,
    exam_name: "UPSC CDS I Admit Card 2024",
    formId: 2,
  },
  {
    id: 31,
    exam_name: "AIIMS Nursing Officer NURCET 6th Admit Card 2024",
    formId: 1,
  },
  {
    id: 32,
    exam_name: "NIELIT CCC Admit Card April 2024",
    formId: 2,
  },
  {
    id: 33,
    exam_name: "Coast Guard Navik GD 02/2024 Exam Date / City",
    formId: 1,
  },
  {
    id: 34,
    exam_name: "ISRO URSC Various Post Admit Card 2024",
    formId: 2,
  },
  {
    id: 35,
    exam_name: "Delhi High Court Judicial Services Mains Admit Card 2024",
    formId: 1,
  },
  {
    id: 36,
    exam_name: "NTA JEEMAIN Session II April 2024 Exam City",
    formId: 2,
  },
  {
    id: 37,
    exam_name: "SSC GD Constable Re Exam Admit Card 2024",
    formId: 1,
  },
  {
    id: 38,
    exam_name: "HPSC HCS Mains Admit Card 2024",
    formId: 2,
  },
  {
    id: 39,
    exam_name: "Bihar DELED 2024 Admit Card",
    formId: 1,
  },
  {
    id: 40,
    exam_name: "UPSSSC Technical Service 2016 DV Letter",
    formId: 2,
  },
  {
    id: 41,
    exam_name: "MPPSC Pre 2024 New Exam Date",
    formId: 1,
  },
  {
    id: 42,
    exam_name: "SSC GD Constable 2023 Re Exam Notice",
    formId: 2,
  },
  {
    id: 43,
    exam_name: "UPSC Civil Services IAS Pre 2024 Exam Postponed",
    formId: 1,
  },
  {
    id: 44,
    exam_name: "Indian Airforce Agniveer Intake 01/2025 Admit Card",
    formId: 2,
  },
  {
    id: 45,
    exam_name: "UPSSSC Statistical Officer 2019 Interview Letter",
    formId: 1,
  },
  {
    id: 46,
    exam_name: "UP Polytechnic JEECUP 2024 Exam Postponed",
    formId: 2,
  },
  {
    id: 47,
    exam_name: "UPSSSC Mandi Parishad 2018 Various Post DV Schedule",
    formId: 1,
  },
  {
    id: 48,
    exam_name: "CCC Admit Card March 2024",
    formId: 2,
  },
  {
    id: 49,
    exam_name: "Jharkhand JPSC Pre 2024 Admit Card",
    formId: 1,
  },
  {
    id: 50,
    exam_name: "UP NHM Staff Nurse 2022 Offer Letter",
    formId: 2,
  },
  {
    id: 51,
    exam_name: "IDBI Bank Junior Assistant Manager Admit Card 2024",
    formId: 1,
  },
  {
    id: 52,
    exam_name:
      "NTA Uttarakhand High Court Jr Assistant, Steno / PA Admit Card 2024",
    formId: 2,
  },
  {
    id: 53,
    exam_name: "NTA CUET PG 2024 Admit Card",
    formId: 1,
  },
  {
    id: 54,
    exam_name: "RPSC PTI / Librarian / Asst Professor Admit Card 2024",
    formId: 2,
  },
  {
    id: 55,
    exam_name: "UPPSC Pre 2024 Exam Postponed Notice",
    formId: 1,
  },
  {
    id: 56,
    exam_name: "Indian Airforce Agniveer Intake 01/2025 Exam Date and City",
    formId: 2,
  },
  {
    id: 57,
    exam_name: "Bihar School Teacher TRE 3 Admit Card 2024",
    formId: 1,
  },
  {
    id: 58,
    exam_name: "NTA CUET PG 2024 Exam City",
    formId: 2,
  },
  {
    id: 59,
    exam_name: "UP Metro Various Post DV Letter 2024",
    formId: 1,
  },
  {
    id: 60,
    exam_name: "IBPS PO Mains Score Card 2024",
    formId: 2,
  },
];

const AdmitCard = () => {
  return (
    <div className="w-full">
      <ul className="w-full  pl-[10%]">
        {admitcardList.map((item) => (
          <li
            className="text-blue-600 m-3 list-disc text-[2vw] lg:text-[1.5vw]"
            key={item.id}
          >
            <Link to={`/form/${item.formId}`}>{item.exam_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdmitCard;
