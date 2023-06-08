import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Promo from "../components/Promo";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Testimonial from "../components/Testimonial";

function IndexPage() {
  return (
    <div>
      <Header />
      <Promo />
      <About />
      <Newsletter />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default IndexPage;
