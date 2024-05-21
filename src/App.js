import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";

import Navigation from "./component/Navigation";
import FormData from "./component/FormData";
import Result from "./component/Result";
import AdmitCard from "./component/AdmitCard";
import AnswerKey from "./component/AnswerKey";
import Syllabus from "./component/Syllabus";
import LatestJob from "./component/LatestJob";
import Search from "./component/Search";
import Verification from "./component/Verification";
import Admission from "./component/Admission";
import Important from "./component/Important";
import Contact from "./component/Contact";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/result",
      element: (
        <>
          <Navigation />
          <Result />
        </>
      ),
    },
    {
      path: "/admitcard",
      element: (
        <>
          <Navigation />
          <AdmitCard />
        </>
      ),
    },
    {
      path: "/answerkey",
      element: (
        <>
          <Navigation />
          <AnswerKey />
        </>
      ),
    },
    {
      path: "/syllabus",
      element: (
        <>
          <Navigation />
          <Syllabus />
        </>
      ),
    },
    {
      path: "/latestjob",
      element: (
        <>
          <Navigation />
          <LatestJob />
        </>
      ),
    },
    {
      path: "/form/:formId",
      element: (
        <>
          <Navigation />
          <FormData />
        </>
      ),
    },
    {
      path: "search",
      element: (
        <>
          <Navigation />
          <Search />
        </>
      ),
    },

    {
      path: "/verification",
      element: (
        <>
          <Navigation />
          <Verification />
        </>
      ),
    },

    {
      path: "/important",
      element: (
        <>
          <Navigation />
          <Important />
        </>
      ),
    },

    {
      path: "/admission",
      element: (
        <>
          <Navigation />
          <Admission />
        </>
      ),
    },

    {
      path: "/contact",
      element: (
        <>
          <Contact />
        </>
      ),
    },

    // {
    //   path: "contacts/:contactId",
    //   element: <Contact />,
    // },
  ]);
  return (
    <div className=" lg:px-[17.5%]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
