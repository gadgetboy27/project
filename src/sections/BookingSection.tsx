import React from 'react';
import { Section } from '../components/Section';
import type { BatteryOption } from '../App';

interface BookingSectionProps {
  selectedPackage: BatteryOption | null;
}

function BookingSection({ selectedPackage }: BookingSectionProps) {
  return (
    <Section id="booking" className="bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Book Your Upgrade</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle Model Year</label>
              <input type="text" className="mt-1 block w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">You Have Selected The</label>
              {selectedPackage ? (
                <div className="mt-1 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="font-medium text-green-800">{selectedPackage} Battery Package</p>
                </div>
              ) : (
                <div className="mt-1 p-4 bg-gray-50 border border-gray-200 rounded-md">
                  <p className="text-gray-500">Please select a battery package from above</p>
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Installation Date</label>
              <input type="date" className="mt-1 block w-full" />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Deposit Information</h3>
              <p className="text-sm text-gray-600 mb-4">
                A 20% deposit is required to secure your booking. The remaining balance will be due upon installation.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input type="text" className="mt-1 block w-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="mt-1 block w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input type="text" className="mt-1 block w-full" />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Pay Deposit & Book Installation
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default BookingSection;