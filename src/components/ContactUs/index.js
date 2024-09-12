import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <div className="my-[5rem] sm:px-10 px-3">
      <div>
        <h3 className="inline-flex justify-center items-center bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent text-xl uppercase tracking-[1rem] font-semibold">
          Contact Us{" "}
          <Image
            src="/icons/diamond.png"
            width={40}
            height={40}
            alt="diamond"
            className="sm:block hidden"
          />
        </h3>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col">
          <h4 className="sm:text-[2.8rem] text-[1.5rem] font-semibold">
            Reach Out To Us
          </h4>
          <p className="sm:text-[1.3rem] text-[1rem] font-normal">
            We always look forward to bringing your project ideas to life.
          </p>
          <p>
            <a
              href="mailto: support@zorinaethar.xyz"
              className="text-[#00C4EE] text-3xl"
            >
              support@zorinaethar.xyz
            </a>
          </p>
        </div>
      </div>
      {/* <ContactForm /> */}
    </div>
  );
}
