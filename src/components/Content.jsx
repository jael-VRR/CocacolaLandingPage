import React from "react";
import "../styles/Content.css";
import facebook from "../images/facebook (1).png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

function Content() {
  return (
    <div className="content-text">
      <h2>Taste de feeling</h2>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <a className="link" href="/">
        Learn More
      </a>
      <ul className="sci">
        <li>
          <a href="/">
            <img className="fa" src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="/">
            <img className="fa" src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="/">
            <img className="fa" src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Content;
