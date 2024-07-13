import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex flex-wrap sm:flex-row flex-col gap-x-5 gap-y-16 justify-between my-10 px-10">
      <div>
        <Image
          src="/zorin_logo.png"
          width={178}
          height={24}
          alt="Zorin.Aethar Logo"
        />
      </div>
      <div>
        <h4 className="font-bold text-2xl">Let's Connect</h4>
        <ul className="font-thin text-[#fff]/60">
          <li>
            <a href="mailto:support@zorin.aethar.com" target="_blank">
              support@zorin.aethar.com
            </a>
          </li>
          <li>
            <a href="tel:+2347059381812" target="_blank">
              +2347059381812
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-2xl">Links</h4>
        <ul className="font-thin text-[#fff]/60">
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/#meettheteam">Meet The Team</a>
          </li>
          <li>
            <a href="/#testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-2xl">Follow Us</h4>
        <ul className="flex gap-x-3">
          <li>
            <Link href="https://www.facebook.com/zorinaethar/" target="_blank">
              <BsFacebook size={20} />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/zorin.aethar/">
              <BsInstagram size={20} />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/LordAethar">
              <BsTwitterX size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
