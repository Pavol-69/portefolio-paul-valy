// Component
import TitreSection from "../components/TitreSection.js";

// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_sections/Contact.css";

// Autre
import React, { useState, useEffect } from "react";

function Contact({ tailleOrdi, tailleInt1, tailleInt2, tailleTel, refCon }) {
  return (
    <div>
      <div ref={refCon} id="section_contact" className="">
        <TitreSection tailleTel={tailleTel} title={"Contact"} fndNr={true} />
        <div style={{ height: "500px" }}></div>
      </div>
    </div>
  );
}

export default Contact;
