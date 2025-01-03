import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    emailOrNumber: false,
    message: false,
    numberLength: false,
  });

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 9) {
      value = value.slice(0, 9);
    }

    if (value.length > 3 && value.length <= 6) {
      value = value.replace(/(\d{3})(\d{0,3})/, "$1-$2");
    } else if (value.length > 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1-$2-$3");
    }

    setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailOrNumberValid = email || number;
    let messageValid = message.trim() !== "";
    let numberLengthValid = number.length === 11;

    setFormErrors({
      emailOrNumber: !emailOrNumberValid,
      message: !messageValid,
      numberLength: !numberLengthValid,
    });

    if (emailOrNumberValid && messageValid && numberLengthValid) {
      setName("");
      setSurname("");
      setEmail("");
      setNumber("");
      setTitle("");
      setMessage("");
      setCheckbox1(false);
      setCheckbox2(false);

      setIsSubmitted(true);
    }
  };

  return (
    <div className="contact-wrap">
      <div className="contact-text">
        <h2>Nie kontaktujemy się ponieważ nie istniejemy.</h2>
        <p>
          Możesz spróbować wypełnić ten formularz, ale pamiętaj - to bardziej
          eksperyment techniczny niż prawdziwa potrzeba. Wysyłaj na własną
          odpowiedzialność, bo choć technicznie działa, to nigdzie nie dojdzie…
          ale przynajmniej będziesz mieć pewność, że wszystko działa, jak
          powinno!
        </p>
        <form onSubmit={handleSubmit}>
          <h3>Zagadaj</h3>
          <div className="name-box">
            <input
              type="text"
              placeholder="Imię"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nazwisko"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Adres e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={formErrors.emailOrNumber ? "input-error" : ""}
          />
          {formErrors.emailOrNumber && (
            <span className="email-error">
              uzupełnij chociaż jedno z tych pól
            </span>
          )}
          <input
            type="tel"
            placeholder="123-456-789"
            value={number}
            onChange={handlePhoneChange}
            className={`${
              formErrors.emailOrNumber || formErrors.numberLength
                ? "input-error"
                : ""
            }`}
          />
          {formErrors.numberLength && (
            <span className="number-error">numer musi mieć 9 cyfr</span>
          )}
          <input
            type="text"
            placeholder="Tytuł"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="wiadomość"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={formErrors.message ? "input-error" : ""}
          />
          {formErrors.message && (
            <span className="message-error">napisz coś do nas</span>
          )}
          <div className="checkbox-box">
            <label>
              <div className="custom-checkbox">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="checkbox1"
                  checked={checkbox1}
                  onChange={(e) => setCheckbox1(e.target.checked)}
                />
                <div className="custom"></div>
              </div>
              Zgadzam się, by ten checkbox był zaznaczony
            </label>
          </div>
          <div className="checkbox-box">
            <label>
              <div className="custom-checkbox">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="checkbox2"
                  checked={checkbox2}
                  onChange={(e) => setCheckbox2(e.target.checked)}
                />
                <div className="custom"></div>
              </div>
              I ten też
            </label>
          </div>
          <button type="submit">Wyślij</button>
          <div className={`courtain ${isSubmitted ? "active" : ""}`}>
            Wysłano
          </div>
        </form>
      </div>
      <div className="phone">
        <h4>Nasz numer</h4>
        <span>777-555-777</span>
      </div>
      <div className="map">
        <h4>Lokalizacja</h4>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.403058351496!2d19.93482225509498!3d50.06271970693785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b120455da67%3A0xc3c7f5071b750d33!2zUnluZWsgR8WCw7N3bnk!5e1!3m2!1spl!2spl!4v1735874876932!5m2!1spl!2spl"
          allowFullScreen
          loading="fast"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
