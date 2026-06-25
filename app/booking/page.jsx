"use client"
import Header from "../_components/header"
import Footer from "../_components/footer"
import { useEffect, useState } from "react"

function Bookinguser(){
    useEffect(()=>{
        getbooking();
    },[])
    const [getbook,setbooking]=useState([]);
    const getbooking   =()=>{
        fetch("http://localhost:1337/api/appointments")
        .then(response => response.json())
        .then(data => setbooking(data.data))
    }
const deletebooking = async (documentId) => {

  const res = await fetch(
    `http://localhost:1337/api/appointments/${documentId}`,
    {
      method: "DELETE",
    }
  );

  getbooking(); 
};
    return(
        <>
        <Header/>

        <div className="booking bg-gray-400 p-4  rounded mt-4 mb-4">
  <table className="w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="border p-2">Id</th>
      <th className="border p-2">Patient</th>
      <th className="border p-2">Doctor</th>
      <th className="border p-2">Time</th>
      <th className="border p-2">Date</th>
      <th className="border p-2">Note</th>
    <th className="border p-2">Cancel Booking</th>

    </tr>
  </thead>

  <tbody>
    {getbook.map((item,index) => (
      <tr key={item.id} className="hover:bg-gray-50">
        <td className="border p-2">{index+1}</td>
        <td className="border p-2">{item.UserName}</td>
        <td className="border p-2">{item.DoctorName}</td>
        <td className="border p-2">{item.Time}</td>
        <td className="border p-2">{item.Date}</td>
        <td className="border p-2">{item.Note}</td>
         <td className="border p-2 text-center"><button onClick={()=>deletebooking(item.documentId)} className="bg-red-700 p-3 rounded text-white cursor-pointer">Cancel Booking</button></td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
        
        <Footer/>
        </>
    )
}
export default Bookinguser