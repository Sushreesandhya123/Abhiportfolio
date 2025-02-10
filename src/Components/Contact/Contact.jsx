import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wc7sjc9", 
        "template_n16vni3", 
        form.current,
        "O2hGDivbYsaqcoaaj" 
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Your message has been sent successfully! 🎉");
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); 
  };

  return (
    <div id="Contact" className="flex flex-col justify-center items-center py-8 bg-[#1a2036] w-full">
      <div className="flex flex-col text-white space-y-2  justify-center mx-auto pb-2">
        <h1 className="font-bold text-3xl sm:text-5xl text-center">Contact Abhishek Verma</h1>
        <p className="md:text-lg text-white w-[90%] text-center mx-auto">
          Feel free to reach out anytime! Whether you have a question, feedback, or just want to say hello, I’d be thrilled to hear from you. Drop a message, and I’ll get back to you as soon as I can!
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center text-white text-lg font-semibold space-x-6 pb-6">
      <p>📍 Bengaluru, India</p>
      <p>📞 <a href="tel:+919306009237" className="text-blue-400 hover:underline">+91-9306009237</a></p>
      <p>📧 <a href="mailto:abhishekverma5541@gmail.com" className="text-blue-400 hover:underline">abhishekverma5541@gmail.com</a></p>
      <p>🔗 <a href="https://linkedin.com/in/abhishekverma" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a></p>
      <p>💻 <a href="https://github.com/abhishekverma" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a></p>
    </div>
      <div className="flex justify-center items-center w-[90%] sm:w-[40%] bg-[#171721] rounded-xl shadow-md shadow-indigo-400 mb-8">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 w-[90%]">
          <h1 className="text-2xl text-white font-bold text-center py-2">Email Abhishek 🚀</h1>

          <label className="text-xl font-bold text-white">Name:</label>
          <input
            className="mb-6 py-1 rounded-sm px-2 text-lg font-semibold bg-gray-200"
            type="text"
            name="from_name"
            placeholder="Your Name..."
            required
          />

          <label className="text-xl font-bold text-white">Email:</label>
          <input
            className="mb-6 py-1 rounded-sm px-2 text-lg font-semibold bg-gray-200"
            type="email"
            name="user_email"
            placeholder="Your Email..."
            required
          />

          <label className="text-xl font-bold text-white">Message:</label>
          <textarea
            className="mb-6 py-1 h-[100px] rounded-sm px-2 text-lg font-semibold bg-gray-200"
            name="message"
            placeholder="Message..."
            required
          ></textarea>

          <div className="flex items-center w-full justify-center">
            <input
              className="w-[50%] sm:w-[30%] my-6 py-2 rounded-md px-5 bg-orange-500 hover:bg-orange-400 text-xl font-semibold transform hover:scale-75 transition duration-200 ease-in-out"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
      <div className="Toastify"></div>
    </div>
  );
};

export default Contact;
