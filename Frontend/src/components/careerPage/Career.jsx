import { useState } from "react";
import "./Career.css";
import profile1 from "../../assets/images/subscription/profile1.png";
import baby2 from "../../assets/images/subscription/baby2.webp";
import airtel_logo from "../../assets/images/airtel_logo.jpg";
import PopUp from "../subscriptionBox/PopUp";

function Career() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileValidation = (file) => {
    const validExtensions = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 1 * 1024 * 1024; // 2MB
    if (!validExtensions.includes(file.type)) {
      return "Invalid file type. Only PDF, DOC, and DOCX are allowed.";
    }
    if (file.size > maxSize) {
      return "File size exceeds the limit of 1MB.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = e.target.resume.files[0];
    const fileValidationMessage = handleFileValidation(file);

    if (fileValidationMessage) {
      setErrorMessage(fileValidationMessage);
      setSuccessMessage("");
      return;
    }

    const formData = new FormData(e.target); // Collect the form data

    try {
      console.log("Sending request to server...");
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorResult = await response.json();
        console.error("Error response:", errorResult);
        throw new Error(errorResult.message || "Network response was not ok.");
      }

      const result = await response.json();
      console.log("Response data:", result);

      // Check if the response is successful
      if (response.ok) {
        setSuccessMessage(
          result.message || "Application submitted successfully!"
        );
        setErrorMessage("");
      } else {
        setErrorMessage(
          result.message ||
            "Failed to submit the application. Please try again."
        );
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage(
        "An error occurred while submitting your application. Please try again."
      );
      setSuccessMessage("");
      console.error("Error:", error);
    }
  };

  const careerAbout = [
    {
      id: 0,
      image: "https://www.uptodd.com/images/career/why-join-icon1.svg",
      name: "Role With a purpose",
      desc: "Role with an opportunity to nurture Future Generation",
    },
    {
      id: 1,
      image: "https://www.uptodd.com/images/career/why-join-icon2.svg",
      name: "Impact at Work",
      desc: "Empower every moment with the magic of growth, transforming tiny steps into giant leaps for the future's architects.",
    },
    {
      id: 2,
      image: "https://www.uptodd.com/images/career/why-join-icon3.svg",
      name: "Collaborative culture",
      desc: "Easily approachable and cooperative team with no air around designations",
    },
    {
      id: 3,
      image: "https://www.uptodd.com/images/career/why-join-icon4.svg",
      name: "Vision-Oriented Team",
      desc: "Join a constellation of dreamers and doers, united by a vision to unlock the infinite potential of every child",
    },
  ];

  const teamCards = [
    {
      id: 0,
      image: "https://www.uptodd.com/images/career/academics.webp",
      name: "Product Team",
      desc: "Crafting tomorrow's innovations today, our Product Team weaves technology and empathy into solutions that redefine parenting",
    },
    {
      id: 1,
      image: "https://www.uptodd.com/images/career/developer.webp",
      name: "Tech Team",
      desc: "Empowering the future of parenting with cutting-edge technology, our Tech Team is the heartbeat of innovation at UpTodd",
    },
    {
      id: 2,
      image: "https://www.uptodd.com/images/career/branding.webp",
      name: "Marketing Team",
      desc: "Shaping narratives and connecting hearts, our Marketing Team masterfully spreads the UpTodd story, turning insights into impact",
    },
    {
      id: 3,
      image: "https://www.uptodd.com/images/career/sales.webp",
      name: "Sales Team",
      desc: "Driving growth and forging paths, our Business Team navigates opportunities to elevate UpTodd on the global stage",
    },
    {
      id: 4,
      image: "https://www.uptodd.com/images/career/contents.webp",
      name: "Content Team",
      desc: "Crafting the voice of tomorrow, our Content Team blends creativity with strategy to inspire and educate parents at every step",
    },
  ];

  const mentorsDetails = [
    {
      id: 1,
      image: profile1,
      name: "Dr. Jaideep Sharma",
      position: "MBBS & MD, AIIMS, New Delhi",
    },
    {
      id: 2,
      image: profile1,
      name: "Krishna Vedula",
      position: "Professor, MIT, United States",
    },
    {
      id: 3,
      image: profile1,
      name: "Dr. Sudhanshu",
      position: "MD, DSMA Russia, CMC Vellore",
    },
    {
      id: 4,
      image: profile1,
      name: "Manoj Mondal",
      position: "Professor, IIT Kharagpur",
    },
    {
      id: 5,
      image: profile1,
      name: "Richa Singh",
      position: "PhD, IIT BHU",
    },
  ];

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

      {/* Kits PopUp Section */}
      <div className="career-kit-popup">
        <h1>Buy Baby's Developmental Kit For Your Baby</h1>
        <img src={baby2} alt="Kits Photo" />
        <PopUp />
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

      {/* Application Form Section*/}
      <div className="career-form">
        <h1>Apply for the Job</h1>
        <form
          id="jobApplicationForm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <label htmlFor="fullname">Full Name *</label>
          <input type="text" id="fullname" name="fullname" required />

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone *</label>
          <input type="text" id="phone" name="phone" required />

          <label htmlFor="gender">Gender *</label>
          <select id="gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="jobrole">Job Role *</label>
          <select id="jobrole" name="jobrole" required>
            <option value="test">Test</option>
            <option value="dev">Dev</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="resume">Upload Resume (PDF/DOC/DOCX) *</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf, .doc, .docx"
            required
          />

          <button type="submit">Submit Application</button>
        </form>

        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>

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
          <p>Copyright UpTodd Care Pvt ltd © 2024. All Rights Reserved</p>
          <h5>Made With &#9829;</h5>
        </div>
      </div>
    </div>
  );
}

export default Career;
