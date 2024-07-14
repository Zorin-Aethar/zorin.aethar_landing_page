import Image from "next/image";

function Clients() {
  const brands = ["/clients/vefdefi_logo.svg", "/clients/logo.png"];

  return (
    <div className="flex flex-col items-center justify-center w-full sm:mt-8 md:mt-20 lg:mt-8 mt-16 gap-y-5">
      <h3 className="font-semibold text-xl">Trusted By Businesses</h3>
      <div className="flex justify-center items-center overflow-clip gap-x-10">
        {brands.map((brand, index) => {
          return (
            <Image width={70} height={15} alt={brand} src={brand} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default function Header() {
  const clients = [
    "/avatars/300-1.jpg",
    "/avatars/300-2.jpg",
    "/avatars/300-3.jpg",
  ];

  return (
    <div className="w-full flex flex-col items-start gap-y-5 p-10">
      <h1 className="sm:text-8xl md:text-6xl lg:text-8xl text-4xl relative font-semibold leading-10">
        <span className="inline-flex justify-center items-center">
          We Develop{" "}
          <Image
            src="/icons/diamond.png"
            width={65}
            height={65}
            alt="diamond"
            className="sm:block hidden"
          />
        </span>{" "}
        <br />
        <span className="bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent">
          amazing
        </span>{" "}
        Websites <br /> for your Business{""}
        <span className="bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] bg-clip-text text-transparent">
          .
        </span>
      </h1>
      <p className="sm:w-5/6 w-full">
        Discover our seamless workflow as we convert Figma Designs into stunning
        Websites, <br /> Explore the synergy between design and development for
        a pixel-perfect online experience.
      </p>
      <div className="flex sm:flex-row flex-col sm:justify-center sm:items-center justify-start items-start gap-x-6 gap-y-4">
        <div>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border-[#00C4EE] border px-6 py-3 text-[#00C4EE] rounded-md ring-[#00C4EE]"
          >
            View Work{" "}
            <Image
              src="/icons/arrow-up-right.svg"
              width={30}
              height={30}
              alt="arrow-up-right icon"
            />{" "}
          </a>
        </div>
        <div className="flex justify-center items-center gap-x-4 sm:ml-0 ml-3">
          <div className="font-semibold">
            <p>Highly Rated</p>
            <p>by Our Clients</p>
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
}
