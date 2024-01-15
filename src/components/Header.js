// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/Header.scss";
import Burger from "../components/Burger";

// Documents
import CV from "../datas/documents/CV_Paul_Valy.pdf";

// Autre
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Header({
  tailleOrdi,
  tailleInt1,
  tailleInt2,
  tailleTel,
  refPres,
  refComp,
  refProj,
  refCon,
  toShow,
}) {
  const [bigMenu, setBigMenu] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (bigMenu) {
      setIsLoaded(true);
    }
  }, [bigMenu]);

  function myScroll(ref, rectif) {
    window.scrollTo({
      top: ref.current.offsetTop + rectif,
      behavior: "smooth",
    });
  }

  return (
    <header
      id="preload"
      className={`elm_ct non_slt gras ${
        isLoaded ? (bigMenu ? "hd_opn" : "hd_cls") : null
      }`}
      onBlur={(e) => setBigMenu(false)}
      style={{ height: isLoaded ? (tailleTel ? "330px" : "80px") : "80px" }}
      tabIndex="0"
    >
      <div id="hd_blur"></div>
      <div id="hd_color"></div>

      <a
        className="btn_dwl elm_ct txt_blc txt_1_5 crs_ptr gras no_udl"
        href={CV}
        download="CV Paul Valy"
      >
        CV
        <div id="case_icon_dwl" className="txt_blc">
          <FontAwesomeIcon id="icon_dwl" icon={faDownload} />
        </div>
      </a>

      <Burger
        tailleTel={tailleTel}
        bigMenu={bigMenu}
        setBigMenu={setBigMenu}
        isLoaded={isLoaded}
      />
      <div
        className="grp_btn elm_ct"
        style={{
          top: tailleTel ? "80px" : "0px",
          right: isLoaded ? "0px" : "-220px",
        }}
      >
        <div
          className={`${
            isLoaded ? (bigMenu ? "hidden" : "show") : null
          }1 btn_hd_tel btn_hd_tel_1`}
          onClick={(e) => {
            setBigMenu(false);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          style={{
            opacity: bigMenu ? 0 : 1,
            right: isLoaded ? "0px" : "-220px",
          }}
        >
          Accueil
        </div>

        <div
          className={`${
            isLoaded ? (bigMenu ? "hidden" : "show") : null
          }2 btn_hd_tel btn_hd_tel_2`}
          onClick={(e) => {
            setBigMenu(false);
            myScroll(refPres, -80);
          }}
          style={{
            opacity: bigMenu ? 0 : 1,
            right: isLoaded ? "0px" : "-220px",
          }}
        >
          Présentation
        </div>

        <div
          className={`${
            isLoaded ? (bigMenu ? "hidden" : "show") : null
          }3 btn_hd_tel btn_hd_tel_3`}
          onClick={(e) => {
            setBigMenu(false);
            myScroll(refProj, -80);
          }}
          style={{
            opacity: bigMenu ? 0 : 1,
            right: isLoaded ? "0px" : "-220px",
          }}
        >
          Projets
        </div>

        <div
          className={`${
            isLoaded ? (bigMenu ? "hidden" : "show") : null
          }4 btn_hd_tel btn_hd_tel_4`}
          onClick={(e) => {
            setBigMenu(false);
            myScroll(refComp, -80);
          }}
          style={{
            opacity: bigMenu ? 0 : 1,
            right: isLoaded ? "0px" : "-220px",
          }}
        >
          Compétences
        </div>

        <div
          className={`${
            isLoaded ? (bigMenu ? "hidden" : "show") : null
          }5 btn_hd_tel btn_hd_tel_5`}
          onClick={(e) => {
            setBigMenu(false);
            myScroll(refCon, -80);
          }}
          style={{
            opacity: bigMenu ? 0 : 1,
            right: isLoaded ? "0px" : "-220px",
          }}
        >
          Contact
        </div>
      </div>

      {tailleTel ? null : (
        <div>
          <div className="grp_btn elm_ct">
            <div
              className="btn_hd"
              onClick={(e) => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Accueil
            </div>

            <div
              className="btn_hd"
              onClick={(e) => {
                myScroll(refPres, -180);
              }}
            >
              Présentation
            </div>

            <div
              className="btn_hd"
              onClick={(e) => {
                myScroll(refProj, -80);
              }}
            >
              Projets
            </div>

            <div
              className="btn_hd"
              onClick={(e) => {
                myScroll(refComp, -80);
              }}
            >
              Compétences
            </div>

            <div
              className="btn_hd"
              onClick={(e) => {
                myScroll(refCon, -80);
              }}
            >
              Contact
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
