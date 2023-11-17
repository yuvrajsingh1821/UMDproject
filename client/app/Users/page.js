"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import UserData from '@/components/UserData'

const API = "http://localhost:8000/users";



const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  

  const fetchUsers = async (url) => {
      try {
          const res = await fetch(url);
          const data = await res.json();
          if (data.length > 0) {
              setUsers(data);
          }
          console.log(data);
      } catch (e) {
          console.error(e)
      }
  }


  useEffect(() => {
      fetchUsers(API);
  }, [])
  return (
    <div>
      <Header/>
      <div className='flex flex-col items-center mt-5'>
      
      <input className='p-2 w-[50%] text-lg placeholder-black outline-none border-2' type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search user'/>
      
      
      <table className='w-[100%] md:w-[60%]  m-auto mt-20 border-2'>
            <thead className='bg-violet-900 text-white border-2 border-violet-900' >
            <tr>
                <th className='table-heading'>ID</th>
                <th className='table-heading'>Name</th>
                <th className='table-heading'>Email</th>
                <th className='table-heading'>Phone</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users} search = {search}/>
            </tbody>
        </table>
      
      </div>
      
    </div>
  )
}

export default Users