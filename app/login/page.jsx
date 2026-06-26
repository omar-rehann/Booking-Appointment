"use client";
import { SignInButton } from "@clerk/nextjs";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
   const { isSignedIn } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn) {
            router.push("/homepage");
        }
    }, [isSignedIn, router]);
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side */}
      <div className="   h-[100vh]">
        <img
          src="https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.webp?a=1&b=1&s=612x612&w=0&k=20&c=NjsxMl8GGuQhGh5Pf1DMndLw4UoS2-lTLJuLpEeZvK8="
          alt="Login"
          className="w-full h-[100vh] object-cover"
        />
      </div>

      {/* Right Side */}
     <div className="w-full flex flex-col items-center justify-center">
  <div className="w-full max-w-md p-8  rounded-xl shadow-lg">
    <h1 className="text-3xl font-bold text-center mb-2">
      Welcome To Doctor Appointment
    </h1>

    <div className="text text-center text-gray-600 mt-4 leading-7">
      <p>
        Book appointments with trusted doctors quickly and easily.
      </p>

      <p>
        Manage your medical visits, choose available time slots,
        and stay connected with healthcare professionals.
      </p>
    </div>

    <div className="mt-6 text-center">
      <SignInButton mode="modal">
        <button className="bg-blue-600 mt-5 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer">
          Sign In
        </button>
      </SignInButton>
    </div>
  </div>
</div>
    </div>
  );
}