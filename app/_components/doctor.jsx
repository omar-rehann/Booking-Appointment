"use client";
import { useState,useEffect } from "react";
import { Button } from "../../components/ui/button"
import Link from "next/link";
function Doctor(){
      const [Doctors,setdoctors]=useState([]);
        useEffect(()=>{
    getdoctors()
        },[])
        const getdoctors=()=>{
             fetch("http://localhost:1337/api/doctors?populate=*")
             .then(response => response.json())
             .then(data => setdoctors(data.data))
        }
    return(
        <>
        <div className="continer mt-5  text-center">
  <h4 className="text-2xl ">Our <span className="text-2xl font-bold text-blue-700">Doctors</span></h4>
  <h5>A dedicated team of specialists providing trusted medical care</h5>
</div>
{/* href={`/details/${item.id}`} */}
<div className="content">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

    {Doctors.map((item) => (
      <Link
        href={`/details/${item.id}`}
        key={item.id}
        className="block"
      >
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">

          <div className="image">
            <img
              src={`http://localhost:1337${item.img?.[0]?.url || "/placeholder.jpg"}`}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
          </div>

          <div className="info p-4">
            <h5 className="font-semibold">{item.name}</h5>
            <h6 className="text-gray-500">{item.adress}</h6>
          </div>

          <div className="booking">
            <button className="cursor-pointer m-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Book Now
            </button>
          </div>

        </div>
      </Link>
    ))}

  </div>
</div>
        </>
    )
}
export default Doctor