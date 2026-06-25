"use client";
import { Button } from "../../components/ui/button";
import Link from "next/link";

import { useEffect, useState } from "react"
function  Services(){
    const [services,setservices]=useState([]);
    useEffect(()=>{
    getservices()
    },[])
    const getservices=()=>{
        fetch('http://localhost:1337/api/services?populate=*').
        then(response => response.json())
        .then(data => setservices(data.data) )
    }
    return(
        
        <>
        <div className="services  mt-5 p-5">
            <div className="continer  text-center">
  <h3 className="text-2xl font-nold">Comprehensive  <span className="text-blue-700 text-2xl font-bold"> MedicalServices</span></h3>
  <p>
    We provide a wide range of healthcare solutions with the highest standards of quality and safety. 
    
  </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
  {services.slice(0,8).map((item) => (
    <div
      key={item.id}
      className="flex flex-col items-center text-center gap-3 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50">
        <i className={`${item.IconService} text-2xl text-blue-600`}></i>
      </div>
      <h4 className="text-base font-semibold text-gray-800">{item.TitleService}</h4>
      <h6 className="text-sm font-normal text-gray-400 leading-relaxed">{item.DiscService}</h6>
    </div>
  ))}
</div>
<div className="allservices text-center">
   <Link href="/servicespage">
  <Button type="button" className="cursor-pointer">
    All Services
  </Button>
</Link>
</div>

        </div>
        </>
    )
}
export default Services