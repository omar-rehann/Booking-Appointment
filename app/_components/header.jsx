"use client"
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { Button } from "../../components/ui/button";
function Header(){

    return(
        <>
        <div className=" bg-gray-200 shadow-xl p-4 flex justify-between items-center">
            <div className="logo">
                <h1 className="font-bold text-xl text-blue-700"> <i className="fa-solid fa-book-medical me-2 text-blue-700"></i>Doctor Appointments
</h1>

            </div>
            <div className="links hidden md:block ">
                <ul className="flex">
                    <li>
                          <Link href="/homepage"   className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out">Home</Link>
                    </li>
                    <li>
                          <Link href="/servicespage"   className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
>Services</Link>
                    </li>
                       <li>
                          <Link href="/articlepage"   className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
>Articles</Link>
                    </li>
                       <li>
                          <Link href="/contactpage"   className="font-bold me-2 text-md hover:text-blue-700 transition-colors duration-300 ease-in-out"
>Contact Us</Link>
                    </li>

              
                </ul>

            </div>
            <div className="button"> 
<UserButton>
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Booking"
          href="/booking"
          labelIcon="📅"
        />
      </UserButton.MenuItems>
    </UserButton>

            </div>
        </div>
        </>
    )
}
export default Header