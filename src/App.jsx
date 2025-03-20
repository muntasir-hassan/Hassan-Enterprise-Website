import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import CustomBreak from "./components/CustomBreak";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <CustomBreak />
      <Products />
      <CustomBreak />
      <Testimonial />
      <CustomBreak />
      <Contact />
      <CustomBreak />
      <Footer />
    </>
  );
}

export default App;
