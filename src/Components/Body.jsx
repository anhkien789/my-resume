import React from "react";
import { BodyHeading } from "./index.js";
import info from "../information.js";

function Body() {
  return (
    <main className="container">
      <BodyHeading name="Skill" />
      <section className="row">
        <div className="body_lists col-6">
          <ul>
            <li>{info.skills.csharp.join(" | ")}</li>
            <li>{info.skills.python.join(" | ")}</li>
          </ul>
        </div>
        <div className="body_lists col-6">
          <ul>
            <li>{info.skills.javascript.join(" | ")}</li>
            <li>{info.skills.general.join(" | ")}</li>
          </ul>
        </div>
      </section>
      <BodyHeading name="Experience" />
      <section>
        {info.experience.map((item) => (
          <div key={item.id}>
            <div className="row body_header">
              <div className="col-4 body_header-left">
                <p>{item.position}</p>
              </div>
              <div
                className="col-4 body_header-middle"
                style={item.id === 1 ? { color: "#45818e" } : {}}
              >
                <p>{item.company}</p>
              </div>
              <div className="col-4 body_header-right">
                <p className="fst-italic">{item.where}</p>
                <p className="fw-bold">{item.date}</p>
              </div>
            </div>
            <div className="body_lists">
              {item.detail.map((subItem) => (
                <ul key={subItem.id}>
                  {subItem.heading && subItem.heading !== "" && subItem.heading}
                  {subItem.content.map((content, contentIndex) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </section>
      <BodyHeading name="Education" />
      <section>
        {info.education.map((item) => (
          <div key={item.id}>
            <div className="row body_header">
              <div className="col-4 body_header-left">
                <p>{item.degree}</p>
              </div>
              <div className="col-4 body_header-middle">
                <p>{item.school}</p>
              </div>
              <div className="col-4 body_header-right">
                <p className="fst-italic">{item.where}</p>
                <p className="fw-bold">{item.date}</p>
              </div>
            </div>
            <div className="body_lists">
              {item.detail.map((subItem) => (
                <ul key={subItem.id}>
                  {subItem.heading && subItem.heading !== "" && subItem.heading}
                  {subItem.content.map((content, contentIndex) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </section>
      <BodyHeading name="Activities" />
      <section>
        {info.activity.map((item) => (
          <div key={item.id}>
            <div className="body_lists">
              {item.detail.map((subItem) => (
                <ul key={subItem.id}>
                  {subItem.heading && subItem.heading !== "" && subItem.heading}
                  {subItem.content.map((content, contentIndex) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Body;
