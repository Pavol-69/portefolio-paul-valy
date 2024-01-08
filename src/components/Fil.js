// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/Fil.css";

// Autre
// Autre
import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Fil({
  tailleOrdi,
  tailleInt1,
  tailleInt2,
  tailleTel,
  refPres,
  refComp,
  refProj,
  refRec,
}) {
  const taillePst = 20;
  const tailleBrdPst = 5;
  const esp_pst_fil = 10;

  const refPstProj = useRef();
  const refPstRec = useRef();

  const refPst = useRef([]);
  refPst.current = [];
  const refFil = useRef([]);
  refFil.current = [];

  const [presHeight, setPresHeight] = useState(0);
  const [compHeight, setCompHeight] = useState(0);
  const [projHeight, setProjHeight] = useState(0);

  useEffect(() => {
    setPresHeight(refPres.current.clientHeight);
    setCompHeight(refComp.current.clientHeight);
    setProjHeight(refProj.current.clientHeight);

    refPst.current.forEach((el) => {
      gsap.fromTo(
        el,
        { right: 50, opacity: 0 },
        {
          opacity: 1,
          right: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    refFil.current.forEach((el) => {
      let hgtFilPresComp =
        refPres.current.clientHeight +
        (tailleTel ? 100 : 450) +
        30 -
        (tailleTel ? 100 + 382 / 2 : 200 + 500 / 2) -
        (taillePst + tailleBrdPst * 2 + esp_pst_fil * 2);
      let hgtFilCompProj =
        refComp.current.clientHeight -
        (taillePst + tailleBrdPst * 2 + esp_pst_fil * 2);
      let hgtFilProjRec =
        refProj.current.clientHeight -
        (taillePst + tailleBrdPst * 2 + esp_pst_fil * 2);
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          opacity: 1,
          height:
            el.id === "fil_pres_comp"
              ? hgtFilPresComp
              : el.id === "fil_comp_proj"
              ? hgtFilCompProj
              : el.id === "fil_proj_rec"
              ? hgtFilProjRec
              : 300,
          duration:
            el.id === "fil_pres_comp"
              ? hgtFilPresComp / 300
              : el.id === "fil_comp_proj"
              ? hgtFilCompProj / 300
              : el.id === "fil_proj_rec"
              ? hgtFilProjRec / 300
              : 2,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=250",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    function handleWindowResize() {
      setPresHeight(refPres.current.clientHeight);
      setCompHeight(refComp.current.clientHeight);
      setProjHeight(refProj.current.clientHeight);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const addtoRefsPst = (el) => {
    if (el && !refPst.current.includes(el)) {
      refPst.current.push(el);
    }
  };

  const addtoRefsFil = (el) => {
    if (el && !refFil.current.includes(el)) {
      refFil.current.push(el);
    }
  };

  return (
    <div id="fil">
      <div
        id="fil0"
        className="fil"
        style={{
          right: `${(taillePst + tailleBrdPst * 2) / 2 - 1}px`,
          height: `${
            (tailleTel ? 100 + 382 / 2 : 200 + 500 / 2) -
            120 -
            ((taillePst + tailleBrdPst * 2) / 2 + esp_pst_fil)
          }px`,
        }}
      ></div>
      <div
        id="pst_pres"
        className="pst elm_ct txt_clr2 glow_clr2"
        style={{
          top: `${
            (tailleTel ? 100 + 382 / 2 : 200 + 500 / 2) -
            (taillePst + tailleBrdPst * 2) / 2
          }px`,
          height: `${taillePst}px`,
          width: `${taillePst}px`,
          borderWidth: `${tailleBrdPst}px`,
        }}
      ></div>
      <div
        id="fil_pres_comp"
        ref={addtoRefsFil}
        className="fil bg_clr2 glow_clr2"
        style={{
          right: `${(taillePst + tailleBrdPst * 2) / 2 - 1}px`,
          top: `${
            (tailleTel ? 100 + 382 / 2 : 200 + 500 / 2) +
            (taillePst + tailleBrdPst * 2) / 2 +
            esp_pst_fil
          }px`,
        }}
      ></div>
      <div
        id="pst_comp"
        ref={addtoRefsPst}
        className="pst elm_ct txt_clr2 glow_clr2"
        style={{
          top: `${
            presHeight +
            (tailleTel ? 100 : 450) +
            30 -
            (taillePst + tailleBrdPst * 2) / 2
          }px`,
          height: `${taillePst}px`,
          width: `${taillePst}px`,
          borderWidth: `${tailleBrdPst}px`,
        }}
      ></div>

      <div
        id="pst_proj"
        ref={addtoRefsPst}
        className="pst elm_ct txt_clr2 glow_clr2"
        style={{
          top: `${
            presHeight +
            (tailleTel ? 100 : 450) +
            compHeight +
            30 -
            (taillePst + tailleBrdPst * 2) / 2
          }px`,
          height: `${taillePst}px`,
          width: `${taillePst}px`,
          borderWidth: `${tailleBrdPst}px`,
        }}
      ></div>
      <div
        id="fil_comp_proj"
        ref={addtoRefsFil}
        className="fil bg_clr2 glow_clr2"
        style={{
          right: `${(taillePst + tailleBrdPst * 2) / 2 - 1}px`,
          top: `${
            presHeight +
            (tailleTel ? 100 : 450) +
            30 +
            (taillePst + tailleBrdPst * 2) / 2 +
            esp_pst_fil
          }px`,
        }}
      ></div>
      <div
        id="pst_rec"
        ref={addtoRefsPst}
        className="pst elm_ct txt_clr2 glow_clr2"
        style={{
          top: `${
            presHeight +
            (tailleTel ? 100 : 450) +
            compHeight +
            projHeight +
            30 -
            (taillePst + tailleBrdPst * 2) / 2
          }px`,
          height: `${taillePst}px`,
          width: `${taillePst}px`,
          borderWidth: `${tailleBrdPst}px`,
        }}
      ></div>
      <div
        id="fil_proj_rec"
        ref={addtoRefsFil}
        className="fil bg_clr2 glow_clr2"
        style={{
          right: `${(taillePst + tailleBrdPst * 2) / 2 - 1}px`,
          top: `${
            presHeight +
            compHeight +
            (tailleTel ? 100 : 450) +
            30 +
            (taillePst + tailleBrdPst * 2) / 2 +
            esp_pst_fil
          }px`,
        }}
      ></div>
      <div
        id="filEnd"
        ref={addtoRefsFil}
        className="fil"
        style={{
          top: `${
            presHeight +
            compHeight +
            projHeight +
            (tailleTel ? 100 : 450) +
            30 +
            (taillePst + tailleBrdPst * 2) / 2 +
            esp_pst_fil
          }px`,
          right: `${(taillePst + tailleBrdPst * 2) / 2 - 1}px`,
        }}
      ></div>
    </div>
  );
}

export default Fil;
