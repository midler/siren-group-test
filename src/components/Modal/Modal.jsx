import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../Button/Button.jsx";
import { CheckButton } from "../CheckButton/CheckButton";
import { Input } from "../Input/Input.jsx";

import "./Modal.scss";

export const Modal = ({ handleClick }) => {
  const [progress, setProgress] = useState(50);
  const [step, setStep] = useState(1);
  const [homeowner, setHomeowner] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const handleSection = () => {
    setProgress(100);
    setStep(2);
  };

  return (
    <div className="modal">
      <div className="modal__header">
        <button className="modal__close" onClick={handleClick}>
          <span className="visuallyHidden">Закрыть</span>
        </button>
        <div className="modal__progress">
          <div
            className="modal__progress-line"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="modal__content">
        {step === 1 ? (
          <section className="modal__content1">
            <h2 className="modal__title">
              Are you homeowner or authrized to make property changes?
            </h2>
            <ul className="modal__buttons-list">
              <li className="modal__buttons-list-item">
                <CheckButton
                  active={homeowner}
                  onClick={() => setHomeowner(true)}
                >
                  <svg
                    width="56"
                    height="56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.955 20.443 24.642 35.756l-8.597-8.598"
                      stroke="#FA8C16"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="1.4"
                      y="1.4"
                      width="53.2"
                      height="53.2"
                      rx="26.6"
                      stroke="#FA8C16"
                      strokeWidth="2.8"
                    />
                  </svg>{" "}
                  Yes
                </CheckButton>
              </li>
              <li className="modal__buttons-list-item">
                <CheckButton
                  active={!homeowner}
                  onClick={() => setHomeowner(false)}
                >
                  <svg
                    width="56"
                    height="56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m38.15 17.85-20.3 20.3M17.85 17.85l20.3 20.3"
                      stroke="#FA8C16"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="1.4"
                      y="1.4"
                      width="53.2"
                      height="53.2"
                      rx="26.6"
                      stroke="#FA8C16"
                      strokeWidth="2.8"
                    />
                  </svg>{" "}
                  No
                </CheckButton>
              </li>
            </ul>
            <Button
              wide
              className="modal__button"
              onClick={() => handleSection()}
            >
              Next
            </Button>
          </section>
        ) : (
          <section className="modal__content2">
            <h2 className="modal__title">
              Who should I prepare this estimate for?
            </h2>
            <p className="modal__description">
              Your choice: <span>{homeowner ? "yes" : "no"}</span>
            </p>
            <form className="modal__form" action="">
              <Input
                type="text"
                label="Full name"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="modal__form-input"
              />
              <Input
                type="text"
                label="Email address"
                placeholder="example@example.com"
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                className="modal__form-input"
              />
              <Button
                wide
                className="modal__button modal__form-button"
                onClick={() => handleSection()}
              >
                Next
              </Button>
              <p className="modal__form-text"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none"><path fill="#646464" d="M12.5 7.7h-.8V5.3a3.2 3.2 0 0 0-3.2-3.2 3.2 3.2 0 0 0-3.2 3.2v2.4h-.8c-.4 0-.8.4-.8.8v5.6c0 .4.4.8.8.8h8c.4 0 .8-.4.8-.8V8.5c0-.4-.4-.8-.8-.8Zm-3.2 5.6H7.7l.32-1.76c-.4-.16-.72-.64-.72-1.04 0-.64.56-1.2 1.2-1.2.64 0 1.2.56 1.2 1.2 0 .48-.24.88-.72 1.04l.32 1.76Zm.8-5.6H6.9V5.3c0-.88.72-1.6 1.6-1.6.88 0 1.6.72 1.6 1.6v2.4Z"/></svg>Safe, Secure and Confidential</p>
            </form>
          </section>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  handleClick: () => {},
};

export default Modal;
