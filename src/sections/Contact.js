// Component
import TitreSection from "../components/TitreSection.js";

// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_sections/Contact.css";

// Autre
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact({ tailleOrdi, tailleInt1, tailleInt2, tailleTel, refCon }) {
  const [onIt, setOntIt] = useState(false);

  return (
    <div>
      <div ref={refCon} id="section_contact" className="">
        <TitreSection tailleTel={tailleTel} title={"Contact"} fndNr={true} />
        <div
          className={`ctc_case txt_blc elm_ct ${
            tailleTel ? "colonne txt_1_5" : "ligne txt_2"
          }`}
          style={{
            width: tailleTel ? "380px" : "600px",
            paddingTop: tailleTel ? "30px" : "0px",
            padding: tailleTel ? "0px" : "50px",
          }}
        >
          <div
            className="elm_ct colonne"
            style={{
              marginRight: tailleTel ? "0px" : "50px",
            }}
          >
            <div className="info_line elm_ct ligne">
              <div className="ctc_title">Nom : </div>
              <div className="ctc_info gras">Paul Valy</div>
            </div>
            <div className="info_line elm_ct ligne">
              <div className="ctc_title">Mail : </div>
              <div className="ctc_info gras"> paul.valy@gmail.com</div>
            </div>
            <div className="info_line elm_ct ligne">
              <div className="ctc_title">Téléphone : </div>
              <div className="ctc_info gras"> 06 85 77 40 50</div>
            </div>
          </div>
          <a
            className="case_icon crs_ptr elm_ct"
            onMouseEnter={() => setOntIt(true)}
            onMouseLeave={() => setOntIt(false)}
            href="https://github.com/Pavol-69"
            target="_blank"
            style={{ margin: tailleTel ? "30px" : "0px" }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                transform: "rotate(0deg)",
                color: onIt ? "var(--clr1)" : "var(--white)",
                transition: "0.5s",
                height: "100%",
                width: "100%",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
