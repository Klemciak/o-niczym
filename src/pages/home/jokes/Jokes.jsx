import React from "react";
import "./Jokes.scss";
import archer from "../../../images/archer.jpg";
import landscape from "../../../images/landscape.jpg";
import neons from "../../../images/neons.jpg";
import monitors from "../../../images/monitors.jpg";
import team from "../../../images/team.jpg";
const Jokes = () => {
  return (
    <div className="jokes-wrap">
      <div className="joke">
        <img src={archer} alt="" />
        <h3>Łucznik na celowniku firmy</h3>
        <p>
          Firma zatrudniła łucznika, żeby poprawić celność w planach
          sprzedażowych. Niestety, pierwsze, co zrobił, to trafił w budżet
          marketingowy!
        </p>
      </div>
      <div className="joke">
        <img src={neons} alt="" />
        <h3>Biznes w świetle neonów</h3>
        <p>
          Firma stworzyła pokój pełen neonów, żeby przyciągnąć klientów. Teraz
          wszyscy myślą, że otworzyli klub nocny!
        </p>
      </div>
      <div className="joke">
        <img src={landscape} alt="" />
        <h3>Biznesowy krajobraz strat</h3>
        <p>
          Firma zleciła projektantowi krajobrazu poprawę widoku z okien biura.
          Teraz zamiast nudnych raportów widzą, jak pieniądze uciekają przez
          wodospad w ogrodzie!
        </p>
      </div>
      <div className="joke">
        <img src={monitors} alt="" />
        <h3>Monitorowy chaos w firmie</h3>
        <p>
          Firma stworzyła pokój pełen monitorów, żeby wszystko było pod
          kontrolą. Teraz nikt nie wie, co robić, ale każdy może to oglądać w
          jakości 4K!
        </p>
      </div>
      <div className="joke">
        <img src={team} alt="" />
        <h3>Zgrany team, zagadkowa firma</h3>
        <p>
          Team w firmie działa jak dobrze naoliwiona maszyna - wszyscy mają
          swoje zadania, ale nikt nie wie, co się dzieje, dopóki nie przyjdzie
          raport!
        </p>
      </div>
    </div>
  );
};

export default Jokes;
