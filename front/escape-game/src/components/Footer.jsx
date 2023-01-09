import React from "react";
import EscapeGameLogo from "../assets/logo-escape.png";
import FacebookLogo from "../assets/logo-facebook.png";
import TwitterLogo from "../assets/logo-twitter.png";
import LinkedinLogo from "../assets/logo-linkedin.png";
import GithubLogo from "../assets/logo-github.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sub-part">
        <img style={{ height: "3rem", width: "auto" }} src={EscapeGameLogo} />
        <div className="footer-router">
          <p>
          Home | Blog | Pricing | About | Contact</p>
        </div>
      </div>
      <div className="footer-sub-part">
        <p>55 rue du Faubourg Saint-Honoré 75008 Paris</p>
        <p> +33 1 42 92 81 00</p>
        <p>contact@escape-game.com</p>
      </div>
      <div className="footer-sub-part">
        <h3>A propos</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab repellat
          perspiciatis ipsum officiis at harum autem!
        </p>
        <div>
          <img
            className="logo-social-media"
            src={FacebookLogo}
            alt="Logo facebook"
          />
          <img
            className="logo-social-media"
            src={TwitterLogo}
            alt="Logo twitter"
          />
          <img
            className="logo-social-media"
            src={LinkedinLogo}
            alt="Logo linkedin"
          />
          <img
            className="logo-social-media"
            src={GithubLogo}
            alt="Logo github"
          />
        </div>
      </div>
    </footer>
  );
}
