'use client';

import Image from 'next/image';
import { FaMapMarkerAlt, FaCreditCard, FaPlane, FaUsers, FaHeart } from 'react-icons/fa';

export default function Safetyeasy() {
  return (
    <div className="bg-yellow-50 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-start gap-8 p-8 max-w-5xl w-full">
        {/* Steps Section */}
        <div className="space-y-6 flex-1 w-[346px]">
          <h2 className="text-4xl font-bold text-gray-800 text-start">Safety & Easy Travel</h2>

          {/* Step 1 */}
          <div className="flex items-start space-x-4">
          <div className="col-1"><img src = "/images/homepage/point7.jpeg" style = {{width:"100%", borderRadius:"100px"}}/></div>
            <div className="w-[350px]">
              <h3 className="text-xl font-bold text-gray-800 text-start">Verified & Trained Drivers</h3>
              <p className="text-lg text-gray-600 text-start break-words">
                All drivers undergo background checks and professional training to ensure a safe and reliable travel experience for everyone.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
          <div className="col-1"><img src = "/images/homepage/point8.jpeg" style = {{width:"100%", borderRadius:"100px"}}/></div>
            <div className="w-[346px]">
              <h3 className="text-xl font-bold text-gray-800 text-start">Live Tracking & 24/7 Assistance</h3>
              <p className="text-lg text-gray-600 text-start break-words">
                Real-time GPS tracking and a dedicated support team provide constant monitoring and immediate help whenever needed.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
          <div className="col-1"><img src = "/images/homepage/point9.jpeg" style = {{width:"100%", borderRadius:"100px"}}/></div>
            <div className="w-[346px]">
              <h3 className="text-xl font-bold text-gray-800 text-start">Secure & Comfortable Rides for All</h3>
              <p className="text-lg text-gray-600 text-start break-words">
                Features like ride detail sharing, emergency alerts, and a safe travel environment ensure a worry-free journey for every passenger.
              </p>
            </div>
          </div>
        </div>

        {/* Trip Card Section */}
        <div className="flex justify-end w-full max-w-sm flex  md:mt-5">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full">
            <img
              alt="Taj Mahal with a person in front"
              className="rounded-lg mb-4"
              height={200}
              src="/images/homepage/goodman.jpeg"
              width={400}
            />
            
            <h3 className="text-2xl font-bold text-gray-800 text-centre">Safety First</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}
