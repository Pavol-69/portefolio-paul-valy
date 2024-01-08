// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/PastilleComp.scss";

// Autre
import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const dash = 376;

const MyCircle = styled.circle`
  transform: translate(8px, 8px);
  stroke-dasharray: ${dash};
  stroke-dashoffset: ${dash};
  fill: none;
  stroke: var(--clr1);
  stroke-width: 16px;
  ${(props) => (props.$toAnim ? `animation: ` : null)}${(props) =>
    anim(props.y, props.$tel)} 2s forwards;
`;

const TraitMob = styled.div`
  position: absolute;
  bottom: -4px;
  left: 50%;
  height: 20px;
  width: 1px;
  background-color: white;
  transform-origin: 0% ${(props) => (props.$tel ? "-52px" : "-52px")};
  ${(props) => (props.$toAnim ? `animation: ` : null)}${(props) =>
    animTrait(props.y)} 2s forwards;
`;

const CtnValPrc = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  ${(props) => (props.$toAnim ? `animation: ` : null)}${(props) =>
    animTrait(props.y)} 2s forwards;
`;

const ValPrc = styled.div`
  position: absolute;
  bottom: -35px;
  color: white;
  ${(props) => (props.$toAnim ? `animation: ` : null)}${(props) =>
    animVal(props.y)} 2s forwards;
`;

const anim = (y, tel) => keyframes`
  0% {
    stroke-dashoffset: ${dash};
  }

  100% {
    stroke-dashoffset: ${-((y * dash) / 100 - dash)};
  }
`;

const animTrait = (y, tel) => keyframes`
  0% {
    transform:rotate(0deg)
  }

  100% {
    transform:rotate(${(y * 360) / 100}deg)
  }
`;

const animVal = (y, tel) => keyframes`
  0% {
    transform:rotate(0deg)
  }

  100% {
    transform:rotate(-${(y * 360) / 100}deg)
  }
`;

function PastilleComp({ tailleTel, img, rad, prc, alt, refComp, dec }) {
  const [curPrc, setCurPrc] = useState(0);
  const [toShow, setToShow] = useState(false);
  const [toShowElm, setToShowElm] = useState(false);

  const listenToScroll = () => {
    let heightToShow = refComp.current.offsetTop - dec;
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

  useEffect(() => {
    if (toShowElm) {
      clcPrc();
    } else {
      setCurPrc(0);
    }
  }, [toShowElm]);

  async function clcPrc() {
    let i = 0;
    let t = 1500 / prc;
    do {
      setCurPrc(i);
      await wait(t);
      i = i + 1;
    } while (i <= prc);
  }

  // Fonction pour attendre
  async function wait(t) {
    await delay(t);
  }
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  /*className={`cercle cercle${prc}`}*/
  return (
    <div className="glb_pst elm_ct" style={{ position: "relative" }}>
      <div className={tailleTel ? "jauge_tel" : "jauge_tel"}>
        <svg>
          <circle className="cercle_fond" cx="60px" cy="60px" r="60px"></circle>
          <MyCircle
            $tel={tailleTel}
            $toAnim={toShow ? (toShowElm ? true : false) : false}
            y={prc}
            as="circle"
            cx="60px"
            cy="60px"
            r="60px"
          ></MyCircle>
        </svg>
        <div className="trait_jauge"></div>
        <TraitMob
          $tel={tailleTel}
          $toAnim={toShow ? (toShowElm ? true : false) : false}
          y={prc}
          as="div"
        ></TraitMob>
        <CtnValPrc
          $tel={tailleTel}
          $toAnim={toShow ? (toShowElm ? true : false) : false}
          y={prc}
          className="elm_ct"
        >
          <ValPrc
            $tel={tailleTel}
            $toAnim={toShow ? (toShowElm ? true : false) : false}
            y={prc}
          >{`${curPrc}%`}</ValPrc>
        </CtnValPrc>
      </div>
      <div className={`pastille_competences elm_ct bg_nrb glow_nr`}>
        <div
          className="lmt_pastille_competences elm_ct"
          style={{
            borderRadius: rad ? "10px" : null,
            overflow: rad ? "hidden" : null,
          }}
        >
          <img className="img_pastille_competences lmt_img" src={img} />
        </div>
      </div>
    </div>
  );
}

export default PastilleComp;
