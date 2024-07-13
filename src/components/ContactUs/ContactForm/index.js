import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-2xl mt-10 p-8 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6 text-black text-left">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-x-3 gap-y-6">
          <div className="w-full">
            <label className="block mb-1 text-gray-700" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00C4EE]"
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00C4EE]"
            />
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-x-3 gap-y-6">
          <div className="w-full">
            <label className="block mb-1 text-gray-700" htmlFor="phone">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00C4EE]"
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-gray-700" htmlFor="serviceType">
              Service Type
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00C4EE]"
              required
            >
              <option value="">Select a service</option>
              <option value="Web Design">Web Design</option>
              <option value="SEO">SEO</option>
              <option value="Web Development">Web Development</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-1 text-gray-700" htmlFor="budget">
            Budget Range
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00C4EE]"
            placeholder="e.g., $1000 - $5000"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700" htmlFor="timeline">
            Project Timeline
          </label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00C4EE]"
            placeholder="e.g., 3 months"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#00C4EE]"
            rows="5"
            placeholder="Describe your project or inquiry..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] text-white rounded hover:duration-1000 hover:bg-gradient-to-l transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
