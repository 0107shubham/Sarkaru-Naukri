import React, { useState } from "react";
import { Link } from "react-router-dom";

const sampleData = [
  {
    id: 1,
    name: "UP Metro Various Post Answer Key 2024",
    formId: "1",
  },
  {
    id: 2,
    name: "Bihar BSSTET 2023 Answer Key",
    formId: "2",
  },
  {
    id: 3,
    name: "BPSC Agriculture Various Post OMR Sheet 2024",
    formId: "1",
  },
  {
    id: 4,
    name: "NTA JEEMAIN April 2024 Answer Key",
    formId: "2",
  },
  {
    id: 5,
    name: "NTA CUET PG 2024 Answer Key",
    formId: "1",
  },
  {
    id: 6,
    name: "DSSSB March 2024 Exam Answer Key",
    formId: "2",
  },
  {
    id: 7,
    name: "SSC GD Constable Answer Key 2024",
    formId: "1",
  },
  {
    id: 8,
    name: "RSMSSB Computer Sangnak 2023 Answer Key",
    formId: "2",
  },
  {
    id: 9,
    name: "UPSSSC Instructor 2022 Answer Key",
    formId: "1",
  },
  {
    id: 10,
    name: "Bihar BSEB Sakshamta Exam Answer Key 2024",
    formId: "2",
  },
  {
    id: 11,
    name: "SSC GD Constable 2023 Answer Key",
    formId: "1",
  },
  {
    id: 12,
    name: "Indian Navy INCET 01/2023 Answer Key",
    formId: "2",
  },
  {
    id: 13,
    name: "BPSC Agriculture Various Post Answer Key 2024",
    formId: "1",
  },
  {
    id: 14,
    name: "UP Police Assistant Operator 2022 Answer Key",
    formId: "2",
  },
  {
    id: 15,
    name: "UP Police Head Operator 2022 Answer Key",
    formId: "1",
  },
  {
    id: 16,
    name: "UP Police Workshop Staff 2022 Answer Key",
    formId: "2",
  },
  {
    id: 17,
    name: "DSSSB February 2024 Exam Answer Key",
    formId: "1",
  },
  {
    id: 18,
    name: "CSIR CASE SO / ASO Answer Key 2024",
    formId: "2",
  },
  {
    id: 19,
    name: "NTA CUREC IGNOU Non Teaching Answer Key 2024",
    formId: "1",
  },
  {
    id: 20,
    name: "IIT GATE 2024 Answer Key",
    formId: "2",
  },
  {
    id: 21,
    name: "IIT GATE 2024 Test Paper Responses",
    formId: "1",
  },
  {
    id: 22,
    name: "CGPSC Pre 2023 Answer Key",
    formId: "2",
  },
  {
    id: 23,
    name: "UPSSSC Mukhya Sevika 2022 Revised Answer Key",
    formId: "1",
  },
  {
    id: 24,
    name: "CTET January 2024 Answer Key",
    formId: "2",
  },
  {
    id: 25,
    name: "NTA JEEMAIN January 2024 Answer Key",
    formId: "1",
  },
  {
    id: 26,
    name: "UPSSSC PET 2023 Revised Answer Key",
    formId: "2",
  },
  {
    id: 27,
    name: "MHA IB ACIO Answer Key 2024",
    formId: "1",
  },
  {
    id: 28,
    name: "NTA MNS Answer Key 2024",
    formId: "2",
  },
  {
    id: 29,
    name: "SSC CHSL 2023 Tier II Answer Key",
    formId: "1",
  },
  {
    id: 30,
    name: "SSC CPO SI 2023 Paper II Answer Key",
    formId: "2",
  },
  {
    id: 31,
    name: "NTA CSIR UGC NET December 2023 Answer Key",
    formId: "1",
  },
  {
    id: 32,
    name: "NIC Scientific and Technical Post Answer Key 2023",
    formId: "2",
  },
  {
    id: 33,
    name: "EMRS Teaching / Non Teaching Post Answer Key 2024",
    formId: "1",
  },
  {
    id: 34,
    name: "EMRS TGT / Hostel Warden Answer Key 2024",
    formId: "2",
  },
  {
    id: 35,
    name: "NTA UGC NET Answer Key December 2023",
    formId: "1",
  },
  {
    id: 36,
    name: "AAI Junior Executive Answer Key 2023",
    formId: "2",
  },
  {
    id: 37,
    name: "MHA IB SA / MT and MTS Answer Key 2023",
    formId: "1",
  },
  {
    id: 38,
    name: "SSC MTS 2023 Final Answer Key",
    formId: "2",
  },
  {
    id: 39,
    name: "UPPSC Staff Nurse Answer Key 2023",
    formId: "1",
  },
  {
    id: 40,
    name: "Delhi High Court Judicial Services Pre Answer Key 2023",
    formId: "2",
  },
  {
    id: 41,
    name: "MPPSC Pre 2023 Answer Key",
    formId: "1",
  },
  {
    id: 42,
    name: "ISRO JPA, Assistant, JDC, Steno Answer Key 2023",
    formId: "2",
  },
  {
    id: 43,
    name: "BPSC 68th Mains Unevaluated Answer Books",
    formId: "1",
  },
  {
    id: 44,
    name: "BPSC School Teacher TRE 2.0 Question Booklet, Answer Key 2023",
    formId: "2",
  },
  {
    id: 45,
    name: "SSC Junior Engineer Paper II Answer Key 2023",
    formId: "1",
  },
  {
    id: 46,
    name: "SSC Delhi Police Constable Answer Key 2023",
    formId: "2",
  },
  {
    id: 47,
    name: "JSSC PGT Teacher Response Sheet 2023",
    formId: "1",
  },
  {
    id: 48,
    name: "Haryana TET HTET Answer Key 2023",
    formId: "2",
  },
  {
    id: 49,
    name: "BPSC 67th Mains Answer Booklets",
    formId: "1",
  },
  {
    id: 50,
    name: "UPPCL Technician Electrical TG II Answer Key 2023",
    formId: "2",
  },
  {
    id: 51,
    name: "UP National Income Merit Based Scholarship NMMS Answer Key 2023",
    formId: "1",
  },
  {
    id: 52,
    name: "UPSSSC Junior Assistant 2022 Revised Answer Key",
    formId: "2",
  },
  {
    id: 53,
    name: "NTA Phd Entrance Test Answer Key 2023",
    formId: "1",
  },
  {
    id: 54,
    name: "RPSC JLO Answer Key 2023",
    formId: "2",
  },
  {
    id: 55,
    name: "UPSSSC PET 2023 Answer Key",
    formId: "1",
  },
  {
    id: 56,
    name: "CISF HC Ministerial, ASI Steno Answer Key 2023",
    formId: "2",
  },
  {
    id: 57,
    name: "CISF Constable Tradesman 2022 Answer Key",
    formId: "1",
  },
  {
    id: 58,
    name: "CISF Constable Driver 2022 Answer Key",
    formId: "2",
  },
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(sampleData);

  const handleSearch = () => {
    const filtered = sampleData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="w-full">
      <div className="w-full text-right mt-[5vw]">
        <p className="text-[#AB183D] text-[3vw] font-medium mr-[10%]">
          SARKARI RESULT
        </p>
        <div className="w-full pr-[10%]">
          <input
            className="w-[60%] border-2 min-h-7 h-[3vw] border-black"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-[1.5vw] py-[.8vw] rounded-lg mx-2"
            onClick={handleSearch}
          >
            Search job
          </button>
          <p className="text-[2vw] font-medium my-[1vw] ">Popular Searches</p>
          <ul className="flex justify-end  list-decimal text-blue-800 font-medium text-[3vw] lg:text-[2vw]">
            <li className="mx-[3%] "> SSC </li>
            <li className="mx-[3%]"> UPSC </li>
            <li className="mx-[3%]"> Police</li>
          </ul>
        </div>
      </div>
      <ul className="w-full mt-5 flex flex-col ml-[20%]">
        {query &&
          filteredData.map((item) => (
            <li className="text-blue-600 m-3 list-disc text-[2vw] lg:text-[1.5vw]">
              <Link to={`/form/${item.formId}`}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
