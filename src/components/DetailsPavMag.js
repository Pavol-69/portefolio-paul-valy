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
          m'inspirer du site{" "}
          <a style={{ color: "var(--clr1)" }} href="https://www.archidekt.com/">
            Archidekt
          </a>{" "}
          afin de créer un site 100% fonctionnel en intégrant des fonctions
          aussi bien FrontEnd que BackEnd :
        </p>
        <ul>
          <p>
            <li>
              Intégration d'une API pour avoir de base un pool de cartes avec
              toutes leurs informations
            </li>
          </p>
          <p>
            <li>
              Gestion des utilisateurs
              <ul>
                <li>Inscription</li>
                <li>Connexion</li>
                <li>Desinscription</li>
              </ul>
            </li>
          </p>
          <p>
            <li>
              Gestion des cartes
              <ul>
                <li>Ajout d'une liste, propre à l'utilisateur</li>
                <li>Modification</li>
                <li>Suppression</li>
                <li>
                  Possibilité de groupes de cartes personnalisés dans chaque
                  liste
                </li>
                <li>Sauvegarde des chaque liste dans une bdd</li>
              </ul>
            </li>
          </p>
          <p>
            <li>
              Intégration de fonctions FrontEnd directement inspirées du site
              référence
              <ul>
                <li>Fonction recherche</li>
                <li>Effet de cascade lorsqu'on passe sur les cartes</li>
                <li>
                  Fonction Drag & Drop pour trier les cartes dans les groupes
                  manuellement
                </li>
              </ul>
            </li>
          </p>
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
