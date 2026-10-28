import React from 'react'
import UserCard from './UserCard.jsx'

function Exercise() {
  return (
  <>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        User Cards
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <UserCard name="Kanaya" email="kanaya@gmail.com" street="Jl. Merdeka" city="Bandung" />
        <UserCard name="Kinta" email="kinta@gmail.com" street="Jl. Malioboro" city="Jogja" />
        <UserCard name="Safitri" email="safitri@gmail.com" street="Jl. Sudirman" city="Jakarta" />
      </div>
    </div>
  </>
);
}

export default Exercise
