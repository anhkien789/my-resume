import React from "react";
import * as assets from "../assets";
import info from "../information.js";

function Header() {
  return (
    <header className="container">
      <h1>
        {info.name} - {info.position}
      </h1>
      <div>
        <div>
          <img src={assets.linkedin} alt="linkedin" />
          <a href={info.contacts.linkedinURL} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div>
          <img src={assets.phone} alt="phone" />
          <p>{info.contacts.phone}</p>
        </div>
        <div>
          <img src={assets.envelope} alt="envelope" />
          <p>{info.contacts.email}</p>
        </div>
        <div>
          <img src={assets.github} alt="github" />
          <a href={info.contacts.githubURL} target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
