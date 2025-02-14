//Next modules
import Link from "next/link";
import Image from "next/image";

//styles
//import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootstrap.css";
import "../styles/globals.css";
import "./layout.css";

//elements
import NavBarHome from "../components/NavbarHome.jsx"
import { Poppins } from 'next/font/google';

//just some font adjustments
const poppins = Poppins({
  weight: ['400', '600'], // Include the weights you need
  subsets: ['latin'], // Language support
});


export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div className="Back-Ground rows">
          <div className="gradient" />

          {/* Everything inside the background */}
          <div className="container-m">
            <NavBarHome/>

            {/* Main Content */}
            <div className="Content">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
