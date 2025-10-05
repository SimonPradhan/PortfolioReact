import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-10 text-center text-4xl">Get In Touch</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">Hadigaun-5, Kathmandu</p>
            <p className="my-4">+977-9828753172</p>
            <a href="mailto:simon234pradhan@gmail.com" className="border-b">
                simon234pradhan@gmail.com
            </a>
            {/* <Link 
              to="/samsung-analysis"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Samsung Analysis
            </Link> */}
        </div>      
    </div>
  )
}