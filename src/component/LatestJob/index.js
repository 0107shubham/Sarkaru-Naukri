import React from "react";
import { Link } from "react-router-dom";

const latestJob = [
  {
    id: 1,
    formId: 1,
    name: "Railway RRB ALP Re Upload Photo / Signature 2024",
    last_date: "31/05/2024",
  },
  {
    id: 2,
    formId: 2,
    name: "NVS Non Teaching Various Post Correction / Edit Form 2024",
    last_date: "18/05/2024",
  },
  {
    id: 3,
    formId: 1,
    name: "UPSC CDS II Online Form 2024",
    last_date: "04/06/2024",
  },
  {
    id: 4,
    formId: 1,
    name: "UPSC NDA II Online Form 2024",
    last_date: "04/06/2024",
  },
  {
    id: 5,
    formId: 2,
    name: "Railway RPF Constable / Sub Inspector Correction / Edit Form 2024",
    last_date: "24/05/2024",
  },
  {
    id: 6,
    formId: 2,
    name: "Air Force Medical Assistant Group Y Online Form 2024",
    last_date: "05/06/2024",
  },
  {
    id: 7,
    formId: 1,
    name: "Bihar BGSYS Lekhpal IT Assistant Online Form 2024",
    last_date: "09/06/2024",
  },
  {
    id: 8,
    formId: 1,
    name: "India Post Payment Bank IT Executive Online Form 2024",
    last_date: "24/05/2024",
  },
  {
    id: 9,
    formId: 1,
    name: "NVS Non Teaching Various Post Online Form 2024",
    last_date: "14/05/2024",
  },
  {
    id: 10,
    formId: 2,
    name: "UPSSSC Junior Engineer JE Online Form 2024",
    last_date: "07/06/2024",
  },
  {
    id: 11,
    formId: 2,
    name: "Army 10+2 TES 52 Online Form 2024",
    last_date: "13/06/2024",
  },
  {
    id: 12,
    formId: 1,
    name: "UPSIFS Lucknow Teaching / Non Teaching Various Post Online Form 2024",
    last_date: "15/05/2024",
  },
  {
    id: 13,
    formId: 1,
    name: "Indian Navy Agniveer SSR / MR Online Form 02/2024 Batch",
    last_date: "27/05/2024",
  },
  {
    id: 14,
    formId: 2,
    name: "IIT Jodhpur Non Teaching Various Post Online Form 2024",
    last_date: "15/06/2024",
  },
  {
    id: 15,
    formId: 2,
    name: "NTA CSIR UGC NET Online Form 2024",
    last_date: "21/05/2024",
  },
  {
    id: 16,
    formId: 1,
    name: "UPSSSC Technical Assistant Group C Online Form 2024",
    last_date: "31/05/2024",
  },
  {
    id: 17,
    formId: 1,
    name: "BSEB Bihar Sakshamta Pariksha II Online Form 2024",
    last_date: "04/05/2024",
  },
  {
    id: 18,
    formId: 2,
    name: "Naval Dockyard Mumbai Apprentices Online Form 2024",
    last_date: "10/05/2024",
  },
  {
    id: 19,
    formId: 2,
    name: "UPSC CAPF Assistant Commandant Online Form 2024",
    last_date: "14/05/2024",
  },
  {
    id: 20,
    formId: 1,
    name: "UPSSSC Mandi Parishad Sachiv Online Form 2024",
    last_date: "24/05/2024",
  },
  {
    id: 21,
    formId: 2,
    name: "UPSSSC Junior Analyst Drugs Online Form 2024",
    last_date: "18/05/2024",
  },
];

const LatestJob = () => {
  return (
    <div className="w-full p-[5vw] lg:p-[1vw]">
      <ul className="w-full  pl-[10%]">
        {latestJob.map((items) => (
          <Link to={`/form/${items.formId}`}>
            <li className="text-blue-600 m-3 list-disc text-[2vw] lg:text-[1.5vw]">
              {items.name}{" "}
              <span className="text-black">
                {"  Last data: "}
                {items.last_date}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LatestJob;
