/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import MapSection from './components/Map';
import Photos from './components/Photos';
import Closing from './components/Closing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
        
        {/* Split Section: Timeline on Left, Map on Right */}
        <div className="flex flex-col lg:flex-row w-full border-b border-sand/30">
          <div className="lg:w-1/2 lg:border-r lg:border-sand/30 bg-cream">
            <Timeline />
          </div>
          <div className="lg:w-1/2 bg-warm-white">
            <MapSection />
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
        <Stats />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
        <Photos />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
