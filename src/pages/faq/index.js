import Head from "next/head";
import Navbar from "@/components/Navbar";
import FaqAccordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Zorin.Aethar Web Design & Development Agency | FAQ</title>
      </Head>
      <Navbar />
      <div className="my-[5rem] px-10" id="portfolio">
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="inline-flex justify-center items-center bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent text-xl uppercase tracking-[1rem] font-semibold hover:cursor-pointer">
            FAQ{" "}
            <Image
              src="/icons/diamond.png"
              width={40}
              height={40}
              alt="diamond"
              className="sm:block hidden"
            />
          </h3>
          <p className="text-center">We figured you may have a few questions for us</p>
        </div>
      </div>
      <FaqAccordion />
      <Footer />
    </>
  );
}
