import axios from "axios"

export async function POST(request: Request) {
    let place = await request.json()
    const apiKey = process.env.TOMTOM
    const endpoint = `https://api.tomtom.com/search/2/search/${place.loc}.json?extendedPostalCodesFor=Geo&minFuzzyLevel=1&maxFuzzyLevel=2&idxSet=Geo&view=IN&timeZone=iana&relatedPois=off&key=${apiKey}`
    const res = await axios.get(endpoint)
    console.log(res.data.results[0].position)
    return Response.json(res.data.results[0].position) 
}
