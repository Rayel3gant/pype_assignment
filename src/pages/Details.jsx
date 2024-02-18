import React from 'react'
import { useSelector } from 'react-redux'
import Menu from '../components/Menu'

const Details = () => {
  const { weather , forecast }=useSelector((state)=>state.weather)
  return (
    <div className='w-full'>
      <Menu/>

      <div className='w-full'>
        {
          weather.length ===0 ? (
            <div>No Data Found</div>
          ) : (
            <div>
                <div className='w-11/12 mx-auto lg:max-w-[700px] max-w-[400px] text-sm   flex flex-col'>

                  <div className='w-full flex items-center px-4 py-2 gap-x-4 justify-between'>
                    <div className='w-[30%]'>Location :</div>
                    <div className='w-[60%]'>{weather?.location?.name} ,{weather?.location?.region},{weather?.location?.country} </div>
                  </div>

                  <div className='w-full flex items-center px-4 py-2 gap-x-4 justify-between'>
                    <div className='w-[30%]'>Latitude :</div>
                    <div className='w-[60%]'>{weather?.location?.lat}</div>
                  </div>

                  <div className='w-full flex items-center px-4 py-2 gap-x-4 justify-between'>
                    <div className='w-[30%]'>longitude :</div>
                    <div className='w-[60%]'>{weather?.location?.lon}</div>
                  </div>

                  <div className='w-full flex items-center px-4 py-2 gap-x-4 justify-between'>
                    <div className='w-[30%]'>Timezone :</div>
                    <div className='w-[60%]'>{weather?.location?.tz_id}</div>
                  </div>

                  <div className='w-full flex items-center px-4 py-2 gap-x-4 justify-between'>
                    <div className='w-[30%]'>Wind Speed :</div>
                    <div className='w-[60%]'>{weather?.current?.wind_kph} kph</div>
                  </div>


                  <div className='w-full flex items-center px-4 py-2 gap-x-4 justify-between'>
                    <div className='w-[30%]'>Precipitation : </div>
                    <div className='w-[60%]'>{weather?.current?.precip_mm} mm</div>
                  </div>

                  <div className='w-full flex items-center px-4 py-2 gap-x-4 justify-between'>
                    <div className='w-[30%]'>Cloud :</div>
                    <div className='w-[60%]'>{weather?.current?.cloud}</div>
                  </div>


                  <div className='w-full flex items-center px-4 py-2 gap-x-4 justify-between'>
                    <div className='w-[30%]'>Visibility :</div>
                    <div className='w-[60%]'>{weather?.current?.vis_km} km</div>
                  </div>


                </div>

                <div className='text-2xl text-white mt-8'>Daily Forecast</div>
                <div className='w-11/12 mx-auto mt-8 flex flex-wrap  gap-x-4 gap-y-8 place-content-center p-4 border-2 border-blue-300 rounded-md'>
                  {
                    forecast?.forecast?.forecastday.map ((data,index)=>(
                      <div key={index} className='flex flex-col items-center p-6 rounded-md border-2 border-white'>
                        <img src={data?.day?.condition?.icon} alt=''/>
                        <div>{data?.day?.condition?.text}</div>
                        <div>{data.date}</div>
                        <div>Max Temp : {data?.day?.maxtemp_c} &#8451;</div>
                        <div>Min Temp :{data?.day?.mintemp_c} &#8451;</div>
                      </div>
                    ))
                  }
                </div>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Details