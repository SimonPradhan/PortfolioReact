import React from 'react'
import EaseEvent from '../assets/EaseEvent.png'
import Weatherapp from '../assets/weatherapp.png'

export default function  () {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Projects</h1>
        <div className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <img src={EaseEvent} style={{ width: '300px', height: '150px', objectFit: 'cover' }}  className="mb-6 rounded" alt="image-easevent" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">EaseEvent</h6>
            <p className="mb-4 text-neutral-400">I created a online venue booking and management system for my Final Year Project. It was created with the purpose of easy venue booking method and to overcome the effort of traditional booking process.</p>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Django</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Bootstrap</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Html</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">JavaScript</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">MongoDB</span>
            </div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <img src={Weatherapp} style={{ width: '300px', height: '150px', objectFit: 'cover' }}  className="mb-6 rounded" alt="image-easevent" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Weather App</h6>
            <p className="mb-4 text-neutral-400">The weatherapp created shows the weather of different places with their whole description. It is also shows the background as per the weather status.</p>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Php</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">Html</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">JavaScript</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">CSS</span>
            <span className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">MySQL</span>
            </div>
        </div>
    </div>
  )
}
