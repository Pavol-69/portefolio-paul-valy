// Components
import PastilleComp from "../components/PastilleComp";

// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_sections/Competences.css";

// Images
import React from "../datas/icones/React.svg";
import VSC from "../datas/icones/VSC.svg";
import PSQL from "../datas/icones/PSQL.svg";
import NodeJS from "../datas/icones/NodeJS.png";
import MongoDB from "../datas/icones/MongoDB.svg";
import JS from "../datas/icones/JS.svg";
import HTML from "../datas/icones/HTML.svg";
import Heroku from "../datas/icones/Heroku.svg";
import Git from "../datas/icones/Git.svg";
import Firebase from "../datas/icones/Firebase.svg";
import Express from "../datas/icones/Express.png";
import CSS from "../datas/icones/CSS.svg";

function Competences({
  tailleOrdi,
  tailleInt1,
  tailleInt2,
  tailleTel,
  refComp,
}) {
  return (
    <div ref={refComp} id="section_competences" className="bg_clr1 elm_ct">
      <div id="titre_comp" className="txt_2_5 gras txt_clr2 elm_ct">
        Compétences
      </div>
      <div id="all_comp" className="elm_ct">
        <div id="pck_front_end" className="pck_comp elm_ct ligne txt_clr2">
          <PastilleComp tailleTel={tailleTel} img={React} rad={false} />
          {tailleInt1 ? <div className="trait_H_D"></div> : null}
          {tailleInt1 && !tailleOrdi ? null : <div className="trait_V_B"></div>}
        </div>
        <div id="pck_back_end" className="pck_comp elm_ct ligne txt_clr2">
          <PastilleComp tailleTel={tailleTel} img={Express} rad={false} />
          <PastilleComp tailleTel={tailleTel} img={NodeJS} rad={false} />
          <PastilleComp tailleTel={tailleTel} img={PSQL} rad={false} />
          <PastilleComp tailleTel={tailleTel} img={MongoDB} rad={false} />
        </div>
        <div id="pck_lang" className="pck_comp elm_ct ligne txt_clr2">
          <PastilleComp tailleTel={tailleTel} img={JS} rad={true} />
          <PastilleComp tailleTel={tailleTel} img={HTML} rad={false} />
          <PastilleComp tailleTel={tailleTel} img={CSS} rad={false} />
          {tailleTel || (tailleInt2 && !tailleOrdi) ? (
            <div className="trait_V_H"></div>
          ) : null}
        </div>
        <div id="pck_tools" className="pck_comp elm_ct ligne txt_clr2">
          <PastilleComp tailleTel={tailleTel} img={Heroku} rad={true} />
          <PastilleComp tailleTel={tailleTel} img={Git} rad={false} />
          <PastilleComp tailleTel={tailleTel} img={Firebase} rad={false} />
          {tailleOrdi ? <div className="trait_H_G"></div> : null}
          <div className="trait_V_H"></div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
