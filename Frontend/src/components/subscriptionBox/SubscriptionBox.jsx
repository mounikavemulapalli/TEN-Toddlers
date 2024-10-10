import React, { useEffect, useState } from "react";
import "./SubscriptionBox.css";
import baby1 from "../../assets/images/subscription/baby1.avif";
import baby2 from "../../assets/images/subscription/baby2.webp";
import baby3 from "../../assets/images/subscription/baby3.webp";
import YouTube from "react-youtube";
import Mentors from "../comman/Mentors";

function SubscriptionBox() {
  const [kitsData, setKitsData] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [ageInMonths, setAgeInMonths] = useState(null);

  // Function to toggle PopUp visibility
  const togglePopUp = () => setShowPopUp(!showPopUp);

  // Get the current year and populate years in the dropdown
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(8), (val, index) => currentYear - index);

  // Function to calculate the baby's age in months
  const calculateAgeInMonths = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-based, so add 1
    const currentYear = currentDate.getFullYear();

    const monthNumber = parseInt(selectedMonth); // Selected month from dropdown
    const yearNumber = parseInt(selectedYear); // Selected year from dropdown

    // Calculate the difference in years and months
    const yearDifference = currentYear - yearNumber;
    const monthDifference = currentMonth - monthNumber;

    // Calculate total age in months
    const totalMonths = yearDifference * 12 + monthDifference;

    return totalMonths;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const age = calculateAgeInMonths();
    setAgeInMonths(age); // Store the calculated age

    // Reset the selected fields
    setSelectedMonth("");
    setSelectedYear("");
    setShowPopUp(false); // Close modal after submission
  };

  useEffect(() => {
    const fetchKitsData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/kits/byMonth?months=${ageInMonths} months`
        );

        console.log(response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

        setKitsData(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchKitsData();
  }, [ageInMonths]);

  const videoOptions = {
    width: "100%",
    height: "300px",
    playerVars: {
      autoplay: 0,
      rel: 0,
    },
  };
  const onVideoReady = (event) => {
    event.target.pauseVideo();
  };

  const awardData = [
    {
      id: 0,
      image: baby1,
      name: "Dhruvut | Kalam's World Record",
      age: "8 Months Old Baby",
      about:
        "UpTodd's Little Genius identified 416 Flashcards within 10 Minutes",
    },
    {
      id: 1,
      image: baby1,
      name: "Aastik | International Book of REX Award",
      age: "10 Months Old Baby",
      about:
        "UpTodd's Little Genius spoke 103 words of Animals, Flowers, Flags etc. within 23 Minutes",
    },
    {
      id: 2,
      image: baby1,
      name: "Tejas | New York Times - World Record",
      age: "1 year & 6 Months Old Baby",
      about:
        "UpTodd's Little Genius spoke 800 different words of variety of things within 29 Minutes",
    },
  ];

  const parentsData = [
    {
      id: 0,
      image: baby1,
      name: "Kedar, 7 Months Old",
      about:
        "I am super happy with kit, and its highly recommended for all parents. Things which I liked most are dashboard tutorials, high quality finish in the materials, milestone tracker and diet plan. Its completely worth it to the investment I made, at this cost nothing can be better than this.",
      parent: "- Kedar's Mother",
    },
    {
      id: 1,
      image: baby1,
      name: "Aahana, 2 Years and 8 Months Old",
      about:
        "We found out that our daughter is not active at all, neither in terms of physical activity nor she likes the presence of anyone apart from me. But this kit has provided exceptional support to me in the journey and its just wow.",
      parent: "- Aahana's Mother",
    },
    {
      id: 2,
      image: baby1,
      name: "Miss Sandhya's baby, 1.5 Weeks Old",
      about:
        "UpTodd kit is just great, I really liked the quality of materials and scientific aspects behind it. Overall package looks very complete as every essentials are covered.",
      parent: "- Miss Sandhya",
    },
    {
      id: 3,
      image: baby1,
      name: "Aesha, 1.5 Years old",
      about:
        "Its much better than any kit purchased by me till date, best part is the linkage of kit with the dashboard is just amazing. Overall its amazing with milestones, diet and parenting intro program.",
      parent: "- Aesha’s Father",
    },
    {
      id: 4,
      image: baby1,
      name: "Faria, 6 Months Old",
      about:
        "Thanks to my Dr Pradeep for suggesting such an amazing kit, my girl is doing excellent now in all the terms. This is wonderful kit with every thing arranged and provided in the best shape.",
      parent: "- Faria’s Mother",
    },
  ];

  return (
    <>
      <div className="sub-container">
        {/* Main Section */}
        <div className="sub-mainDiv">
          <div className="sub-mainDiv-img">
            <img src={baby1} alt="Baby Image" />
          </div>
          <div className="sub-mainDiv-content">
            <h1>Brain Developmental Boxes</h1>
            <hr />
            <h2>Research Backed Toys</h2>
            <a href="#">EXPLORE</a>
          </div>
        </div>

        {/* Kits PopUp Section */}
        <div className="career-kit-popup">
          <h1>Buy Baby's Developmental Kit For Your Baby</h1>
          <img src={baby2} alt="Kits Photo" />
          <div className="PopUp">
            {/* Button to open the modal */}
            <button className="pop-select-button" onClick={togglePopUp}>
              Select Kit for your Baby
            </button>

            {/* Modal */}
            {showPopUp && (
              <div className="sub-popUp">
                <div className="sub-popUp-content">
                  <h1>Enter Child's DOB Get Super Developmental Kit Now</h1>
                  <h2>Baby's Month & Year of Birth</h2>

                  {/* Form to select month and year */}
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="month">Month:</label>
                    <select
                      id="month"
                      value={selectedMonth}
                      required
                      onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                      <option value="">Select Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>

                    <label htmlFor="year">Year:</label>
                    <select
                      id="year"
                      value={selectedYear}
                      required
                      onChange={(e) => setSelectedYear(e.target.value)}
                    >
                      <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <br />
                    <br />
                    <button className="popup-submit-button" type="submit">
                      Show My Baby's Kit
                    </button>
                  </form>

                  {/* Cancel Button */}
                  <button onClick={togglePopUp} className="popup-cancel-button">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Kits Section */}
        <h1 className="heading">
          Your
          <span> {ageInMonths} Months </span>Baby's Developmental Kit
        </h1>

        {kitsData &&
          kitsData.map((kit) => (
            <div key={kit._id} className="sub-kitDiv">
              <div className="sub-kitDiv-img">
                <img src={baby2} alt="Baby Image" />
              </div>
              <div className="sub-kitDiv-content">
                <h1>{kit.name}</h1>
                <h2>( For your {ageInMonths} Month's Baby )</h2>
                <ul>
                  {kit.feature.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h3>Save 19%</h3>
                <h4>
                  Rs. 3,570 <span> Rs. 2,890</span>
                </h4>
                <h5>Get at INR 2,790 on Checkout</h5>
                <h6>Free Shipping | Cash On Delivery(COD) Available</h6>
                <a href="#">Buy Now</a>
                <p>
                  Scientifically Designed in UpTodd’s Lab, exclusively created
                  for baby’s brain development
                </p>
              </div>
            </div>
          ))}

        {/* Video Section */}
        <h1 className="heading">Parent Unboxing UpTodd's Kit</h1>

        <div className="sub-videos">
          <div
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              width: "640px",
              height: "390px",
            }}
          >
            <YouTube
              videoId="Kj6ZzR0LKpg"
              opts={videoOptions}
              onReady={onVideoReady}
            />
          </div>
          <div
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              width: "640px",
              height: "390px",
            }}
          >
            <YouTube
              videoId="Kj6ZzR0LKpg"
              opts={videoOptions}
              onReady={onVideoReady}
            />
          </div>
        </div>

        {/* Research Section */}
        <div className="sub-research">
          <div className="sub-research-img">
            <img src={baby3} alt="Baby Image" />
          </div>
          <div className="sub-research-content">
            <h1>Research Backed Toys</h1>
            <ul>
              <li>Audio-Visual Toys</li>
              <li>Into Parenting Program</li>
              <li>Diet & Milestone planner</li>
            </ul>
            <a href="#">SHOP NOW</a>
          </div>
        </div>

        {/* Stories Section */}
        <h1 className="heading">
          Accessible & Affordable Brain Developmental Boxes
        </h1>
        <div className="sub-stories">
          <div
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              width: "640px",
              height: "300px",
            }}
          >
            <YouTube videoId="Kj6ZzR0LKpg" opts={videoOptions} />
          </div>
          <div className="stories-content">
            <h1>
              Creating success stories every day and adding smiles in 150K+
              Parents life
            </h1>
            <p>
              High quality research backed scientific toys to stimulate baby's
              development and growth, focussed to boost baby's neural synapses
              and shaping brain architecture.
            </p>
          </div>
        </div>

        {/* Award Section */}
        <h1 className="heading">Still Not Sure? See our Genius Awardees</h1>

        <div className="sub-award-cards">
          {awardData.map((data) => (
            <div key={data.id} className="sub-award-card">
              <img src={data.image} alt="Baby Image" />
              <h2>{data.name}</h2>
              <h2>{data.age}</h2>
              <p>{data.about}</p>
            </div>
          ))}
        </div>

        {/* Parents Section */}
        <div className="sub-parents">
          <h1 className="sub-parents-heading">
            We are Loved by Parents | 150K+ Parents
          </h1>
          <div className="sub-parents-cards">
            {parentsData.map((data) => (
              <div key={data.id} className="sub-parents-card">
                <img src={data.image} alt="Baby Image" />
                <h2>{data.name}</h2>
                <p>{data.about}</p>
                <h4>{data.parent}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Section */}
        <Mentors />
      </div>
    </>
  );
}

export default SubscriptionBox;
