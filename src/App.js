import { useState, useRef } from "react";
import { createPortal } from "react-dom";

import "./App.scss";

import { Link } from "./components/Link/Link.jsx";
import { Logo } from "./components/Logo/Logo.jsx";
import { Button } from "./components/Button/Button.jsx";
import { Input } from "./components/Input/Input.jsx";
import { Modal } from "./components/Modal/Modal.jsx";

import LogoSVG from "./assets/images/logo.svg";
import LogoFooterSVG from "./assets/images/logo-footer.svg";
import offerImage from "./assets/images/offer.jpg";

function App() {
  const formToScroll = useRef(null);
  const [zipCode, useZipCode] = useState("");
  const useZipCodeHandler = (e) => useZipCode(e.target.value);
  const [showModal, setShowModal] = useState(false);

  const executeScroll = () =>
    formToScroll.current.scrollIntoView({  behavior: "smooth" });

  return (
    <>
      <div className="mainPage">
        <header className="mainPage__header mainHeader">
          <div className="mainPage__container">
            <div className="mainHeader__layer1">
              <Logo
                src={LogoSVG}
                alt={"Logo HomeBuddy for for homeowners"}
                width={166}
                height={40}
                className="mainHeader__logo"
              />

              <Link className="mainHeader__link" handleClick={executeScroll}>
                Link to form
              </Link>
            </div>
            <section className="mainHeader__layer2">
              <div className="mainHeader__offer">
                <h2 className="mainHeader__title">
                  How{" "}
                  <mark className="mainHeader__titleMark">Over 410,000</mark>{" "}
                  <mark className="mainHeader__titleMark">Americans</mark>{" "}
                  Increased Their Property Value{" "}
                  <mark className="mainHeader__titleMark">In Under</mark>{" "}
                  <mark className="mainHeader__titleMark">6 Hours*</mark> With
                  This Simple Upgrade.
                </h2>
                <p className="mainHeader__description">
                  Ideal for detached and semi-detached homes with sloped roofs.{" "}
                </p>
              </div>
              <div className="mainHeader__offerImage">
                <img
                  className="mainHeader__image"
                  src={offerImage}
                  alt="A house with a green wall and brickwork, with a white drainpipe and a tree in the foreground"
                  width="343"
                  height="192"
                />
              </div>
            </section>
          </div>
        </header>
        <div className="mainPage__main">
          <section className="mainPage__advantages">
            <div className="mainPage__container">
              <h2 className="visuallyHidden">Advantges</h2>
              <ul className="advantages__list advantagesList">
                <li className="advantagesList__item">
                  <p className="advantagesList__text">
                    Lifetime warranty with 100% no-clog guarantee
                  </p>
                </li>
                <li className="advantagesList__item">
                  <p className="advantagesList__text">Fits most homes </p>
                </li>
                <li className="advantagesList__item">
                  <p className="advantagesList__text">
                    Installs over existing gutters saving you thousands{" "}
                  </p>
                </li>
                <li className="advantagesList__item">
                  <p className="advantagesList__text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="20"
                      viewBox="0 0 80 20"
                      fill="none"
                      aria-label="4.5 stars"
                      focusable="false"
                    >
                      <path
                        fill="#FD902C"
                        d="m8 5 2.59 4.44 5.02 1.09-3.43 3.83.52 5.11L8 17.4l-4.7 2.07.52-5.11-3.43-3.83 5.02-1.09L8 5ZM24 5l2.59 4.44 5.02 1.09-3.43 3.83.52 5.11L24 17.4l-4.7 2.07.52-5.11-3.43-3.83 5.02-1.09L24 5ZM40 5l2.59 4.44 5.02 1.09-3.43 3.83.52 5.11L40 17.4l-4.7 2.07.52-5.11-3.43-3.83 5.02-1.09L40 5ZM56 5l2.59 4.44 5.02 1.09-3.43 3.83.52 5.11L56 17.4l-4.7 2.07.52-5.11-3.43-3.83 5.02-1.09L56 5Z"
                      />
                      <path
                        stroke="#FD902C"
                        d="m72 6 2.15 3.7.12.18.21.05 4.18.9-2.85 3.2-.14.16.02.22.43 4.26-3.92-1.73-.2-.09-.2.1-3.92 1.72.43-4.26.02-.22-.14-.16-2.85-3.2 4.18-.9.21-.05.12-.19L72 6Z"
                      />
                      <path
                        fill="#FD902C"
                        fillRule="evenodd"
                        d="m72 17.4-4.7 2.07.52-5.11-3.43-3.83 5.02-1.09L72 5v12.4Z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                    Сustomer&nbsp;rating
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <div className="mainPage__calculate calculate">
            <div className="mainPage__container mainPage__container--no-padding">
              <div className="calculate__containerWrapper">
                <p className="calculate__attention">
                  <i className="calculate__attentionText">
                    You will be surprised how affordable gutter guards are!
                  </i>
                </p>
                <section className="calculate__block">
                  <h2 className="calculate__title">
                    See How Much Gutter Guards Cost In The XX, XXX Area
                  </h2>
                  <form
                    action=""
                    className="calculate__form"
                    ref={formToScroll}
                  >
                    <fieldset className="calculate__formField">
                      <legend className="calculate__formFieldTitle">
                        What is your ZIP Code?
                      </legend>
                      <Input
                        type="text"
                        label="Enter ZIP Code"
                        placeholder="12345"
                        onChange={useZipCodeHandler}
                        value={zipCode}
                        className="calculate__formInput"
                      />
                      <p className="calculate__formInputText">
                        Free, no-obligation estimates.
                      </p>
                      <Button
                        wide={true}
                        className="calculate__formButton"
                        onClick={() => {
                          setShowModal(true);
                        }}
                      >
                        Get estimate
                      </Button>
                    </fieldset>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
        <footer className="mainPage__footer">
          <div className="mainPage__container">
            <section className="mainFooter">
              <Logo
                src={LogoFooterSVG}
                alt={"Logo HomeBuddy for for homeowners"}
                width={203}
                height={30}
                className="mainHeader__logo mainFooter__logo"
              />
              <ul className="mainFooter__menu">
                <li className="mainFooter__menuItem">
                  <Link href="#">Terms of Use</Link>
                </li>
                <li className="mainFooter__menuItem">
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className="mainFooter__menuItem">
                  <Link href="#">Cookie Policy</Link>
                </li>
                <li className="mainFooter__menuItem">
                  <Link href="#">Do Not Sell My PersonalInformation</Link>
                </li>
                <li className="mainFooter__menuItem">
                  <Link href="#">Contact us</Link>
                </li>
              </ul>
            </section>
          </div>
        </footer>
      </div>
      {showModal &&
        createPortal(
          <Modal
            handleClick={() => {
              setShowModal(false);
            }}
          ></Modal>,
          document.body
        )}
    </>
  );
}

export default App;
