import React, { useState } from 'react'

const UserData = ({users, search}) => {
  const [showModal, setShowModal] = useState(false);
  
  //popup/modal to generate report
  const Modal = () => {
      return(
        <div className='w-[400px] h-[200px] z-50 absolute top-[30%] md:left-[40%] bg-white flex flex-col justify-center items-center border-2 rounded-md border-violet-900'>
          <h1 className='text-center text-xl font-bold mt-4'>Generate report for the user</h1>
          <button className='bg-violet-900 p-4 rounded-md text-white text-xl w-[30%] mt-5' onClick={handleModalClick}>Generate</button>
        </div>
          
      )
  };
  const handleRowClick = () =>{
    setShowModal(true);
  }
  const handleModalClick = () =>{
    setShowModal(false);
  }

  // table cells
  return (
    <>
      {
                users.filter((curUser) => {
                  return search.toLowerCase() === ''
                    ? curUser
                    : curUser.username.toLowerCase().includes(search);
                }).map((curUser, index) => {
                    const {username, email, phone} = curUser;
                    return (
                        <tr className='cursor-pointer' onClick={handleRowClick} key={index}>
                            <td className='table-data'>{index+1}</td>
                            <td className='table-data'>{username}</td>
                            <td className='table-data'>{email}</td>
                            <td className='table-data'>{phone}</td>
                        </tr>
                    )
                })

      }
      {showModal && <Modal/>}
    </>
  )
}

export default UserData