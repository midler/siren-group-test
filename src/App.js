import "./App.scss";

import { Link } from "./components/Link/Link.jsx";
import { Logo } from "./components/Logo/Logo.jsx";

import LogoSVG from "./assets/images/logo.svg";

function App() {
  return (
    <div className="mainPage">
      <div className="mainPage__container">
        <header className="mainPage__header mainHeader">
          <Logo
            src={LogoSVG}
            alt={"Logo HomeBuddy for for homeowners"}
            width={166}
            height={40}
            className="mainHeader__logo"
          />

          <Link className="mainHeader__link" onClick={()=>{console.log('click')}}>Link to form</Link>
        </header>

      </div>
    </div>
  );
}

export default App;
