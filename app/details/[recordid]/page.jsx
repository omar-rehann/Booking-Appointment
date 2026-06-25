
"use client";
import Header from "../../_components/header";
import Footer from "../../_components/footer";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import Appointments from "@/app/appointment/page";

function Details({doctorname}){
         const params = useParams();
         const [alldoctor,setdoctor]=useState([]);
         const [suggest,setsuggest]=useState([]);
         useEffect(()=>{
getalldoctor();
suggestdoctor();
         },[])
         const getalldoctor=()=>{       
              fetch(`http://localhost:1337/api/doctors?id?=${params.recordid}`)
            .then(response => response.json())
            .then(data =>  setdoctor(data.data))

         }
         const suggestdoctor=()=>{
           fetch("http://localhost:1337/api/doctors?populate=*")
             .then(response => response.json())
             .then(data => setsuggest(data.data))

         }
         let final=alldoctor.filter(item => item.id == params.recordid);
    
   return (
  <>
    <Header />
    <div className="continer grid md:grid-cols-2 bg-white shadow-lg p-5">
          {/* left side  */}
      { <div className="leftside  p-2 rounded">
       {final && final.map((item) => {
  return (
    <>
      <div className="bg-white w-[100%] rounded-2xl border border-gray-100 overflow-hidden  shadow-sm">
        <div className=" items-center gap-4 p-6 bg-gray-50 border-b border-gray-100">
          <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-2xl flex-shrink-0">
            <div className="image">
              <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-05.png" alt="person" className="rounded mb-2" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900"> Name :{item?.name}</h2>
            <p className="text-sm text-gray-500">  Specilast :{item?.Categorie}</p>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <div className=" mt-2 mb-2 flex flex-col   gap-3 text-sm text-gray-700">
            <i className="fa-regular fa-clock text-gray-400 w-5 "></i>
            <span className="text-gray-400 w-20">Experience</span>
            {item?.experince}
          </div>

          <div className="mt-2 mb-2 flex flex-col  gap-3 text-sm text-gray-700">
            <i className="fa-solid fa-stethoscope text-gray-400 w-5 "></i>
            <span className="text-gray-400 w-20">Specialty</span>
            {item?.Categorie}
          </div>

          <div className=" mt-2 mb-2 flex flex-col gap-3 text-sm text-gray-700">
            <i className="fa-solid fa-location-dot text-gray-400 w-5"></i>
            <span className="text-gray-400 w-20">Address</span>
            {item?.adress}
          </div>

          <div className=" mt-5  mb-5  flex gap-3 pt-4 border-t border-gray-100">
            {[
              { icon: "fa-facebook", label: "Facebook" },
              { icon: "fa-instagram", label: "Instagram" },
              { icon: "fa-twitter", label: "Twitter" },
              { icon: "fa-github", label: "GitHub" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-lg border p-5 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                <i className={`fa-brands ${icon}`}></i>
              </a>
            ))}
            
          </div>
          
        </div>

        <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
            About
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {item?.about}
          </p>
        </div>
      </div>
       <hr />
       <div className="appointment bg-white shadow-sm p-5 mt-4 text-center rounded">
        <Appointments doctorname={item.name}/>
       </div>
        
    </>
  );
})}
      </div> }
          {/* right side */}
          <div className="rightside bg-white shadow-lg p-3">
       
            {suggest.map((item)=>{
              return(
                <>
                             <Link href={`/details/${item.id}`}>
                              <div className="box flex   item-center p-5 transition duration-300  cursor-pointer  bg-gray-200 shadow-2xl mt-5 mb-5 rounded ">
                  <div className="image ms-[20px]">
                    <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/team-05.png" className="w-[50px] ms-2 me-2 h-[50px] rounded" alt="" />
                  </div>
                  <div className="text ms-2 me-2">
                    <h5>{item.name}</h5>
                    <h5>{item.adress}</h5>
                  </div>
                </div>
                
 
</Link>
                
                </>
               
              )
            })}
           
          </div>
          
    </div>
    <Footer />
  </>
);
}
export default Details