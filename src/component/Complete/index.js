import React from "react";
import { Link } from "react-router-dom";

const Complete = () => {
  const Result = [
    {
      id: 1,
      name: "SSC CPO SI 2023 Final Result with Marks",
      Status: "Announced",
      formId: 2,
    },
    {
      id: 2,
      name: "UPPCL Junior Engineer JE Civil Trainee 2019 Result",
      Status: "",
      formId: 2,
    },
    {
      id: 3,
      name: "UPPCL Junior Engineer JE Electrical Trainee 2019 Result",
      Status: "",
      formId: 2,
    },
    { id: 4, name: "NTA JNU Admission 2022 Result", Status: "" },
    { id: 5, name: "UPPSC Pre 2022 Result", Status: "", formId: 2 },
    {
      id: 6,
      name: "Bihar BSSC Urdu Anuwadak, Sahayak, Urdu Reporter Result 2022",
      Status: "",
      formId: 2,
    },
    {
      id: 7,
      name: "Bihar BSSC Urdu Anuwadak, Sahayak, Urdu Reporter Result 2022",
      Status: "",
      formId: 2,
    },
    {
      id: 8,
      name: "Bihar BSSC Urdu Anuwadak, Sahayak, Urdu Reporter Result 2022",
      Status: "",
      formId: 2,
    },
    {
      id: 9,
      name: "RBI Reserve Bank Office Attendant Result 2022",
      Status: "",
      formId: 2,
    },
    {
      id: 10,
      name: "Coast Guard AC SRD 02/2022 Result",
      Status: "Announced",
      formId: 2,
    },
    { id: 11, name: "NIELIT CCC September 2022 Result", Status: "", formId: 2 },
    { id: 12, name: "IBPS PO X Mains Result 2022", Status: "", formId: 2 },
    {
      id: 13,
      name: "MP PEB Group 5 Various Post Result 2022",
      Status: "",
      formId: 2,
    },
    {
      id: 14,
      name: "UPSSSC PET 2021 Additional Result 2022",
      Status: "",
      formId: 2,
    },
    {
      id: 15,
      name: "BPSC AE Civil 2017 Final Result 2022",
      Status: "",
      formId: 2,
    },
    {
      id: 16,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 17,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 18,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 19,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 20,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 21,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 22,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 23,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 24,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 25,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 26,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 27,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
    {
      id: 28,
      name: "UPSC Civil Services IAS 2021 Final Result",
      Status: "",
      formId: 2,
    },
  ];

  const AnswerKey = [
    { id: 1, name: "Bihar BSSTET 2023 Answer Key", formId: 1 },
    { id: 2, name: "UP TGT PGT 2024 Answer Key", formId: 1 },
    { id: 3, name: "MP PEB 2024 Answer Key", formId: 1 },
    { id: 4, name: "Rajasthan REET 2024 Answer Key", formId: 1 },
    { id: 5, name: "Maharashtra TET 2024 Answer Key", formId: 1 },
    { id: 6, name: "Kerala TET 2024 Answer Key", formId: 1 },
    { id: 7, name: "Gujarat TAT 2024 Answer Key", formId: 1 },
    { id: 8, name: "Tamil Nadu TET 2024 Answer Key", formId: 1 },
    { id: 9, name: "Telangana TET 2024 Answer Key", formId: 1 },
    { id: 10, name: "Karnataka TET 2024 Answer Key", formId: 1 },
  ];

  const Admission = [
    {
      id: 1,
      name: "UP Polytechnic JEECUP 2024 Correction / Edit Form",
      formId: 2,
    },
    { id: 2, name: "UP CPET 2024 Online Form", formId: 1 },
    {
      id: 3,
      name: "UP Board Improvement / Compartment Exam Online Form",
      formId: 2,
    },
    {
      id: 4,
      name: "UPSIFS Lucknow UG, PG, Phd Admissions Online Form 2024",
      formId: 1,
    },
    {
      id: 5,
      name: "UP Board Class 10th, 12th Scrutiny Online Form 2024",
      formId: 2,
    },
    { id: 6, name: "MUIT Lucknow, Noida Direct Admissions 2024", formId: 1 },
    {
      id: 7,
      name: "Rajju Bhaiya University PRSU CET Admissions Online Form 2024",
      formId: 2,
    },
    { id: 8, name: "Bihar 2 Year BED CET Online Form", formId: 1 },
    {
      id: 9,
      name: "Lucknow University Admissions Online Form 2024",
      formId: 2,
    },
    { id: 10, name: "IERT Admissions 2024 Online Form", formId: 1 },
    {
      id: 11,
      name: "UP Common Nursing Admission Test UP CNET Online Form 2024",
      formId: 2,
    },
  ];
  return (
    <div className="w-full my-[2vw] flex flex-col ">
      <div className="flex justify-between w-full ">
        <div className="w-[32%] h-[100vw] border-2  border-[#D2691E]">
          <div className="bg-[#AB183D]  w-full">
            {" "}
            <Link to={"./result"}>
              <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                Result{" "}
              </p>
            </Link>
          </div>
          <ul className="w-full   pl-[12%] py-[2vw]">
            {Result.map((eachItem) => (
              <li
                className="list-disc cursor-pointer text-blue-800 font-medium text-[1.4vw] lg:text-[1.1vw]"
                key={eachItem.id}
              >
                <Link to={`/form/${eachItem.formId}`}>
                  {eachItem.name}{" "}
                  {eachItem.Status === "" ? (
                    ""
                  ) : (
                    <p className="text-black">{eachItem.Status}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link to={"./result"}>
            <p className="text-[#0000B5] cursor-pointer text-[1.1vw] font-bold text-right pr-[5%]">
              View More
            </p>
          </Link>
        </div>
        <div className="w-[32%] h-[100vw] border-2  border-[#D2691E]">
          <div className="bg-[#AB183D]  w-full">
            <Link to={"./admitcard"}>
              <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                Admit Card{" "}
              </p>
            </Link>
          </div>
          <ul className="w-full   pl-[10%] py-[2vw]">
            {Result.map((eachItem) => (
              <li
                className="list-disc cursor-pointer text-blue-800 font-medium text-[1.4vw] lg:text-[1.1vw]"
                key={eachItem.id}
              >
                <Link to={`/form/${eachItem.formId}`}>
                  {eachItem.name}{" "}
                  {eachItem.Status === "" ? (
                    ""
                  ) : (
                    <p className="text-black">{eachItem.Status}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link to={"./admitcard"}>
            <p className="text-[#0000B5] cursor-pointer text-[1.1vw] font-bold text-right  pr-[5%]">
              View More
            </p>
          </Link>
        </div>
        <div className="w-[32%] h-[100vw] border-2  border-[#D2691E]">
          <div className="bg-[#AB183D]  w-full">
            {" "}
            <Link to={"./latestjob"}>
              <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                Latest Jobs
              </p>
            </Link>
          </div>
          <ul className="w-full   pl-[10%] py-[2vw] ">
            {Result.map((eachItem) => (
              <li
                className="list-disc cursor-pointer text-blue-800 font-medium text-[1.4vw] lg:text-[1.1vw]"
                key={eachItem.id}
              >
                <Link to={`/form/${eachItem.formId}`}>
                  {eachItem.name}{" "}
                  {eachItem.Status === "" ? (
                    ""
                  ) : (
                    <p className="text-black">{eachItem.Status}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link to={"./latestjob"}>
            <p className="text-[#0000B5] cursor-pointer text-[1.1vw] font-bold text-right  pr-[5%]">
              View More
            </p>
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[66%]  flex justify-between flex-wrap">
          <div className="w-[49%] h-[20vw]  border-2 border-[#D2691E] my-[1vw]  ">
            <div className="bg-[#AB183D]  w-full">
              {" "}
              <Link to={"./answerkey"}>
                <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                  Answer Key
                </p>
              </Link>
            </div>
            <ul className="p-[2vw]   pl-[10%] lg:pl-[2vw]">
              {AnswerKey.slice(0, 5).map((eachItem) => (
                <li
                  className="list-disc cursor-pointer text-[1.2vw] lg:text-[1.1vw] text-[#004BAD] "
                  key={eachItem.id}
                >
                  <Link to={`/form/${eachItem.formId}`}>{eachItem.name}</Link>
                </li>
              ))}
            </ul>
            <Link to={"./answerkey"}>
              <p className="text-[#0000B5] cursor-pointer text-[1.1vw] font-bold text-right  pr-[5%]">
                View More
              </p>
            </Link>
          </div>
          <div className="w-[49%] h-[20vw]  border-2  my-[1vw]  border-[#D2691E]">
            <div className="bg-[#AB183D]  w-full">
              {" "}
              <Link to={"./syllabus"}>
                <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                  Syllabus
                </p>
              </Link>
            </div>
            <ul className="p-[2vw]   pl-[10%] lg:pl-[2vw]">
              {AnswerKey.slice(0, 5).map((eachItem) => (
                <li
                  className="list-disc cursor-pointer text-[1.2vw] lg:text-[1.1vw] text-[#004BAD] "
                  key={eachItem.id}
                >
                  <Link to={`/form/${eachItem.formId}`}>{eachItem.name}</Link>
                </li>
              ))}
            </ul>
            <Link to={"./syllabus"}>
              <p className="text-[#0000B5] cursor-pointer text-[1.1vw] font-bold text-right  pr-[5%]">
                View More
              </p>
            </Link>
          </div>
          <div className="w-[49%] h-[20vw]  my-[1vw]  border-2   border-[#D2691E]">
            <div className="bg-[#AB183D]  w-full">
              {" "}
              <Link to={"./verification"}>
                <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                  Certificate Verification
                </p>
              </Link>
            </div>
            <ul className="p-[2vw]  pl-[10%] lg:pl-[2vw]">
              {AnswerKey.slice(0, 5).map((eachItem) => (
                <li
                  className="list-disc cursor-pointer text-[1.2vw] lg:text-[1.1vw] text-[#004BAD] "
                  key={eachItem.id}
                >
                  <Link to={`/form/${eachItem.formId}`}>{eachItem.name}</Link>
                </li>
              ))}
            </ul>
            <Link to={"./verification"}>
              <p className="text-[#0000B5] cursor-pointer text-[1.1vw] font-bold text-right  pr-[5%]">
                View More
              </p>
            </Link>
          </div>
          <div className="w-[49%] h-[20vw]  my-[1vw]  border-2  border-[#D2691E]">
            <div className="bg-[#AB183D]  w-full">
              {" "}
              <Link to={"./important"}>
                <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                  Important
                </p>
              </Link>
            </div>
            <ul className="p-[2vw]   pl-[10%] lg:pl-[2vw]">
              {AnswerKey.slice(0, 5).map((eachItem) => (
                <li
                  className="list-disc cursor-pointer text-[1.2vw] lg:text-[1.1vw] text-[#004BAD] "
                  key={eachItem.id}
                >
                  <Link to={`/form/${eachItem.formId}`}>{eachItem.name}</Link>
                </li>
              ))}
            </ul>
            <Link to={"./important"}>
              <p className="text-[#0000B5] cursor-pointer text-[1.1vw] font-bold text-right  pr-[5%]">
                View More
              </p>
            </Link>
          </div>
        </div>
        <div className="w-[32%] h-[42vw]  my-[1vw]    border-2  border-[#D2691E]">
          <div className="bg-[#AB183D]  w-full">
            {" "}
            <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold"></p>
            <Link to={"./admission"}>
              <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                Admission
              </p>
            </Link>
          </div>
          <ul className=" p-[2vw]  pl-[10%] lg:pl-[2vw]">
            {Admission.map((eachItem) => (
              <li
                className="list-disc cursor-pointer cursor-pointer text-[1.2vw] lg:text-[1.05vw] text-[#004BAD] "
                key={eachItem.id}
              >
                <Link to={`/form/${eachItem.formId}`}>{eachItem.name}</Link>
              </li>
            ))}
          </ul>

          <Link to={"./admission"}>
            <p className="text-[#0000B5] cursor-pointer text-[1.1vw] font-bold text-right  pr-[5%]">
              View More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Complete;
