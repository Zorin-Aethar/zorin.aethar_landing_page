import Image from "next/image";

const images = [
  "/projects/1.png",
  "/projects/2.png",
  "/projects/3.png",
  "/projects/4.png",
  "/projects/5.png",
  "/projects/6.png",
];

export default function Portfolio() {
  return (
    <div className="my-10 px-10">
      <div>
        <h3 className="inline-flex justify-center items-center bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent text-xl uppercase tracking-[1rem] font-semibold">
          Portfolio{" "}
          <Image
            src="/icons/diamond.png"
            width={40}
            height={40}
            alt="diamond"
            className="sm:block hidden"
          />
        </h3>
        <div className="flex flex-col">
          <h4 className="sm:text-[2.8rem] text-[1.5rem] font-semibold">
            Our Latest Work
          </h4>
          <p className="sm:text-[1.3rem] text-[1rem] font-normal">
            Discover our freshest creations that showcase the power of design{" "}
            <br />
            innovation and digital excellence. Explore our latest work and{" "}
            <br />
            witness the impact we bring to every project
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-10 w-full mt-10">
          {images.map((img, index) => {
            return (
              <Image
                key={index}
                src={img}
                width={420}
                height={355}
                className="lg:w-[420px] md:w-full h-[355px] hover:cursor-pointer hover:scale-105 duration-700 object-cover rounded-3xl"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
