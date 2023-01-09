import type { NextPage } from "next";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => (
  <>
    <Hero />
    <Testimonials />
    <Pricing />
    <Footer />
  </>
);

export default Home;
