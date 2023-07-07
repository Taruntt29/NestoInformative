import React from "react";
import "./BuilderForm.css";
import { Fade } from "react-reveal";
import { useState } from "react";
import { postAPI } from "../../../builder/Api/ApiRequest";
import { apiEndpoints } from "../../../builder/Api/ApiEndpoint";

const BuilderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phoneNumbe: "",
    email: "",
    typeOfProperty: "",
    locationProperty: "",
    projectName: "",
    description: "",
  });
  const handleInputData = (e) => {
    const { name, value } = e.target;
    setContactForm((prevContactForm) => ({
      ...prevContactForm,
      [name]: value,
    }));
  };
  const onSubmitHandler = async () => {
    debugger;
    setIsLoading(true);
    const response = await postAPI(
      apiEndpoints.addShareYourIntern,
      contactForm
    );
    console.log(response);
    setIsLoading(false);
  };

  return (
    <Fade bottom duration={1000} distance="100px" delay={100}>
      <div className="col-lg-4 builder-banner-col-3">
        <div className="builder-banner-col-3_title_div">
          <span className="builder-banner-col-3_title">
            List Your Property / Requirement
          </span>
        </div>
        <form action="#" className="builder-banner-col-3_form">
          <input
            required
            name="name"
            type="text"
            placeholder="Name"
            className="builder-banner-col-3_input"
            value={contactForm.name}
            onChange={handleInputData}
          />
          <input
            required
            name="phoneNumber"
            type="tel"
            maxLength="10"
            placeholder="Phone Number"
            className="builder-banner-col-3_input"
            value={contactForm.phoneNumber}
            onChange={handleInputData}
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Email Address"
            className="builder-banner-col-3_input"
            value={contactForm.email}
            onChange={handleInputData}
          />
          <select
            className="builder-banner-col-3_input builder-banner-col-3_select"
            value={contactForm.typeOfProperty}
            onChange={handleInputData}
          >
            <option value="" disabled selected>
              Property Type
            </option>
            <option value="Flats / Apartment">Flats / Apartment</option>
            <option value="Farmhouse / Villa">Farmhouse / Villa</option>
            <option value="Plots / Lands">Plots / Lands</option>
            <option value="Commercial<">Commercial</option>
          </select>
          <input
            name="locationProperty"
            required
            type="text"
            placeholder="Location of Property"
            className="builder-banner-col-3_input"
            value={contactForm.locationProperty}
            onChange={handleInputData}
          />
          <input
            name="description"
            required
            type="text"
            placeholder="Brief Description"
            className="builder-banner-col-3_input"
            value={contactForm.description}
            onChange={handleInputData}
          />
          <button
            disabled={isLoading}
            type="submit"
            className="builder-banner-col-3_btn"
            onClick={onSubmitHandler}
          >
            {" "}
            {isLoading ? "Submitting..." : "Submit"}
            {/* Submit */}
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default BuilderForm;
