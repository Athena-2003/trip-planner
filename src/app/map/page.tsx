'use client'
// import axios from 'axios'
import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
// import { Input } from "@/components/ui/input";
// import { Button } from '@/components/ui/button';
import './map.css';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export default function Map() {
  const [location, setLocation] = useState<Coordinates | undefined>();

  const Mapcontainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  // const udupi: Coordinates = { lat: 13.340924790682903, lng: 74.74311446677487 };
  const [zoom] = useState<number>(16);
  const apiKey = process.env.NEXT_PUBLIC_MAPTILER;
  const [marker, setMarker] = useState<maptilersdk.Marker | null>(null);
  // const [search, setSearch] = useState()

  console.log(location)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude })
      })
    }
  }, [])

  // const searchloc = (e) => {
  //   setSearch(e.target.value)
  // }

  // const searchDestination = async () => {
  //   try {
  //     const searchjson = { "loc": search };
  //     const response = await axios.post(`/api/search`, searchjson);
  //     setLocation(response.data);
  //   } catch (error) {
  //     console.error("Error searching destination:", error);
  //   }
  // }

  useEffect(() => {
    if (map.current) return;

    if(location) {
      map.current = new maptilersdk.Map({
        container: Mapcontainer.current!,
        style: maptilersdk.MapStyle.STREETS,
        center: [location.longitude, location.latitude],
        zoom: zoom,
        apiKey: apiKey
      });

      const newMarker = new maptilersdk.Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(map.current);
      setMarker(newMarker);
    }

  }, [location]);

  return (
      <div className="map-wrap">
        <div ref={Mapcontainer} className="map" />
      </div>
  )
}

