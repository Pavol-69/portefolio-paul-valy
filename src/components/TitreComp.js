// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/TitreComp.css";

function TitreComp({ title }) {
  return (
    <div className="pqt_title elm_ct">
      <div className="frst_band"></div>
      <div className="title gras txt_1_5">{title}</div>
      <div className="scnd_band"></div>
    </div>
  );
}

export default TitreComp;
