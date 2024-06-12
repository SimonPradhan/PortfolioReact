import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6" >
      <div className="flex flex-shrink-0 items-center">
        <h2 className="text-gray-400 text-1xl lg:text-2xl font-bold font-mono antialiased">Simon's Portfolio</h2>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/simon-ndukwe-7a0b3b1b3/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/SimonPradhan" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/simon.pradhananga/" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>
    </nav>
  )
}
