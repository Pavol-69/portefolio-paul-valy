// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// CSS
import "./App.css";

// Sections
import Accueil from "./sections/Accueil";
import Presentation from "./sections/Presentation";
import Competences from "./sections/Competences";
import Projets from "./sections/Projets";
import Contact from "./sections/Contact";

// Autre
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const tailleOrdi = useMediaQuery({ query: "(min-width: 1138px)" });
  const tailleInt1 = useMediaQuery({
    query: "(min-width: 983px)",
  });
  const tailleInt2 = useMediaQuery({
    query: "(min-width: 816px)",
  });
  const tailleTel = useMediaQuery({ query: "(max-width: 816px)" });
  const [toShow, setToShow] = useState(false);

  const refPres = useRef();
  const refComp = useRef();
  const refProj = useRef();
  const refCon = useRef();

  /*setTimeout(function () {
    document.body.className = "";
  }, 700);*/

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll >= 200) {
      setToShow(true);
    } else {
      setToShow(false);
    }
  };

  window.addEventListener("scroll", listenToScroll);

  return (
    <div className="fond">
      <Header
        tailleOrdi={tailleOrdi}
        tailleInt1={tailleInt1}
        tailleInt2={tailleInt2}
        tailleTel={tailleTel}
        refPres={refPres}
        refComp={refComp}
        refProj={refProj}
        refCon={refCon}
        toShow={toShow}
      />
      <div className="elm_ct colonne">
        <Accueil
          tailleOrdi={tailleOrdi}
          tailleInt1={tailleInt1}
          tailleInt2={tailleInt2}
          tailleTel={tailleTel}
        />

        <Presentation
          tailleOrdi={tailleOrdi}
          tailleInt1={tailleInt1}
          tailleInt2={tailleInt2}
          tailleTel={tailleTel}
          refPres={refPres}
        />

        <Projets
          tailleOrdi={tailleOrdi}
          tailleInt1={tailleInt1}
          tailleInt2={tailleInt2}
          tailleTel={tailleTel}
          refProj={refProj}
        />

        <Competences
          tailleOrdi={tailleOrdi}
          tailleInt1={tailleInt1}
          tailleInt2={tailleInt2}
          tailleTel={tailleTel}
          refComp={refComp}
        />

        <Contact
          tailleOrdi={tailleOrdi}
          tailleInt1={tailleInt1}
          tailleInt2={tailleInt2}
          tailleTel={tailleTel}
          refCon={refCon}
        />
      </div>

      {tailleTel || !toShow ? null : (
        <div
          id="go0"
          onClick={(e) => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="txt_2_5 gras elm_ct"
        >
          <div className="blck_arr"></div>
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
