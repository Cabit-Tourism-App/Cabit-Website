"use client"; // yah i know will be changing this line soon
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Foot from "../components/Footer.jsx";
import { Poppins } from 'next/font/google';

// Import Bootstrap from CDN for the latest version
import "../styles/globals.css";
import "./layout.css";

// Font adjustments
const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function Layout({ children }) {
  const pathname = usePathname() || "not found";
  const lastPart = pathname.split('/').filter(Boolean).pop() || "home";
  console.log(lastPart);

  if (lastPart.startsWith('admin')) {
    return (
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        </head>
        <body className={poppins.className}>
          {children}
        </body>
      </html>
    );
  } // Ignore parent layout for `/admin`

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" />
      </head>
      <body className={`${poppins.className} d-flex flex-column min-vh-100`}>
        <div className="Back-Ground rows">
          <div className="gradient" />
          {children}
          <Foot />
        </div>
      </body>
    </html>
  );
}