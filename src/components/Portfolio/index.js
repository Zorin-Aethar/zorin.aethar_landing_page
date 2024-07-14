import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const images = [
  {
    url: "/projects/vefdefi.jpg",
    title: "VefDefi Dapps",
    description:
      "VeFi Network is an ecosystem of blockchain-intrinsic products and services with the sole aim of permeating all areas of the globe with its influence in the blockchain ecosystem.",
    projectUrl: "https://vefdefi-dapps.vercel.app",
  },
  {
    url: "/projects/vefdefi_landing.jpg",
    title: "VefDefi Organization",
    description:
      "Ours is an ecosystem of blockchain-intrinsic products and services with the sole aim of permeating all areas of the globe with its influence in the blockchain ecosystem.",
    projectUrl: "https://vefdefi.netlify.app/",
  },
  {
    url: "/projects/ipfs.jpg",
    title: "iPFS TAO Validator",
    description:
      "IPFS Tao Validator (ITV) is a critical component within the Bittensor ecosystem, designed to enhance data security and availability through decentralized storage solutions like IPFS.",
    projectUrl: "https://ipfstao.io/",
  },
  {
    url: "/projects/nbtc.jpg",
    title: "NBTC",
    description:
      "The future of Digital currency; A Multichain new generation open source P2P currency, the new kind of money; King of payment tokens. nBTC(New kind of Bitcoin)",
    projectUrl: "https://nbtc.netlify.app/",
  },
  {
    url: "/projects/3swap.jpg",
    title: "3Swap Aggregator",
    description:
      "3Swap platform provides a seamless and secure way to exchange your digital assets Embrace the future of finance with easy cryptocurrency swapping.",
    projectUrl: "https://3swap-dexaggregator.netlify.app/exchange",
  },
  {
    url: "/projects/duckcoin.jpg",
    title: "Duck Coin",
    description:
      "We are making it easier for everyone  to access web3 products, and solve real-life problems with Blockchain technology by integrating institutions, people, groups, and businesses into the blockchain.",
    projectUrl: "https://duckcoin.xyz/",
  },
  {
    url: "/projects/audiobaze.jpg",
    title: "Audiobaze",
    description:
      "Join Audiobaze today and unleash the power of our A.I.-powered bots, curated playlists, targeted promotion, and valuable artist resources",
    projectUrl: "https://audiobaze.store/",
  },
  {
    url: "/projects/midata.jpg",
    title: "MiData",
    description:
      "Create, edit and access your checklists, from anywhere around the world, With 0ver 3million users, MiData has gained a lot of credibility among organizations. Sign up to get started.",
    projectUrl: "https://midata.app/",
  },
  {
    url: "/projects/winifred.jpg",
    title: "Winifred Liam",
    description:
      "Winifred Liam is an avid reader, and she wears many hats most times an Indie Author of three published books on Amazon and bambooks. Ghostwriter, Virtual assistant, and IT support specialists.",
    projectUrl: "https://winifred-liam.vercel.app/",
  },
];

export default function Portfolio() {
  const { push } = useRouter();
  return (
    <div className="my-[5rem] px-10" id="portfolio">
      <div>
        <h3 className="inline-flex justify-center items-center bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent text-xl uppercase tracking-[1rem] font-semibold hover:cursor-pointer">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full mt-10">
          {images.map((project, index) => {
            return (
              <Link
                key={index}
                className="flex flex-col items-center justify-start h-fit hover:cursor-pointer hover:scale-105 duration-700 rounded-3xl border-2 shadow-lg"
                href={project.projectUrl}
                target="_blank"
              >
                <Image
                  key={index}
                  src={project.url}
                  width={420}
                  height={355}
                  className="object-contain w-full rounded-t-3xl"
                  alt={project.title}
                />
                <div className="p-2 text-center rounded-b-3xl">
                  <h3 className="font-semibold animate-pulse text-2xl bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="font-thin">{project.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
