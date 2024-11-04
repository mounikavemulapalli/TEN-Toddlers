import React from "react";
import { useRef, useState } from "react";
import { pillarsList } from "../../assets/Lists/pillarsList.js";
import Slider from "../comman/Slider.jsx";
import "./Premium.css";
import Faq from "../Faq.jsx";
import { babyAwardList } from "../../assets/Lists/babyAwardList.js";
import { happyParent } from "../../assets/Lists/happyParent.js";
import Popup from "./Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Step from "./Step";
import Mentors from "../comman/Mentors.jsx";
import PopupButton from "./PopupButton.jsx";
import Modal from "../Modal.jsx";
import Peek from "../comman/Peek.jsx";
import BrilliantMind from "../comman/BrilliantMinds.jsx";
import Line from "../comman/Line.jsx";
import HappyParents from "../comman/HappyParents.jsx";

export const Footer = () => (
  <section className="plain-footer">
    <h1>About Uptodd</h1>
    <p>
      At UpTodd, we've carefully curated our approach by leveraging insights
      from over 10,000+ research papers and tapping into the expertise of
      professionals from prestigious institutions like MIT, Stanford, IITs, and
      AIIMS. Our program integrates techniques from globally recognized
      methodologies, including early stimulation from Glenn Doman, Montessori's
      emphasis on independence and exploration, Howard Gardner's theory of
      multiple intelligences from Harvard University, Waldorf's holistic
      approach, the Reggio Emilia Approach's focus on creativity, indigenous
      parenting and mindful parenting. This comprehensive approach empowers
      babies worldwide to thrive and reach their full potential with
      evidence-based guidance.
    </p>
    <h5>
      "Join us on this captivating journey, where every child is truly special,
      and every family's dreams matter"
      <span>Your's UpTodd Family</span>
    </h5>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1361"
      height="2"
      viewBox="0 0 1361 2"
      fill="none"
    >
      <path d="M0 1H1361" stroke="#492EB4" strokeWidth="0.5"></path>
    </svg>
    <div className="plain-footer-bottom">
      <h3>Copyright UpTodd Care Pvt ltd © 2024. All Rights Reserved</h3>
      <h3>
        Made with Love <b>❤</b>
      </h3>
    </div>
  </section>
);

function Premium() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const carouselRef = useRef(null);
  const happyParentRef = useRef(null);
  const boardMembersRef = useRef(null);
  const awaredBabyRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".carousel-card").offsetWidth;
      const gap = 20; // Set this to the gap between cards in pixels
      const scrollAmount = cardWidth + gap; // Scroll by the width of one card plus the gap
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".carousel-card").offsetWidth;
      const gap = 20; // Set this to the gap between cards in pixels
      const scrollAmount = cardWidth + gap; // Scroll by the width of one card plus the gap
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const handleHappyParentPrev = () => {
    if (happyParentRef.current) {
      const cardWidth = happyParentRef.current.querySelector(
        ".happy-parents-card"
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
        ".happy-parents-card"
      ).offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      happyParentRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleBoardMenberPrev = () => {
    if (awaredBabyRef.current) {
      const cardWidth =
        boardMembersRef.current.querySelector(".board-card").offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      boardMembersRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const handleBoardMemberNext = () => {
    if (boardMembersRef.current) {
      const cardWidth =
        boardMembersRef.current.querySelector(".board-card").offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      boardMembersRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const [clickedCardId, setClickedCardId] = useState(pillarsList[0].id);

  return (
    <>
      {/* Banner */}
      <section className="uptodd-banner">
        <div className="banner-container">
          {/* Mobile Image */}
          <div className="image-banner-part-mobile">
            <img
              src="https://www.uptodd.com/images/newWebsite/personalised-program-banner-image.webp"
              onError={(e) => {
                e.target.onError = null;
                e.target.src =
                  "/images/newWebsite/personalised-program-banner-image.png";
              }}
              alt="Brain Development Journey"
            />
          </div>

          {/* Text Banner */}
          <div className="text-banner-part">
            <h1>Give your baby the best start</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                Baby's Strong Developmental Journey (0-4.5 yrs)
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                One Stop solution for baby's holistic Growth
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                Expert-crafted one stop personalised program
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                Starts at INR 1190* per month only
              </li>
            </ul>
            <div className="btn-start">
              <PopupButton className="a-btn btn-start" text="Schedule a Demo" />
            </div>
          </div>

          {/* Desktop Image */}
          <div className="image-banner-part">
            <img
              src="https://www.uptodd.com/images/newWebsite/personalised-program-banner-image.webp"
              onError={(e) => {
                e.target.onError = null;
                e.target.src =
                  "/images/newWebsite/personalised-program-banner-image.png";
              }}
              alt="Brain Development Journey"
            />
          </div>
        </div>
      </section>

      {/* Program curated by Medical experts, Researchers, & IITians */}
      <Slider />

      {/* The Proof is in the Play: Watch How Babies Thrive! */}
      <Peek />

      {/* How our Program Works !! */}
      <Step />
      <div className="btn-center">
        <PopupButton text="Access this program" />
      </div>

      {/* Why UpTodd? The UpTodd Difference */}
      {/* section-1 */}
      <section className="why-uptodd" id="why-uptodd">
        <h1>Why UpTodd? The UpTodd Difference</h1>
        <h5>
          Trusted by 150k parents in 150+ countries, with over 107 International
          and 213 National Awards. Endorsed by global experts with our research
          featured on wikipedia and leading platforms.
        </h5>
        <div className="why-uptodd-usps">
          <div className="usp-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-1.webp"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/newWebsite/why-uptodd/why-uptodd-1.png";
              }}
              loading="lazy"
              alt="Personalised Program"
            />
            <div>
              <h3>Personalised Program</h3>
              <p>
                Every child shines bright. We help them find their spark.
                Science-backed, personalized development. We monitor progress
                and adapt, just like family.
              </p>
            </div>
          </div>
          <div className="usp-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-2.webp"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/newWebsite/why-uptodd/why-uptodd-2.png";
              }}
              loading="lazy"
              alt="Brain Boost"
            />
            <div>
              <h3>Brain Boost, Built Just for Them</h3>
              <p>
                All-in-One Play &amp; Development Kit: Organic toys, engaging
                activities, and everything in between - customized to fuel your
                baby's unique development!
              </p>
            </div>
          </div>
          <div className="usp-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-3.webp"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/newWebsite/why-uptodd/why-uptodd-3.png";
              }}
              loading="lazy"
              alt="Parenting One Stop Solution"
            />
            <div>
              <h3>Parenting made easy: One App, all you need</h3>
              <p>
                Unlock Expert Strategies: From holistic brain development to
                nutrition—Your comprehensive solution for personalized child
                growth plans.
              </p>
            </div>
          </div>
          <div className="usp-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-4.webp"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/newWebsite/why-uptodd/why-uptodd-4.png";
              }}
              loading="lazy"
              alt="Expert-Guided"
            />
            <div>
              <h3>Science-Powered, Expert-Guided</h3>
              <p>
                10,000+ Studies, 100+ Top Experts: Unmatched Insights for Your
                Child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banne-2 */}
      <section>
        <div className="start-now-banner">
          <h3 className="h3-heading">
            Imagine what your child can achieve! Explore personalized
            development that strengthens neural connections and builds a strong
            foundation for their future.
          </h3>

          {/* Popup Logic */}
          <div className="text-black" style={{ minWidth: "10rem" }}>
            <PopupButton text="Start Now" />
          </div>
        </div>
      </section>

      {/* Brilliant Minds: Celebrating Global Baby Champions */}
      <BrilliantMind />

      {/* Line Section */}
      <Line />

      {/* Happy Parents, Thriving Tots:Witnessing Their Child's Growth */}
      <HappyParents />

      {/* Recommended by Top Global Experts */}

      <section className="doctor-review" id="doctorreview">
        <h1>Recommended by Top Global Experts</h1>
        <h5>
          Vetted &amp; Backed by 100+ Doctors, Educationists, Parenting Experts
          &amp; Professors
        </h5>
        <div className="doctor-review-list">
          <div className="doctor-review-container">
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/jaideep_sharma.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/newWebsite/doctors/jaideep_sharma.png";
                  }}
                  loading="lazy"
                  alt="Baby brain growth expert Dr.Jaideep Sharma"
                />
                <div>
                  <h3>Jaideep Sharma</h3>
                  <h6>Doctor, AIIMS, 1981 Batch</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  UpTodd’s parenting program for baby maximizes baby potential
                  from the womb to 5 years, offering an impressive solution for
                  early baby brain development
                </p>
              </div>
            </div>
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/krishna_vedula.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/images/newWebsite/doctors/krishna_vedula.png";
                  }}
                  loading="lazy"
                  alt="Baby brain development specialist Krishna Vedula"
                />
                <div>
                  <h3>Krishna Vedula</h3>
                  <h6>Prof. MIT (USA)</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  This parenting program for baby addresses the global need for
                  early intervention, maximizing babies; learning potential from
                  prenatal to age 5
                </p>
              </div>
            </div>
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/manoj_mondal.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/images/newWebsite/doctors/manoj_mondal.png";
                  }}
                  loading="lazy"
                  alt="Baby brain development expert Manoj Mondal"
                />
                <div>
                  <h3>Manoj Mondal</h3>
                  <h6>Prof. IIT Kharagpur</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Home learning shapes success, and this parenting program for
                  baby unleashes your baby abilities, benefiting future
                  generations and informed parents
                </p>
              </div>
            </div>
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/vaishal_sharma.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/images/newWebsite/doctors/vaishal_sharma.png";
                  }}
                  loading="lazy"
                  alt="Baby brain growth expert Vaishal Sharma"
                />
                <div>
                  <h3>Vaishal Sharma</h3>
                  <h6>Doctor, AIIMS, IVF Spec.</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  In the first 5 years, 90% of the baby's brain develops. UpTodd
                  is doing great tech and research work to nurture baby
                  development through their parenting program
                </p>
              </div>
            </div>
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/sudhanshu.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/images/newWebsite/doctors/sudhanshu.png";
                  }}
                  loading="lazy"
                  alt="Baby brain development specialist Sudhanshu Singh"
                />
                <div>
                  <h3>Sudhanshu Singh</h3>
                  <h6>Doctor, MBBS &amp; MD, CMC Vellore</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  UpTodd, backed by the expertise of over 1K professionals,
                  nurtures their genius during the first 5 years with a
                  comprehensive parenting program for baby
                </p>
              </div>
            </div>
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/mani_kapur.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/images/newWebsite/doctors/mani_kapur.png";
                  }}
                  loading="lazy"
                  alt="Baby brain growth specialist Mani Kapur"
                />
                <div>
                  <h3>Mani Kapur</h3>
                  <h6>Doctor, MBBS &amp; PG, Gyno</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Pregnancy is crucial; the baby's brain grows fastest in the
                  womb. Post-birth stimulation is also vital for nurturing the
                  baby's genius through UpTodd's baby parenting program
                </p>
              </div>
            </div>
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/saurabh_khanna.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/images/newWebsite/doctors/saurabh_khanna.png";
                  }}
                  loading="lazy"
                  alt="Baby growth specialist Saurabh Khanna"
                />
                <div>
                  <h3>Saurabh Khanna</h3>
                  <h6>Doctor, MBBS &amp; PG, Pedia</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Every baby is born a genius, needing personalized care for
                  optimal growth. UpTodd excels in nurturing babies' brain
                  abilities and supporting parents through a tailored program
                </p>
              </div>
            </div>
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/sarvesh_thakur.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/images/newWebsite/doctors/sarvesh_thakur.png";
                  }}
                  loading="lazy"
                  alt="Baby Development Specialist Sarvesh Thakur"
                />
                <div>
                  <h3>Sarvesh Thakur</h3>
                  <h6>Doctor, MBBS &amp; PG, Pedia</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  From birth to 3-4 years, crucial developmental growth occurs.
                  UpTodd ensures perfect baby development with comprehensive
                  care in their parenting program
                </p>
              </div>
            </div>
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/vipul_sehrawat.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/images/newWebsite/doctors/vipul_sehrawat.png";
                  }}
                  loading="lazy"
                  alt="Baby Growth Expert Vipul Sehrawat"
                />
                <div>
                  <h3>Vipul Sehrawat</h3>
                  <h6>Doctor, MBBS &amp; MD, MAMC</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  With expertise in fetal ultrasound, I see the importance of
                  early cognitive care. UpTodd provides the best care from womb
                  to 60 months, laying a solid foundation for your baby
                </p>
              </div>
            </div>
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/aditya_sharma.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/images/newWebsite/doctors/aditya_sharma.png";
                  }}
                  loading="lazy"
                  alt="Infant brain growth expert Aditya Sharma"
                />
                <div>
                  <h3>Aditya Sharma</h3>
                  <h6>Doctor, M.Ch. &amp; MS, Apollo</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  UpTodd fosters 300% potential growth through high-quality care
                  from womb to 60 months, offering the world's first one-stop
                  solution in a parenting program for your baby
                </p>
              </div>
            </div>
            <div className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img
                  src="https://www.uptodd.com/images/newWebsite/doctors/rohit_kalani.webp"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/images/images/newWebsite/doctors/rohit_kalani.png";
                  }}
                  loading="lazy"
                  alt="Infant growth specialist Rohit Kalani"
                />
                <div>
                  <h3>Rohit Kalani</h3>
                  <h6>Doctor, MBBS &amp; MD, Neonatol</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  At NICU, we see the impact of stimulation therapy. UpTodd's
                  products support it perfectly for babies, integrated into
                  their parenting program for babies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science-Backed Approach: Rooted in Research */}

      <section className="research-backed">
        <h1>
          Science-Backed Approach: <span>Rooted in Research</span>
        </h1>
        <h5>
          Developed using research from leading Global institutions &amp;
          Organisations
        </h5>
        <div className="insti-research">
          <div className="insti-head">
            <h4 style={{ margin: "0" }}>
              Research analysed by institutions from
            </h4>
          </div>
          <img
            src="https://www.uptodd.com/images/newWebsite/research-insti.webp"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/images/newWebsite/research-insti.png";
            }}
            loading="lazy"
            alt="IIT,IIM,MIT,Harvard Research Institutes"
          />
          <p>and 35+ other top global institutions</p>
        </div>
        <div className="insti-research-mobile">
          <div className="insti-research-mobile-head">
            <h4>Research analysed by institutions from</h4>
          </div>
          <img
            src="https://www.uptodd.com/images/newWebsite/research-insti-mobile.webp"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "/images/images/newWebsite/research-insti-mobile.png";
            }}
            loading="lazy"
            alt="IIT,IIM,MIT,Harvard Research Institutes"
          />
        </div>

        <div className="theory-research">
          <div className="theory-head">
            <h4 style={{ margin: "0" }}>Enriched with top research by</h4>
          </div>
          <img
            src="https://www.uptodd.com/images/newWebsite/researchers/all_researchers.webp"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "/images/images/newWebsite/researchers/all_researchers.png";
            }}
            loading="lazy"
            alt="Research Backed Personalised Program for Baby Development"
          />
          <p>and 50+ other top global experts</p>
        </div>
        <div className="theory-research-mobile">
          <div className="theory-research-mobile-head">
            <h4>Enriched with top research by</h4>
          </div>
          <div className="theory-research-mobile-list">
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/glenn-doman.webp"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/images/images/newWebsite/researchers/glenn-doman.png";
                }}
                loading="lazy"
                alt="glenn-doman baby development expert"
              />
              <h3>Glenn Doman</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/maria-montessori.webp"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/images/images/newWebsite/researchers/maria-montessori.png";
                }}
                loading="lazy"
                alt="maria-montessori baby development expert"
              />
              <h3>Maria Montessori</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/rudolf-steiner.webp"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/images/images/newWebsite/researchers/rudolf-steiner.png";
                }}
                loading="lazy"
                alt="rudolf-steiner baby development expert"
              />
              <h3>Rudolf Steiner</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/bf-skinner.webp"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/images/images/newWebsite/researchers/bf-skinner.png";
                }}
                loading="lazy"
                alt="bf-skinner baby development expert"
              />
              <h3>BF Skinner</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/loris-malaguzzi.webp"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/images/images/newWebsite/researchers/loris-malaguzzi.png";
                }}
                loading="lazy"
                alt="loris-malaguzzi baby development expert"
              />
              <h3>Loris Malaguzzi</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/howard-gardner.webp"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/images/images/newWebsite/researchers/howard-gardner.png";
                }}
                loading="lazy"
                alt="howard-gardner baby development expert"
              />
              <h3>Howard Gardner</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/diana-baumrind.webp"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/images/images/newWebsite/researchers/diana-baumrind.png";
                }}
                loading="lazy"
                alt="diana-baumrind baby development expert"
              />
              <h3>Diana Baumrind</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/swami-vivekanand.webp"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/images/images/newWebsite/researchers/swami-vivekanand.png";
                }}
                loading="lazy"
                alt="swami-vivekanand"
              />
              <h3>Swami Vivekanand</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/jean-piaget.webp"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "/images/images/newWebsite/researchers/jean-piaget.png";
                }}
                loading="lazy"
                alt="jean-piaget baby development expert"
              />
              <h3>Jean Piaget</h3>
            </div>
          </div>
        </div>
      </section>

      {/* UpTodd™ Genius Premium Program */}

      <section className="product-and-cost" id="product-and-cost">
        <h1>UpTodd™ Genius Premium Program</h1>
        <h5>
          Exclusive Mega KIT + World's only True Personalised APP + Brain dev.
          Report &amp; Support from World's Top Experts
        </h5>
        <div className="product-pointers">
          <h3>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Dedicated R&amp;D Team Care
          </h3>
          <h3>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Research Backed Growth System
          </h3>
          <h3>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Personalised Organic Mega Kit
          </h3>
          <h3>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            One-Stop Personalised APP
          </h3>
          <h3>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Holistic Tracking &amp; Brain Reports
          </h3>
          <h3>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            Recognitions &amp; Certifications
          </h3>
        </div>
        <div id="curriculumAndPricing"></div>
        <div className="product-cost-list">
          <div className="product-cost-card">
            <h3>Super Premium Program</h3>
            <h4>1 Year Personalised Program</h4>
            <p>
              (2 Mega Personalised Kits : Total 4 Sets of Kit, covering 3 Months
              each)
            </p>
            <h6>INR 3242 Per Month</h6>
            <h2>
              INR 38,900 <s>INR 120,900</s>
            </h2>
            {/* <button
              className="a-btn"
              id="premiumScreenSuperPremiumProgram"
              onClick={handleOpenPopup}
            >
              Enroll Now
            </button> */}
            {/* Popup Logic */}
            {/* {isPopupOpen && <Popup closePopup={handleOpenPopup} />} */}
            <div className="btn-center" style={{ padding: "0" }}>
              <PopupButton className="btn" text="Enroll Now" />
            </div>
          </div>
          <div className="product-cost-card">
            <h3>Standard Premium Program</h3>
            <h4>6 Months Personalised Program</h4>
            <p>
              (1 Mega Personalised Kits : Total 2 Sets of Kit, covering 3 Months
              each)
            </p>
            <h6>INR 3984 Per Month</h6>
            <h2>
              INR 23,900 <s>INR 70,900</s>
            </h2>
            {/* <button
              className="btn"
              id="premiumScreenStandardPremiumProgram"
              onClick={handleOpenPopup}
            >
              Enroll Now
            </button> */}
            {/* Popup Logic */}
            {/* {isPopupOpen && <Popup closePopup={handleOpenPopup} />} */}
            <div className="btn-center" style={{ padding: "0" }}>
              <PopupButton className="btn" text="Enroll Now" />
            </div>
          </div>
        </div>
        <div className="see-more-product">
          <p>
            Want to know more about program &nbsp;
            <span
              id="premiumScreenViewDetailedProgramDetails"
              onClick={openModal}
              style={{ color: "#ff5766" }}
            >
              see here
            </span>
          </p>
          <Modal show={showModal} onClose={closeModal}></Modal>
        </div>

        <div className="developmental-kit">
          <div className="kit-intro">
            <div>
              <h3>Curated Just for You: Mega Kit at Your Doorstep</h3>
              <p>World's only true personalised system</p>
            </div>
            <img
              src="https://www.uptodd.com/images/newWebsite/kit-shipment.svg"
              loading="lazy"
              alt="Personalised Baby Kit"
            />
          </div>
          <div className="kit-video">
            <iframe
              loading="lazy"
              srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/r1SwlfmvuCM?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' className='full'><img src='https://www.uptodd.com/images/newWebsite/kit-video.webp' className='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:3%;top:30%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
              data-gtm-yt-inspected-4="true"
              data-gtm-yt-inspected-40611628_62="true"
              id="72071507"
              data-gtm-yt-inspected-14="true"
            ></iframe>
            <h3>SAMPLE Personalised KIT</h3>
          </div>
        </div>
      </section>

      {/* Your Child’s Peronalized Journey begins here: From enrollment to Thriving */}

      <section className="personalise-journey">
        <h1>
          Your Child’s Personalized Journey begins here:
          <span>From enrollment to Thriving</span>
        </h1>
        <div className="journey-step-list">
          <div className="journey-card">
            <h3>
              Personalized for Every Brain:
              <br />
              <span>Adaptive App based on development Reports</span>
            </h3>
            <svg
              className="right-pointing-arrow-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <circle cx="28" cy="28" r="28" fill="#F5EAE2"></circle>
              <mask
                id="mask0_328_58"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="4"
                y="4"
                width="48"
                height="48"
              >
                <rect
                  x="4"
                  y="4"
                  width="47.6733"
                  height="47.6733"
                  fill="#D9D9D9"
                ></rect>
              </mask>
              <g mask="url(#mask0_328_58)">
                <path
                  d="M27.8367 35.0754L35.0755 27.8366L27.8367 20.5978L25.7625 22.672L29.4374 26.3469H20.3878V29.3263H29.4374L25.7625 33.0012L27.8367 35.0754ZM27.84 46.7072C25.2301 46.7072 22.7768 46.212 20.4803 45.2214C18.1837 44.2309 16.186 42.8866 14.4872 41.1886C12.7884 39.4905 11.4435 37.4937 10.4525 35.1982C9.46155 32.9026 8.96606 30.4499 8.96606 27.8399C8.96606 25.2299 9.46134 22.7767 10.4519 20.4801C11.4424 18.1836 12.7867 16.1859 14.4848 14.4871C16.1828 12.7883 18.1796 11.4434 20.4752 10.4524C22.7707 9.46143 25.2234 8.96594 27.8334 8.96594C30.4434 8.96594 32.8966 9.46122 35.1932 10.4518C37.4897 11.4423 39.4874 12.7866 41.1862 14.4846C42.885 16.1827 44.2299 18.1795 45.2209 20.475C46.2119 22.7705 46.7074 25.2233 46.7074 27.8333C46.7074 30.4432 46.2121 32.8965 45.2215 35.193C44.231 37.4896 42.8867 39.4873 41.1887 41.1861C39.4906 42.8849 37.4938 44.2298 35.1983 45.2208C32.9028 46.2118 30.45 46.7072 27.84 46.7072Z"
                  fill="#002863"
                ></path>
              </g>
            </svg>
          </div>

          {/* Second Card  */}
          <div className="journey-card">
            <h3>
              Unlocking Potential Together:
              <br />
              <span>
                Your 1-1 R&amp;D Consultation and Constant Extensive Support
              </span>
            </h3>
            <svg
              className="right-pointing-arrow-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <circle cx="28" cy="28" r="28" fill="#F5EAE2"></circle>
              <mask
                id="mask0_328_58"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="4"
                y="4"
                width="48"
                height="48"
              >
                <rect
                  x="4"
                  y="4"
                  width="47.6733"
                  height="47.6733"
                  fill="#D9D9D9"
                ></rect>
              </mask>
              <g mask="url(#mask0_328_58)">
                <path
                  d="M27.8367 35.0754L35.0755 27.8366L27.8367 20.5978L25.7625 22.672L29.4374 26.3469H20.3878V29.3263H29.4374L25.7625 33.0012L27.8367 35.0754ZM27.84 46.7072C25.2301 46.7072 22.7768 46.212 20.4803 45.2214C18.1837 44.2309 16.186 42.8866 14.4872 41.1886C12.7884 39.4905 11.4435 37.4937 10.4525 35.1982C9.46155 32.9026 8.96606 30.4499 8.96606 27.8399C8.96606 25.2299 9.46134 22.7767 10.4519 20.4801C11.4424 18.1836 12.7867 16.1859 14.4848 14.4871C16.1828 12.7883 18.1796 11.4434 20.4752 10.4524C22.7707 9.46143 25.2234 8.96594 27.8334 8.96594C30.4434 8.96594 32.8966 9.46122 35.1932 10.4518C37.4897 11.4423 39.4874 12.7866 41.1862 14.4846C42.885 16.1827 44.2299 18.1795 45.2209 20.475C46.2119 22.7705 46.7074 25.2233 46.7074 27.8333C46.7074 30.4432 46.2121 32.8965 45.2215 35.193C44.231 37.4896 42.8867 39.4873 41.1887 41.1861C39.4906 42.8849 37.4938 44.2298 35.1983 45.2208C32.9028 46.2118 30.45 46.7072 27.84 46.7072Z"
                  fill="#002863"
                ></path>
              </g>
            </svg>
          </div>

          {/* Third Card  */}
          <div className="journey-card">
            <h3>
              Thriving Beyond Limits:
              <br />
              <span>Develop Core Skills to Excel in Academics</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Meet our Mentors & Curators | 100+ Curators R&D Team */}

      <Mentors />

      {/* Your Frequently Asked Questions */}

      <Faq />

      {/* Footer */}
      <Footer />

      {/* Correct Button Component */}

      {/* Popup Logic */}
      {isPopupOpen && <Popup closePopup={handleOpenPopup} />}
    </>
  );
}

export default Premium;
