import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleFAQ = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const faqs = [
    {
      question: "How can I borrow a book?",
      answer:
        "You can borrow a book by visiting our library and presenting your library card.",
    },
    {
      question: "What are the library hours?",
      answer: "Our library is open from 9 AM to 5 PM, Monday to Saturday.",
    },
    {
      question: "How do I return a book?",
      answer:
        "Books can be returned at the designated return desk in the library.",
    },
    {
      question: "Can I reserve a book online?",
      answer: "Yes, you can reserve books through our online catalog.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 hover:scale-[1.01] hover:shadow-cyan-500/50 border border-transparent hover:border-cyan-500 text-gray-100">
        <h2 className="text-3xl font-extrabold text-white mb-6 text-center tracking-wide">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 mb-10">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400 transition duration-300 ease-in-out transform hover:scale-[1.01]"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400 transition duration-300 ease-in-out transform hover:scale-[1.01]"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              rows={4}
              id="message"
              name="message"
              className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400 transition duration-300 ease-in-out transform hover:scale-[1.01]"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-2xl font-extrabold mb-6 text-center text-white tracking-wide">
            Frequently Asked Questions
          </h3>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-700 rounded-lg overflow-hidden border border-gray-600"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 focus:outline-none text-left font-semibold text-white hover:bg-gray-600 transition-all duration-300" // Adjusted padding, text alignment, color, hover state
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    faqOpenIndex === index ? "rotate-45 text-cyan-400" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {faqOpenIndex === index && (
                <p className="px-4 pb-4 text-gray-300 transition-max-height duration-500 overflow-hidden">
                  {" "}
                  {/* Adjusted padding and text color */}
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
