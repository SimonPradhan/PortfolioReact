import React from 'react';
import simonImage from '../assets/Profile1.png'; 

export default function Home() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-8 text-4xl font-thin tracking-light lg:mt-16 lg:text-6xl">Simon Pradhananga</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-light">Web Developer</span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              I am Simon Pradhananga a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in developing web applications using Django and React. I am always eager to learn new technologies and improve my skills.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={simonImage} alt="profileSimon" />
          </div>
        </div>
      </div>
    </div>
  );
}
