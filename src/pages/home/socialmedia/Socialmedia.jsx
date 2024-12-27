import React from "react";
import "./Socialmedia.scss";
import twitter from "../../../images/x-twitter.svg";
import instagram from "../../../images/instagram.svg";
import email from "../../../images/email.svg";
import facebook from "../../../images/facebook.svg";
const Socialmedia = () => {
  return (
    <div className="socialmedia-wrap">
      <a href="https://x.com/">
        <img src={twitter} alt="" />
      </a>
      <a href="https://www.instagram.com/">
        <img src={instagram} alt="" />
      </a>
      <a href="https://workspace.google.com/intl/pl/gmail/">
        <img src={email} alt="" />
      </a>
      <a href="https://www.facebook.com/">
        <img src={facebook} alt="" />
      </a>
    </div>
  );
};

export default Socialmedia;
