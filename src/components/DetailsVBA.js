// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/Details.css";

function DetailsVBA({ setDetVBA, setLeftSubMenu, tailleTel }) {
  return (
    <div
      className="brd_det elm_ct colonne"
      style={{ width: tailleTel ? "350px" : "800px" }}
    >
      <div
        className="btn"
        onClick={(e) => {
          setDetVBA(false);
          setLeftSubMenu("100vw");
        }}
      >
        Retour
      </div>
    </div>
  );
}

export default DetailsVBA;
