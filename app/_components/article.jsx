"use client";
import { useState,useEffect } from "react"
function Articles(){
    const [articles,setarticles]=useState([]);
    useEffect(()=>{
getarticels()
    },[])
    const getarticels=()=>{
         fetch("http://localhost:1337/api/articles?populate=*")
         .then(response => response.json())
         .then(data => setarticles(data.data))
    }
    console.log("all data",articles)
    return(
        <>
        <div className="continer text-center mt-5">
  <h4 className=" font-semibold mb-2 text-2xl">Medical <span className="text-blue-700 font-bold text-2xl">Articles</span></h4>
  <h6 className="text-gray-600 text-sm">
    Discover the latest health tips, medical insights, and expert advice to help you stay informed and healthy.
  </h6>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {articles.map((item) => (
    <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
      
      {/* Top bar */}
      <div className="h-1.5 w-full bg-blue-400" />

      <div className="p-5 flex flex-col gap-3 flex-1">

        {/* Icon + Category */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
            <i className={`${item.icon} text-blue-600 text-sm`}></i>
          </div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-base font-semibold text-slate-800 leading-snug">
          {item.title}
        </h4>

        {/* Desc */}
        <p className="text-sm text-slate-400 leading-relaxed flex-1">
          {item.desc}
        </p>

        {/* Footer */}
        <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
          <div>
            <p className="text-xl font-medium text-slate-700">{item.Author}</p>
            <p className="text-xl text-slate-400">{item.date}</p>
          </div>
          <span className="text-xl text-slate-400">{item.readTime}</span>
        </div>

      </div>
    </div>
  ))}
</div>

        </>
    )
}
export default Articles