// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/TuileProj.scss";

// Images
import logoReact from "../datas/icones/React.svg";
import logoVSC from "../datas/icones/VSC.svg";
import logoPSQL from "../datas/icones/PSQL.svg";
import logoNodeJS from "../datas/icones/NodeJS.png";
import logoMongoDB from "../datas/icones/MongoDB.svg";
import logoJS from "../datas/icones/JS.svg";
import logoHTML from "../datas/icones/HTML.svg";
import logoHeroku from "../datas/icones/Heroku.svg";
import logoGit from "../datas/icones/Git.svg";
import logoFirebase from "../datas/icones/Firebase.svg";
import logoExpress from "../datas/icones/Express.png";
import logoCSS from "../datas/icones/CSS.svg";
import logoVBA from "../datas/icones/VBA.jpg";
import logoCatia from "../datas/icones/Catia.png";
import logoOffice from "../datas/icones/Office.png";

// Autre
import React, { useState } from "react";

function TuileProj({
  tailleTel,
  img,
  name,
  mySet,
  useReact,
  usePSQL,
  useNodeJS,
  useMongoDB,
  useJS,
  useHTML,
  useHeroku,
  useGit,
  useFireBase,
  useExpress,
  useCSS,
  useVBA,
  useCatia,
  useOffice,
  setLeftSubMenu,
  refProj,
  index,
  site,
  git,
}) {
  const [isOver, setIsOver] = useState(false);
  const [anim, setAnim] = useState(false);

  const listenToScroll = () => {
    let heightToShow = refProj.current.offsetTop - 750;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShow) {
      setAnim(true);
    } else {
      setAnim(false);
    }
  };

  window.addEventListener("scroll", listenToScroll);

  return (
    <div
      className={`pst_proj bg_nrb txt_clr1 ${anim ? `anim${index}` : ""}`}
      style={{
        width: tailleTel ? "300px" : "450px",
      }}
      onMouseEnter={(e) => {
        setIsOver(true);
      }}
      onMouseLeave={(e) => {
        setIsOver(false);
      }}
    >
      <div
        className="pst_proj_img_ctn elm_ct"
        style={{
          width: tailleTel ? "300px" : "450px",
          height: tailleTel ? "200px" : "300px",
        }}
      >
        <img className="lmt_img" src={img} />
      </div>
      <div className="pst_proj_titre elm_ct txt_1_5 gras txt_blc bg_nrb">
        {name}
      </div>
      <div className="pst_proj_pqt_comp elm_ct bg_nrb">
        {useHTML ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoHTML} />
          </div>
        ) : null}
        {useCSS ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoCSS} />
          </div>
        ) : null}
        {useJS ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoJS} />
          </div>
        ) : null}
        {useReact ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoReact} />
          </div>
        ) : null}
        {useNodeJS ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoNodeJS} />
          </div>
        ) : null}
        {useExpress ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoExpress} />
          </div>
        ) : null}
        {usePSQL ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoPSQL} />
          </div>
        ) : null}
        {useMongoDB ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoMongoDB} />
          </div>
        ) : null}
        {useHeroku ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoHeroku} />
          </div>
        ) : null}
        {useFireBase ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoFirebase} />
          </div>
        ) : null}
        {useGit ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoGit} />
          </div>
        ) : null}
        {useVBA ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoVBA} />
          </div>
        ) : null}
        {useOffice ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoOffice} />
          </div>
        ) : null}
        {useCatia ? (
          <div className="pst_proj_comp">
            <img className="lmt_img" src={logoCatia} />
          </div>
        ) : null}
      </div>
      <div
        className="pst_comp_menu elm_ct colonne"
        style={{
          zIndex: isOver ? "1" : "-2",
          backdropFilter: isOver ? "blur(2px)" : "blur(0px)",
        }}
      >
        <div
          className="btn"
          onClick={(e) => {
            mySet(true);
            setLeftSubMenu("0px");
          }}
        >
          Détails
        </div>
        {site === "" ? null : (
          <a href={site} className="btn no_udl">
            Aller sur le site
          </a>
        )}
        {git === "" ? null : (
          <a href={git} className="btn no_udl">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default TuileProj;
