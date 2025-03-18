import React from 'react';
import { Battery, Check } from 'lucide-react';

interface BatteryPackageProps {
  capacity: string;
  price: string;
  features: string[];
  recommended?: boolean;
  isSelected?: boolean;
  onSelect: () => void;
}

export function BatteryPackage({ 
  capacity, 
  price, 
  features, 
  recommended, 
  isSelected,
  onSelect 
}: BatteryPackageProps) {
  return (
    <div 
      className={`relative p-6 rounded-xl transition-all duration-300 cursor-pointer
        ${isSelected ? 'bg-green-100 border-2 border-green-500 transform scale-105' : 
          recommended ? 'bg-green-50 border-2 border-green-500' : 
          'bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg'}`}
      onClick={onSelect}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
            Recommended
          </span>
        </div>
      )}
      <div className="flex items-center justify-center mb-4">
        <Battery className={`w-12 h-12 ${isSelected || recommended ? 'text-green-500' : 'text-gray-600'}`} />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">{capacity} Battery</h3>
      <p className="text-3xl font-bold text-center text-green-600 mb-6">{price}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        className={`w-full mt-6 py-2 rounded-lg transition-colors
          ${isSelected ? 'bg-green-600 text-white' : 
            recommended ? 'bg-green-600 text-white hover:bg-green-700' : 
            'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        onClick={onSelect}
      >
        {isSelected ? 'Selected' : 'Select Package'}
      </button>
    </div>
  );
}