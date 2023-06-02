import express from "express"
import axios from "axios"
import config from "config"

const router=express.Router()

router.get("/weather/:city",(req,res)=>{

const city=req.params.city
console.log(city)
let data=axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.get("apikey")}`)

data.then((response)=>{
    let y=response.data
    let z=y.main.temp
    console.log(y)
    console.log(y.main)
    res.json({"Temperture in Fahrenheit" :`${((z - 273.15) * 9/5 + 32).toFixed(2)}\u00B0F`,
    "Temperature in Celcius:":`${(z -273.15).toFixed(2)}\u00B0C`,
    "Longitude:":`${y.coord.lon}`,
    "Latitude:":`${y.coord.lat}`,
    "Humidity":`${y.main.humidity}%`,
    "Wind Speed":`${y.wind.speed} meter/sec`,
    "Pressure":`${y.main.pressure} hPa`,
    "Visibility":`${y.visibility/1000}km`,

})
    console.log(`City name is:${y.name}`)
   
    console.log(`Temperature in Fahrenheit is:${((z - 273.15) * 9/5 + 32).toFixed(2)}\u00B0F`)
    console.log(`Temperature in Celcius is :${(z -273.15).toFixed(2)}\u00B0C`)
    console.log(`Longitude is:${y.coord.lon}`)
    console.log(`Latitude is:${y.coord.lat}`)
    console.log(`Humidity in air is:${y.main.humidity}%`)
    
}
).catch((e)=>{
    
    console.log("Some connection/input error")
    res.status(400).json({"Error":"Some connection/input error"})


})
})

export default router