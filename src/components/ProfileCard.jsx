import React from "react";
import SimonImage from "../assets/simon.png";
import { FaFacebook, FaInstagram, FaPinterest, FaGithub } from "react-icons/fa";

const ProfileCard = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/simanta.pradhananga.3/", icon: FaFacebook },
    { href: "https://www.instagram.com/simon.pradhananga/", icon: FaInstagram },
    { href: "https://www.pinterest.com/simon234pradhan/", icon: FaPinterest },
    { href: "https://github.com/SimonPradhan", icon: FaGithub },
  ];

  return (
    <div className="flip-container w-[350px] h-[350px] mx-auto my-10">
      <div className="flipper">
        <div className="front rounded-2xl overflow-hidden shadow-lg">
          <img
            src={SimonImage}
            alt="profile"
            className="w-full h-full object-cover brightness-90"
          />
        </div>

        <div className="back rounded-2xl shadow-lg flex flex-col justify-center items-center p-4 bg-white/10 backdrop-blur-md border border-white/20">
        <ul className="flex gap-4 mb-4">
            {socialLinks.map(({ href, icon: Icon }) => (
            <li key={href}>
                <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[50px] h-[50px] flex items-center justify-center bg-white text-black rounded-full text-xl shadow-md transition-transform duration-300 hover:scale-110"
                >
                <Icon />
                </a>
            </li>
            ))}
        </ul>
        <h2 className="text-center text-white">
            Simon Pradhananga
            <br />
            <span className="text-base text-neutral-200 font-light">Frontend Dev/QA</span>
        </h2>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;
