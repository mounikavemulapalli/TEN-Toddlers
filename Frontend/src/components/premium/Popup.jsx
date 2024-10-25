import { useForm } from "react-hook-form";
import countryList from "../../assets/Lists/countryCode.json";
import "./Popup.css";
import Button from "./Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Popup({ closePopup }) {
  const {
    register,
    handleSubmit,
    watch, 
    setValue,
    formState: { errors },
    trigger,
  } = useForm();

  const selectedAge = watch("babyAge");

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const handleRadioChange = (value) => {
    setValue("babyAge", value);
  };

  return (
    <div className="popup-container">
      <div className="popup-overlay" onClick={closePopup}></div>
      <div className="lead-form-container">
        <div className="lead-form-head">
          <FontAwesomeIcon icon={faTimes} onClick={closePopup} className="close-btn" />
          <h2>Book Demo Session (0-4.5 yrs)</h2>
          <p>Only 4 Spots Left!</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="lead-form">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", {
                required: "Full name is required",
              })}
              onBlur={() => trigger("fullName")}
            />
            {errors.fullName && (
              <p className="error-message">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email id"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div>
            <div className="form-mobile">
              <select
                name="mobileCode"
                id="search_categories"
                {...register("mobileCode", {
                  required: "Mobile code is required",
                })}
              >
                {countryList.map((country) => (
                  <option
                    key={country.code}
                    value={country.dialCode}
                    data-value={country.code}
                  >
                    {country.dialCode} - {country.name}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                {...register("mobile", {
                  required: "Mobile number is required",
                })}
              />
            </div>
            {errors.mobile && (
              <p className="error-message">{errors.mobile.message}</p>
            )}
          </div>
          <div>
  <h4>Your Child's Date of Birth</h4>
  <div className="form-baby-age-group">
    <input
      type="radio"
      id="age-group-0-6"
      value="0-6 Months"
      {...register("babyAge", {
        required: "Please select your child's age group",
      })}
      onChange={() => handleRadioChange("0-6 Months")}
    />
    <label htmlFor="age-group-0-6" onClick={() => handleRadioChange("0-6 Months")}>0-6 Months</label>

    <input
        type="radio"
        id="age-group-7-24"
        value="7-24 Months"
        {...register("babyAge", {
          required: "Please select your child's age group",
        })}
        onChange={() => handleRadioChange("7-24 Months")}
      />
      <label htmlFor="age-group-7-24" onClick={() => handleRadioChange("7-24 Months")}>
        7-24 Months
      </label>

      <input
        type="radio"
        id="age-group-25-48"
        value="25-48 Months"
        {...register("babyAge", {
          required: "Please select your child's age group",
        })}
        onChange={() => handleRadioChange("25-48 Months")}
      />
      <label htmlFor="age-group-25-48" onClick={() => handleRadioChange("25-48 Months")}>
        25-48 Months
      </label>

      {errors.babyAge && (
        <p className="error-message">{errors.babyAge.message}</p>
      )}
  </div>
</div>


          <Button type="submit" id="registerForSession">
            Apply Now
          </Button>
          <p className="form-terms-conditions">
            UpTodd&apos;s{" "}
            <a href="/terms-conditions" target="_blank">
              Terms & Conditions
            </a>{" "}
            and&nbsp;
            <a href="/privacy-policy" target="_blank">
              Privacy Policy
            </a>{" "}
            for complete data security
          </p>
        </form>
        <div className="lead-form-footer">
          <div className="form-security-img">
            <img
              src="https://www.uptodd.com/images/newWebsite/security/1.webp"
              alt="Avast"
            />
            <img
              src="https://www.uptodd.com/images/newWebsite/security/2.webp"
              alt="Https"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
