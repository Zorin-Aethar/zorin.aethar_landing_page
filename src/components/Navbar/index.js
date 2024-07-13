import { useState } from "react";
import Image from "next/image";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

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
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <li>
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/#meettheteam">Meet The Team</a>
        </li>
        {/* <li>
          <a href="/#pricing">Pricing</a>
        </li> */}
        <li>
          <a href="/#testimonials">Testimonials</a>
        </li>
      </ul>
    </motion.div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { push } = useRouter();

  return (
    <>
      <nav className="hidden justify-between items-center py-5 px-10 w-full border-b-[0.3px] border-[#FFF3F3] lg:flex">
        <Image
          src="/zorin_logo.png"
          width={178}
          height={24}
          alt="Zorin.Aethar Logo"
          className="hover:cursor-pointer"
          onClick={() => push("/")}
        />
        <ul className="flex justify-center items-center gap-x-5 text-lg">
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/#meettheteam">Meet The Team</a>
          </li>
          {/* <li>
            <a href="/#pricing">Pricing</a>
          </li> */}
          <li>
            <a href="/#testimonials">Testimonials</a>
          </li>
        </ul>
        <LetsTalk />
      </nav>
      <nav className="flex justify-between items-center lg:hidden p-5 border-b-[0.3px] border-[#FFF3F3] relative">
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
            onClick={() => push("/")}
          />
        </div>
        <LetsTalk />
      </nav>
    </>
  );
}
