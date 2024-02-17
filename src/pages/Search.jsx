import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import Loader from "../components/Loader"
import { useDispatch, useSelector } from 'react-redux'
import { setWeather,setForecast } from '../redux/slices/weatherSlice'
import haze from "../assets/images/haze.png"
import cloudy from "../assets/images/cloudy.png"
import rainy from "../assets/images/raining.png"
import storm from "../assets/images/storm.png"
import hot from "../assets/images/sun.png"
import suuny from "../assets/images/sunny.png"

import { MdSearch } from "react-icons/md";
import { TiHeart , TiHeartFullOutline } from "react-icons/ti";
import { addToFavourites } from '../services/operations/favouritesAPI'

const Search = () => {
  const apiKey='4d8c17299d6f1e329a9e3edb41327b28'

  const API_KEY='7c7d4dfb8ff74fcf971134104241502'

  const [inputValue,setInput]=useState("")
  const { token } =useSelector((state) =>state .user)
  const [temperatureMode,setMode]=useState(1)

  const [weatherData,setWeatherData]=useState(null)
  const [loading,setLoading]=useState(false)
  const dispatch=useDispatch()
  const [addStatus,setAddStatus]=useState(false)
  const [location,setLocation]=useState("")
  const getLocation=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(findLocation);
    } else {
      console.log("Geolocation Feature not supported")
    }
  }

  const findLocation=(position)=>{
    console.log(position)
    const userCoordinates = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }
    getLocationName(userCoordinates)
  }

  const getLocationName=async(coordinates)=>{
    const lat = coordinates.lat;
    const  lon = coordinates.lon;
    try{
      const response=await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`)
      const data=await response.json()

      setLocation(data[0].name)
      getWeather(data[0].name)

      getForecastWeather(data[0].name)


    } catch(error){
      console.log(error)
    }
  }


  useEffect(()=>{
    getLocation()
  },[])

  const getWeather=async(city)=>{
    console.log(city)
    setLoading(true)
    try{

      const response=await fetch (` http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
      const  data = await response.json();
      setWeatherData(data)
      dispatch(setWeather(data))
      console.log(data)
    } catch(error){
      console.log(error)
    }
    setLoading(false)
  }

  const getForecastWeather=async(city)=>{
    setLoading(true)
    try{
      const response=await fetch (` http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5`)
      const data= await response.json()
      console.log(data)
      dispatch(setForecast(data))
    } catch(error){
      console.log(error)
    }
    setLoading(false)
  }



  const searchButtonHandler=()=>{
    getWeather(inputValue)
    getForecastWeather(inputValue)
  }


  const add2Favourites=()=>{
    setAddStatus(true)
    dispatch(addToFavourites(weatherData?.location?.name,token))
  }

  const modeHandler=()=>{
    if(temperatureMode===1){
      setMode(2)
    } else {
      setMode(1)
    }
  }

  const changeHandler=(event)=>{
    setInput(event.target.value)
  }
  return (
    <div className='w-full '>
        <Menu/>

        <div>
          {
            loading ? (
              <Loader/>
            ) : (
              <div className='w-11/12 lg:w-3/4  mx-auto mt-8 '>
          <div className='w-full  flex flex-col items-end  lg:flex-row lg:justify-between gap-y-4 '>
            <input onChange={changeHandler} type='text' value={inputValue} placeholder='Search' className='p-3 border-b-4 w-full lg:w-[70%]  border-black  rounded-md '/>

            <button onClick={searchButtonHandler} className='px-6 py-3 w-fit lg:w-[20%] bg-white rounded-md border-b-4 border-black flex gap-x-2 lg:gap-x-6 items-center'><MdSearch/> Get weather</button>

          </div>



          <div className='w-full h-[calc(100vh-15rem)] flex justify-center items-center'>
            {
              loading ? (<Loader/>) : (
                <div className='w-3/4 max-w-[350px] flex flex-col gap-y-4'>
                  <div className='w-full bg-slate-100 py-8 border-black border-4 rounded-md flex flex-col items-center '>


                    <div><img src={weatherData?.current?.condition?.icon} className='w-[100px] h-[100px]'/></div>
                    <div className='flex flex-col mt-10 gap-y-2'>
                      <div>{weatherData?.current?.condition?.text} in {weatherData?.location?.name}</div>
                      <div>Temperature : 
                        {
                          (temperatureMode===1) ? (<span>{weatherData?.current?.temp_c}</span>) : (<span>{weatherData?.current?.temp_f}</span>)
                        } 
                      </div>
                      <div>Humidity : {weatherData?.current?.humidity}</div>
                      <div>Pressure : {weatherData?.current?.pressure_in}</div>
                    </div>
                  </div>

                  <button onClick={add2Favourites} className='px-6 py-3 w-full bg-red-500 rounded-md border-b-4 border-black flex gap-x-2 lg:gap-x-6 items-center'>
                    {
                      addStatus ? (<TiHeartFullOutline/>) : (<TiHeart/>)
                    }
                    <span>Add To Favourites</span>
                  </button>


                  <button onClick={modeHandler} className=' py-3 w-full bg-red-500 rounded-md border-b-4 text-center border-black'>
                      {
                        (temperatureMode===1) ? ("Change To Fahrenheit") : ("Change To Celsius")
                      }
                  </button>

                  
                </div>

              )
            }
          </div>
        </div>
            )
          }
        </div>
    </div>
  )
}

export default Search