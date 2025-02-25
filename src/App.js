import React, { useEffect } from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.tailorflow.ai/chat-script.js?public_id=L_5ddGSskvDM-AaQcdvqgoy6o_HAHb3q";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
