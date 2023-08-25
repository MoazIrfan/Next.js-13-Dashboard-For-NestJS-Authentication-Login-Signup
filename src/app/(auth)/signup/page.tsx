"use client"
import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from "next/navigation"
import '../../globals.css'


const SignUp = () => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const signUpUser = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)

    const signUpData = {
      name: formData.get('name')?.valueOf(),
      email: formData.get('email')?.valueOf(),
      password: formData.get('password')?.valueOf()
    }

    const url = 'http://localhost:3000/auth/signup'

    try {
      const response = await axios.post(url, signUpData);

      if (!response.data.token) {
        throw new Error('Failed to fetch data');
      }

      const mytoken = response.data.token;

      router.push("/")
    } 
    catch (error) {
      console.error('Error:', error);
      setErrorMessage('Enter valid email & password')
    }
  }


  return (
  <div className="container mx-auto mt-8">
    <div className="w-80 mx-auto">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Sign Up</h1>
      <form onSubmit={signUpUser} className="border-gray-300 rounded-lg p-8 mb-2 border border-solid">
      <input
          className="border border-gray-400 rounded px-3 py-2 mb-2 w-full focus:outline-none focus:border-blue-500"
          type="name"
          required
          id="name"
          name="name"
          placeholder="Name"
          autoComplete="name"
        />
        <input
          className="border border-gray-400 rounded px-3 py-2 mb-2 w-full focus:outline-none focus:border-blue-500"
          type="email"
          required
          id="email"
          name="email"
          placeholder="Email Address"
          autoComplete="email"
        />
        <input
          className="border border-gray-400 rounded px-3 py-2 mb-2 w-full focus:outline-none focus:border-blue-500"
          type="password"
          required
          name="password"
          placeholder="Password"
          id="password"
          autoComplete="current-password"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 w-full rounded focus:outline-none hover:bg-blue-600"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm text-gray-500">
        Already a member?{' '}
        <a href="/login" className="text-blue-500">
          Login
        </a>
      </p>
      {errorMessage && (
        <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
      )}
    </div>
  </div>
  )
}
export default SignUp;