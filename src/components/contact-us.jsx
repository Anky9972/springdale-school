import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="p-5 sm:10 lg:p-20 bg-gray-100 lg:min-h-screen">
      <div className=" flex flex-col gap-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#af0e2e]">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="text-lg mb-2"><span className="font-semibold">Address:</span> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
            <p className="text-lg mb-2"><span className="font-semibold">Phone:</span> +1 (123) 456-7890</p>
            <p className="text-lg mb-2"><span className="font-semibold">Email:</span> info@springdale.edu</p>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-[#af0e2e] text-white rounded-md hover:bg-[#8e0a22] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition">Send Message</button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192576269877!2d144.96305761515634!3d-37.81361197975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779c8c6651b1b4!2s123%20Education%20Lane%2C%20Cityville%2C%20State!5e0!3m2!1sen!2sus!4v1632796978000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="School Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
