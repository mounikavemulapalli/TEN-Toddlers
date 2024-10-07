import React from "react";
import "./Mentors.css";
import { superMentors } from "../../assets/data/superMentors.js";

function Mentors() {
  return (
    <>
      {/* Mentors Section */}
      <div className="super-mentors">
        <h1>
          Meet our Mentors & Curators |<span> 100+ Curators R&D Team</span>
        </h1>
        <div className="mentors-list">
          {superMentors.map((data) => (
            <div key={data.id} className="super-mentors-card">
              <img src={data.image} alt={data.alt} />
              <h3>{data.name}</h3>
              <h5>{data.prof}</h5>
            </div>
          ))}
        </div>

        <h1>UpTodd™ has been Featured In</h1>
        <div className="super-featured">
          <img
            src="https://www.uptodd.com/images/newWebsite/featured-in.webp"
            loading="lazy"
            alt="Media Houses Featuring UpTodd"
          />
        </div>
      </div>
    </>
  );
}

export default Mentors;
