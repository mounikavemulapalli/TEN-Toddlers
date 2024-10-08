import { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Home/HomeButton.jsx";
import Slider from "../comman/Slider.jsx";
import Modal from "../Modal.jsx";
import { FaqProgram, FaqBabyKit, Enrollment } from "../../assets/Lists/faq.js";
import { premiumProgram } from "../../assets/Lists/premiumProgram.js";
import { list } from "../../assets/Lists/list.js";
import { cards } from "../../assets/Lists/card.js";
import { pillarsList } from "../../assets/Lists/pillarsList.js";
import { babyAwardList } from "../../assets/Lists/babyAwardList.js";
import { boardMembers } from "../../assets/Lists/boardMembers.js";
import { happyParent } from "../../assets/Lists/happyParent.js";
import { doctorReviews } from "../../assets/Lists/doctorReviews.js";

const Home = ({ bookingText, explore, start, enroll }) => {
  const carouselRef = useRef(null);
  const happyParentRef = useRef(null);
  const boardMembersRef = useRef(null);
  const awaredBabyRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const [activeContent, setActiveContent] = useState("enrollment");
  const [isHovered, setIsHovered] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCardClick = (id) => {
    setClickedCardId(id);
  };
  const handleCardClickForFaq = (id) => {
    setFaqBabyKitId(id);
    setFaqEnrollment(id);
    setFaqProgramId(id);
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
  const handleAwaredBabyNext = () => {
    if (awaredBabyRef.current) {
      const cardWidth =
        awaredBabyRef.current.querySelector(".baby-award-card").offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      awaredBabyRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const handleAwaredBabyPrev = () => {
    if (awaredBabyRef.current) {
      const cardWidth =
        awaredBabyRef.current.querySelector(".baby-award-card").offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      awaredBabyRef.current.scrollBy({
        left: -scrollAmount,
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

  const [faqProgramId, setFaqProgramId] = useState(FaqProgram[0].id);
  const [faqBabyKit, setFaqBabyKitId] = useState(FaqBabyKit[0].id);
  const [enrollment, setFaqEnrollment] = useState(Enrollment[0].id);

  const content = {
    faqProgram: (
      <>
        {FaqProgram.map((faqEle) => (
          <div
            key={faqEle.id}
            onClick={() => handleCardClickForFaq(faqEle.id)}
            className={`faq-card ${faqProgramId === faqEle.id ? "active" : ""}`}
          >
            <h3>{faqEle.qus}</h3>
            <p>{faqEle.ans}</p>
            <p>{faqEle.ans1}</p>
            <p>{faqEle.ans2}</p>
            {console.log("program")}
          </div>
        ))}
      </>
    ),
    faqBabyKit: (
      <>
        {FaqBabyKit.map((faqEle) => (
          <div
            key={faqEle.id}
            onClick={() => handleCardClickForFaq(faqEle.id)}
            className={`faq-card ${faqBabyKit === faqEle.id ? "active" : ""}`}
          >
            <h3>{faqEle.qus}</h3>
            <p>{faqEle.ans}</p>
            <p>{faqEle.ans1}</p>
            <p>{faqEle.ans2}</p>
            {console.log("babykit")}
          </div>
        ))}
      </>
    ),
    enrollment: (
      <>
        {Enrollment.map((faqEle) => (
          <div
            key={faqEle.id}
            onClick={() => handleCardClickForFaq(faqEle.id)}
            className={`faq-card ${enrollment === faqEle.id ? "active" : ""}`}
          >
            <h3>{faqEle.qus}</h3>
            <p>{faqEle.ans}</p>
            <p>{faqEle.ans1}</p>
            <p>{faqEle.ans2}</p>
            <p>{faqEle.ans3}</p>
            <p>{faqEle.ans4}</p>
            <p>{faqEle.ans5}</p>
            <p>{faqEle.ans6}</p>
            <p>{faqEle.ans7}</p>
          </div>
        ))}
      </>
    ),
  };
  return (
    <div>
      <div className="home-section">
        <section className="Home-page">
          <div className="banner-text">
            <h1>Give Your Baby the</h1>
            <h1>Best Possible Start!</h1>
            <h2>Nurture your baby's developing Brain</h2>
            <p>Expert Guided Personalised Program - Just For Your Baby</p>
            <ul>
              <li>
                <FaCheckCircle /> <span> No Pressure - No testing </span>
              </li>
              <li>
                <FaCheckCircle /> <span>No screen Time</span>
              </li>
              <li>
                <FaCheckCircle /> <span>10 Minutes Daily</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Loved by babies</span>
              </li>
              <li>
                <FaCheckCircle /> <span>One Stop Parenting Solution</span>
              </li>
              <Button text='Book a Demo Slot' />
            </ul>
          </div>
          <div className="banner-image">
            <img
              src="https://www.uptodd.com/images/newWebsite/home-page-banner.webp"
              alt=""
            />
          </div>
        </section>
        <section>
          <Slider />
        </section>
        <section className="Possibilities">
          <div className="Possibilities-heading">
            <h1>Explore the Possibilities with UpTodd</h1>
            <p>
              We have your back in this Journey - Top experts support you in
              your baby’s brain development journey.
            </p>
          </div>
          <div className="Possibilities-container">
            <div className="Possibilities-image">
              <img
                src="https://www.uptodd.com/images/newWebsite/possibilites.webp"
                alt=""
              />
            </div>
            <div className="Possibilities-list">
              {list.map((value, index) => (
                <div key={index} className="Possibilities-card">
                  <img src={value.img} alt="" />
                  <div className="card-text">
                    <h2>{value.heading}</h2>
                    <p>{value.text} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="Solution-page">
          <div className="solution-heading">
            <h1>One Stop Solution for your Baby's Brightest Possible Future</h1>
            <p>Research-Backed Baby Brain Development Journey</p>
          </div>
          <div className="solution-container">
            <ul>
              <li>
                <FaCheckCircle />
                <span>Parenting made easy: One App, all you need</span>
              </li>
              <li>
                <FaCheckCircle />
                <span>Holistic Development & Baby Brain Reports</span>
              </li>
              <li>
                <FaCheckCircle />
                <span> 10,000+ Research Studies, 100+ Top Experts </span>
              </li>
              <li>
                <FaCheckCircle />
                <span>
                  Expert Customised Mega Toy based developmental Kits{" "}
                </span>
              </li>
            </ul>
            <div className="solution-image">
              <img
                src="https://www.uptodd.com/images/newWebsite/one-stop-solution.webp"
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <div className="genius-section">
            <div className="genius-header">
              <h1>Inside Your Baby's Genius - Building Baby Brain</h1>
              <h2>Every Baby is born with infinite Potential</h2>
            </div>
            <div className="genius-container">
              <ul className="genius-text">
                <li>
                  <span>100 Bn</span>Every baby is born with 100 Billion of
                  Neurons
                </li>
                <li>
                  <span>1 Mn</span>One million neural connections are formed
                  every second in the early years
                </li>
                <li>
                  <span>90%</span>Ninety percentage of our brain develops by age
                  5
                </li>
                <li>
                  <span>60%</span>
                  60% of baby's energy goes in brain development
                </li>
              </ul>
              <div className="building">
                <iframe
                  loading="lazy"
                  width="853"
                  height="480"
                  srcDoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover;overflow: hidden;}</style> <a href='https://www.youtube.com/embed/VNNsN9IJkws?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' className='full'> <img src='https://www.uptodd.com/images/newWebsite/inside-baby-genius.webp' className='full' /> <svg version='1.1' viewBox='0 0 68 48' width='68px' style='position: absolute; top:50%; left:50%; transform:translate(-50%,-50%)'><path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path><path d='M 45,24 27,14 27,34' fill='#fff'></path></svg> </a>"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="275573034"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
                <p>Ref. Harvard University | developingchild.harvard.edu</p>
              </div>
            </div>
            <div>
              <Button text={explore} />
            </div>
          </div>
        </section>
        <section className="genius-babies">
          <div className="carousel-container">
            <div className="carousel-header">
              <h1>The Proof is in the Play: Watch How Babies Thrive!</h1>
              <p>
                Busy Parents, Smart Choice: Invest 10 Mins a day to a Brighter
                Tomorrow
              </p>
            </div>

            <div className="carousel-wrapper">
              <button className="carousel-button prev" onClick={handlePrev}>
                <img
                  src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
                  alt="Previous"
                />
              </button>

              <div className="carousel" ref={carouselRef}>
                {cards.map((card, index) => (
                  <div className="carousel-card" key={index}>
                    <iframe
                      width="300"
                      height="200"
                      src={card.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <h3>{card.title}</h3>
                    {card.description && <p>{card.description}</p>}
                  </div>
                ))}
              </div>

              <button className="carousel-button next" onClick={handleNext}>
                <img
                  src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
                  alt="Next"
                />
              </button>
            </div>
          </div>
        </section>
        <section className="developmental-pillars">
          <div className="development-head">
            <h1>UpTodd Expert Personalised Program -</h1>
            <h2>Nurture your baby's genius potential</h2>
            <p>
              Holistic Approach of baby brain development on complete
              foundational Pillars - <span> Just 10 Minutes a day</span>
            </p>
          </div>
          <div className="development-container">
            <div className="development-lest">
              {pillarsList.map((value) => (
                <div
                  key={value.id}
                  onClick={() => handleCardClick(value.id)}
                  className={`development-card ${
                    clickedCardId === value.id ? "active" : ""
                  }`}
                >
                  <h2>{value.title}</h2>
                  <div className="four-pillars-list">
                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>{value.text1} </span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>{value.text2}</span>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <FaCheckCircle />
                        <span>{value.text3}</span>
                      </li>
                      <li>
                        <FaCheckCircle />
                        <span>{value.text4}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="development-image">
              <img
                src="https://www.uptodd.com/images/newWebsite/expert-personalised-program.webp"
                alt=""
              />
            </div>
          </div>
          <div className="developmental-pillars-footer">
            <Button text={explore} />
            <p>
              Create Brain stimulating home envrionment for your baby, by best
              on the Planet. We have your back in this journey
            </p>
          </div>
        </section>
        <section className="start-now-banner">
          Stop overspending on generic and hamful toys, filled with Chlorinated
          Paraffin-{">"} <br /> Toxic for your baby brain growth
          <div>
            <Button text={start} />
          </div>
        </section>
        <section className="product-and-cost">
          <div className="product-and-cost-header">
            <h1>UpTodd™ Genius Premium Program</h1>
            <h2>
              Exclusive Parenting Program for Overall Baby Brain Development
            </h2>
            <h3>
              Exclusive Mega KIT + World's Only True Personalised APP + Brain
              Dev. Report & Support from World's Top Experts
            </h3>
          </div>
          <div className="product-and-cost-container">
            <ul className="product-and-cost-list">
              <li>
                <FaCheckCircle /> <span>Dedicated R&D Team Care</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Research Backed Growth System</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Personalised Organic Mega Kit</span>
              </li>
              <li>
                <FaCheckCircle /> <span>One-Stop Personalised APP</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Holistic Tracking & Brain Reports</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Recognitions & Certifications</span>
              </li>
            </ul>
          </div>
          <div className="product-and-cost-container-card">
            {premiumProgram.map((card, index) => (
              <div key={index} className="product-and-cost-card">
                <h1>{card.text1}</h1>
                <h2>{card.text2} </h2>
                <p>{card.text3} </p>
                <div className="card-perMonth">
                  <span>{card.perMonth}</span>
                </div>
                <h3>{card.discountPrice}</h3>
                <del>{card.deletePrice} </del>
                <div className="enroll-btn">
                  <Button text={enroll} />
                </div>
              </div>
            ))}
          </div>
          <div className="program-test">
            <p>
              Want to know more about program
              <span onClick={openModal}>see here</span>
            </p>
            <Modal show={showModal} onClose={closeModal}></Modal>
          </div>
        </section>
        <section className="developmental-kit">
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
              srcDoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/r1SwlfmvuCM?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' className='full'><img src='https://www.uptodd.com/images/newWebsite/kit-video.webp' className='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:3%;top:30%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
              data-gtm-yt-inspected-4="true"
              data-gtm-yt-inspected-40611628_62="true"
              id="72071507"
              data-gtm-yt-inspected-14="true"
            ></iframe>
            <h3>SAMPLE Personalised KIT</h3>
          </div>
        </section>
        <section className="awared-babies">
          <h1>
            Brilliant Minds: <span> Celebrating Global Baby Champions</span>
          </h1>
          <div className="carousel-wrapper">
            <button
              className="carousel-button prev"
              onClick={handleAwaredBabyPrev}
            >
              <img
                src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
                alt="Previous"
              />
            </button>
            <div className="carousel" ref={awaredBabyRef}>
              {babyAwardList.map((ele) => (
                <div
                  key={ele.id}
                  className="baby-award-card"
                  ref={awaredBabyRef}
                >
                  <img src={ele.img} alt="" />
                  <h3>{ele.title} </h3>
                  <p>{ele.description} </p>
                </div>
              ))}
            </div>
            <button
              className="carousel-button next"
              onClick={handleAwaredBabyNext}
            >
              <img
                src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
                alt="Next"
              />
            </button>
          </div>
        </section>
        <div className="line-section">
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
        <section className="happy-parents" id="happy-parents">
          <h1>
            Happy Parents, Thriving Tots:
            <span>Witnessing Their Child's Growth</span>
          </h1>
          <h5>
            Smarter Investment: Personalized Learning vs. Traditional Plastic
            Toys
          </h5>
          <div className="happy-parent-list-container">
            <div className="happy-parent-list" ref={happyParentRef}>
              {happyParent.map((review) => (
                <div key={review.id} className="happy-parents-card">
                  <div>
                    <iframe
                      loading="lazy"
                      srcDoc={review.surdoc}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                      data-gtm-yt-inspected-4="true"
                      data-gtm-yt-inspected-40611628_62="true"
                      id="72071507"
                      data-gtm-yt-inspected-14="true"
                    ></iframe>
                  </div>
                  <div className="quote-container">
                    <img
                      src="https://www.uptodd.com/images/newWebsite/quote.svg"
                      alt="Quote"
                      className="quote-mark"
                    />
                    <p className="quote-text">{review.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <img
              className="happy-parents-slider-next"
              onClick={handleHappyParentNext}
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              loading="lazy"
              alt="Next Happy Parent"
            />
            <img
              className="happy-parents-slider-prev"
              onClick={handleHappyParentPrev}
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              loading="lazy"
              alt="Prev Happy Parent"
            />
          </div>
          <div className="happy-parents-button">
            <button id="homeScreenHappyParentsSection">
              Fuel Your Child's Development!
            </button>
          </div>
        </section>
        <section className="doctor-review" id="doctorreview">
          <h1>Recommended by Top Global Experts</h1>
          <h5>
            Vetted &amp; Backed by 100+ Doctors, Educationists, Parenting
            Experts &amp; Professors
          </h5>

          <div
            className="doctor-review-list"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`doctor-review-container ${isHovered ? "paused" : ""}`}
            >
              {doctorReviews.map((value) => (
                <div className="doctor-review-card" key={value.id}>
                  <div className="doctor-review-image-part">
                    <img src={value.img} loading="lazy" alt="doctor-review" />
                    <div>
                      <h3>{value.name}</h3>
                      <h6>{value.position} </h6>
                    </div>
                  </div>
                  <div className="doctor-review-quote">
                    <img
                      src="https://www.uptodd.com/images/newWebsite/quote.svg"
                      loading="lazy"
                      alt="quote"
                    />
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
              <h4>Research analysed by institutions from</h4>
            </div>
            <img
              src="https://www.uptodd.com/images/newWebsite/research-insti.webp"
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
              loading="lazy"
              alt="IIT,IIM,MIT,Harvard Research Institutes"
            />
          </div>

          <div className="theory-research">
            <div className="theory-head">
              <h4>Enriched with top research by</h4>
            </div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/all_researchers.webp"
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
                  loading="lazy"
                  alt="glenn-doman baby development expert"
                />
                <h3>Glenn Doman</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/maria-montessori.webp"
                  loading="lazy"
                  alt="maria-montessori baby development expert"
                />
                <h3>Maria Montessori</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/rudolf-steiner.webp"
                  loading="lazy"
                  alt="rudolf-steiner baby development expert"
                />
                <h3>Rudolf Steiner</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/bf-skinner.webp"
                  loading="lazy"
                  alt="bf-skinner baby development expert"
                />
                <h3>BF Skinner</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/loris-malaguzzi.webp"
                  loading="lazy"
                  alt="loris-malaguzzi baby development expert"
                />
                <h3>Loris Malaguzzi</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/howard-gardner.webp"
                  loading="lazy"
                  alt="howard-gardner baby development expert"
                />
                <h3>Howard Gardner</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/diana-baumrind.webp"
                  loading="lazy"
                  alt="diana-baumrind baby development expert"
                />
                <h3>Diana Baumrind</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/swami-vivekanand.webp"
                  loading="lazy"
                  alt="swami-vivekanand"
                />
                <h3>Swami Vivekanand</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/jean-piaget.webp"
                  loading="lazy"
                  alt="jean-piaget baby development expert"
                />
                <h3>Jean Piaget</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="our-mentors" id="our-mentors">
          <h1>
            Meet our Mentors &amp; Curators |
            <span>100+ Curators R&amp;D Team</span>
          </h1>
          <div className="mentors-list">
            <div className="mentor-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/professors/krishna_vedula.webp"
                loading="lazy"
                alt="Uptodd mentor Prof.Krishna Vedula MIT"
              />
              <h3>
                Krishna Vedula
                <br />
                <span>Professor, MIT, United States</span>
              </h3>
            </div>
            <div className="mentor-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/professors/jaideep_sharma.webp"
                loading="lazy"
                alt="Uptodd mentor Dr.Jaideep Sharma AIIMS"
              />
              <h3>
                Dr. Jaideep Sharma
                <br />
                <span>MBBS &amp; MD, AIIMS, New Delhi</span>
              </h3>
            </div>
            <div className="mentor-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/professors/sudhanshu.webp"
                loading="lazy"
                alt="Uptodd mentor Dr.Sudhanshu Singh"
              />
              <h3>
                Dr. Sudhanshu
                <br />
                <span>MD, DSMA CMC Vellore</span>
              </h3>
            </div>
            <div className="mentor-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/professors/manoj_mondal.webp"
                loading="lazy"
                alt="Uptodd mentor Prof.Manoj Mondal IIT KGP"
              />
              <h3>
                Manoj Mondal
                <br />
                <span>Professor, IIT Kharagpur</span>
              </h3>
            </div>
            <div className="mentor-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/professors/PK_Mishra.webp"
                loading="lazy"
                alt="Uptodd mentor PK Mishra IIT BHU"
              />
              <h3>
                Prof. PK Mishra
                <br />
                <span>IIT BHU</span>
              </h3>
            </div>
          </div>
          <h1>UpTodd™ has been Featured In</h1>
          <div className="featured-in">
            <img
              src="https://www.uptodd.com/images/newWebsite/featured-in.webp"
              loading="lazy"
              alt="Media Houses Featuring UpTodd"
            />
          </div>
        </section>
        <section className="board-container happy-parents">
          <h1>Meet our Other Board Members</h1>
          <h5>On a mission to empower 10 Million+ families globally by 2026</h5>
          <div className="board-wrapper">
            <img
              id="boardGridPrevBtn"
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              loading="lazy"
              alt="Previous Board Member"
              onClick={handleBoardMenberPrev}
            />
            <div className="board-grid" ref={boardMembersRef}>
              {boardMembers.map((ele, index) => (
                <div key={index} className="board-card">
                  <img src={ele.img} alt="" />
                  <h3>{ele.name} </h3>
                  <span>{ele.position} </span>
                  <p>{ele.description}</p>
                </div>
              ))}
            </div>
            <img
              id="boardGridNextBtn"
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              loading="lazy"
              onClick={handleBoardMemberNext}
              alt="Next Board Member"
            />
          </div>
        </section>
        <section className="faqs">
          <h1>FAQs</h1>
          <div className="faq-list">
            <div className="faq-category-list">
              <div>
                <button
                  className="faqBtn"
                  onClick={() => setActiveContent("faqProgram")}
                >
                  Program
                </button>
                <button
                  className="faqBtn"
                  onClick={() => setActiveContent("faqBabyKit")}
                >
                  BabyKit
                </button>
                <button
                  className="faqBtn"
                  onClick={() => setActiveContent("enrollment")}
                >
                  enrollment
                </button>
              </div>
            </div>
            <div>{content[activeContent]}</div>
          </div>
        </section>
      </div>
      );
    </div>
  );
};

export default Home;
