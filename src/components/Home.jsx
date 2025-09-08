import React from 'react';
import Header from './Header';
import EarthquakeBanner from './EarthquakeBanner';
import AlertTypeButtons from './AlertTypeButtons';
import About from './About';
import Footer from './Footer';
import India from './India';
import Analytics from './Analytics';
import Weather from './Weather';
import Report from './Report';
import CreateAccount from './CreateAccount';
import { useState } from "react";
import EmergencyContacts from './EmergencyContacts';


export default function Home() {
  const [signup, setSignup] = useState(false);
  return (
    <>

    {!signup && <Header setSignup={setSignup}/>}
    {!signup && <EarthquakeBanner />}
    {!signup && <div className='flex justify-between items-start h-100 p-2 '>
      <div className='flex-col item-start'>
        <AlertTypeButtons />
        <Weather />
      </div>
      <Analytics />
      <India />
    </div>}
    {/* {!signup && <hr></hr>} */}
    {!signup && <EmergencyContacts />}
    {!signup && <Report />}
    {!signup && <About />}
    {!signup && <Footer />}
    <CreateAccount signup={signup} setSignup={setSignup}/>
    </>
  )
}
