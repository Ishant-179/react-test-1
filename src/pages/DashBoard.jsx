import React, { useState } from 'react'
import UserCard from '../Components/UserCard';


const DashBoard = () => {
    const [users, setUsers] = useState([
      { id: 1, name: "Ishant Sharma", email: "ishant123@gmail.com", age: 22 },
      { id: 2, name: "Ashish pathak", email: "ashishpath7488@gmail.com", age: 20 },
      { id: 3, name: "udit pathak", email: "pathakudit950@gmail.com", age: 24 },
      { id: 4, name: "sahil rawat", email: "sahilrawat7903@gmail.com", age: 23 },
      { id: 5, name: "santosh pagal", email: "pagalsantosh76@gmail.com", age: 25 }
    ]);
  
    return (
      <div className="p-4 h-screen w-full bg-amber-500">
        <h1 className="text-2xl font-bold text-center mb-8 ">User Dashboard</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              age={user.age}
            />
          ))}
        </div>
      </div>
    )
}

export default DashBoard
