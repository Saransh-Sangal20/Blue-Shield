import React from 'react';
import Header from './Header';
import EarthquakeBanner from './EarthquakeBanner';
import AlertTypeButtons from './AlertTypeButtons';
import About from './About';
import Footer from './Footer';
import India from './India';
import Analytics from './Analytics';
import Weather from './Weather';

export default function Home() {
  return (
    <>
    <Header />
    <EarthquakeBanner />
    <div className='flex justify-between items-start h-100 p-2'>
        <AlertTypeButtons />
        <Analytics />
        <India />
    </div>
    <Weather />
    <About />
    <Footer />
    </>
  )
}
