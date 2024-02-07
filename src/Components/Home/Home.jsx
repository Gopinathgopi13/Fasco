import React from "react";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import Testmonial from "../Testmonials/Testmonial";
import Gallery from "../Gallery/Gallery";
import NewArrivals from "../NewArrivals/NewArrivals";
import DealOfTheMonth from "../DealOfTheMonth/DealOfTheMonth";
import Brand from "../Brands/Brand";
import Header from "../Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <Brand />
      {/* <DealOfTheMonth/> */}
      <NewArrivals />
      {/* <Slider />     */}
      <Gallery />
      {/* <Testmonial /> */}
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
