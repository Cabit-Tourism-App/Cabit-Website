'use client';

import Image from 'next/image';
import { FaMapMarkerAlt, FaCreditCard, FaPlane, FaUsers, FaHeart } from 'react-icons/fa';

export default function TravelSteps() {
  return (
    <div className="bg-yellow-50 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-start gap-8 p-8 max-w-5xl w-full">
        {/* Steps Section */}
        <div className="space-y-6 flex-1 w-[346px]">
          <h2 className="text-4xl font-bold text-gray-800 text-start">In 3 Easy Steps</h2>

          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-3xl text-red-500" />
            <div className="w-[346px]">
              <h3 className="text-xl font-bold text-gray-800 text-start">Choose Destination</h3>
              <p className="text-lg text-gray-600 text-start break-words">
                Select your desired travel destination and customize your itinerary.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <FaCreditCard className="text-red-500 text-3xl" />
            <div className="w-[346px]">
              <h3 className="text-xl font-bold text-gray-800 text-start">Make Payment</h3>
              <p className="text-lg text-gray-600 text-start break-words">
                Securely complete your payment for the trip and cab services.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <FaPlane className="text-blue-500 text-3xl" />
            <div className="w-[346px]">
              <h3 className="text-xl font-bold text-gray-800 text-start">Reach Airport on Selected Date</h3>
              <p className="text-lg text-gray-600 text-start break-words">
                Arrive at the airport on your selected date and start your journey!
              </p>
            </div>
          </div>
        </div>

        {/* Trip Card Section */}
        <div className="flex justify-end w-full max-w-sm flex  md:-mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full">
            <img
              alt="Taj Mahal with a person in front"
              className="rounded-lg mb-4"
              height={200}
              src="https://storage.googleapis.com/a1aa/image/7cLEXVqVufoGc1yrpLT53N951c2bWo8IquNk4d3ws_w.jpg"
              width={400}
            />
            <h3 className="text-2xl font-bold text-gray-800 text-start">Trip To Agra</h3>
            <p className="text-lg text-gray-600 text-start break-words">14-29 June | by Robbin Joseph</p>
            <div className="flex items-center space-x-2 ">
              <FaUsers className="text-gray-600 text-xl" />
              <p className="text-lg text-gray-600 text-start">24 people going</p>
              <FaHeart className="text-gray-600 text-xl ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
