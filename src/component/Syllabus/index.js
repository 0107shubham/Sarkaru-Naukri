import React from "react";
import { Link } from "react-router-dom";

const syllabusArray = [
  { id: 1, name: "UPSSSC Forest Guard 2023 Syllabus", formId: 1 },
  { id: 2, name: "Punjab Police Constable Syllabus 2024", formId: 2 },
  {
    id: 3,
    name: "UKPSC Uttarakhand Police Sub Inspector Syllabus 2024",
    formId: 1,
  },
  { id: 4, name: "UP Police Constable Syllabus 2024", formId: 1 },
  {
    id: 5,
    name: "UP Police Computer Operator, Programmer Syllabus 2024",
    formId: 1,
  },
  { id: 6, name: "UP Police SI / ASI Syllabus 2024", formId: 2 },
  { id: 7, name: "UPSSSC Stenographer Syllabus 2023", formId: 2 },
  { id: 8, name: "UPSSSC Eye Testing Officer ETO Syllabus 2023", formId: 1 },
  { id: 9, name: "UPSSSC X Ray Technician Syllabus 2023", formId: 2 },
  { id: 10, name: "UPSSSC Dental Hygienist Syllabus 2023", formId: 1 },
  { id: 11, name: "UPSSSC Enforcement Constable Syllabus 2023", formId: 1 },
  { id: 12, name: "UPSSSC Gram Panchayat Adhikari Syllabus 2023", formId: 1 },
  { id: 13, name: "UPSSSC Auditor Syllabus 2023", formId: 1 },
  { id: 14, name: "BSEB STET Syllabus 2023", formId: 1 },
  { id: 15, name: "UPSSSC Junior Assistant 2022 Syllabus", formId: 1 },
  {
    id: 16,
    name: "MP High School Selection Test HSTST Syllabus 2023",
    formId: 1,
  },
  { id: 17, name: "CRPF Sub Inspector and ASI Syllabus 2023", formId: 1 },
  { id: 18, name: "UPSSSC Forest Guard Syllabus 2023", formId: 1 },
  { id: 19, name: "SSC MTS and Havaldar Syllabus 2023", formId: 1 },
  {
    id: 20,
    name: "Rajasthan State Eligibility Test SET Syllabus 2023",
    formId: 1,
  },
  { id: 21, name: "NVS Class 6th Admission Syllabus 2023", formId: 1 },
  { id: 22, name: "MPESB High School TET Syllabus 2023", formId: 1 },
  { id: 23, name: "SSC 10+2 CHSL Syllabus 2022", formId: 1 },
  { id: 24, name: "BPSC Drug Inspector Syllabus 2022", formId: 1 },
  {
    id: 25,
    name: "Allahabad High Court Group C and D Various Post Syllabus 2022",
    formId: 1,
  },
  { id: 26, name: "SSC GD Constable Syllabus 2022", formId: 1 },
  { id: 26, name: "SSC GD Constable Syllabus 2022", formId: 1 },
  { id: 27, name: "RSMSSB CET 10+2 Level Syllabus 2022", formId: 1 },
  { id: 28, name: "SSC Scientific Assistant Syllabus 2022", formId: 1 },
  { id: 29, name: "NVS Class 9th Admission Syllabus 2023", formId: 1 },
  { id: 30, name: "UPSSSC Mukhya Sevika Syllabus 2022", formId: 1 },
  {
    id: 31,
    name: "UPSSSC Combined Technical Services 2016 Revised Syllabus",
    formId: 1,
  },
  { id: 32, name: "SSC CPO SI 2022 Syllabus", formId: 1 },
  {
    id: 33,
    name: "Rajasthan 32000 Teacher Level 1, 2 Syllabus 2022",
    formId: 1,
  },
  { id: 34, name: "UPHESC Assistant Professor Syllabus 2022", formId: 1 },
  { id: 35, name: "IIT GATE 2023 Syllabus", formId: 1 },
  { id: 36, name: "Territorial Army PIB Syllabus 2022", formId: 1 },
  { id: 37, name: "UPSSSC PET Syllabus 2022", formId: 1 },
  { id: 38, name: "HSSC CET Group C Syllabus 2022", formId: 1 },
  { id: 39, name: "DDA Various Post Syllabus 2022", formId: 1 },
  { id: 40, name: "UP PGT 2022 Syllabus All Subject", formId: 1 },
  { id: 41, name: "UP TGT 2022 Syllabus All Subject", formId: 1 },
  { id: 42, name: "SSC Delhi Police Head Constable Syllabus 2022", formId: 1 },
  { id: 43, name: "SSC Selection Post X Syllabus 2022", formId: 1 },
  { id: 44, name: "ICAR IARI Assistant Syllabus 2022", formId: 1 },
  {
    id: 45,
    name: "BSF Group B SI Work, JE Electrical Syllabus 2022",
    formId: 1,
  },
  {
    id: 46,
    name: "UPPSC Assistant Prosecution Officer Exam APO Syllabus 2022",
    formId: 1,
  },
  { id: 47, name: "BIS Various Group A B C Post Syllabus 2022", formId: 1 },
  {
    id: 48,
    name: "Supreme Court of India Court Assistant / Junior Translator Syllabus 2022",
    formId: 1,
  },
  { id: 49, name: "Bihar 2 Year B.Ed Admission Syllabus 2022", formId: 1 },
  { id: 50, name: "Rajasthan REET 2022 Syllabus for Level I & II", formId: 1 },
  { id: 51, name: "MP PEB Sub Engineer Syllabus 2022", formId: 1 },
  {
    id: 52,
    name: "Bihar BPSC Syllabus for Primary School Head Teacher Exam 2022",
    formId: 1,
  },
  {
    id: 53,
    name: "SSC Syllabus for Multi Tasking Staff MTS Exam 2022",
    formId: 1,
  },
  { id: 54, name: "ECGC PO Syllabus 2022", formId: 1 },
  { id: 55, name: "SIDBI Assistant Manager Syllabus 2022", formId: 1 },
  {
    id: 56,
    name: "JIPMER Syllabus for Group B and C Various Post Exam 2022",
    formId: 1,
  },
  {
    id: 57,
    name: "UP NHM Lab Technician & Other Post Syllabus 2022",
    formId: 1,
  },
  { id: 58, name: "UPPSC Assistant Professor Syllabus 2022", formId: 1 },
  {
    id: 59,
    name: "BPSC Asst Sanitary & Waste Management Officer Syllabus 2022",
    formId: 1,
  },
  { id: 60, name: "UPSSSC Lekhpal Syllabus 2021", formId: 1 },
  { id: 61, name: "NTA CSIR UGC NET Exam Syllabus 2022", formId: 1 },
  { id: 62, name: "RPSC RAS Mains Exam Syllabus 2021", formId: 1 },
  {
    id: 63,
    name: "MP High Court Assistant Grade 3, Stenographer Syllabus 2021",
    formId: 1,
  },
  { id: 64, name: "UPSSSC Swasthya Karyakarta Exam Syllabus", formId: 1 },
  { id: 65, name: "UPSSSC Instructor 2016 Syllabus", formId: 1 },
  {
    id: 66,
    name: "UPHESC Assistant Professor Syllabus All Subject Download 2021",
    formId: 1,
  },
  {
    id: 67,
    name: "Allahabad High Court Review Officer Hindi Urdu Syllabus 2021",
    formId: 1,
  },
  { id: 68, name: "RSMSSB Patwari Syllabus 2021", formId: 1 },
  {
    id: 69,
    name: "UPPSC Technical Education Service Exam Syllabus 2021",
    formId: 1,
  },
  { id: 70, name: "Allahabad HC APS Exam Syllabus 2021", formId: 1 },
  { id: 71, name: "UPSSSC Lower 2019 Mains Syllabus", formId: 1 },
  { id: 72, name: "IIT JEE Advanced 2021 Syllabus", formId: 1 },
  { id: 73, name: "UPSSSC Sub Engineer 2018 Syllabus" },
  {
    id: 74,
    name: "Allahabad High Court Computer Assistant Syllabus 2021",
    formId: 1,
  },
  { id: 75, name: "Allahabad High Court RO / ARO Syllabus 2021", formId: 1 },
  { id: 76, name: "UKPSC Lower PCS Pre / Mains Syllabus 2021", formId: 1 },
  { id: 77, name: "CGPSC SES Syllabus 2021", formId: 1 },
  { id: 78, name: "UKPSC APO Pre / Mains Syllabus 2021", formId: 1 },
  { id: 79, name: "UPSSSC Mandi Parishad 2018 Syllabus", formId: 1 },
  { id: 80, name: "ASRB AO, FAO Syllabus 2021", formId: 1 },
  { id: 81, name: "Nainital Bank Clerk / MT Syllabus 2021", formId: 1 },
  { id: 82, name: "Territorial Army Officer Syllabus 2021", formId: 1 },
  { id: 83, name: "SSC GD Constable Syllabus 2021", formId: 1 },
  { id: 84, name: "NEET 2021 UG Syllabus", formId: 1 },
  { id: 85, name: "MPPSC DSP Radio & Computer Syllabus 2021", formId: 1 },
  { id: 86, name: "SBI Clerk Pre / Mains Syllabus 2021", formId: 1 },
  { id: 87, name: "Indian Navy SSR/AA Syllabus", formId: 1 },
];

const Syllabus = () => {
  return (
    <div className="w-full">
      <ul className="w-full  pl-[10%]">
        {syllabusArray.map((item) => (
          <li
            className="text-blue-600 m-3 list-disc text-[2vw] lg:text-[1.5vw]"
            key={item.id}
          >
            <Link to={`/form/${item.formId}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Syllabus;
