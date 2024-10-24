import React from "react";
import { useState } from "react";
import Slider from "../comman/Slider.jsx";
import "./Premium.css";
import Faq from "../Faq.jsx"
import Iframe from "react-iframe";
import Popup from "./Popup.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Step from "./Step";

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

const Premium = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

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
            <button className="btn" onClick={handleOpenPopup}>
              Schedule a Demo
            </button>
            {/* Popup Logic */}
            {isPopupOpen && <Popup closePopup={handleOpenPopup} />}
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

      <section>
        <Slider />
      </section>

      {/* The Proof is in the Play: Watch How Babies Thrive! */}

      <section className="genius-babies" id="genius-babies">
        <h1>
          The Proof is in the Play: <span>Watch How Babies Thrive!</span>
        </h1>
        <h5>
          Busy Parents, Smart Choice: Invest 10 Mins a day to a Brighter
          Tomorrow
        </h5>
        <div className="babies-card-container">
          <div className="babies-card-list">
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/ku6AjmjCcH4?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/babies/rishit.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p style={{ margin: "0" }}>
                  Rishit can observe 300+ fruits &amp; vegetables, Lets see how
                  he does?
                </p>
              </div>
            </div>
            {/* 2 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/2efUMMC5trc?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/babies/freya.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>5 month baby can Identify 100+ flashcards</p>
              </div>
            </div>
            {/* 3 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/EWF1JwqaC74?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/babies/3.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>4.5 months Recognises 100 Animals &amp; Flowers</p>
              </div>
            </div>
            {/* 4 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/ZUe4UV_XWD8?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/babies/samrit.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>
                  Baby just knows everything, high IQ level- 300+ cards
                  recognition
                </p>
              </div>
            </div>
            {/* 5 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/YE4SXS-KukQ?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/babies/kiaansh.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>Just 3 months old and rolling over without any help</p>
              </div>
            </div>
            {/* 6 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/K-b49uIOIUQ?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/babies/cherry.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>
                  8 months baby can follow complex instructions with ease -
                  Exceeding all Milestones
                </p>
              </div>
            </div>
            {/* 7 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/OoHhJZafXsU?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='	https://www.uptodd.com/images/newWebsite/babies/priyasmita.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>18 months baby is mastering pictorial reading - Wonderful</p>
              </div>
            </div>
            {/* 8 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/OoHhJZafXsU?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='	https://www.uptodd.com/images/newWebsite/babies/kairav.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>18 months baby is mastering pictorial reading - Wonderful</p>
              </div>
            </div>
            {/* 9 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/4H7X8LBMjLw?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/babies/mayra.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>20 months baby knows 100 animals and their kids</p>
              </div>
            </div>
            {/* 10 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/hd7NOo-AZ_U?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='	https://www.uptodd.com/images/newWebsite/babies/moma_popsy.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>
                  Genius twins can identify 500+ insects and animals flashcards
                </p>
              </div>
            </div>
            {/* 11 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/xzEETY1V6X4?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='	https://www.uptodd.com/images/newWebsite/babies/shidhaan.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>6.5 months baby can identify 100+ flashcards</p>
              </div>
            </div>
            {/* 12 */}
            <div class="baby-card">
              <div class="baby-card-image-part">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/ONi1rXrmcKQ?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/babies/krishiv.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' fill='none' style='width:75px; height:75px; position: relative; top:28%;'><mask id='mask0_303_1647' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='75' height='75'><rect width='75' height='75' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1647)'><path d='M29.6873 51.5623L51.5623 37.4998L29.6873 23.4373V51.5623ZM37.4998 68.7498C33.1768 68.7498 29.1143 67.9294 25.3123 66.2888C21.5102 64.6482 18.2029 62.4216 15.3904 59.6091C12.5779 56.7966 10.3513 53.4893 8.71069 49.6873C7.07007 45.8852 6.24976 41.8227 6.24976 37.4998C6.24976 33.1768 7.07007 29.1143 8.71069 25.3123C10.3513 21.5102 12.5779 18.2029 15.3904 15.3904C18.2029 12.5779 21.5102 10.3513 25.3123 8.71069C29.1143 7.07007 33.1768 6.24976 37.4998 6.24976C41.8227 6.24976 45.8852 7.07007 49.6873 8.71069C53.4893 10.3513 56.7966 12.5779 59.6091 15.3904C62.4216 18.2029 64.6482 21.5102 66.2888 25.3123C67.9294 29.1143 68.7498 33.1768 68.7498 37.4998C68.7498 41.8227 67.9294 45.8852 66.2888 49.6873C64.6482 53.4893 62.4216 56.7966 59.6091 59.6091C56.7966 62.4216 53.4893 64.6482 49.6873 66.2888C45.8852 67.9294 41.8227 68.7498 37.4998 68.7498Z' fill='white'/><path d='M29.5 52V23L52 37.5L29.5 52Z' fill='#FF3F4E'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="baby-card-text-part">
                <p>Super active and super energetic</p>
              </div>
            </div>
          </div>
          <img
            className="baby-card-slider-next"
            src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
            loading="lazy"
            alt="Next Brilliant Baby"
          />
          <img
            className="baby-card-slider-prev"
            src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
            loading="lazy"
            alt="Prev Brilliant Baby"
          />
        </div>
      </section>

      {/* How our Program Works !! */}

      <Step />

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
              onError="this.onError=null; this.src='/images/newWebsite/why-uptodd/why-uptodd-1.png'"
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
              onError="this.onError=null; this.src='/images/newWebsite/why-uptodd/why-uptodd-2.png'"
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
              onError="this.onError=null; this.src='/images/newWebsite/why-uptodd/why-uptodd-3.png'"
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
              onError="this.onError=null; this.src='/images/newWebsite/why-uptodd/why-uptodd-4.png'"
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
          <button
            id="premiumScreenStartNowBannerBookDemo"
            onClick={handleOpenPopup}
          >
            Start Now
          </button>
          {/* Popup Logic */}
          {isPopupOpen && <Popup closePopup={handleOpenPopup} />}
        </div>
      </section>

      {/* Brilliant Minds: Celebrating Global Baby Champions */}

      <section className="awared-babies">
        <h1>
          Brilliant Minds: <span> Celebrating Global Baby Champions</span>
        </h1>
        <div className="baby-award-list-container">
          <div className="baby-award-list">
            <div className="baby-award-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/awards/dhruvut.webp"
                onError="this.onError=null; this.src='/images/newWebsite/awards/dhruvut.png'"
                loading="lazy"
                alt="Uptodd genius baby Dhruvut - Kalam's World Record"
              />
              <p>
                Dhruvut - Kalam's World Record<br></br>
                <span>
                  UpTodd's Little Genius identified 416 Flashcards within 10
                  Minutes
                </span>
              </p>
            </div>
            <div className="baby-award-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/awards/freya.webp"
                onError="this.onError=null; this.src='/images/newWebsite/awards/freya.png'"
                loading="lazy"
                alt="Uptodd genius baby Freya - Young Milestone Achiever"
              />
              <p>
                Freya - Young Milestone Achiever<br></br>
                <span>
                  UpTodd's Little Genius recorded identification of record 60+
                  flashcards in 7 minutes
                </span>
              </p>
            </div>
            <div className="baby-award-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/awards/aastik.webp"
                onError="this.onError=null; this.src='/images/newWebsite/awards/aastik.png'"
                loading="lazy"
                alt="Uptodd genius baby Aastik | International Book of REX Award"
              />
              <p>
                Aastik - International Book of REX Award<br></br>
                <span>
                  UpTodd's Little Genius spoke 103 words of Animals, Flowers,
                  Flags etc. within 23 Minutes
                </span>
              </p>
            </div>
            <div className="baby-award-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/awards/Tejasawi.webp"
                onError="this.onError=null; this.src='/images/newWebsite/awards/Tejasawi.png'"
                loading="lazy"
                alt="Uptodd genius baby Tejasawi | NYT Times - Little Genius"
              />
              <p>
                Tejasawi - NYT Times - Little Genius<br></br>
                <span>
                  UpTodd's Little Genius recorded solving 4 sets of 16 pattern
                  puzzles in 218 seconds
                </span>
              </p>
            </div>
            <div className="baby-award-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/awards/kedar.webp"
                onError="this.onError=null; this.src='/images/newWebsite/awards/kedar.png'"
                loading="lazy"
                alt="Uptodd genius baby Kedar | Wall Street - Gloabal Awardee"
              />
              <p>
                Kedar - Wall Street - Gloabal Awardee<br></br>
                <span>
                  UpTodd's Little Genius stood as Rank-1 in 10 different events,
                  among most talented global babies
                </span>
              </p>
            </div>
            <div className="baby-award-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/awards/manasmita.webp"
                onError="this.onError=null; this.src='/images/newWebsite/awards/manasmita.png'"
                loading="lazy"
                alt="Uptodd genius baby Manasmita | Kalams World Record"
              />
              <p>
                Manasmita - Kalams World Record<br></br>
                <span>500+ Different objects in 5 minutes</span>
              </p>
            </div>
            <div className="baby-award-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/awards/tejas.webp"
                onError="this.onError=null; this.src='/images/newWebsite/awards/tejas.png'"
                loading="lazy"
                alt="Uptodd genius baby Tejas | New York Times - World Record"
              />
              <p>
                Tejas - New York Times World Record<br></br>
                <span>
                  UpTodd's Little Genius spoke 800 different words of variety of
                  things within 29 Minutes
                </span>
              </p>
            </div>
          </div>
          <img
            className="baby-award-slider-next"
            src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
            loading="lazy"
            alt="Next Genius Bbay"
          />
          <img
            className="baby-award-slider-prev"
            src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
            loading="lazy"
            alt="Prev Genius Baby"
          />
        </div>
      </section>

      {/* Bending line */}

      <section className="dividing-curly-svg">
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
      </section>

      {/* Happy Parents, Thriving Tots:Witnessing Their Child's Growth  */}

      <section className="happy-parents" id="happy-parents">
        <h1>
          Happy Parents, Thriving Tots:
          <span>Witnessing Their Child's Growth</span>
        </h1>
        <h5>Smarter Investment: Personalized Learning vs. Traditional Toys</h5>
        <div className="happy-parent-list-container">
          <div className="happy-parent-list">
            {/* 1 */}
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/LgQNwsePBBU?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/happy-parents/happy-parent-1.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Audio visual technology is creating a difference and has
                  become a positive routine in my baby growth.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/9gARbWYs_oA?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='	https://www.uptodd.com/images/newWebsite/happy-parents/happy-parent-9.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Monthly developmental reports in Uptodd’s parenting program
                  help me in identifying and resolving gaps in my baby brain
                  development.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/_VP-LnAATCs?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='	https://www.uptodd.com/images/newWebsite/happy-parents/happy-parent-2.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Uptodd is the One place for all Parenting "Needs" and complete
                  growth of my baby.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/OuCVjrXvQGE?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/happy-parents/happy-parent-3.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Searching for Parenting Problem for baby? One Stop solution -
                  Only UpTodd
                </p>
              </div>
            </div>
            {/* 5 */}
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/Oil_sH2wQmQ?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/happy-parents/happy-parent-4.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Unique baby activities - Everyone must try their expert
                  parenting program
                </p>
              </div>
            </div>
            {/* 6 */}
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/YI-L4Kl-zvQ?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/happy-parents/happy-parent-5.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Being first-time parents, UpTodd guided us, being first-time
                  parents, with their comprehensive parenting program for baby
                  development.
                </p>
              </div>
            </div>
            {/* 7 */}
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/XPHIwRvVcro?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/happy-parents/happy-parent-6.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Brain boosters and Neural Music remove my baby's anxiety and
                  help in toddler’s development - genius in making
                </p>
              </div>
            </div>
            {/* 8 */}
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/j-2dLZ4vdP8?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/happy-parents/happy-parent-7.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  I am happy to see the progress of my baby’s brain growth,
                  through Uptodd activities.
                </p>
              </div>
            </div>
            {/* 9 */}
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/yo9kFL29yHU?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/happy-parents/happy-parent-8.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Recognises all the household items through Uptodd flash cards
                  kit - Happy to see my little baby brain growing
                </p>
              </div>
            </div>
            {/* 10 */}
            <div class="happy-parent-card">
              <div class="happy-parent-image">
                <iframe
                  loading="lazy"
                  srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/Hz--XOAILY4?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/happy-parents/happy-parent-10.png' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:20%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="72071507"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
              </div>
              <div class="happy-parent-quote">
                <img
                  src="https://www.uptodd.com/images/newWebsite/quote.svg"
                  loading="lazy"
                  alt="quote"
                />
                <p>
                  Proud MOM of International Record Holder at UpTodd, Dhruvut
                </p>
              </div>
            </div>
          </div>
          <img
            className="happy-parents-slider-next"
            src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
            loading="lazy"
            alt="Next Happy Parent"
          />
          <img
            className="happy-parents-slider-prev"
            src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
            loading="lazy"
            alt="Prev Happy Parent"
          />
        </div>{" "}
        <div className="happy-parents-button">
          <button
            className="btn"
            id="premiumScreenHappyParentsSection"
            onClick="showBookDemoPopup('happyParents')"
          >
            Fuel Your Child's Development!
          </button>
        </div>
      </section>

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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/jaideep_sharma.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/krishna_vedula.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/manoj_mondal.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/vaishal_sharma.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/sudhanshu.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/mani_kapur.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/saurabh_khanna.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/sarvesh_thakur.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/vipul_sehrawat.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/aditya_sharma.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/doctors/rohit_kalani.png'"
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
            onError="this.onError=null; this.src='/images/newWebsite/research-insti.png'"
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
            onError="this.onError=null; this.src='/images/newWebsite/research-insti-mobile.png'"
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
            onError="this.onError=null; this.src='/images/newWebsite/researchers/all_researchers.png'"
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
                onError="this.onError=null; this.src='/images/newWebsite/researchers/glenn-doman.png'"
                loading="lazy"
                alt="glenn-doman baby development expert"
              />
              <h3>Glenn Doman</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/maria-montessori.webp"
                onError="this.onError=null; this.src='/images/newWebsite/researchers/maria-montessori.png'"
                loading="lazy"
                alt="maria-montessori baby development expert"
              />
              <h3>Maria Montessori</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/rudolf-steiner.webp"
                onError="this.onError=null; this.src='/images/newWebsite/researchers/rudolf-steiner.png'"
                loading="lazy"
                alt="rudolf-steiner baby development expert"
              />
              <h3>Rudolf Steiner</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/bf-skinner.webp"
                onError="this.onError=null; this.src='/images/newWebsite/researchers/bf-skinner.png'"
                loading="lazy"
                alt="bf-skinner baby development expert"
              />
              <h3>BF Skinner</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/loris-malaguzzi.webp"
                onError="this.onError=null; this.src='/images/newWebsite/researchers/loris-malaguzzi.png'"
                loading="lazy"
                alt="loris-malaguzzi baby development expert"
              />
              <h3>Loris Malaguzzi</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/howard-gardner.webp"
                onError="this.onError=null; this.src='/images/newWebsite/researchers/howard-gardner.png'"
                loading="lazy"
                alt="howard-gardner baby development expert"
              />
              <h3>Howard Gardner</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/diana-baumrind.webp"
                onError="this.onError=null; this.src='/images/newWebsite/researchers/diana-baumrind.png'"
                loading="lazy"
                alt="diana-baumrind baby development expert"
              />
              <h3>Diana Baumrind</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/swami-vivekanand.webp"
                onError="this.onError=null; this.src='/images/newWebsite/researchers/swami-vivekanand.png'"
                loading="lazy"
                alt="swami-vivekanand"
              />
              <h3>Swami Vivekanand</h3>
            </div>
            <div>
              <img
                src="https://www.uptodd.com/images/newWebsite/researchers/jean-piaget.webp"
                onError="this.onError=null; this.src='/images/newWebsite/researchers/jean-piaget.png'"
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
            <button
              className="btn"
              id="premiumScreenSuperPremiumProgram"
              onClick={handleOpenPopup}
            >
              Enroll Now
            </button>
            {/* Popup Logic */}
            {isPopupOpen && <Popup closePopup={handleOpenPopup} />}
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
            <button
              className="btn"
              id="premiumScreenStandardPremiumProgram"
              onClick={handleOpenPopup}
            >
              Enroll Now
            </button>
            {/* Popup Logic */}
            {isPopupOpen && <Popup closePopup={handleOpenPopup} />}
          </div>
        </div>
        <div className="see-more-product">
          <p>
            Want to know more about program &nbsp;
            <span
              id="premiumScreenViewDetailedProgramDetails"
              onClick="showProgramDetailsPopup()"
              style={{ color: "#ff5766" }}
            >
              see here
            </span>
          </p>
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
          <div class="kit-video">
            <iframe
              loading="lazy"
              srcdoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/r1SwlfmvuCM?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/kit-video.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:3%;top:30%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>"
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

      <section className="our-mentors" id="our-mentors">
        <h1>
          Meet our Mentors &amp; Curators |
          <span>100+ Curators R&amp;D Team</span>
        </h1>
        <div className="mentors-list">
          <div className="mentors-list-inner">
            <div className="mentor-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/professors/krishna_vedula.webp"
                onError="this.onError=null; this.src='/images/newWebsite/professors/krishna_vedula.png'"
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
                onError="this.onError=null; this.src='/images/newWebsite/professors/jaideep_sharma.png'"
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
                onError="this.onError=null; this.src='/images/newWebsite/professors/sudhanshu.png'"
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
                onError="this.onError=null; this.src='/images/newWebsite/professors/manoj_mondal.png'"
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
                onError="this.onError=null; this.src='/images/newWebsite/professors/PK_Mishra.png'"
                loading="lazy"
                alt="Uptodd mentor PK Mishra IIT BHU"
              />
              <h3>
                Prof. PK Mishra
                <br />
                <span>IIT BHU</span>
              </h3>
            </div>
            <div className="mentor-card">
              <img
                src="https://www.uptodd.com/images/newWebsite/professors/krishna_vedula.webp"
                onError="this.onError=null; this.src='/images/newWebsite/professors/krishna_vedula.png'"
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
                onError="this.onError=null; this.src='/images/newWebsite/professors/jaideep_sharma.png'"
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
                onError="this.onError=null; this.src='/images/newWebsite/professors/sudhanshu.png'"
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
                onError="this.onError=null; this.src='/images/newWebsite/professors/manoj_mondal.png'"
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
                onError="this.onError=null; this.src='/images/newWebsite/professors/PK_Mishra.png'"
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
        </div>
        <h1>UpTodd™ has been Featured In</h1>
        <div className="featured-in">
          <img
            src="https://www.uptodd.com/images/newWebsite/featured-in.webp"
            onError="this.onError=null; this.src='/images/newWebsite/featured-in.png'"
            loading="lazy"
            alt="Media Houses Featuring UpTodd"
          />
        </div>
      </section>

      {/* Your Frequently Asked Questions */}

      <Faq />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Premium;
