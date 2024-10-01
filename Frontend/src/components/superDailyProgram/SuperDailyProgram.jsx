import { useRef, useState } from "react";
import "./superDailyProgram.css";
import banner from "../../assets/images/super-daily-program-banner.webp";
import Slider from "./Slider.jsx";
import { babyAwardList } from "../../assets/data/babyAwardList.js";
import { doctorReviews } from "../../assets/data/doctorReviews.js";
import { FaqProgram, FaqBabyKit, Enrollment } from "../../assets/data/faq.js";
import { happyParent } from "../../assets/data/happyParent.js";
import { pillarsList } from "../../assets/data/pillarsList.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";

function SuperDailyProgram() {
  const superOffers = [
    {
      id: 0,
      image:
        "https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-1.webp",
      name: "Holistic Framework: Nurturing Genius",
      point1: "Brain stimulating Music",
      point2: "Screen-Free Activities",
    },
    {
      id: 1,
      image:
        "https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-2.webp",
      name: "Milestone Tracker: Development Reports",
      point1: "Personalized Brain Development Insights",
      point2: "Celebrate one step at a time",
    },
    {
      id: 2,
      image:
        "https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-3.webp",
      name: "Expert-Led Webinars for You & Baby",
      point1: "Exclusive Mastersession",
      point2: "Interactive Webinar with Expert",
    },
    {
      id: 3,
      image:
        "https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-4.webp",
      name: "Personalized Support: Parental Coaching",
      point1: "Expert Parental Coaches at Your Fingertips",
      point2: "High-Priority Access to Technical Support",
    },
    {
      id: 4,
      image:
        "https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-5.webp",
      name: "Backed by Research & Science",
      point1: "Parenting Skills Training Session",
      point2: "Daily Development Journey",
    },
    {
      id: 5,
      name: "Expert Tips at Your Fingertips",
    },
  ];

  return (
    <div className="super-container">
      {/* Main Section */}
      <div className="super-main">
        <div className="super-main-content">
          <h1>
            Super Daily <span>Program</span>
          </h1>
          <p>Screen Free Brain Development Activities & Much More</p>
          <ul>
            <li>Give Brightest Possible Future</li>
            <li>Unlock Hidden Genius Abilities of Your Baby</li>
          </ul>
          <h4>
            <FontAwesomeIcon icon={faShoePrints} /> For 0-5 years old baby
          </h4>
          <a href="#">Program Features</a>
        </div>
        <div className="super-main-image">
          <img src={banner} alt="Banner Image" />
        </div>
      </div>

      {/* Program Section */}
      {/* <Slider /> */}

      {/* Peek-A-Boo! See the Joy of Development */}
      {/* <div>
        <h1>Peek-A-Boo! See the Joy of Development</h1>
      </div> */}

      {/* What UpTodd Offers Your Baby: */}
      <div className="super-offers">
        <h1>What UpTodd Offers Your Baby:</h1>
        <h5>Empower Your Parenting Journey</h5>
        <div className="super-offers-cards">
          {superOffers.map((data) => (
            <div key={data.id} className="super-offers-card">
              {data.id != superOffers.length - 1 ? (
                <>
                  <div className="super-offers-card-image">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="super-offers-card-content">
                    <h2>{data.name}</h2>
                    <h6>{data.point1}</h6>
                    <h6>{data.point2}</h6>
                  </div>
                </>
              ) : (
                <>
                  <div className="super-offers-card-lastDiv">
                    <h2>{data.name}</h2>
                    <a href="#">Empower Your Parenting Journey</a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuperDailyProgram;
