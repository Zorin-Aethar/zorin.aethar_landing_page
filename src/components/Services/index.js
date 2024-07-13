import Image from "next/image";

const data = [
  {
    imageUrl: "/icons/trophy.svg",
    heading: "Web Design Expertise",
    text: "Our team excels in transforming Figma designs into visually stunning, highly functional websites that captivate users.",
  },
  {
    imageUrl: "/icons/magnify.svg",
    heading: "On-Page SEO Excellence",
    text: "We optimize every aspect of your website to ensure it ranks highly in search engine results, driving more organic traffic.",
  },
  {
    imageUrl: "/icons/magic.svg",
    heading: "Interactive Magic",
    text: "We create interactive elements that enhance user engagement and provide a seamless, enjoyable browsing experience.",
  },
  {
    imageUrl: "/icons/project.svg",
    heading: "Dedicated Project Manager",
    text: "A dedicated project manager oversees your project from start to finish, ensuring all your requirements are met efficiently.",
  },
  {
    imageUrl: "/icons/test.svg",
    heading: "Comprehensive Testing",
    text: "Our rigorous testing processes guarantee that your website is free from bugs and performs flawlessly across all devices.",
  },
  {
    imageUrl: "/icons/clock.svg",
    heading: "Timely Delivery",
    text: "We adhere to strict timelines, ensuring your project is completed on schedule without compromising on quality.",
  },
];


export default function Services() {
  return (
    <div className="my-[5rem] px-10">
      <div>
        <h3 className="inline-flex justify-center items-center bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent text-xl uppercase tracking-[1rem] font-semibold">
          Services{" "}
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
            Exceeding Expectations
          </h4>
          <p className="sm:text-[1.3rem] text-[1rem] font-normal">
            We’re not just another agency; we are your path to exceptional web
            projects.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-10 w-full mt-10">
        {data.map((card, index) => {
          return (
            <div
              className="rounded-2xl border border-solid border-white border-opacity-40 bg-gradient-to-b from-opacity-4 via-opacity-1 via-opacity-0 to-transparent shadow-lg backdrop-blur-20 lg:w-[420px] md:w-full h-[355px] flex flex-col justify-between p-3 hover:scale-105 duration-500 hover:cursor-pointer"
              key={index}
            >
              <div className="w-[80px] h-[80px] rounded-2xl border border-solid border-white border-opacity-40 bg-gradient-to-b from-opacity-4 via-opacity-1 via-opacity-0 to-transparent shadow-md backdrop-blur-20 flex justify-center items-center">
                <Image src={card.imageUrl} height={65} width={65} alt={card.heading} />
              </div>
              <div>
                <h4 className="text-[1.8rem] font-semibold">{card.heading}</h4>
                <p className="font-thin text-xl">{card.text}</p>
              </div>
              <Image src="/icons/arrow-right.svg" height={65} width={65} alt="arrow-right icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
