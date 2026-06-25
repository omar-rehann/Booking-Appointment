"use client";
import Header from "../../_components/header";
import Footer from "../../_components/footer";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation";

function ChooseCateegorey(){
     const params = useParams();
        useEffect(()=>{
        getcategoreis();
        chooseelement();
    },[]);
   const [savecategories,setcategories]=useState([]);
   const [choosecategorey,setchoose]=useState([]);



    const getcategoreis=()=>{
        fetch("http://localhost:1337/api/categories?populate=*")
        .then(response => response.json())
        .then(data => setcategories(data.data))
    }
       const chooseelement=()=>{
fetch(
  `http://localhost:1337/api/doctors?NameCategories=${params.cname}*`
)     .then(response => response.json())
    .then(data => setchoose(data.data))
   }
   console.log("all doctor",choosecategorey)
   const final=choosecategorey.filter(item=> item.Categorie == params.cname);
   console.log("final doctor", final)
    return(
        <>
        <Header/>
        <div className="mainlayot  grid md:grid-cols-2 m-2  gap-2 bg-white shadow-lg p-5">
            {/* left side   all  categorey  */}
<div className="leftside">
    <Command className=" rounded-lg border m-2 w-[90%]">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className="max-h-none overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
     
  {savecategories.map((item) => (
  <Link href={`/search/${item.NameCategories}`} key={item.id}>
    <div className="box leading-12 bg-gray-200 shadow-xl mt-2 mb-[30px] m-2 rounded p-4 flex items-center gap-3 hover:bg-gray-300 transition-colors cursor-pointer">
      <i className={`text-blue-700 text-2xl ${item.IconCategories}`}></i>
      <h4 className="text-2xl">{item.NameCategories}</h4>
    </div>
  </Link>
))}
    </CommandGroup>
    <CommandSeparator />
  </CommandList>
</Command>
</div>
{/* right side    choose categorey    */}
<div className="rightside">
    <div className="continer bg-gray-200 p-3 rounded   ms-3 me-4 m-2">
        <h4>{params.cname}</h4>
    </div>
   <div className="content grid grid-cols-1 gap-4 p-4">
  { final && final.map((item, index) => (
    <div
      key={index}
      className=" p-4 rounded-lg border border-gray-200 bg-white shadow-sm"
    >
        <div className="image mb-2">
            <img className="w-[50px] h-[50px] rounded-full" src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-05.png" alt="" />
        </div>
      <div className="text flex flex-col gap-1 mb-2">
        <h4 className="text-base font-semibold text-gray-800">{item.name}</h4>
        <h4 className="text-sm text-gray-500">{item.experince}</h4>
      </div>
      <div className="button mt-2">
         <Link href={`/details/${item.id}`}>
  <Button  className="cursor-pointer">
    Booking Now
  </Button>
</Link>
        
      </div>
    </div>
    
  ))}
  
  
</div>

</div>


        </div>
        <Footer/>
        </>
    )
    
}
export default ChooseCateegorey