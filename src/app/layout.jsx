//Next modules
import Link from "next/link";
import Image from "next/image";

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "./layout.css";

//elements
import NavBarHome from "../components/NavbarHome.jsx"
export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div className="Back-Ground">
          {/* Fullscreen Background Image */}
          <Image 
            src="/images/beautiful-waterfall-landscape.jpg" 
            alt="Background"
            layout="fill" 
            objectFit="cover" 
            priority
          />
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
