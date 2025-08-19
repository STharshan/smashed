import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-16 px-4 scroll-m-22">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500">Get In Touch</h2>
          <p className="text-white text-lg mt-2">
            Have questions or want to make a reservation? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 text-white">
            <div>
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
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://web.facebook.com/people/Smashed-Ashby/61570892613518/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border px-4 py-1 rounded hover:bg-yellow-500 hover:text-white transition">
                    Facebook
                  </button>
                </a>

                <a
                  href="https://www.instagram.com/smashed.ashby/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border px-4 py-1 rounded hover:bg-yellow-500 hover:text-white transition">
                    Instagram
                  </button>
                </a>

                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border px-4 py-1 rounded hover:bg-yellow-500 hover:text-white transition">
                    Twitter
                  </button>
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-yellow-500 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
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
