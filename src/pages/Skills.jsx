import React from 'react';
import { SiDjango, SiReact, SiMongodb} from "react-icons/si";
import { FaHtml5, FaJs, FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDjango className="text-7xl text-green-700"/> 
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiReact className="text-7xl text-cyan-400"/> 
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          {/* <FaPython className="text-7xl text-blue-500"/>  */}
          <img src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" style={{height: '72px', width: '72px'}} alt="" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-500"/> 
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-violet-700"/> 
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400"/> 
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJs className="text-7xl text-amber-400"/> 
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500"/> 
        </div>
      </div>
    </div>
  );
}
