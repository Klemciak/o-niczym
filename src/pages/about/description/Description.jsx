import React from "react";
import "./Description.scss";
import team from "../../../images/teamAbout.png";
import building from "../../../images/building.png";
const Description = () => {
  return (
    <div className="description-wrap">
      <div className="team">
        <div className="team-text">
          <h3>Zespół</h3>
          <p>
            Gdybyśmy istnieli, to bez dwóch zdań bylibyśmy najlepszym zespołem,
            jaki kiedykolwiek widział świat. Nasza pasja, której (jeszcze) nie
            mamy, byłaby inspiracją dla milionów. Nasze umiejętności, choć
            czysto teoretyczne, osiągnęłyby poziom mistrzowski w każdej możliwej
            dziedzinie - od zarządzania czasem, którego zawsze mamy za dużo, po
            kreatywność, która dopiero czeka na aktywację.
          </p>
          <h4>Współpraca, Zaufanie, Kreatywność, Komunikacja, Harmonia</h4>
        </div>
        <img src={team} alt="company team" className="team-img" />
      </div>
      <div className="building">
        <img src={building} alt="company building" className="building-img" />
        <div className="building-text">
          <h3>Siedziba</h3>
          <p>
            Gdybyśmy mieli budynek, to byłoby to miejsce tak wspaniałe, że samo
            patrzenie na nie mogłoby uleczyć stres i podnieść IQ o kilka
            punktów. Nasza siedziba byłaby ikoną architektury, łączącą
            nowoczesność z elegancją, a jej udogodnienia przewyższałyby nawet
            najśmielsze marzenia.Budynek byłby samowystarczalny, napędzany
            energią czystego entuzjazmu i wyobraźni.
          </p>
          <h4>Lokalizacja, Infrastruktura, Ergonomia, Dostępność, Klimat</h4>
        </div>
      </div>
    </div>
  );
};

export default Description;
