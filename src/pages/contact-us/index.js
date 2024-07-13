import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactUs";

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Zorin.Aethar Web Design & Development Agency | Contact Us</title>
      </Head>
      <Navbar />
      <div className="my-[5rem] px-10 flex min-w-full items-center justify-center text-center">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
