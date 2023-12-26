import Image from "next/image";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";

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
            4517 Washington Ave.
            <br /> Manchester, Kentucky 39495
          </li>
          <li>support@zorin.aethar.com</li>
          <li>(234) 555-0231</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-2xl">Links</h4>
        <ul className="font-thin text-[#fff]/60">
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">Why Us</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-2xl">Follow Us</h4>
        <ul className="flex gap-x-3">
          <li>
            <a href="">
              <BsFacebook size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <BsInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <BsTwitterX size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <BsLinkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
