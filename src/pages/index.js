import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import MeetTheTeam from "@/components/MeetTheTeam";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zorin.Aethar | Web3 Design & Development Agency</title>
        <meta name="description" content="Zorin.Aethar is a leading Web3 design and development agency specializing in innovative solutions for businesses. We offer services in web design, development, portfolio creation, and team collaboration to help you succeed in the digital landscape." />
        <meta name="keywords" content="Web3, design agency, development agency, web design, web development, portfolio, testimonials, team collaboration, digital solutions, innovative design, user experience, blockchain technology, responsive design" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <Header />
      <Services />
      <Portfolio />
      <MeetTheTeam />
      <ScrollToTop />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
