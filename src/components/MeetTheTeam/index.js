import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";

const team = [
  {
    fullName: "Aniebet Obo",
    img: "/team/aniebet.jpg",
    role: <p className="text-center">Front End & Mobile App Developer</p>,
    socials: {
      twitter: "https://x.com/jurstadev",
      github: "https://github.com/anie308",
      linkedIn: "https://www.linkedin.com/in/aniebietobo/",
    },
  },
  {
    fullName: "Timmy G, Adeyeloja",
    img: "/team/me.jpg",
    role: (
      <p className="text-center">
        Founder, Full Stack Developer and Tech Instructor
      </p>
    ),
    socials: {
      twitter: "https://x.com/LordAethar",
      github: "https://github.com/TimmyIsANerd",
      linkedIn: "https://www.linkedin.com/in/adefeyitimi/",
    },
  },
  {
    fullName: "Mfoniso Ibokette",
    img: "/team/mfoniso.jpg",
    role: (
      <p className="text-center">
        Web2/Web3 <br /> Product Designer
      </p>
    ),
    socials: {
      twitter: "https://x.com/mfonisoibokette",
      linkedIn: "https://www.linkedin.com/in/mfonisoibokette/",
      behance: "https://www.behance.net/mfonisoIbokette20",
    },
  },
  {
    fullName: "Alonge God'slove",
    img: "/team/alonge.png",
    role: (
      <p className="text-center">
        Creative Designer, Canva Expert & Web3 Designer
      </p>
    ),
    socials: {
      behance: "https://www.behance.net/alongegodslove",
    },
  },
];

export default function MeetTheTeam() {
  return (
    <div className="my-[5rem] px-10 space-y-3" id="meettheteam">
      <div>
        <h3 className="inline-flex justify-center items-center bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent text-xl uppercase tracking-[1rem] font-semibold">
          Meet The Team{" "}
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
            Seasoned Expertise
          </h4>
          <p className="sm:text-[1.3rem] text-[1rem] font-normal">
            Get to know the talented individuals who bring creativity,
            <br />
            expertise, and passion to our work, ensuring we deliver exceptional
            <br />
            results every time.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        {team.map((member, index) => {
          return (
            <div
              key={index}
              className="border rounded-3xl h-fit w-full md:max-w-[250px]"
            >
              <Image
                src={member.img}
                height={250}
                width={200}
                className="object-contain w-full h-full rounded-t-3xl"
                alt={member.name}
              />
              <div className="p-2">
                <p className="text-center font-semibold bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent">
                  {member.fullName}
                </p>
                {member.role}
                <div className="flex justify-center w-full p-1 gap-x-3">
                  {member.socials.twitter && (
                    <Link href={member.socials.twitter} target="_blank">
                      <FaTwitter
                        size={25}
                        color="#3B4CE8"
                        className="hover:cursor-pointer hover:scale-105 duration-700"
                      />
                    </Link>
                  )}
                  {member.socials.linkedIn && (
                    <Link href={member.socials.linkedIn} target="_blank">
                      <FaLinkedin
                        size={25}
                        color="#3B4CE8"
                        className="hover:cursor-pointer hover:scale-105 duration-700"
                      />
                    </Link>
                  )}
                  {member.socials.behance && (
                    <Link href={member.socials.behance} target="_blank">
                      <FaBehance
                        size={25}
                        color="#3B4CE8"
                        className="hover:cursor-pointer hover:scale-105 duration-700"
                      />
                    </Link>
                  )}
                  {member.socials.github && (
                    <Link href={member.socials.github} target="_blank">
                      <FaGithub
                        size={25}
                        color="#3B4CE8"
                        className="hover:cursor-pointer hover:scale-105 duration-700"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
