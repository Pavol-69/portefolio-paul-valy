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
      ref={refPres}
      style={{
        opacity: toShowElm ? 1 : 0,
        marginTop: tailleTel ? "0px" : "150px",
        marginBottom: tailleTel ? "50px" : "50px",
      }}
    >
      <TitreSection tailleTel={tailleTel} title={"Présentation"} fndNr={true} />
      <div
        className={`section tst05 elm_ct ${tailleTel ? "colonne" : "ligne"}`}
        style={{ margin: tailleTel ? "0px" : "50px" }}
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
          className={`txt_pres txt_blc txt_1 elm_ct colonne ${
            toShow ? (toShowElm ? "txt_pres1_nrm" : "txt_pres1_rvs") : null
          }`}
          style={{ width: tailleTel ? "80vw" : "50vw" }}
        >
          <div>
            <p
              id="pres_case_ligne1"
              className={`txt_pres ${
                toShow ? (toShowElm ? "txt_pres2_nrm" : "txt_pres2_rvs") : null
              } tst05 txt_white`}
            >
              Bonjour, et bienvenue sur mon portefolio.
            </p>
            <p
              id="pres_case_ligne2"
              className={`txt_pres ${
                toShow ? (toShowElm ? "txt_pres3_nrm" : "txt_pres3_rvs") : null
              } tst05 txt_white`}
            >
              Je m'appelle <span className="txt_clr1">Paul Valy</span>, j'ai 32
              ans, et je suis à le recherche d'opportunités pour un poste de{" "}
              <span className="txt_clr1">Développeur Web</span>.
            </p>
            <p
              id="pres_case_ligne3"
              className={`txt_pres ${
                toShow ? (toShowElm ? "txt_pres4_nrm" : "txt_pres4_rvs") : null
              } tst05 txt_white`}
            >
              Après avoir acquis une expérience significative de 7 années en
              tant qu'
              <span className="txt_clr1">Ingénieur Mécanique</span> dans le
              secteur de l'automobile, j'ai décidé de me{" "}
              <span className="txt_clr1">reconvertir</span> dans le domaine du{" "}
              <span className="txt_clr1">développement web</span>, suite à une{" "}
              <span className="txt_clr1">formation en autodidacte</span>.
            </p>

            <p
              id="pres_case_ligne4"
              className={`txt_pres ${
                toShow ? (toShowElm ? "txt_pres5_nrm" : "txt_pres5_rvs") : null
              } tst05 txt_white`}
            >
              Tenant absolument à créer des{" "}
              <span className="txt_clr1">sites web 100% fonctionnel</span> pour
              me former, j'ai pu développer mes{" "}
              <span className="txt_clr1">capacités</span> autant en{" "}
              <span className="txt_clr1">FrontEnd</span> qu'en{" "}
              <span className="txt_clr1">BackEnd</span>.
            </p>
            <p
              id="pres_case_ligne5"
              className={`txt_pres ${
                toShow ? (toShowElm ? "txt_pres6_nrm" : "txt_pres6_rvs") : null
              } tst05 txt_white`}
            >
              Animé par une <span className="txt_clr1">passion</span> croissante
              pour ce nouveau domaine, je suis constamment en quête
              d'apprentissage et désire renforcer continuellement mes
              compétences. Ma <span className="txt_clr1">nature inventive</span>
              , ma <span className="txt_clr1">ténacité</span> et ma{" "}
              <span className="txt_clr1">curiosité</span> sont autant d'atouts
              qui me permettront de surmonter les défis rencontrés et de
              m'épanouir dans ce nouvel univers professionnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
