// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/TitreSection.css";

function TitreSection({ tailleTel, title, fndNr }) {
  return (
    <div
      className="titre_section elm_ct gras"
      style={{
        boxShadow: `0px 0px 10px ${fndNr ? "var(--clr1)" : "var(--black)"}`,
      }}
    >
      <div
        className="txt_titre_section"
        style={{ fontSize: tailleTel ? "0.7em" : "1em" }}
      >{`< ${title} />`}</div>
    </div>
  );
}

export default TitreSection;
