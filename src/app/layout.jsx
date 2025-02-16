
import Link from "next/link";
import Image from "next/image";

//styles
//import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootstrap.css";
import "../styles/globals.css";
import "./layout.css";


import { Poppins } from 'next/font/google';

//just some font adjustments
const poppins = Poppins({
  weight: ['400', '600'], // Include the weights you need
  subsets: ['latin'], // Language support
});


export default function Layout({ children }) {

  return (
    <html>
      <body  className="d-flex flex-column min-vh-100">
        <div className="Back-Ground rows">
          <div className="gradient" /> 

          {/* Everything inside the background */}
            {children}
        </div>
        
      </body>
    </html>
  );
}
