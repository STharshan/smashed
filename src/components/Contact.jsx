import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="bg-green-50 py-16 px-4 scroll-m-22">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900">Get In Touch</h2>
          <p className="text-green-800 mt-2">
            Have questions or want to make a reservation? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 text-green-900">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <div className="flex items-start gap-3 mb-2">
                <FiPhone className="text-2xl mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>0116 273 4557</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <FiMail className="text-2xl mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>hello@urbanspud.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <FiMapPin className="text-2xl mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>
                    421 St Saviours Rd,<br />
                    Leicester LE5 4HH
                  </p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div>
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border px-4 py-1 rounded hover:bg-green-800 hover:text-white transition">
                    Facebook
                  </button>
                </a>

                <a
                  href="https://www.instagram.com/braaimr/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border px-4 py-1 rounded hover:bg-green-800 hover:text-white transition">
                    Instagram
                  </button>
                </a>

                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border px-4 py-1 rounded hover:bg-green-800 hover:text-white transition">
                    Twitter
                  </button>
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Send us a message</h3>
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border p-2 rounded"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border p-2 rounded"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border p-2 rounded"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition"
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
