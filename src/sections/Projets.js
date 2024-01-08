// Components
import TuileProj from "../components/TuileProj";
import TitreSection from "../components/TitreSection.js";
import DetailsRctSab from "../components/DetailsRctSab";
import DetailsPrtFol from "../components/DetailsPrtFol";
import DetailsPavMag from "../components/DetailsPavMag";

// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_sections/Projets.css";

// Images
import rctSab from "../datas/images/les_recettes_de_sabine.png";
import pavMag from "../datas/images/pavol_s_magic.png";
import prtFol from "../datas/images/portefolio.png";

// Autre
import React, { useState, useEffect } from "react";

function Competences({
  tailleOrdi,
  tailleInt1,
  tailleInt2,
  tailleTel,
  refProj,
}) {
  const [detRctSab, setDetRctSab] = useState(false);
  const [detPavMag, setDetPavMag] = useState(false);
  const [detPrtFol, setDetPrtFol] = useState(false);
  const [leftSubMenu, setLeftSubMenu] = useState("100vw");

  return (
    <div>
      <div ref={refProj} id="section_projets" className="elm_ct bg_nr">
        <TitreSection tailleTel={tailleTel} title={"Projets"} fndNr={true} />
        <div id="all_proj" className="elm_ct">
          <TuileProj
            tailleTel={tailleTel}
            img={rctSab}
            name={"Les Recettes de Sabine"}
            useReact={true}
            usePSQL={true}
            useNodeJS={true}
            useMongoDB={false}
            useJS={true}
            useHTML={true}
            useHeroku={true}
            useGit={true}
            useFireBase={false}
            useExpress={true}
            useCSS={true}
            mySet={setDetRctSab}
            setLeftSubMenu={setLeftSubMenu}
            refProj={refProj}
            index={1}
          />
          <TuileProj
            tailleTel={tailleTel}
            img={pavMag}
            name={"Pavol's Magic"}
            useReact={true}
            usePSQL={false}
            useNodeJS={true}
            useMongoDB={true}
            useJS={true}
            useHTML={true}
            useHeroku={true}
            useGit={true}
            useFireBase={false}
            useExpress={true}
            useCSS={true}
            mySet={setDetPavMag}
            setLeftSubMenu={setLeftSubMenu}
            refProj={refProj}
            index={2}
          />
          <TuileProj
            tailleTel={tailleTel}
            img={prtFol}
            name={"Portefolio Paul Valy"}
            useReact={true}
            usePSQL={false}
            useNodeJS={false}
            useMongoDB={false}
            useJS={true}
            useHTML={true}
            useHeroku={false}
            useGit={true}
            useFireBase={true}
            useExpress={false}
            useCSS={true}
            mySet={setDetPrtFol}
            setLeftSubMenu={setLeftSubMenu}
            refProj={refProj}
            index={3}
          />
        </div>
      </div>
      <div
        className="side_board elm_ct"
        style={{ left: leftSubMenu, flexWrap: "wrap" }}
      >
        {detRctSab ? (
          <DetailsRctSab
            setDetRctSab={setDetRctSab}
            setLeftSubMenu={setLeftSubMenu}
            tailleTel={tailleTel}
            tailleOrdi={tailleOrdi}
          />
        ) : null}
        {detPavMag ? (
          <DetailsPavMag
            setDetPavMag={setDetPavMag}
            setLeftSubMenu={setLeftSubMenu}
            tailleTel={tailleTel}
            tailleOrdi={tailleOrdi}
          />
        ) : null}
        {detPrtFol ? (
          <DetailsPrtFol
            setDetPrtFol={setDetPrtFol}
            setLeftSubMenu={setLeftSubMenu}
            tailleTel={tailleTel}
            tailleOrdi={tailleOrdi}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Competences;