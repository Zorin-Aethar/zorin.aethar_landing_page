import { useState } from "react";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

function LetsTalk() {
  return (
    <a
      href="/contact-us"
      className="text-lg bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] px-5 py-2 rounded-lg"
    >
      Let's Talk
    </a>
  );
}

function Dropdown({ setOpen }) {
  return (
    <motion.div
      className="absolute left-0 top-0 z-30 w-full h-screen bg-[#161717]"
      initial={{
        x: -1000,
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: -1000,
      }}
    >
      <div className="flex justify-end p-5">
        <AiOutlineClose color="#fff" size={40} onClick={() => setOpen(false)} />
      </div>
      <ul className="flex flex-col justify-center items-center gap-x-5 text-2xl gap-y-5">
        <li>FAQ</li>
        <li>Case Studies</li>
        <li>Why Us</li>
        <li>Testimonials</li>
      </ul>
    </motion.div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <nav className="hidden justify-evenly items-center py-5 px-16 w-full border-b-[0.3px] lg:flex">
        <Image
          src="/zorin_logo.png"
          width={178}
          height={24}
          alt="Zorin.Aethar Logo"
        />
        <ul className="flex justify-center items-center gap-x-5 text-lg">
          <li>FAQ</li>
          <li>Case Studies</li>
          <li>Why Us</li>
          <li>Testimonials</li>
        </ul>
        <LetsTalk />
      </nav>
      <nav className="flex justify-between items-center lg:hidden p-5 border-b-[0.3px] relative">
        <AnimatePresence
          initial={false}
          node="wait"
          onExitComplete={() => null}
        >
          {open && <Dropdown setOpen={setOpen} />}
        </AnimatePresence>
        <div className="flex justify-center items-center gap-x-3">
          <MdOutlineMenu color="#fff" size={40} onClick={() => setOpen(true)} />
          <Image
            src="/zorin_logo.png"
            width={178}
            height={24}
            alt="Zorin.Aethar Logo"
          />
        </div>
        <LetsTalk />
      </nav>
    </>
  );
}
