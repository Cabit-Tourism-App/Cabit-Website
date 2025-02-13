import Link from "next/link";
import "./NavbarHome.css"
export default function NavBarHome(){

	return (<nav className="NavbarHome">
              <h1>Cabit</h1>
              <ul>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Destinations</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#"><p className = "navbar-special-button">Log in</p></Link></li>
                <li><Link href="#"><p className = "navbar-special-button">Plan Trip</p></Link></li>
              </ul>
            </nav>);
}