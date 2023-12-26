import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const pricing = [
  {
    package: "Basic",
    price: "450",
    deliverables:
      "Fully responsive 1 page website,developed in Bubble. Unlimited Sections",
  },

  {
    package: "Standard",
    price: "645",
    deliverables:
      "Fully responsive 3 page website, developed in Bubble. Unlimited Sections",
  },
  {
    package: "Premium",
    price: "945",
    deliverables:
      "Fully responsive 10 page website, developed in Bubble. Unlimited Sections",
  },
];

export default function Pricing() {
  return (
    <div className="my-10 px-10">
      <div>
        <h3 className="inline-flex justify-center items-center bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent text-xl uppercase tracking-[1rem] font-semibold">
          Pricing{" "}
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
            One fixed price to get <br /> your project done
          </h4>
          <p className="sm:text-[1.3rem] text-[1rem] font-normal">
            Your custom on-demand team for only a single payment
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3 mt-10">
        {pricing.map((price, index) => {
          return (
            <div
              className="rounded-2xl border border-solid border-white border-opacity-40 bg-gradient-to-b from-opacity-4 via-opacity-1 via-opacity-0 to-transparent shadow-lg backdrop-blur-20 lg:w-[420px] md:w-full h-[550px] p-5 flex flex-col gap-y-5 items-start justify-start"
              key={index}
            >
              <div className="flex flex-col gap-y-4">
                <h3 className="text-[#F5F5F5]/70 text-4xl font-extralight">
                  {price.package}
                </h3>
                <p className="font-extrabold text-5xl">${price.price}</p>
                <p>{price.deliverables}</p>
              </div>
              <ul className="flex flex-col gap-y-5">
                <li className="inline-flex items-center justify-start gap-x-3">
                  <Image width={15} height={15} src="/icons/tick-circle.svg" />
                  Functional Website
                </li>
                <li className="inline-flex items-center justify-start gap-x-3">
                  <Image width={15} height={15} src="/icons/tick-circle.svg" />
                  Responsive Design
                </li>
                <li className="inline-flex items-center justify-start gap-x-3">
                  <Image width={15} height={15} src="/icons/tick-circle.svg" />
                  Content Upload
                </li>
                <li className="inline-flex items-center justify-start gap-x-3">
                  <Image width={15} height={15} src="/icons/tick-circle.svg" />
                  Functional Website
                </li>
                <li className="inline-flex items-center justify-start gap-x-3">
                  <Image width={15} height={15} src="/icons/tick-circle.svg" />
                  Functional Website
                </li>
                <li className="inline-flex items-center justify-start gap-x-3">
                  <Image width={15} height={15} src="/icons/tick-circle.svg" />
                  Functional Website
                </li>
              </ul>
              <a
                href=""
                className="w-full inline-flex justify-center items-center gap-x-3 border hover:border-none border-[#00C4EE] py-4 rounded-md text-xl hover:bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] duration-700"
              >
                Get Started <BsArrowUpRight />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
