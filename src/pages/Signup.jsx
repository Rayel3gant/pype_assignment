import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../services/operations/authAPI'

const Signup = () => {

    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm()

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const submitHandler=async(data)=>{
        console.log(data)
        dispatch(signup(data.username,data.email,data.password,navigate))
    }
  return (
    <div className='w-full h-[calc(100vh-6rem)] flex justify-center items-center'>
        <form onSubmit={handleSubmit(submitHandler)} className='p-8 min-w-[500px] border-2 rounded-md border-blue-950 flex flex-col gap-y-12'>

            <div className='flex flex-col gap-y-1'>
                <label htmlFor='username' className='text-left text-xs text-white'>Username</label>
                <input type='text' id='username' name='username' className='p-3 border-b-4 border-orange-300 rounded-md bg-blue-200' {...register('username',{required:true})}/>
                {
                    errors.username && <span>Please Enter Username</span>
                }
            </div>
            <div className='flex flex-col gap-y-1'>
                <label htmlFor='email' className='text-left text-xs text-white'>Email</label>
                <input type='email' id='email' name='email' className='p-3 border-b-4 border-orange-300 rounded-md bg-blue-200' {...register('email',{required:true})}/>
                {
                    errors.email && <span>Please Enter Email</span>
                }
            </div>


            <div className='flex flex-col gap-y-1'>
                <label htmlFor='password' className='text-left text-xs text-white '>Password</label>
                <input type='password' id='password' name='password' className='p-3 border-b-4 border-orange-300 rounded-md bg-blue-200' {...register('password',{required:true})} />
                {
                    errors.password && <span>Please Enter Password</span>
                }
            </div>

            <button type='submit' className='button px-5 py-3 font-bold uppercase text-2xl text-white bg-black rounded-md w-fit place-self-end'>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup