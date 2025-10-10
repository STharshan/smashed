import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    // Check if all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setFormError("All fields are required!");
      return false;
    }

    // Check if email is valid
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }

    // Check if phone is a valid number
    const phonePattern = /^[0-9]{10}$/; // simple 10-digit validation
    if (!phonePattern.test(formData.phone)) {
      setFormError("Please enter a valid phone number.");
      return false;
    }

    setFormError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const message = `Hello, I am ${formData.firstName} ${formData.lastName}. \nMy email is ${formData.email} \nmy phone number is ${formData.phone}.\nHere is my message: ${formData.message}`;
      
      // Redirect to WhatsApp with the form data
      const whatsappLink = `https://wa.me/94754507566?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");

      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500">Get In Touch</h2>
          <p className="text-white text-lg mt-2">
            Have questions or want to make a reservation? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 p-5 text-white">
            <div className="">
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <div className="flex items-start gap-3 mb-2">
                <FiPhone className="text-2xl mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="https://wa.me/441530648708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition"
                  >
                    01530 648 708
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <FiMail className="text-2xl mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=smashedashby@gmail.com&su=Inquiry%20of%20Website`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500"
                  >
                    smashedashby@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <FiMapPin className="text-2xl mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <a
                    href="https://www.google.com/maps?q=85a+Market+Street,+Ashby+LE65+1AH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-yellow-500"
                  >
                    85a Market Street,<br />
                    Ashby LE65 1AH
                  </a>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div>
              <h4 className="font-semibold mb-2">Ashby</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/people/Smashed-Ashby/61570892613518/?_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-4 py-1 rounded hover:bg-yellow-500 hover:text-white transition"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/smashashby/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-4 py-1 rounded hover:bg-yellow-500 hover:text-white transition"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Quorn</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61577755926702#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-4 py-1 rounded hover:bg-yellow-500 hover:text-white transition"
                >
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/smashedquorn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-4 py-1 rounded hover:bg-yellow-500 hover:text-white transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>w

          {/* Contact Form */}
          <div className="bg-yellow-500 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            {formError && <p className="text-red-500 text-center">{formError}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message*"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 cursor-pointer transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
