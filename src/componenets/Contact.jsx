import { TfiEmail } from "react-icons/tfi";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const backendURL =
    "https://my-portfolio-backend-xgmd.onrender.com/api/contact";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(backendURL, formData);
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 2500,
        style: {
          background: "linear-gradient(to right, #EEE6CA, #CFAB8D)",
          color: "#222",
          fontWeight: "600",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        },
      });
      // clear form after submission
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message, please try again..", {
        position: "top-center",
        autoClose: "3000",
        style: {
          background: "linear-gradient(to right, #EEE6CA, #CFAB8D)",
          color: "#222",
          fontWeight: "600",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        },
      });
    }
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen pt-32 md:pt-36 lg:pt-40 px-5 md:px-10 lg:px-20 pb-16 md:pb-20 lg:pb-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left side */}
        <div className="space-y-6 text-justify">
          <h2 className="text-3xl sm:text-2xl font-bold textPrimary mb-6 text-center lg:text-left">
            Get in Touch
          </h2>
          <p className="textSecondary text-lg mt-6 lg:mt-0">
            Your message could be the start of something great. I’m always happy
            to hear from fellow developers, recruiters, or anyone passionate
            about technology. Let’s connect and create something amazing
            together!
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-4 mt-10">
            <TfiEmail className="text-2xl textPrimary hover:scale-105 transition-all duration-300" />
            <a
              href="mailto:urvashi.ucoe@gmail.com"
              className="text-xl textPrimary font-semibold hover:underline"
            >
              urvashi.ucoe@gmail.com
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="py-6 px-6 lg:px-10 rounded-2xl shadow-md bg-white/30 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="ml-2 textSecondary text-lg block mb-1"
              >
                Name
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                name="name"
                value={formData.name}
                required
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="ml-2 textSecondary text-lg block mb-1"
              >
                Email
              </label>
              <input
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                type="email"
                name="email"
                value={formData.email}
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="ml-2 textSecondary text-lg block mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                rows={5}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <button className="btnStyle w-full mt-2">Submit</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
