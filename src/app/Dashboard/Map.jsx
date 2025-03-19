'use client';

import Image from 'next/image';
import { FaMapMarkerAlt, FaPlus, FaCalendarAlt, FaUser } from 'react-icons/fa';
export default function MapSection() {
    return (
        <div className="w-full md:w-1/5 p-6 h-64 md:h-full overflow-hidden">
        <img alt="Map showing route in Lucknow" className="rounded-lg h-full w-full object-cover" src="https://storage.googleapis.com/a1aa/image/yWZLQvPhBqhVuxTa2XDOVIzecCGdlMwO35Hzdc6k10E.jpg" />
      </div>
    );
  }