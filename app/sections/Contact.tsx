"use client";

import React, { useState } from "react";

const Contact = () => {
  const [letter, setLetter] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    subject: false,
    message: false,
  });

  const validateInput = (name: string, value: string) => {
    if (value.trim() === "") return true; // Mark as error if empty
    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) return true; // Validate email format
    return false;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLetter({ ...letter, [name]: value });

    // Validate as user types
    setErrors({ ...errors, [name]: validateInput(name, value) });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();

    const newErrors = {
      email: validateInput("email", letter.email),
      subject: validateInput("subject", letter.subject),
      message: validateInput("message", letter.message),
    };

    setErrors(newErrors);

    // If any error exists, don't proceed
    if (Object.values(newErrors).includes(true)) return;

    // ✅ Process the form submission (e.g., send email)
    console.log("Form submitted:", letter);
  };

  return (
    <div id="contact" className="max-w-[1200px] mx-auto p-16 py-72">
      <div className="container space-y-7">
        <div className="flex flex-col space-y-6 md:flex-row justify-between">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-6xl text-white/60 font-bold">
              Get in touch
            </h1>
            <p className="text-4xl md:text-6xl font-bold">harald@hardev.com</p>
          </div>
          <div className="space-y-10">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-white/60">Phone</h2>
              <p className="text-xl font-bold text-white/60">
                +99 (0) 78 888 9999
              </p>
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-white/60">Office</h2>
              <p className="text-lg text-white/60">Street 98 999</p>
              <p className="text-lg text-white/60">Berlin</p>
              <p className="text-lg text-white/60">Germany</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-7">
          <div className="flex flex-col md:flex-row justify-center items-start space-y-7 space-x-10">
            <div className="space-y-5 w-full">
              <div className="space-y-1 flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className={`border z-40 relative border-white/30 rounded-lg p-3 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  type="email"
                  placeholder="your@email.com"
                  name="email"
                  value={letter.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Invalid email format
                  </span>
                )}
              </div>
              <div className="space-y-1 flex flex-col">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  className={`border z-40 relative border-white/30 rounded-lg p-3 ${
                    errors.subject ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="What's on your mind?"
                  name="subject"
                  value={letter.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm">
                    Subject cannot be empty
                  </span>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col space-y-1">
              <label htmlFor="message">Message</label>
              <textarea
                className={`border z-40 relative border-white/30 rounded-lg p-3 ${
                  errors.message ? "border-red-500" : ""
                }`}
                name="message"
                id="message"
                cols={30}
                rows={10}
                value={letter.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  Message cannot be empty
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-center z-40 relative mt-20">
            <button
              type="submit"
              className={`border border-white/30 hover:bg-white/20 transition-all duration-300 cursor-pointer rounded-lg p-3 px-5 ${
                Object.values(errors).includes(true)
                  ? "bg-white/30 border-red-500 cursor-not-allowed"
                  : "focus:border-blue-300 bg-white/20 border"
              }`}
              disabled={Object.values(errors).includes(true)}
            >
              →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
