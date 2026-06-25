"use client";
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
import Search from "../search/[cname]/search";
import { useEffect, useState } from "react"
function MainLayot({ children }){
        useEffect(()=>{
        getcategoreis();
    },[]);
    console.log(children)
   const [savecategories,setcategories]=useState([])
    const getcategoreis=()=>{
        fetch("http://localhost:1337/api/categories?populate=*")
        .then(response => response.json())
        .then(data => setcategories(data.data))
    }
    return(
        <>
        <div className="mainlayot  grid grid-cols-2  gap-2 bg-red-700 p-5">
            {/* left side */}
<div className="leftside">
    <Command className="max-w-sm rounded-lg border">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className="max-h-none overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
          {savecategories.map((item) => (
    <div className="parent" key={item.id}>
      <div className="box bg-gray-200 shadow-xl   mt-2 mb-2 m-2 rounded p-4">
              <CommandItem><h4 className="text-2xl">        <i className={`text-blue-700 mt-5 text-2xl me-2 ${item.IconCategories}`}></i>
{item.NameCategories}</h4></CommandItem>

        
      </div>
    </div>
  ))}
    </CommandGroup>
    <CommandSeparator />
  </CommandList>
</Command>
</div>

            {/* right side */}
            <div className="rightside">
              <Search/>
            </div>

        </div>
        </>
    )
    
}
export default MainLayot