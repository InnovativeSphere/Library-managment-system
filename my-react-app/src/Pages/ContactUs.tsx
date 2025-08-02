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
    <div className="max-w-xl my-5 mx-auto p-8 bg-gray-900 rounded-xl shadow-lg space-y-8 text-gray-100 font-sans">
      <h2 className="text-3xl font-semibold text-center mb-6 text-[#F5F5F5]">
        Contact Us
      </h2>

      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-600 bg-[#2e2e3e] focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-gray-100"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 rounded-lg border border-gray-600 bg-[#2e2e3e] focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-gray-100"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-600 bg-[#2e2e3e] focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all text-gray-100"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button className="w-full  bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-md">
          Send Message
        </button>
      </form>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-center text-[#F5F5F5] border-b border-gray-600 pb-4">
          FAQs
        </h3>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 py-3 px-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center focus:outline-none hover:bg-gray-800 rounded px-3 py-2 transition-all"
            >
              <h4 className="font-semibold">{faq.question}</h4>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  faqOpenIndex === index ? "rotate-45" : ""
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
              <p className="mt-2 px-4 text-gray-400 transition-max-height duration-500 max-h-96 overflow-hidden">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
