import Link from "next/link";
import "./Navbar.css"
//Navbar for pages with carousal
export function NavBarHome(){

	return (<nav className="NavbarHome">
              <h1>Cabit</h1>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/AboutUs">About Us</Link></li>
                <li><Link href="#">Destinations</Link></li>
                <li><Link href="ContactUs">Contact</Link></li>
                <li><Link href="Login"><p className = "navbar-special-button">Log in</p></Link></li>
                <li><Link href="SignUp"><p className = "navbar-special-button">Plan Trip</p></Link></li>
              </ul>
            </nav>);
}
//Navbar for general pages
export function NavBarNormal(){

  return (<nav className="Navbar_Normal">
              <h1>Cabit</h1>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/AboutUs">About Us</Link></li>
                <li><Link href="#">Destinations</Link></li>
                <li><Link href="/ContactUs">Contact</Link></li>
                <li><Link href="/Login"><p className = "navbar-special-button">Log in</p></Link></li>
                <li><Link href="/SignUp"><p className = "navbar-special-button">Plan Trip</p></Link></li>
              </ul>
            </nav>);
}