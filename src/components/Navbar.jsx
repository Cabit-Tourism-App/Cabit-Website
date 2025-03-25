'use client';

import Link from "next/link";
import "./Navbar.css";
import { useEffect, useState } from "react";

export function NavBarHome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hasSession = document.cookie.includes("session-id=");
    setIsLoggedIn(hasSession);
  }, []);

  return (
    <nav className="NavbarHome">
      <h1><img src="images/CabitImageW.png" width="150px" /></h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/AboutUs">About Us</Link></li>
        <li><Link href="/VisitingPlaces">Destinations</Link></li>
        <li><Link href="/ContactUs">Contact</Link></li>

        {isLoggedIn ? (
          <li>
            <img 
              className = "navbar-profile-img"
              src="/images/icon-192x192.png" 
              alt="Gmail" 
              width="30px" 
              style={{ cursor: 'pointer' }} 
            />
          </li>
        ) : (
          <li><Link href="/Login"><p className="navbar-special-button">Log in</p></Link></li>
        )}

        <li><Link href="/PlanTrip"><p className="navbar-special-button">Plan Trip</p></Link></li>
      </ul>
    </nav>
  );
}

export function NavBarNormal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hasSession = document.cookie.includes("session-id=");
    setIsLoggedIn(hasSession);
  }, []);

  return (
    <nav className="Navbar_Normal">
      <h1>Cabit</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/AboutUs">About Us</Link></li>
        <li><Link href="/VisitingPlaces">Destinations</Link></li>
        <li><Link href="/ContactUs">Contact</Link></li>

        {isLoggedIn ? (
          <li>
            <img 
              className = "navbar-profile-img"
              src="/images/icon-192x192.png" 
              alt="Gmail" 
              width="30px" 
              style={{ cursor: 'pointer' }} 
            />
          </li>
        ) : (
          <li><Link href="/Login"><p className="navbar-special-button">Log in</p></Link></li>
        )}

        <li><Link href="/PlanTrip"><p className="navbar-special-button">Plan Trip</p></Link></li>
      </ul>
    </nav>
  );
}
