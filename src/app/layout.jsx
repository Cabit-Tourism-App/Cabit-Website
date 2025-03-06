
"use client"; // yah i know will be changing this line soon 
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
//styles
//import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootstrap.css";
import "../styles/globals.css";
import "./layout.css";

import Foot from  "../components/Footer.jsx"

import { Poppins } from 'next/font/google';

//just some font adjustments
const poppins = Poppins({
  weight: ['400', '600'], // Include the weights you need
  subsets: ['latin'], // Language support
});


export default function Layout({ children }) {
  const pathname =  usePathname()|| "not found";
  const lastPart = pathname.split('/').filter(Boolean).pop() || "home";
  console.log(lastPart)
   
  if (lastPart.startsWith('admin')) {
    return (

<html>
      <body>

            {children}
           
      </body>
</html>




    );} // Ignore parent layout for `/admin`

  return (
    <html>
      <body  className="d-flex flex-column min-vh-100">
        <div className="Back-Ground rows">
          <div className="gradient" /> 

            {children}
            <Foot/>
        </div>
      </body>
    </html>
  );
}
