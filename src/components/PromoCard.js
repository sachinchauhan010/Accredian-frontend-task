import React from 'react';
import Heroimg1 from '../images/Anniversary.png'
import DetailsFormDialog from './DetailsForm';
import {Link} from 'react-router-dom'

const PromoCard = () => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 m-6 md:w-full lg:w-[70%]  justify-center mx-auto">
      <div className="flex justify-center items-center space-x-16 w-fit border-2 py-2 rounded-xl px-8 bg-[#e6f0fc] mb-4">
        <Link to="/refer" className="text-blue-600">Refer</Link>
        <Link to="/benfits" className="text-gray-600">Benefits</Link>
        <Link to="/FAQ" className="text-gray-600">FAQs</Link>
        <Link to="/support" className="text-gray-600">Support</Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#eef5ff] rounded-lg w-full">
        <div className="flex flex-col items-start p-4 w-[35%]">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Let's Learn & Earn</h2>
          <p className="text-lg font-semibold text-gray-700 mb-4">Get a chance to win <br /> up-to <span className="text-[#4f93ed] text-2xl font-semibold">Rs. 15,000</span></p>
          {/* <button className="bg-blue-600 text-white py-2 px-6 mt-6 rounded-lg hover:bg-blue-700">Refer Now</button> */}
          <DetailsFormDialog/>
        </div>
        <div>
          <img src={Heroimg1} alt="Promo" className="rounded-lg shadow-lg h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
