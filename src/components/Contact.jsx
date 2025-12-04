import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setFormError("All fields are required!");
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }
    const phonePattern = /^[0-9]{10}$/;
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
      const message = `Hello, I am ${formData.firstName} ${formData.lastName}. My email is ${formData.email}, my phone number is ${formData.phone}. Message: ${formData.message}`;
      const whatsappLink = `https://wa.me/94754507566?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section id="contact" className="bg-black px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500">Get In Touch</h2>
          <p className="text-white text-lg mt-2">
            Have questions or want to make a reservation? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 p-5 text-white bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

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
                  href="mailto:smashedashby@gmail.com"
                  className="hover:text-yellow-500 transition"
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
                  href="https://maps.app.goo.gl/rK7P73aXvS351ra96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  85 Market Street,<br />
                  Ashby LE65 1AH
                </a>
              </div>
            </div>

            {/* Social Buttons */}
            <div>
              <h4 className="font-semibold mb-2">Ashby</h4>
              <div className="flex gap-3 flex-wrap">
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
              <div className="flex gap-3 flex-wrap">
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
          </div>

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
                className="w-full bg-black text-yellow-500 font-semibold py-2 rounded-lg hover:bg-gray-800 hover:text-white transition"
              >
                Send Message
              </button>
                <p className="text-xs text-center dark:text-gray-300">By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
