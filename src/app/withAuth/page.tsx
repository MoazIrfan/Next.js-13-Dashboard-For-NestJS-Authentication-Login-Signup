"use client"
import { redirect } from "next/navigation"
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent : any) => {
  return (props: any) => {
    // const router = useRouter();

    const checkAuthenticationStatus = () => {
        
    const authToken = localStorage.getItem('token'); 
    
    return !!authToken; // Returns true if authToken exists, false otherwise
    };

    useEffect(() => {
      const isLoggedIn = checkAuthenticationStatus()
      
      if (!isLoggedIn) {
        redirect("/login");
      }
    }, [redirect]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
