// Components
import Gif from "./Gif";

// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/Details.css";

// Gifs
import pavMagDAD from "../datas/gifs/pavMag-drag_and_drop.gif";
import pavMagCas from "../datas/gifs/pavMag-effet_cascade.gif";
import pavMagSrch from "../datas/gifs/pavMag-recherche.gif";

function DetailsPavMag({ setDetPavMag, setLeftSubMenu, tailleTel }) {
  return (
    <div
      className="brd_det elm_ct colonne"
      style={{ width: tailleTel ? "350px" : "800px" }}
    >
      <div className="titre_det">Description</div>
      <div className="desc">
        <p>
          Premier site réalisé, fait une première fois avec juste HTML / CSS /
          JS, puis refait une seconde fois sous React
        </p>
        <p>
          Fan du jeu de cartes Magic The Gathering, mon but ici était de
          reproduire le site <a href="https://www.archidekt.com/">Archidekt</a>{" "}
          non pas en terme d'esthétique, mais en terme de fonctionnalités :
        </p>
        <ul>
          <li>
            Gestion des utilisateurs
            <ul>
              <li>Inscription</li>
              <li>Connexion</li>
              <li>Desinscription</li>
              <li>
                Possibilité de modifier le contenu des pages, mais uniquement
                s'ils en sont les propriétaires
              </li>
            </ul>
          </li>
          <li>
            Gestion d'une base de données regroupant toutes les listes de cartes
            <ul>
              <li>Ajout d'une liste</li>
              <li>Modification</li>
              <li>Suppression</li>
              <li>
                Mise à jour de ce qui est affiché dynamiquement en fonction de
                ce qui est renseigné dans la base de données
              </li>
            </ul>
          </li>
          <li>Fonction recherche</li>
          <li>Effet de cascade lorsqu'on passe sur les cartes</li>
          <li>Fonction Drag & Drop</li>
        </ul>
      </div>
      <div className="pqt_gif elm_ct">
        <Gif gif={pavMagSrch} tailleTel={tailleTel} title={"Recherche"} />
        <Gif gif={pavMagCas} tailleTel={tailleTel} title={"Effet Cascade"} />
        <Gif gif={pavMagDAD} tailleTel={tailleTel} title={"Drag & Drop"} />
      </div>
      <div
        className="btn"
        onClick={(e) => {
          setDetPavMag(false);
          setLeftSubMenu("100vw");
        }}
      >
        Retour
      </div>
    </div>
  );
}

export default DetailsPavMag;
