import React from 'react';
import HeroSection from "../components/herosection.jsx"
import StatsSection from "../components/statsSection.jsx";
import CategorySection from "../components/CategorySection.jsx";
import ProductCard from '../components/productcard.jsx';
import HowItWorksSection from "./../components/HowItWorksSection.jsx";
import TestimonialCard  from '../components/TestimonialCard.jsx';
import ImpactSection from "../components/ImpactSection";
import Footer from "../components/Footer.jsx";

import "../styles/hero.css";
import "../styles/searchbar.css";
import "../styles/stats.css";
import "../styles/category.css";
import "../styles/product.css";
import "../styles/productGrid.css";
import "../styles/HowItWorksSection.css";
import "../styles/TestimonialCard.css";
import "../styles/impact.css";
import "../styles/footer.css";


import ProductGrid from "../components/ProductGrid.jsx";

const Home = ({products}) => (
  <>
    <HeroSection />
    <StatsSection />
    <CategorySection />
    <ProductGrid products={products} />
    <HowItWorksSection />
    <TestimonialCard/>
    <ImpactSection />
    <Footer />
  </>
);

export default Home;
