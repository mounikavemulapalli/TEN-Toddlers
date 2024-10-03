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
import { superOffers } from "../../assets/data/superOffers.js";
import { cards } from "../../assets/data/card.js";
import { superMentors } from "../../assets/data/superMentors.js";

function SuperDailyProgram() {
  const carouselRef = useRef(null);
  const happyParentRef = useRef(null);
  const boardMembersRef = useRef(null);
  const awaredBabyRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const [activeContent, setActiveContent] = useState("enrollment");
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".super-peek-card").offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".super-peek-card").offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleAwaredBabyPrev = () => {
    if (awaredBabyRef.current) {
      const cardWidth = awaredBabyRef.current.querySelector(
        ".super-brilliant-minds-card"
      ).offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      awaredBabyRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleAwaredBabyNext = () => {
    if (awaredBabyRef.current) {
      const cardWidth = awaredBabyRef.current.querySelector(
        ".super-brilliant-minds-card"
      ).offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      awaredBabyRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleHappyParentPrev = () => {
    if (happyParentRef.current) {
      const cardWidth = happyParentRef.current.querySelector(
        ".super-happy-parents-card"
      ).offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      happyParentRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleHappyParentNext = () => {
    if (happyParentRef.current) {
      const cardWidth = happyParentRef.current.querySelector(
        ".super-happy-parents-card"
      ).offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      happyParentRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="super-container">
      {/* Header Section */}
      {/* <div className="super-header" /> */}

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
      <Slider />

      {/* Peek-A-Boo! See the Joy of Development */}
      <div className="super-peek">
        <h1>Peek-A-Boo! See the Joy of Development</h1>
        <div className="super-peek-wrapper">
          <button className="super-peek-button prev" onClick={handlePrev}>
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              alt="Previous"
            />
          </button>

          <div className="super-peek-cards" ref={carouselRef}>
            {cards.map((data) => (
              <div key={data.id} className="super-peek-card">
                <iframe
                  width="300"
                  height="200"
                  src={data.videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h2>{data.title}</h2>
                {data.description && <p>{data.description}</p>}
              </div>
            ))}
          </div>

          <button className="super-peek-button next" onClick={handleNext}>
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              alt="Next"
            />
          </button>
        </div>
      </div>

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

      {/* Brilliant Minds Section */}
      <div className="super-brilliant-minds">
        <h1>
          Brilliant Minds: <span> Celebrating Global Baby Champions</span>
        </h1>
        <div className="super-brilliant-minds-wrapper">
          <button
            className="super-brilliant-minds-button prev"
            onClick={handleAwaredBabyPrev}
          >
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              alt="Previous"
            />
          </button>
          <div className="super-brilliant-minds-cards" ref={awaredBabyRef}>
            {babyAwardList.map((data) => (
              <div
                key={data.id}
                className="super-brilliant-minds-card"
                ref={awaredBabyRef}
              >
                <div className="super-brilliant-minds-card-image">
                  <img src={data.img} alt="" />
                </div>
                <div className="super-brilliant-minds-card-content">
                  <h3>{data.title} </h3>
                  <p>{data.description} </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="super-brilliant-minds-button next"
            onClick={handleAwaredBabyNext}
          >
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              alt="Next"
            />
          </button>
        </div>
      </div>

      {/* Line Section */}
      <div className="super-line-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="314"
          height="15"
          viewBox="0 0 314 15"
          fill="none"
        >
          <path
            d="M313 3.33333L302.601 9.73483C292.552 15.9212 279.732 15.2903 270.339 8.14717L269.488 7.49999C259.774 0.113225 246.325 0.113226 236.612 7.49999V7.49999C226.898 14.8868 213.449 14.8868 203.736 7.49999V7.49999C194.022 0.113222 180.573 0.113221 170.86 7.49999V7.49999C161.146 14.8868 147.697 14.8868 137.983 7.49998V7.49998C128.27 0.113216 114.821 0.113215 105.107 7.49998V7.49998C95.3935 14.8867 81.8854 14.8412 72.1715 7.45444V7.45444C62.5281 0.121297 49.1181 0.0760858 39.4747 7.40923V7.40923C29.7195 14.8274 16.1884 14.7325 6.53812 7.17834L0.999997 2.84311"
            stroke="#FF3F4E"
            strokeWidth="2"
          ></path>
        </svg>
      </div>

      {/* Happy Parents Section */}
      <div className="super-happy-parents">
        <h1>
          Happy Parents, Thriving Tots:
          <span> Witnessing Their Child's Growth</span>
        </h1>
        <h4>
          Smarter Investment: Personalized Learning vs. Traditional Plastic Toys
        </h4>
        <div className="super-happy-parents-wrapper">
          <button
            className="super-happy-parents-button prev"
            onClick={handleHappyParentPrev}
          >
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              alt="Previous"
            />
          </button>

          <div className="super-happy-parents-cards" ref={happyParentRef}>
            {happyParent.map((data) => (
              <div key={data.id} className="super-happy-parents-card">
                <iframe
                  loading="lazy"
                  srcDoc={data.surdoc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>

                <div className="super-happy-parent-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    alt="Quote"
                    className="quote-mark"
                  />
                  <p>{data.content}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="super-happy-parents-button next"
            onClick={handleHappyParentNext}
          >
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              alt="Next"
            />
          </button>
        </div>
      </div>

      {/* Child's Development Section */}
      <div className="child-development-button">
        <a href="#">Fuel Your Child's Development!</a>
      </div>

      {/* Top Global Experts Section */}
      <div className="super-doctor-review">
        <h1>Recommended by Top Global Experts</h1>
        <h4>
          Vetted &amp; Backed by 100+ Doctors, Educationists, Parenting Experts
          &amp; Professors
        </h4>

        <div
          className="super-doctor-review-list"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`super-doctor-review-cards ${isHovered ? "paused" : ""}`}
          >
            {doctorReviews.map((data) => (
              <div key={data.id} className="super-doctor-review-card">
                <div className="super-doctor-review-image-part">
                  <img src={data.img} loading="lazy" alt="doctor-review" />
                  <div>
                    <h3>{data.name}</h3>
                    <h6>{data.position} </h6>
                  </div>
                </div>
                <div className="super-doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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

      {/* About Section */}
      <div className="super-about">
        <h1>About Uptodd</h1>
        <p>
          At UpTodd, we've carefully curated our approach by leveraging insights
          from over 10,000+ research papers and tapping into the expertise of
          professionals from prestigious institutions like MIT, Stanford, IITs,
          and AIIMS. Our program integrates techniques from globally recognized
          methodologies, including early stimulation from Glenn Doman,
          Montessori's emphasis on independence and exploration, Howard
          Gardner's theory of multiple intelligences from Harvard University,
          Waldorf's holistic approach, the Reggio Emilia Approach's focus on
          creativity, indigenous parenting and mindful parenting. This
          comprehensive approach empowers babies worldwide to thrive and reach
          their full potential with evidence-based guidance.
        </p>
        <h4>
          "Join us on this captivating journey, where every child is truly
          special, and every family's dreams matter"
        </h4>
        <h5>Your's UpTodd Family</h5>
        <hr />
        <div className="super-about-footer">
          <h4>Copyright UpTodd Care Pvt ltd © 2024. All Rights Reserved</h4>
          <h4>
            Made with Love <span>❤</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SuperDailyProgram;
