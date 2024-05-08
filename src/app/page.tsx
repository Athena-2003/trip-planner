'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ReactPlayer from "react-player"
// import { Input } from "@/components/ui/input"
// import { useState } from 'react'
// import axios from 'axios'

interface IconProps {
  className: string,
}

export default function Component() {
  return (
    <div className="relative">
     <video src="/montage.mp4" className="h-full w-screen absolute inset-0 object-cover -z-50" autoPlay muted controls={false} loop playsInline></video> 
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-opacity-50 h-full">
        <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white"><a href="/">TRIPY</a></h1>
          <div className="flex items-center space-x-8">
            <Link className="text-white" href="https://www.youtube.com/shorts/SXHMnicI6Pg">
              Discover
            </Link>
            <Link className="text-white" href="https://www.youtube.com/shorts/SXHMnicI6Pg">
              About Us
            </Link>
            <Button className="bg-orange-500 text-white">
              <Link className="text-white" href="/map">
                Explore Maps
              </Link>
            </Button>
          </div>
        </nav>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-bold text-white mt-20 mb-6">Discover Your Next Adventure</h2>
          <div className="flex justify-center mt-16 space-x-4">
            {/* 
            <Input value={inputData} onChange={handleChange} className="w-1/4 py-3 px-4" placeholder="Search Destinations..." />
            <Button onClick={handleSubmit} className="bg-orange-500 text-white px-6" variant="default">
              <SearchIcon className="text-white" />
            </Button>
            */}
            <Button className="bg-orange-500 text-white p-8 font-bold text-2xl">
              <Link className="text-white" href="/form">
                Plan Trip  
              </Link>
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-6 py-12">
          <h3 className="text-3xl text-white font-bold text-center">Go Beyond Your Imagination</h3>
          <p className="text-white text-center mt-4">Discover Your Ideal Experience With Us</p>
          <div className="flex mt-8 justify-center space-x-4">
            <Button className="text-white" variant="ghost">
              <ChevronLeftIcon className="text-white" />
            </Button>
            <div className="grid grid-cols-3 gap-4">
              <img
                alt="River Top Deals"
                className="rounded-lg"
                height="150"
                src="/p1.jpg"
                style={{
                  // aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Travel Around The World"
                className="rounded-lg"
                height="200"
                src="/p2.jpg"
                style={{
                  // aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <img
                alt="Forest Top Deals"
                className="rounded-lg"
                height="200"
                src="/p3.jpg"
                style={{
                  // aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
            <Button className="text-white" variant="ghost">
              <ChevronRightIcon className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function SearchIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
