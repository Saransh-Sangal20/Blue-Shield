import React from 'react'
import india from './download.jpg';

export default function India() {
  return (
    <>
    <div className="p-2 border border-gray-300 bg-white rounded-lg shadow-md h-full">
        <img style={{height: "35rem"}} src={india} alt="India map"></img>
    </div>
    </>
  )
}
