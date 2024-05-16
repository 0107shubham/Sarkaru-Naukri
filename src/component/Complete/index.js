import React from "react";

const Complete = () => {
  const Result = [
    {
      id: 1,
      name: "SSC CPO SI 2023 Final Result with Marks",
      Status: "Announced",
    },
    {
      id: 2,
      name: "UPPCL Junior Engineer JE Civil Trainee 2019 Result",
      Status: "",
    },
    {
      id: 3,
      name: "UPPCL Junior Engineer JE Electrical Trainee 2019 Result",
      Status: "",
    },
    { id: 4, name: "NTA JNU Admission 2022 Result", Status: "" },
    { id: 5, name: "UPPSC Pre 2022 Result", Status: "" },
    {
      id: 6,
      name: "Bihar BSSC Urdu Anuwadak, Sahayak, Urdu Reporter Result 2022",
      Status: "",
    },
    {
      id: 7,
      name: "Bihar BSSC Urdu Anuwadak, Sahayak, Urdu Reporter Result 2022",
      Status: "",
    },
    {
      id: 8,
      name: "Bihar BSSC Urdu Anuwadak, Sahayak, Urdu Reporter Result 2022",
      Status: "",
    },
    {
      id: 9,
      name: "RBI Reserve Bank Office Attendant Result 2022",
      Status: "",
    },
    { id: 10, name: "Coast Guard AC SRD 02/2022 Result", Status: "Announced" },
    { id: 11, name: "NIELIT CCC September 2022 Result", Status: "" },
    { id: 12, name: "IBPS PO X Mains Result 2022", Status: "" },
    { id: 13, name: "MP PEB Group 5 Various Post Result 2022", Status: "" },
    { id: 14, name: "UPSSSC PET 2021 Additional Result 2022", Status: "" },
    { id: 15, name: "BPSC AE Civil 2017 Final Result 2022", Status: "" },
    { id: 16, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 17, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 18, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 19, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 20, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 21, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 22, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 23, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 24, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 25, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 26, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 27, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
    { id: 28, name: "UPSC Civil Services IAS 2021 Final Result", Status: "" },
  ];

  const AnswerKey = [
    { id: 1, name: "Bihar BSSTET 2023 Answer Key" },
    { id: 2, name: "UP TGT PGT 2024 Answer Key" },
    { id: 3, name: "MP PEB 2024 Answer Key" },
    { id: 4, name: "Rajasthan REET 2024 Answer Key" },
    { id: 5, name: "Maharashtra TET 2024 Answer Key" },
    { id: 6, name: "Kerala TET 2024 Answer Key" },
    { id: 7, name: "Gujarat TAT 2024 Answer Key" },
    { id: 8, name: "Tamil Nadu TET 2024 Answer Key" },
    { id: 9, name: "Telangana TET 2024 Answer Key" },
    { id: 10, name: "Karnataka TET 2024 Answer Key" },
  ];

  const Admission = [
    { id: 1, name: "UP Polytechnic JEECUP 2024 Correction / Edit Form" },
    { id: 2, name: "UP CPET 2024 Online Form" },
    { id: 3, name: "UP Board Improvement / Compartment Exam Online Form" },
    { id: 4, name: "UPSIFS Lucknow UG, PG, Phd Admissions Online Form 2024" },
    { id: 5, name: "UP Board Class 10th, 12th Scrutiny Online Form 2024" },
    { id: 6, name: "MUIT Lucknow, Noida Direct Admissions 2024" },
    {
      id: 7,
      name: "Rajju Bhaiya University PRSU CET Admissions Online Form 2024",
    },
    { id: 8, name: "Bihar 2 Year BED CET Online Form" },
    { id: 9, name: "Lucknow University Admissions Online Form 2024" },
    { id: 10, name: "IERT Admissions 2024 Online Form" },
    {
      id: 11,
      name: "UP Common Nursing Admission Test UP CNET Online Form 2024",
    },
  ];
  return (
    <div className="w-full my-[2vw] flex flex-col ">
      <div className="flex justify-between w-full ">
        <div className="w-[32%] h-[100vw] border-2  border-[#D2691E]">
          <div className="bg-[#AB183D]  w-full">
            {" "}
            <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
              Result
            </p>
          </div>
          <ul className="w-full  pl-[2.1vw] py-[2vw]">
            {Result.map((eachItem) => (
              <li
                className="list-disc cursor-pointer text-blue-800 font-medium text-[1.4vw] lg:text-[1.1vw]"
                key={eachItem.id}
              >
                {eachItem.name}{" "}
                {eachItem.Status === "" ? (
                  ""
                ) : (
                  <p className="text-black">{eachItem.Status}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[32%] h-[100vw] border-2  border-[#D2691E]">
          <div className="bg-[#AB183D]  w-full">
            {" "}
            <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
              Result
            </p>
          </div>
          <ul className="w-full  pl-[2.1vw] py-[2vw]">
            {Result.map((eachItem) => (
              <li
                className="list-disc cursor-pointer text-blue-800 font-medium text-[1.4vw] lg:text-[1.1vw]"
                key={eachItem.id}
              >
                {eachItem.name}{" "}
                {eachItem.Status === "" ? (
                  ""
                ) : (
                  <p className="text-black">{eachItem.Status}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[32%] h-[100vw] border-2  border-[#D2691E]">
          <div className="bg-[#AB183D]  w-full">
            {" "}
            <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
              Result
            </p>
          </div>
          <ul className="w-full  pl-[2.1vw] py-[2vw] ">
            {Result.map((eachItem) => (
              <li
                className="list-disc cursor-pointer text-blue-800 font-medium text-[1.4vw] lg:text-[1.1vw]"
                key={eachItem.id}
              >
                {eachItem.name}{" "}
                {eachItem.Status === "" ? (
                  ""
                ) : (
                  <p className="text-black">{eachItem.Status}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[66%]  flex justify-between flex-wrap">
          <div className="w-[49%] h-[20vw]  border-2 border-[#D2691E] my-[1vw]  ">
            <div className="bg-[#AB183D]  w-full">
              {" "}
              <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                Answer Key
              </p>
            </div>
            <ul className="p-[2vw]  pl-[4vw] lg:pl-[2vw]">
              {AnswerKey.slice(0, 5).map((eachItem) => (
                <li
                  className="list-disc cursor-pointer text-[1.2vw] lg:text-[1.1vw] text-[#004BAD] "
                  key={eachItem.id}
                >
                  {eachItem.name}
                </li>
              ))}
            </ul>
            <p className="text-[#0000B5] text-[1.1vw] font-bold text-right">
              View More
            </p>
          </div>
          <div className="w-[49%] h-[20vw]  border-2  my-[1vw]  border-[#D2691E]">
            <div className="bg-[#AB183D]  w-full">
              {" "}
              <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                Syllabus
              </p>
            </div>
            <ul className="p-[2vw]  pl-[4vw] lg:pl-[2vw]">
              {AnswerKey.slice(0, 5).map((eachItem) => (
                <li
                  className="list-disc cursor-pointer text-[1.2vw] lg:text-[1.1vw] text-[#004BAD] "
                  key={eachItem.id}
                >
                  {eachItem.name}
                </li>
              ))}
            </ul>
            <p className="text-[#0000B5] text-[1.1vw] font-bold text-right">
              View More
            </p>
          </div>
          <div className="w-[49%] h-[20vw]  my-[1vw]  border-2   border-[#D2691E]">
            <div className="bg-[#AB183D]  w-full">
              {" "}
              <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                Certificate Verification
              </p>
            </div>
            <ul className="p-[2vw] pl-[4vw] lg:pl-[2vw]">
              {AnswerKey.slice(0, 5).map((eachItem) => (
                <li
                  className="list-disc cursor-pointer text-[1.2vw] lg:text-[1.1vw] text-[#004BAD] "
                  key={eachItem.id}
                >
                  {eachItem.name}
                </li>
              ))}
            </ul>
            <p className="text-[#0000B5] text-[1.1vw] font-bold text-right">
              View More
            </p>
          </div>
          <div className="w-[49%] h-[20vw]  my-[1vw]  border-2  border-[#D2691E]">
            <div className="bg-[#AB183D]  w-full">
              {" "}
              <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
                Important
              </p>
            </div>
            <ul className="p-[2vw]  pl-[4vw] lg:pl-[2vw]">
              {AnswerKey.slice(0, 5).map((eachItem) => (
                <li
                  className="list-disc cursor-pointer text-[1.2vw] lg:text-[1.1vw] text-[#004BAD] "
                  key={eachItem.id}
                >
                  {eachItem.name}
                </li>
              ))}
            </ul>
            <p className="text-[#0000B5] text-[1.1vw] font-bold text-right">
              View More
            </p>
          </div>
        </div>
        <div className="w-[32%] h-[42vw]  my-[1vw]    border-2  border-[#D2691E]">
          <div className="bg-[#AB183D]  w-full">
            {" "}
            <p className="text-[2vw] lg:text-[1.5vw] text-center text-white font-semibold">
              Admission
            </p>
          </div>
          <ul className=" p-[2vw] pl-[4vw] lg:pl-[2vw]">
            {Admission.map((eachItem) => (
              <li
                className="list-disc cursor-pointer cursor-pointer text-[1.2vw] lg:text-[1.05vw] text-[#004BAD] "
                key={eachItem.id}
              >
                {eachItem.name}
              </li>
            ))}
          </ul>
          <p className="text-[#0000B5] cursor-pointer text-[1.1vw] font-bold text-right">
            View More
          </p>
        </div>
      </div>
    </div>
  );
};

export default Complete;
