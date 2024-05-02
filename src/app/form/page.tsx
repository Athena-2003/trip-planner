'use client'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';


export default function Form() {
  const [location, setLocation] = useState();
  const [deslat, setDeslat] = useState();
  const [deslon, setDeslon] = useState();
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState(null);

  console.log(location)

  const fetchApiData = async ({ latitude, longitude }) => {
    const body = { "lat": latitude, "lon": longitude }
    const res = await axios.post("/api/poi", body)
  }

  const lat = (e) => {
    setDeslat(e.target.value)
  }

  const lon = (e) => {
    setDeslon(e.target.value)
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude })
      })
    }
  }, [])

  useEffect(() => {
    if (location) {
      fetchApiData(location);
    }
  }, [location]);

  const submit = async () => {
    const desloc = { "lat": deslat, "lon": deslon }
    const result = await axios.post("/api/poi", desloc)
    console.log(result)
    setFlag(true)
    setResult(result.data)
  }

  return (
    <>
      <div className='text-center p-6'>
        Hello, please fill the form
      </div>
      <div className='flex flex-row justify-center gap-4 p-6'>
        <Input value={deslat} onChange={lat} className='w-96' placeholder='Latitude' />
        <Input value={deslon} onChange={lon} className='w-96' placeholder='Longitude' />
      </div>
      <div className='flex justify-center m-auto'>
        <Button onClick={submit}> Submit </Button>
      </div>
      <div className='m-8'>
        {
          (flag&&result) && <ActivityTable result={result} /> 
        }
      </div>
    </>
  );
}

function ActivityTable({ result }) {
  return (
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2">Time</th>
          <th className="px-4 py-2">Activity</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(result).map(([time, activity]) => (
          <tr key={time} className="border-b border-gra-200">
            <td className="px-4 py-2">{time}</td>
            <td className="px-4 py-2">{activity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

