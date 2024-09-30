import React, { useState } from "react";
import "./PopUp.css";
import SubscriptionBox from "./SubscriptionBox";

function PopUp() {
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

  return (
    <>
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

      {/* Render SubscriptionBox only if ageInMonths is not null */}
      {ageInMonths !== null && <SubscriptionBox age={ageInMonths} />}
    </>
  );
}

export default PopUp;
