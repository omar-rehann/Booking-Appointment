"use client";
import { useEffect, useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import Link from "next/link";
function Search(){
    useEffect(()=>{
        getcategoreis();
    },[])
   const [savecategories,setcategories]=useState([])
    const getcategoreis=()=>{
        fetch("http://localhost:1337/api/categories?populate=*")
        .then(response => response.json())
        .then(data => setcategories(data.data))
    }
    return(
        <>
        <div className="search bg-white shadow-sm p-4">
        <div className="text mt-5 text-center">
            <h4 className="text-black font-bold text-3xl">Search <span className="text-blue-700">Doctors</span></h4>
<p className="text-gray-700 text-sm mt-1">
  Find and book appointments with trusted doctors easily and quickly.
</p>        </div>
<div className="inputsearch flex  justify-center items-center m-4">
     <Input type="search" placeholder="Search..." className="w-[70%] bg-gray-300 me-4" />
      <Button className="cursor-pointer">Search</Button>

</div>
{/* start categories */}
<div className="categories grid md:grid-cols-3">
  {savecategories.map((item) => (
    <Link href={`/search/${item.NameCategories}`} key={item.id}>
      <div className="box bg-gray-200 cursor-pointer shadow-xl m-2 rounded p-4">
        <h4 className="text-2xl">{item.NameCategories}</h4>
        <i className={`text-blue-700 mt-5 text-2xl ${item.IconCategories}`}></i>
      </div>
    </Link>
  ))}
</div>
        </div>
        </>
    )
}
export default Search