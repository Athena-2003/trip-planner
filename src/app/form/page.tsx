'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Form() {
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState(null);
  const [search, setSearch] = useState("");
  const [showTimeInputs, setShowTimeInputs] = useState(false);

  const searchDestination = async () => {
    try {
      const searchjson = { "loc": search };
      const response = await axios.post(`/api/search`, searchjson);
      setResult(response.data);
      setShowTimeInputs(true);
    } catch (error) {
      console.error("Error searching destination:", error);
    }
  }

  const start = (e) => {
    setStarttime(e.target.value)
  }

  const end = (e) => {
    setEndtime(e.target.value)
  }

  const searchloc = (e) => {
    setSearch(e.target.value)
  }

  const submit = async () => {
    const timeslot = { "start": starttime, "end": endtime, "lat": result.lat, "lon": result.lon };
    try {
      const response = await axios.post("/api/poi", timeslot);
      setResult(response.data);
      setFlag(true);
    } catch (error) {
      console.error("Error submitting time slots:", error);
    }
  }

  return (
    <div className='h-screen relative'>
      <video src="/montage.mp4" className="h-full w-screen absolute inset-0 object-cover -z-50" autoPlay muted controls={false} loop playsInline></video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-opacity-50 h-full">
        <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white"><a href='/'>TRIPY</a></h1>
          <div className="flex items-center space-x-8">
            <Link className="text-white" href="https://www.youtube.com/shorts/SXHMnicI6Pg">
              Discover
            </Link>
            <Link className="text-white" href="https://www.youtube.com/shorts/SXHMnicI6Pg#">
              About Us
            </Link>
            <Button className="bg-orange-500 text-white">
              <Link className="text-white" href="/map">
                Explore Maps
              </Link>
            </Button>
          </div>
        </nav>
        <div className='text-center p-6 text-white'>
          Ahoy!!, Please Enter your destination.
        </div>
        {!showTimeInputs && (
          <div className='flex flex-col justify-center items-center text-center gap-4 p-6 m-auto'>
            <Input value={search} onChange={searchloc} className='w-96' placeholder='Destination' />
            <Button className='bg-orange-500' onClick={searchDestination}>Search</Button>
          </div>
        )}
        {showTimeInputs && (
          <div className='flex flex-col justify-center items-center text-center gap-4 p-6 m-auto'>
            <Input value={starttime} onChange={start} className='w-96' placeholder='Start Time in 24hr format' />
            <Input value={endtime} onChange={end} className='w-96' placeholder='End Time in 24hr format' />
            <Button className='bg-orange-500' onClick={submit}>Submit</Button>
          </div>
        )}
        <div className='m-8'>
          {(flag && result) && <ActivityTable result={result} />}
        </div>
      </div>
    </div>
  );
}

function ActivityTable({ result }) {
  return (
    <div className="container mx-auto px-4 opacity-80">
      <div className="bg-white shadow-md rounded-lg my-6">
        <table className="w-full border-collapse border border-black text-center rounded-lg">
          <thead>
            <tr className="border-black rounded-t-lg">
              <th className="px-4 py-2 bg-gray-200 rounded-tl-lg">Time</th>
              <th className="px-4 py-2 bg-gray-200 rounded-tr-lg">Activity</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(result).map(([time, activity]) => (
              <tr
                key={time}
                className="border-b border-gray-300 hover:bg-gray-100 transition-colors duration-300"
              >
                <td className="px-4 py-2">{time}</td>
                <td className="px-4 py-2">{activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


