import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import HeadlineSection from "@/components/home/HeadlineSection";
import Clients from "@/components/home/Clients";
import FeaturedWork from "@/components/home/FeaturedWork";
import LegacySection from "@/components/home/LegacySection";
import BlogSection from "@/components/home/BlogSection";
import ReadyToRise from "@/components/home/ReadyToRise";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-grey-100" data-barba="container" data-barba-namespace="home">
        {/* Full-viewport hero with reveal animation */}
        <Hero />

        {/* About / "Driving Demand & Discovery" headline */}
        <HeadlineSection />

        {/* Featured Work — dark section with parallax names + circle-mask cards */}
        <FeaturedWork />

        {/* Client logos infinite carousel */}
        <Clients />

        {/* Legacy In The Making — stacked cards with GSAP scroll animation */}
        <LegacySection />

        {/* What's New — blog posts Swiper carousel */}
        <BlogSection />
      </main>

      <ReadyToRise />
      <Footer />
    </>
  );
}
