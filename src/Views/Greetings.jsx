import "../assets/SCSS/greetings.scss";
import ENV from "../Components/Constants";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Greetings = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { lang } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);
  const [name, setName] = useState(""); // For the text input
  const [message, setMessage] = useState("");
  const [cardError, setCardError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const cardOnChange = (index) => {
    setSelectedCard(index);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  function validateinput(text) {
    return text.trim().length === 0 ? false : true;
  }

  const handlePreview = () => {
    const cardValid = selectedCard != null;
    const nameValid = validateinput(name);
    const messageValid = validateinput(message);

    setCardError(!cardValid);
    setNameError(!nameValid);
    setMessageError(!messageValid);

    if (cardValid && nameValid && messageValid) {
      const cardNumber = selectedCard + 1;
      const stateData = { card: cardNumber, name, message };
      navigate(`/${lang}/preview`, { state: stateData });
    }
  };
  return (
    <section className="greetings-card-container">
      <div className="layout">
        <div className="card-column">
          {Array.from({ length: 2 }, (_, index) => (
            <div
              key={index}
              className={`card ${cardError ? "card-error" : ""}`}
            >
              <input
                type="radio"
                id={`radio-${index}`}
                className="card-radio"
                checked={selectedCard === index}
                onChange={() => cardOnChange(index)}
                name="cardRadio"
              />
              <label htmlFor={`radio-${index}`} className="card-label">
                <img
                  src={`${ENV.APP_URL}/cards/g${index + 1}.jpg`}
                  alt={`Card ${index + 1}`}
                  className="card-image"
                />
              </label>
            </div>
          ))}
        </div>
        <div className="input-column">
          <input
            type="text"
            className={`name-input ${nameError ? "input-error" : ""}`}
            placeholder={t("Greetings.name")}
            name="name"
            value={name}
            onChange={handleName}
            maxLength="25"
          />
          <textarea
            className={`message-input ${messageError ? "input-error" : ""}`}
            placeholder={t("Greetings.message")}
            value={message}
            onChange={handleMessage}
            maxLength="175"
          />
          <button className="preview-button" onClick={handlePreview}>
            {t("Greetings.preview")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Greetings;
