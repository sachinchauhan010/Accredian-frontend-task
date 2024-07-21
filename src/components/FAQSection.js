import React from 'react';

export default function FAQSection() {
  return (
    <div className="flex flex-col items-center p-6 mx-24 my-10">
      <h1 className="text-2xl font-bold mb-4">
        Frequently Asked <span className="text-blue-500">Questions</span>
      </h1>
      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        <div className="flex flex-col space-y-4 mb-4 md:mb-0">
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow">Eligibility</button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded shadow">How To Use?</button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded shadow">Terms & Conditions</button>
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-2/3">
          <div className="border-b border-gray-300 pb-2">
            <h2 className="text-blue-500 cursor-pointer">Do I need to have prior Product Management and Project Management experience to enroll in the program?</h2>
            <p className="mt-2 text-gray-700">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</p>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <h2 className="text-blue-500 cursor-pointer">What is the minimum system configuration required?</h2>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 text-white rounded-lg p-6 mt-8 w-full md:w-2/3 flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="flex flex-col mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Want to delve deeper into the program?</h2>
          <p className="mt-2">Share your details to receive expert insights from our program team!</p>
        </div>
        <button className="bg-white text-blue-500 px-6 py-2 rounded shadow">Get in touch</button>
      </div>
    </div>
  );
}
