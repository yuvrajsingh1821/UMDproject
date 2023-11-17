import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-14 bg-violet-900 flex items-center justify-between md:justify-start md:gap-5 text-xl text-white px-5 md:pl-10'>
        <Link href="/Users">Users</Link>
        <Link href="/register">Register</Link>
    </div>
  )
}

export default Header