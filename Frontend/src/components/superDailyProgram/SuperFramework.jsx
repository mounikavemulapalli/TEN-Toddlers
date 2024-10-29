import React from "react";
import "./SuperFramework.css";
import PopupButton from "../premium/PopupButton";

function SuperFramework() {
  return (
    <div className="super-framework">
      <div className="super-framework-info">
        <h4>Product Feature</h4>
        <h1>Super Daily Framework</h1>
        <h3>11 Days Challenge with 1 Month Access</h3>
        <div className="super-framework-info-list">
          <ul>
            <li>4 Powerful Neural Musics</li>
            <li>Screen FREE Activities for the Baby</li>
            <li>Parenting Intro Training Sessions</li>
            <li>1 Live Interactive Webinar</li>
            <li>1 Parenting Accelerator Master Live Sessions</li>
            <li>Super Parental Coaches Unlimited Access</li>
            <li>RealTime Training Sessions & Activities Tracking</li>
            <li>
              1 Milestone Report & Tracking : Intro Research Backed Suggestions
            </li>
          </ul>
        </div>
        <p>Immediate App access is granted after payment</p>
      </div>
      <div className="super-framework-join">
        <div className="super-framework-join1">
          <h4>
            Join Now! Whether Your Baby is Just 1 Week Old or 3 Years old or
            exactly 4.5 Years old : Sooner You Join, the Better for the Baby
          </h4>
        </div>
        <div className="super-framework-join2">
          <h3>Super Daily Framework</h3>
          <h4>
            INR 449 <span>INR 1,599</span>
          </h4>

          <div className="super-framework-join2-btn">
            <PopupButton text="Enroll Now" />
          </div>
        </div>
        <p>Mega discount | Exclusive offer</p>
      </div>
    </div>
  );
}

export default SuperFramework;
