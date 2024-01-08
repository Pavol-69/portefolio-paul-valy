// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/Gif.css";

function Gif({ title, gif, tailleTel }) {
  return (
    <div className="case_gif elm_ct colonne">
      <div className="titre_gif elm_ct gras txt_1_5 txt_blc">{title}</div>
      <div
        className="ctn_gif"
        style={{
          width: tailleTel ? "390px" : "800px",
          height: tailleTel ? "195px" : "400px",
        }}
      >
        <img className="gif lmt_img" src={gif} />
      </div>
    </div>
  );
}

export default Gif;
