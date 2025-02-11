import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Greetings = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);
  const [name, setName] = useState(""); // For the text input
  const [message, setMessage] = useState("");

  const cardOnChange = (index) => {
    setSelectedCard(index);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handlePreview = () => {
    if (selectedCard != null && name != "" && message != "") {
      // navigate(`/${lang}/preview?card=${selectedCard}&name=${encodeURIComponent(name)}&message=${encodeURIComponent(message)}`);
      navigate(`/${lang}/preview?card=${selectedCard}&name=${encodeURIComponent(name)}&message=${message}`);
    } else {
      alert("please select the card and message");
    }
  };
  return (
    <section className="greetings-card-container">
      <div className="layout">
        <div className="card-column">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="card">
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
                  src={`${process.env.PUBLIC_URL}/cards/g${index + 1}.png`}
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
            className="name-input"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={handleName}
          />
          <textarea
            className="message-input"
            placeholder="Type your message here!"
            value={message}
            onChange={handleMessage}
          />
          <button className="preview-button" onClick={handlePreview}>
            Preview
          </button>
        </div>
      </div>
    </section>
  );
};

export default Greetings;
