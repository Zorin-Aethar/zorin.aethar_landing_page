import Image from "next/image";
import { useState } from "react";

const data = [
  {
    testimony:
      "I hired Zorin.Aethar to design and develop my e-commerce website, and I couldn’t be happier with the result. They were professional, creative, and responsive throughout the whole process. They listened to my needs and preferences, and delivered a website that exceeded my expectations, The Website is beautiful, user-friendly, and fast. It has increased my sales and conversions significantly. I highly recommend Zorin.Aethar to anyone looking for a reliable and talented digital partner.",
    bio: "Founder,Athena",
    name: "Sarah Conner",
    avatarUrl: "/avatars/300-2.jpg",
  },
  {
    testimony:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas quibusdam recusandae minus delectus suscipit quo corporis dolore veniam! Necessitatibus magnam vero ex omnis illo dolorum autem optio veniam voluptate.Rem similique eum ea veritatis itaque dicta deleniti veniam, excepturi et perferendis nisi eaque quis, doloribus minus ducimus, ipsa nulla impedit molestiae ipsum fugiat dolor aspernatur officia explicabo adipisci! Ex! Laboriosam, culpa laudantium? Dignissimos cupiditate, reiciendis magnam voluptate ipsam veritatis! Eius ratione veniam dolore sequi natus! Ullam earum distinctio tempore fugit aliquid minima assumenda in rerum omnis quo! Facilis, blanditiis?",
    bio: "Leader,The Restistance",
    name: "John Conner",
    avatarUrl: "/avatars/300-1.jpg",
  },
];

function SlideSelector({ numberOfSlides, activeSlide, setPage }) {
  const buttons = Array.from({ length: numberOfSlides });

  return (
    <>
      {buttons.map((button, index) => (
        <div
          className={`w-[25px] h-[25px] ${
            activeSlide === index ? "bg-white" : "bg-[#ffffff]/60"
          } rounded-full hover:bg-[#fff]/80 duration-700 hover:cursor-pointer`}
          onClick={() => setPage(index)}
          key={index}
        ></div>
      ))}
    </>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const components = data.map((data, index) => {
    return (
      <div
        className="rounded-2xl border border-solid border-white border-opacity-40 bg-gradient-to-b from-opacity-4 via-opacity-1 via-opacity-0 to-transparent shadow-lg backdrop-blur-20 lg:w-[900px] md:w-full  h-fit p-10 flex flex-col justify-center items-center gap-y-10"
        key={index}
      >
        <p className="text-center text-lg">{data.testimony}</p>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={data.avatarUrl}
            width={75}
            height={75}
            className="rounded-full"
            alt="avatar image"
          />
          <p className="font-semibold text-2xl">{data.name}</p>
          <p className="font-light">{data.bio}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="my-[5rem] px-10">
      <div>
        <h3 className="inline-flex justify-center items-center bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent text-xl uppercase tracking-[1rem] font-semibold">
          Testimonials{" "}
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
            Our Clients Say
          </h4>
          <p className="sm:text-[1.3rem] text-[1rem] font-normal">
            Don’t take our word for it. Hear it from our happy clients.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10">
        {components[page]}
        <div className="my-5 flex gap-x-5">
          <SlideSelector
            numberOfSlides={components.length}
            activeSlide={page}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}
