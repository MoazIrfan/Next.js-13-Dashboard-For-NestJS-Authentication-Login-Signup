"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useRouter, redirect } from "next/navigation"
import withAuth from './withAuth/page'


const Item = () => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [error, setError] = useState<null | string>(null);

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push("/login");
  };


  return (
  <>
    <div className="bg-black h-16 flex items-center">
      <div className="flex justify-end w-full pr-4">
        <button
          className="text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
    <div className="container mx-auto mt-8 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Hello from NextJS</h1>
      <h2 className="mb-4">Backend is built using NestJS</h2>
    </div>
  </>

  )
}

export default withAuth(Item)