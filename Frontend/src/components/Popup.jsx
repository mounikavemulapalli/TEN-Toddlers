import { useForm } from "react-hook-form"
import countryList from '../Lists/countryCode.json';
import './Popup.css';
import Button from './Button';

export default function Popup({closePopup}) {
  const onSubmit = (e) => {
    e.preventDefault;
    console.log("Form submitted");
  }
  const {register, handleSubmit, formState: {errors}, trigger} = useForm();
  return (
    <div className="popup-container">
      <div className="popup-overlay"></div>
      <div className="lead-form-container">
        <div className='lead-form-head'>
          <button
              onClick={closePopup}
              className="close-btn"
          >
              ✕
          </button>
          <h2>Book Demo Session (0-4.5 yrs)</h2>
          <p>Only 4 Spots Left!</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="lead-form" method="POST">
          <div>
            <input 
              type="text"
              placeholder="Full Name"
              {...register("fullName", {
                required: "Full name is required",
              })}
              onBlur={() => trigger("fullName")}
            />
            {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
          </div>
          <div>
            <input 
              type="email"
              placeholder="Email id"
              {...register("email", {required: "Email is required"})}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div>
            <div className="form-mobile">
              <select name="mobileCode" id="search_categories" {...register('mobileCode', {required: "Mobile code is required"})}>
                {countryList.map((country) => (
                    <option key={country.code} value={country.dialCode} data-value={country.code}>
                        {country.dialCode} - {country.name}
                    </option>
                ))}
              </select>
              <input 
                type="tel"
                placeholder="Enter your mobile number"
                {...register("mobile", {required: "Mobile number is required"})}
              />
            </div>
            {errors.mobile && <p className="error-message">{errors.mobile.message}</p>}
          </div>
          <div>
            <h4>Your Child's Date of Birth</h4>
            <div className="form-baby-age-group">
              <input 
                type="radio"
                id="0-6"
                value="0-6 Months"
                {...register("babyAge", {required: "Please select your child's age group"})}
              />
              <label htmlFor="0-6">0-6 Months</label>

              <input 
                type="radio"
                id="7-24"
                value="7-24 Months"
                {...register("babyAge", {required: "Please select your child's age group"})}
              />
              <label htmlFor="7-24">7-24 Months</label>

              <input 
                type="radio"
                id="25-48"
                value="25-48 Months"
                {...register("babyAge", {required: "Please select your child's age group"})}
              />
              <label htmlFor="25-48">25-48 Months</label>
              {errors.babyAge && <p className="error-message">{errors.babyAge.message}</p>}
            </div>
          </div>
          <Button type="submit" id="registerForSession">Apply Now</Button>
          <p  className="form-terms-conditions">
            UpTodd&apos;s <a href="/terms-conditions" target="_blank">Terms & Conditions</a> and&nbsp;
            <a href="/privacy-policy" target="_blank">Privacy Policy</a> for complete data security
          </p>
        </form>
        <div className="lead-form-footer">
          <div className="form-security-img">
            <img src="https://www.uptodd.com/images/newWebsite/security/1.webp" alt="Avast" />
            <img src="https://www.uptodd.com/images/newWebsite/security/2.webp" alt="Https" />
          </div>
        </div>
      </div>
    </div>

  )
}
