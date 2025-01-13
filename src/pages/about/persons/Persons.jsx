import React from "react";
import "./Persons.scss";
import women1 from "../../../images/women1.jpg";
import women2 from "../../../images/women2.jpg";
import men1 from "../../../images/men1.jpg";
import men2 from "../../../images/men2.jpg";
const Persons = () => {
  return (
    <div className="persons-wrap">
      <h2>Drużyna</h2>
      <div className="persons">
        <div className="person">
          <img src={men1} alt="portret Dawida" />
          <h3 className="name">Dawid Bekam</h3>
          <h4 className="role">Software Engineer</h4>
        </div>
        <div className="person">
          <img src={women1} alt="portret Ady" />
          <h3 className="name">Adrianna Grander</h3>
          <h4 className="role">Product Manager</h4>
        </div>
        <div className="person">
          <img src={women2} alt="portret Kasi" />
          <h3 className="name">Katarzyna Głośnopek</h3>
          <h4 className="role">UX/UI Designer</h4>
        </div>
        <div className="person">
          <img src={men2} alt="portret Marcina" />
          <h3 className="name">Marcin Gokart</h3>
          <h4 className="role">UX/UI Designer</h4>
        </div>
      </div>
    </div>
  );
};

export default Persons;
