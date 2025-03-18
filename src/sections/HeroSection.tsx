import React from 'react';
import { Section } from '../components/Section';

export function HeroSection() {
  return (
    <Section id="home" className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      <div className="container mx-auto px-6 pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Upgrade Your Nissan Leaf's Range
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your EV experience with our premium battery upgrade packages.
              More range, more power, more freedom.
            </p>
            <a href="#booking" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors">
              Upgrade Now
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="src/images/nissan_leaf_charging.jpg?auto=format&fit=crop&q=80&w=800"
              alt="Nissan Leaf"
              className="rounded-lg shadow-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}