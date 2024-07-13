import React, { useState, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services including web design, web development, on-page SEO, interactive design, project management, and comprehensive testing to ensure your site is top-notch.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost of a website can vary depending on the complexity, features, and specific requirements. We offer customized quotes based on your unique needs.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for building a website depends on its complexity and the features required. On average, a standard website takes 4-6 weeks from start to finish.",
  },
  {
    question: "Do you provide custom web design or use templates?",
    answer:
      "We provide custom web design tailored to your brand and business needs. Our designs are unique and created to ensure your website stands out.",
  },
  {
    question: "Can you help with redesigning an existing website?",
    answer:
      "Yes, we can help redesign your existing website to improve its aesthetics, functionality, and user experience.",
  },
  {
    question: "What platforms do you use for web development?",
    answer:
      "We work with various platforms including WordPress, Shopify, and custom solutions using technologies like React, Node.js, and more.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes, we offer comprehensive on-page SEO services to help improve your website's visibility and ranking on search engines.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely, all our designs are responsive and optimized for mobile devices to ensure a seamless experience for all users.",
  },
  {
    question: "Will I have a dedicated project manager?",
    answer:
      "Yes, a dedicated project manager will oversee your project to ensure all your requirements are met and that you are kept updated throughout the process.",
  },
  {
    question:
      "Do you offer maintenance and support after the website is launched?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to keep your website running smoothly and up-to-date.",
  },
  {
    question: "What is your web design process?",
    answer:
      "Our process includes an initial consultation, design phase, development, testing, and final launch. We involve you at every step to ensure the final product meets your expectations.",
  },
  {
    question: "How do you ensure the project stays on track?",
    answer:
      "We use project management tools and maintain regular communication with you to ensure the project progresses smoothly and stays on schedule.",
  },
  {
    question: "Do you provide web hosting services?",
    answer:
      "We can recommend reliable hosting providers or manage the hosting for you as part of our services.",
  },
  {
    question: "How do you ensure the security of the website?",
    answer:
      "We implement robust security measures, including SSL certificates, regular updates, and security plugins, to protect your website from threats.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      {faqData.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full flex justify-between items-center py-4 px-6 text-left text-lg font-medium text-gray-800 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-xl bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent">
              {faq.question}
            </span>
            <span>
              {activeIndex === index ? (
                <FiChevronUp className="w-5 h-5" />
              ) : (
                <FiChevronDown className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
            style={{
              maxHeight:
                activeIndex === index
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
            }}
          >
            <div className="px-6 py-4">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
