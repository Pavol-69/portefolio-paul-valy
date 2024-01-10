// Components
import Gif from "./Gif";

// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/Details.css";

// Gifs
import rctSabDAD from "../datas/gifs/rctSab-drag_and_drop.gif";
import rctSabCat from "../datas/gifs/rctSab-categorie.gif";

function DetailsRctSab({ setDetRctSab, setLeftSubMenu, tailleTel }) {
  return (
    <div
      className="brd_det elm_ct colonne"
      style={{ width: tailleTel ? "350px" : "800px" }}
    >
      <div className="titre_det">Description</div>
      <div className="desc">
        <p>
          Seconde réalisation, un site de cuisine réalisé pour une de mes
          connaissances. Le cahier des charges était le suivant :
        </p>
        <ul>
          <p></p>
          <li>
            Pourvoir mettre en ligne des recettes, avec une interface prévue à
            cet effet
          </li>
          <p>
            <li>
              Seul les personnes identifiées et acceptées par l'admin peuvent
              consulter le site :
              <ul>
                <li>
                  L'admin doit pouvoir être capable de donner un rôle à chacun
                  des utilisateurs comme rédacteur ou lecteur
                </li>
                <li>Il peut aussi simplement rejeter une inscription</li>
              </ul>
            </li>
          </p>
          <p>
            <li>
              Possibilité de créer des catégories et les associer aux recettes
              que l'on souhaite regrouper
            </li>
          </p>
          <p>
            <li>
              Il doit y avoir une fonction recherche, qui peut être faite selon
              le nom et/ou selon les catégories
            </li>
          </p>
          <p>
            <li>
              Intégration jusqu'à 5 photos dans chaque recette que l'on peut
              faire défiler dans un carroussel
            </li>
          </p>
          <p>
            <li>
              Possibilité de changer l'ordre des ingrédients et des étapes de la
              recette, et de les regrouper sous des sections
              <ul>
                <li>
                  Utilisation d'une fonction drag & drop sur ce dernier point,
                  pour capitaliser les recherches faites sur le premier projet,
                  mais avec la difficulté supplémentaires de déplacer soit tout
                  un groupe, soit juste un élément du groupe
                </li>
              </ul>
            </li>
          </p>
        </ul>
      </div>
      <div className="pqt_gif elm_ct">
        <Gif gif={rctSabDAD} tailleTel={tailleTel} title={"Drag & Drop"} />
        <Gif
          gif={rctSabCat}
          tailleTel={tailleTel}
          title={"Gestion Catégorie"}
        />
      </div>
      <div
        className="btn"
        onClick={(e) => {
          setDetRctSab(false);
          setLeftSubMenu("100vw");
        }}
      >
        Retour
      </div>
    </div>
  );
}

export default DetailsRctSab;
