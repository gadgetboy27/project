import React, { Suspense, useState } from 'react';
import { Layout } from './components/Layout';
import { HeroSection } from './sections/HeroSection';
import { Section } from './components/Section';
import { BatteryPackage } from './components/BatteryPackage';

// Lazy load less critical sections
const ContactSection = React.lazy(() => import('./sections/ContactSection'));
const BookingSection = React.lazy(() => import('./sections/BookingSection'));

export type BatteryOption = '40 kWh' | '50 kWh' | '62 kWh';

function App() {
  const [selectedPackage, setSelectedPackage] = useState<BatteryOption | null>(null);

  return (
    <Layout>
      <HeroSection />
      
      {/* Services Section */}
      <Section id="services" className="bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Battery Upgrade Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BatteryPackage
              capacity="40 kWh"
              price="$17,200 incl NZD"
              features={[
                "280km range extended",
                "2-year warranty",
                "Professional installation",
                "24/7 support"
              ]}
              isSelected={selectedPackage === '40 kWh'}
              onSelect={() => setSelectedPackage('40 kWh')}
            />
            <BatteryPackage
              capacity="50 kWh"
              price="$18,700 incl NZD"
              features={[
                "350km range extended",
                "2-year warranty",
                "Professional installation",
                "24/7 support",
                "Performance optimization"
              ]}
              recommended
              isSelected={selectedPackage === '50 kWh'}
              onSelect={() => setSelectedPackage('50 kWh')}
            />
            <BatteryPackage
              capacity="62 kWh"
              price="$20,500 incl NZD"
              features={[
                "420km range extended",
                "2-year warranty",
                "Professional installation",
                "24/7 support",
                "Performance optimization",
                "Extended life guarantee"
              ]}
              isSelected={selectedPackage === '62 kWh'}
              onSelect={() => setSelectedPackage('62 kWh')}
            />
          </div>
        </div>
      </Section>

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <ContactSection />
        <BookingSection selectedPackage={selectedPackage} />
      </Suspense>
    </Layout>
  );
}

export default App;