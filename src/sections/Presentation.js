// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_sections/Presentation.scss";

// Images
import myPic from "../datas/images/photo_profil2.jpg";

// Component
import TitreSection from "../components/TitreSection.js";

// Autre
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Presentation({
  tailleOrdi,
  tailleInt1,
  tailleInt2,
  tailleTel,
  refPres,
}) {
  const [toShow, setToShow] = useState(false);
  const [toShowElm, setToShowElm] = useState(false);

  const listenToScroll = () => {
    let heightToShow = refPres.current.offsetTop - 900;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShow) {
      setToShow(true);
      setToShowElm(true);
    } else {
      setToShowElm(false);
    }
  };

  window.addEventListener("scroll", listenToScroll);

  return (
    <div
      id="section_pres"
      className="bg_nr"
      ref={refPres}
      style={{
        height: tailleTel ? null : "500px",
        opacity: toShowElm ? 1 : 0,
      }}
    >
      <TitreSection tailleTel={tailleTel} title={"Présentation"} fndNr={true} />
      <div
        className={`bg_nr section tst05 elm_ct ${
          tailleTel ? "colonne" : "ligne"
        }`}
      >
        <div id="pres_case_img" className="elm_ct">
          <div
            id="img_ctn"
            className={`elm_ct tst05 ${
              toShow ? (toShowElm ? "img_ctn_nrm" : "img_ctn_rvs") : null
            }`}
            style={{
              height: tailleTel ? "300px" : "35vw",
              width: tailleTel ? "300px" : "35vw",
              margin: tailleTel ? "60px" : "40px",
            }}
          >
            <img className="lmt_img" src={myPic} />
          </div>
        </div>
        <div
          id="pres_case_dsc"
          className="txt_blc txt_1 elm_ct colonne bg_nrb"
          style={{ width: tailleTel ? "80vw" : "50vw" }}
        >
          <div>
            <p
              id="pres_case_ligne1"
              className={`txt_pres ${
                toShow ? (toShowElm ? "txt_pres1_nrm" : "txt_pres1_rvs") : null
              } tst05 txt_white`}
            >
              Bonjour, et bienvenue sur mon portefolio.
            </p>
            <p
              id="pres_case_ligne2"
              className={`txt_pres ${
                toShow ? (toShowElm ? "txt_pres2_nrm" : "txt_pres2_rvs") : null
              } tst05 txt_white`}
            >
              Après avoir acquis une expérience significative de 7 années en
              tant qu'Ingénieur Mécanique dans le secteur de l'automobile, j'ai
              décidé de me reconvertir dans le domaine du développement web,
              suite à une formation en autodidacte.
            </p>
            <p
              id="pres_case_ligne3"
              className={`txt_pres ${
                toShow ? (toShowElm ? "txt_pres3_nrm" : "txt_pres3_rvs") : null
              } tst05 txt_white`}
            >
              Animé par une passion croissante pour ce nouveau domaine, je suis
              constamment en quête d'apprentissage et désire renforcer
              continuellement mes compétences. Ma nature inventive, ma ténacité
              et ma curiosité sont autant d'atouts qui me permettront de
              surmonter les défis rencontrés et de m'épanouir dans ce nouvel
              univers professionnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
