import React, { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  return (
    <div className="contact-wrap">
      <div className="contact-text">
        <h2>Nie kontaktujemy się ponieważ nie istniejemy.</h2>
        <p>
          Możesz spróbować wypełnić ten formularz, ale pamiętaj - to bardziej
          eksperyment techniczny niż prawdziwa potrzeba. Wysyłaj na własną
          odpowiedzialność, bo choć technicznie działa, nikt tego nie przeczyta…
          ale przynajmniej będziesz mieć pewność, że wszystko działa, jak
          powinno!
        </p>
        <form>
          <div>
            <input
              type="text"
              placeholder="Imię"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nazwisko"
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Adres e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tytuł"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="wiadomość"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div>
            <label>
              <input
                type="checkbox"
                name="checkbox1"
                onChange={(e) => setCheckbox1(e.target.checked)}
              />
              Zgadzam się, by ten checkbox był zaznaczony
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="checkbox2"
                onChange={(e) => setCheckbox2(e.target.checked)}
              />{" "}
              I ten też
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
