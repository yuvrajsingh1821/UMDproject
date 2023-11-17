"use client"
import React from 'react'
import { useState } from 'react'

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);


  async function handleForm(event){
    let userData = {
        username:username,
        email:email,
        password:password,
        phone:phone
    }
    console.log(userData);
    event.preventDefault()
    try {
      await fetch('http://localhost:8000/user/new', {
        method:'post',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(userData)
        
    })
      setShowModal(true)
    } catch (error) {
        console.log(error);
    }
  }

  const Modal = () => {
    return(
      <div className='w-[100vw] h-[100vh] absolute z-50 top-0 bg-white flex flex-col justify-center items-center border-2 rounded-md border-violet-900'>
        <h1 className='text-center text-xl font-bold mt-4'>User registered</h1>
        <button className='bg-violet-900 p-4 rounded-md text-white text-xl w-[30%] mt-5' onClick={handleModalClick}>Okk</button>
      </div>
        
     )
  };

const handleModalClick = () =>{
  setShowModal(false);
}


  return (
    <div className='flex flex-col items-center mt-10'>
        <h1 className='text-3xl font-medium'>User Registration</h1>
        <form className='border-2 rounded-md border-black p-4 mt-4 w-[80%] md:w-[25%] flex flex-col items-center bg-violet-900' onSubmit={handleForm}>
            <input className='inputField' type="text" placeholder='Username' onChange={e => setUsername(e.target.value)}/>
            <input className='inputField' type="email" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
            <input className='inputField' type="text" placeholder='Password' onChange={e => setPassword(e.target.value)}/>
            <input className='inputField' type="text" placeholder='Phone' onChange={e => setPhone(e.target.value)}/>
            <button className='p-3 text-xl font-bold text-white border-2 rounded-lg mt-3'>Submit</button>
        </form>
        {showModal && <Modal/>}
    </div>
  )
}

export default UserForm