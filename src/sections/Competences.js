// Components
import PastilleComp from "../components/PastilleComp";
import TitreComp from "../components/TitreComp";
import TitreSection from "../components/TitreSection.js";

// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_sections/Competences.css";

// Images
import CV from "../datas/images/CV.png";
import Amp from "../datas/images/ampoule.jpg";
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
    <div ref={refComp} id="section_competences" className={"elm_ct colonne"}>
      <TitreSection tailleTel={tailleTel} title={"Compétences"} fndNr={true} />
      <div id="all_comp" className="elm_ct colonne">
        <div id="pck_front_end" className="elm_ct colonne">
          <TitreComp title={"FrontEnd"} />
          <div className="pck_comp elm_ct ligne">
            <PastilleComp
              tailleTel={tailleTel}
              img={React}
              rad={false}
              prc={80}
              refComp={refComp}
              dec={700}
            />
          </div>
        </div>
        <div id="pck_back_end" className="elm_ct colonne">
          <TitreComp title={"BackEnd"} />
          <div className="pck_comp elm_ct ligne">
            <PastilleComp
              tailleTel={tailleTel}
              img={Express}
              rad={false}
              prc={70}
              refComp={refComp}
              dec={500}
            />
            <PastilleComp
              tailleTel={tailleTel}
              img={NodeJS}
              rad={false}
              prc={70}
              refComp={refComp}
              dec={500}
            />
            <PastilleComp
              tailleTel={tailleTel}
              img={PSQL}
              rad={false}
              prc={70}
              refComp={refComp}
              dec={500}
            />
            <PastilleComp
              tailleTel={tailleTel}
              img={MongoDB}
              rad={false}
              prc={90}
              refComp={refComp}
              dec={500}
            />
          </div>
        </div>
        <div id="pck_lang" className="elm_ct colonne">
          <TitreComp title={"Langages"} />
          <div className="pck_comp elm_ct ligne">
            <PastilleComp
              tailleTel={tailleTel}
              img={JS}
              rad={true}
              prc={95}
              refComp={refComp}
              dec={300}
            />
            <PastilleComp
              tailleTel={tailleTel}
              img={HTML}
              rad={false}
              prc={95}
              refComp={refComp}
              dec={300}
            />
            <PastilleComp
              tailleTel={tailleTel}
              img={CSS}
              rad={false}
              prc={95}
              refComp={refComp}
              dec={300}
            />
          </div>
        </div>
        <div id="pck_tools" className="elm_ct colonne">
          <TitreComp title={"Outils"} />
          <div className="pck_comp elm_ct ligne">
            <PastilleComp
              tailleTel={tailleTel}
              img={Heroku}
              rad={true}
              prc={60}
              refComp={refComp}
              dec={100}
            />
            <PastilleComp
              tailleTel={tailleTel}
              img={Git}
              rad={false}
              prc={60}
              refComp={refComp}
              dec={100}
            />
            <PastilleComp
              tailleTel={tailleTel}
              img={Firebase}
              rad={false}
              prc={60}
              refComp={refComp}
              dec={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;

/*
        <PastilleComp
          tailleTel={tailleTel}
          img={JS}
          rad={true}
          prc={95}
          refComp={refComp}
        />
        <PastilleComp
          tailleTel={tailleTel}
          img={HTML}
          rad={false}
          prc={95}
          refComp={refComp}
        />
        <PastilleComp
          tailleTel={tailleTel}
          img={CSS}
          rad={false}
          prc={95}
          refComp={refComp}
        />
        <PastilleComp
          tailleTel={tailleTel}
          img={Heroku}
          rad={true}
          prc={60}
          refComp={refComp}
        />
        <PastilleComp
          tailleTel={tailleTel}
          img={Git}
          rad={false}
          prc={60}
          refComp={refComp}
        />
        <PastilleComp
          tailleTel={tailleTel}
          img={Firebase}
          rad={false}
          prc={60}
          refComp={refComp}
        />*/
