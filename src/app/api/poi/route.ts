import axios from 'axios'

export async function POST(request: Request) {
    let place = await request.json()
    console.log(place)
    let lat = place.lat
    let lon = place.lon
    console.log(lat, lon)
    const apiKey = process.env.TOMTOM
    const restaurant = await axios.get(`https://api.tomtom.com/search/2/categorySearch/restaurant.json?lat=${lat}&lon=${lon}&view=IN&openingHours=nextSevenDays&timeZone=iana&relatedPois=off&key=${apiKey}`)
    const park = await axios.get(`https://api.tomtom.com/search/2/categorySearch/park.json?lat=${lat}&lon=${lon}&view=IN&openingHours=nextSevenDays&timeZone=iana&relatedPois=off&key=${apiKey}`)
    const temple = await axios.get(`https://api.tomtom.com/search/2/categorySearch/temple.json?lat=${lat}&lon=${lon}&view=IN&openingHours=nextSevenDays&timeZone=iana&relatedPois=off&key=${apiKey}`)
    const museum = await axios.get(`https://api.tomtom.com/search/2/categorySearch/museum.json?lat=${lat}&lon=${lon}&view=IN&openingHours=nextSevenDays&timeZone=iana&relatedPois=off&key=${apiKey}`)
    const cinema = await axios.get(`https://api.tomtom.com/search/2/categorySearch/cinema.json?lat=${lat}&lon=${lon}&view=IN&openingHours=nextSevenDays&timeZone=iana&relatedPois=off&key=${apiKey}`)
    const shop = await axios.get(`https://api.tomtom.com/search/2/categorySearch/shop.json?lat=${lat}&lon=${lon}&view=IN&openingHours=nextSevenDays&timeZone=iana&relatedPois=off&key=${apiKey}`)

    let result = {
        "7-8": `Get Breakfast at ${restaurant.data.results[0].poi.name}`,
        "8-9": `Take a stroll at ${park.data.results[0].poi.name}`,
        "9-12": `Go to ${temple.data.results[0].poi.name}`,
        "12-13": `Shop at ${shop.data.results[0].poi.name}`,
        "13-14": `Get lunch at ${restaurant.data.results[1].poi.name}`,
        "14-17": `Explore the ${museum.data.results[0].poi.name}`,
        "17-19": `Take a breather and rest`,
        "19-20": `Walk around`,
        "20-21": `Have dinner at ${restaurant.data.results[2].poi.name}`,
        "21-23": `Catch a movie at ${cinema.data.results[0].poi.name}`,
        "Rest": `Get back to your room and sleep tight`,
    }
    return Response.json(result)
}
