import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zorin.Aethar Web Design Agency</title>
      </Head>
      <Navbar />
      <Header />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}
