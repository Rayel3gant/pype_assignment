import React, { useEffect, useState } from 'react'
import Menu from "../components/Menu"
import { useDispatch, useSelector } from 'react-redux'
import { getAllFavourites } from '../services/operations/favouritesAPI'
import { logout } from '../services/operations/authAPI'



const Favourites = () => {
  const dispatch=useDispatch()
  const [data,setData]=useState(null)
  const { token } =useSelector((state)=>state.user)


  const getAllData=async()=>{
    console.log(token)
    const result=await getAllFavourites(token)
    console.log("favourites data",result)
    setData(result)
  }

  const logoutHandler=async()=>{
    dispatch(logout)
  }


  useEffect(()=>{
    getAllData()
  },[])


  const deleteHandler=async()=>{

  }
  return (
    <div className='w-full'>
      <Menu/>

      {/* <div>
        {
          (data.length===0) ? (<div></div>): (
            <div>
              {
                data.map((item,index)=>(
                  <div>
                    {item.name}
                  </div>
                ))
              }
            </div>
          )
        }
      </div> */}


      <button onClick={logoutHandler} className='px-5 py-3 rounded-md '>Log Out</button>
    </div>
  )
}

export default Favourites