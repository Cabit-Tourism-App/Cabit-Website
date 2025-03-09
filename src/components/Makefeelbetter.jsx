'use client';

import Image from 'next/image';
import { FaMapMarkerAlt, FaCreditCard, FaPlane, FaUsers, FaHeart } from 'react-icons/fa';

export default function MakefeelBetter() {
  return (
    <div className="bg-yellow-50 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row-reverse items-start md:gap-16 gap-8 p-8 max-w-5xl w-full">
        
        {/* Steps Section (Right Side, Fixed Spacing from Image) */}
        <div className="space-y-6 flex-1 w-[346px] pl-10 md:pl-20">
          <h2 className="text-4xl font-bold text-gray-800 text-start">How we Make your travel better</h2>

          {/* Step 1 */}
          <div className="flex items-start space-x-4">
          <div className="col-1"><img src = "/images/homepage/point4.jpeg" style = {{width:"100%", borderRadius:"100px"}}/></div>
            <div className="w-[346px]">
              <h3 className="text-xl font-bold text-gray-800 text-start">Plan ahead Plan better</h3>
              <p className="text-lg text-gray-600 text-start break-words">
                Effortlessly plan your trip with customized itineraries, seamless ride integration, and real-time updates for a stress-free journey.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
          <div className="col-1"><img src = "/images/homepage/point5.jpeg" style = {{width:"100%", borderRadius:"100px"}}/></div>
            <div className="w-[346px]">
              <h3 className="text-xl font-bold text-gray-800 text-start">Multilingual Support</h3>
              <p className="text-lg text-gray-600 text-start break-words">
                Plan your trip effortlessly with our multilingual drivers and built-in translator, ensuring clear communication and a seamless journey.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
          <div className="col-1"><img src = "/images/homepage/point6.jpeg" style = {{width:"100%", borderRadius:"100px"}}/></div>
            <div className="w-[346px]">
              <h3 className="text-xl font-bold text-gray-800 text-start">Affordable Prices/Cashless Payments</h3>
              <p className="text-lg text-gray-600 text-start break-words">
                Enjoy affordable pricing with no hidden charges and seamless cashless payments for a hassle-free travel experience.
              </p>
            </div>
          </div>
        </div>

        {/* Trip Card (Left Side, Moved Up) */}
        <div className="flex justify-start w-full max-w-sm md:mt-5">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full">
            <img
              alt="Taj Mahal with a person in front"
              className="rounded-lg mb-4"
              height={200}
              src="/images/homepage/translator.jpeg"
              width={400}
            />
            <h3 className="text-2xl font-bold text-gray-800 text-centre">Translator</h3>
          </div>
        </div>

      </div>
    </div>
  );
}
