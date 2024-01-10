// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/Details.css";

function DetailsPrtFol({ setDetPrtFol, setLeftSubMenu, tailleTel }) {
  return (
    <div
      className="brd_det elm_ct colonne"
      style={{ width: tailleTel ? "350px" : "800px" }}
    >
      <div className="titre_det">Description</div>
      <div className="desc">
        <p>Site Portefolio sur lequel vous êtes actuellement</p>
      </div>
      <div
        className="btn"
        onClick={(e) => {
          setDetPrtFol(false);
          setLeftSubMenu("100vw");
        }}
      >
        Retour
      </div>
    </div>
  );
}

export default DetailsPrtFol;
