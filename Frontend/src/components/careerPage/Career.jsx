import React from "react";
import "./Career.css";
import airtel_logo from "../../assets/images/airtel_logo.jpg";
import ApplicationForm from "./ApplicationForm";
import { careerAbout } from "../../assets/data/careerAbout";
import { teamCards } from "../../assets/data/teamCards";
import { mentorsDetails } from "../../assets/data/mentorsDetails";

function Career() {
  return (
    <div className="career-container">
      <div className="career-main">
        <img src="https://www.uptodd.com/images/execution-team.webp" alt="" />
      </div>

      {/* Why Join Us? Section*/}
      <div className="career-joinUs">
        <h1>Why Join Us?</h1>
        <p>
          At UpTodd, we're not merely creating solutions; we're nurturing dreams
          and building futures. We stand as the planet's best and only truly
          personalized, one-stop platform dedicated to empowering parents with
          unparalleled guidance for their children's development. Our heart
          beats with the passion of a thousand dreams, each one dedicated to the
          potential that every child holds within.
        </p>

        <p>
          Join us, and be a part of a visionary team that believes in love,
          growth, and the transformative power of parenting done right. Your
          work here isn't just a job; it's a legacy. A chance to touch lives,
          mold futures, and contribute to a brighter world. We are pioneers,
          charting unexplored territories to ensure every parent has the tools,
          knowledge, and support to unlock their child's boundless potential.
        </p>

        <p>
          This is more than a call to action. It's a call to heart, to purpose,
          and to the profound impact we can make together. UpTodd is your
          platform to inspire, to change, and to lead with love. Join us in
          shaping a future where every child thrives, powered by the world's
          most dedicated team of dreamers, doers, and believers.
        </p>

        <p>
          If your heart beats for making a real difference and you yearn to be
          part of a cause that matters, UpTodd awaits. Let's create a legacy of
          empowered parenting, one child at a time.
        </p>
      </div>

      {/* About Section */}
      <div className="career-about-cards">
        {careerAbout.map((data) => (
          <div key={data.id} className="career-about-card">
            <div className="career-about-card-image">
              <img src={data.image} alt="Career About Images" />
            </div>
            <div className="career-about-card-content">
              <h1>{data.name}</h1>
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Life Section*/}
      <div className="career-life">
        <h1>Life at UpTodd</h1>
        <p>A workspace that promotes professional and personal growth.</p>
        <div className="career-life-image">
          <img
            src="https://www.uptodd.com/images/career/gallery2.webp"
            alt="Employees Photos"
          />
          <img
            src="https://www.uptodd.com/images/career/gallery1.webp"
            alt="Employees Photos"
          />
          <img
            src="https://www.uptodd.com/images/career/gallery4.webp"
            alt="Employees Photos"
          />
          <img
            src="https://www.uptodd.com/images/career/gallery3.webp"
            alt="Employees Photos"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="career-team">
        <div className="career-team-content">
          <h1>Join our team</h1>
          <p>
            At UpTodd, we strive to be the beacon of personalized parenting,
            offering unmatched support and insights to parents worldwide. Our
            mission is simple: to make every child's potential boundless and
            every parent's journey joyful. Here, innovation meets empathy,
            creating a future where parenting is not just easier but a truly
            enriching experience. Join us, and be part of a movement where
            nurturing the future stars becomes a shared passion.
          </p>
        </div>

        <div className="career-team-cards">
          {teamCards.map((data) => (
            <div key={data.id} className="career-team-card">
              <img src={data.image} alt="Image" />
              <h1>{data.name}</h1>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>

        {/* Mentor Section */}
        <div className="career-mentor">
          <h1>Meet our Mentors & Curators | 100+ Curators R&D Team</h1>
          <div className="career-mentor-cards">
            {mentorsDetails.map((data) => (
              <div key={data.id} className="career-mentor-card">
                <img src={data.image} alt="Profile" />
                <h2>{data.name}</h2>
                <h3>{data.position}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ApplicationForm Section */}
      <ApplicationForm />

      {/* Career Footer Section */}
      <div className="career-footer">
        <div className="career-footer-about">
          <h2>About UpTodd</h2>
          <p>
            Introducing the world's best and only true personalized one-stop
            (patent pending) platform for the holistic developmental needs of
            infants and toddlers aged 0-5 years — setting a new standard in
            early childhood care.
            <br />
            At UpTodd, we've carefully curated our approach by leveraging
            insights from over 10,000+ research papers and tapping into the
            expertise of professionals from prestigious institutions like MIT,
            Stanford, IITs, and AIIMS. Our program integrates techniques from
            globally recognized methodologies, including early stimulation from
            Glenn Doman, Montessori's emphasis on independence and exploration,
            Howard Gardner's theory of multiple intelligences from Harvard
            University, Waldorf's holistic approach, the Reggio Emilia
            Approach's focus on creativity, indigenous parenting and mindful
            parenting. This comprehensive approach empowers babies worldwide to
            thrive and reach their full potential with evidence-based guidance.
          </p>
        </div>

        <div className="career-footer-journey">
          <h2>Our Journey</h2>
          <p>
            In 2015, three passionate individuals embarked on a mission to
            uplift children's lives. As they ran an education-focused NGO, they
            uncovered a shared concern – young minds with untapped potential,
            hindered by foundational gaps.
            <br />
            After conducting extensive meetings with more than 5,000 parents of
            infants aged 0-5 years, which included their own families, a shared
            aspiration became evident: to provide brightest possible future to
            the child. But they observed challenges arising from the rapid pace
            of the contemporary world, leading to a decline in access to natural
            socialization & outdoor experiences that were once readily
            available. Additionally, there was a notable absence of guidance to
            help unlock the untapped potential of the babies.So, in
            collaboration with esteemed experts, We developed a tailored
            solution aimed at promoting brain development & delivering
            essentials. The results were astounding.
            <br />
            In 2019, UpTodd was born, accessible to parents in over 150
            countries. We passionately believe that every child, regardless of
            their background, possesses boundless potential. We're here to guide
            you on a scientific and emotional journey to unlock it, by a
            customised program made for your baby.
            <br />
            <br />
            Join us on this captivating journey, where every child is truly
            special, and every family's dreams matter.
          </p>
        </div>

        <div className="career-footer-icons">
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
          <img src={airtel_logo} alt="" />
        </div>

        <hr />

        <div className="career-footer-lastDiv">
          <h4>Copyright UpTodd Care Pvt ltd © 2024. All Rights Reserved</h4>
          <h4>
            Made with Love <span>❤</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Career;
