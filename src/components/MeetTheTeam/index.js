import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const team = [
  {
    fullName: "Aniebet Obo",
    img: "/team/aniebet.jpg",
    role: "Front End & Mobile App Developer",
    socials: {
      twitter: "https://x.com/jurstadev",
      github: "https://github.com/anie308",
      linkedIn: "https://www.linkedin.com/in/aniebietobo/",
    },
  },
  {
    fullName: "Adefeyitimi Gbolahan Adeyeloja",
    img: "/team/me.jpg",
    role: "Founder, Full Stack Developer and Tech Instructor",
    socials: {
      twitter: "https://x.com/LordAethar",
      github: "https://github.com/TimmyIsANerd",
      linkedIn: "https://www.linkedin.com/in/adefeyitimi/",
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
      <div className="flex justify-center flex-wrap gap-3">
        {team.map((member, index) => {
          return (
            <div
              key={index}
              className="border rounded-3xl h-fit  max-w-[250px]"
            >
              <Image
                src={member.img}
                height={250}
                width={200}
                className="object-contain w-full rounded-t-3xl"
                alt={member.name}
              />
              <div>
                <p className="text-center font-semibold animate-pulse bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] drop-shadow-md bg-clip-text text-transparent">
                  {member.fullName}
                </p>
                <p className="text-center">{member.role}</p>
                <div className="flex justify-center w-full p-1 gap-x-3">
                  <Link href={member.socials.twitter}>
                    <FaTwitter
                      size={25}
                      color="#3B4CE8"
                      className="hover:cursor-pointer hover:scale-105 duration-700"
                    />
                  </Link>
                  <Link href={member.socials.twitter}>
                    <FaLinkedin
                      size={25}
                      color="#3B4CE8"
                      className="hover:cursor-pointer hover:scale-105 duration-700"
                    />
                  </Link>
                  <Link href={member.socials.github}>
                    <FaGithub
                      size={25}
                      color="#3B4CE8"
                      className="hover:cursor-pointer hover:scale-105 duration-700"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
