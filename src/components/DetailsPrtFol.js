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
        <p>
          Site Portefolio dont le but est de mettre en avant les compétences
          acquises lors de ma formation autodidacte
        </p>
        <p>Les challenges pour ce site ont été :</p>
        <ul>
          <li>Afficher les éléments en fonction de scroll de la page</li>
          <li>
            Rendre le site responsive et faire en sorte que chaque élément reste
            bien aligné avec ce qui lui est associé
          </li>
        </ul>
      </div>
      <div className="pqt_gif elm_ct"></div>
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
