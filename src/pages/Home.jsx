import React from 'react';
import simonImage from '../assets/Simoncool.png'; 
import {motion} from 'framer-motion'
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  const container = (delay) => ({
    hidden: { x:-100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5
      }
    }
  
  })
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col mx-10 lg:mx-20 items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial = "hidden"
              animate= "visible"
            className="pb-8 text-4xl font-thin tracking-light lg:mt-16 lg:text-6xl">Simon Pradhananga</motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial = "hidden"
              animate= "visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-light">Frontend Developer/ QA</motion.span>
            <motion.p
              variants={container(1)}
              initial = "hidden"
              animate= "visible"
             className="my-2 max-w-xl py-6 font-light tracking-tighter">
              I am Simon Pradhananga a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in developing web applications using Django and React. I am always eager to learn new technologies and improve my skills.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <ProfileCard/>
            {/* <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2}}
              src={simonImage} alt="profileSimon" className="rounded-lg size-3/5" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
