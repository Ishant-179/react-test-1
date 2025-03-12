import React from 'react'

const UserCard = ({name, email, age}) => {
  return (
    <div className=" w-96 h-52 flex items-center flex-wrap bg-white justify-center gap-5 flex-col px-6 py-7 border rounded shadow-lg">
    <h2 className="text-xl font-bold text-gray-500">  {name}</h2>
    <p className='text-xl font-semibold text-gray-300'>  {email}</p>
    <p className='text-xl font-semibold text-gray-300'>  {age} years</p>
  </div>
  )
}

export default UserCard
