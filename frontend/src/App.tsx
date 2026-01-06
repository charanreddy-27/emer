import React from "react";
import "./App.css";
import "./styles/custom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import FeaturedProducts from "./components/FeaturedProducts";
import PromotionalBanners from "./components/PromotionalBanners";
import NewArrivals from "./components/NewArrivals";
import TrustSignals from "./components/TrustSignals";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustSignals />
        <CategoriesSection />
        <FeaturedProducts />
        <PromotionalBanners />
        <NewArrivals />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
