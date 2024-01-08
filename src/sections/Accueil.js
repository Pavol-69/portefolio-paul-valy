// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_sections/Accueil.css";

// Images
import myFond from "../datas/images/fond_accueil4.jpg";

// Autre
import React, { useState, useEffect } from "react";

function Accueil({ tailleOrdi, tailleInt1, tailleInt2, tailleTel }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  useEffect(() => {
    keyboard();
  }, []);

  async function keyboard() {
    const txt = ["Paul Valy", "Développeur Web Junior"];
    for (let j = 0; j < txt.length; j++) {
      let tempo = "";
      for (let i = 0; i < txt[j].length; i++) {
        await wait(100);
        tempo = tempo + txt[j][i];
        if (j === 0) {
          setName(tempo);
        } else {
          setJob(tempo);
        }
      }
    }
  }

  // Fonction pour attendre
  async function wait(t) {
    await delay(t);
  }
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div id="section_accueil" className="elm_ct">
      <div id="img_pres_ctn" className="elm_ct">
        <img id="img_pres" src={myFond} />
      </div>
      <div id="tuile_accueil" className="elm_ct colonne">
        <p className="txt_accueil txt_3_5 gras">{name}</p>
        <p className="txt_accueil gras" style={{ fontSize: "2em" }}>
          {job}
        </p>
      </div>
      <div id="acceuil_trans"></div>
    </div>
  );
}

export default Accueil;
