// CSS
import "../styles_components/CSSGeneral.css";
import "../styles_components/Burger.scss";
import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";

function Burger({ tailleTel, bigMenu, setBigMenu, isLoaded }) {
  return (
    <div
      onClick={() => {
        if (bigMenu) {
          setBigMenu(false);
        } else {
          setBigMenu(true);
        }
      }}
      className="case_burger elm_ct"
      style={{ opacity: tailleTel ? 1 : 0 }}
    >
      <div
        className={`trait_burger trait_burger1 ${
          isLoaded ? `trait_burger1${bigMenu ? "_nrm" : "_rvs"}` : null
        }`}
      ></div>
      <div
        className={`trait_burger trait_burger2 ${
          isLoaded ? `trait_burger2${bigMenu ? "_nrm" : "_rvs"}` : null
        }`}
      ></div>
      <div
        className={`trait_burger trait_burger3 ${
          isLoaded ? `trait_burger3${bigMenu ? "_nrm" : "_rvs"}` : null
        }`}
      ></div>
    </div>
  );
}

export default Burger;
