'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface LocationCardProps {
  title: string;
  address: string;
  phone: string;
  email: string;
}

const LocationCard = ({ title, address, phone, email }: LocationCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <MapPin size={20} className="text-[#4169E1] mt-1 flex-shrink-0" />
          <span className="text-[#666666]">{address}</span>
        </li>
        <li className="flex items-center space-x-3">
          <Phone size={20} className="text-[#4169E1] flex-shrink-0" />
          <span className="text-[#666666]">{phone}</span>
        </li>
        <li className="flex items-center space-x-3">
          <Mail size={20} className="text-[#4169E1] flex-shrink-0" />
          <span className="text-[#666666]">{email}</span>
        </li>
      </ul>
    </div>
  );
};

export default LocationCard;
