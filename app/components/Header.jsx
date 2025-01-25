"use client"
import '@/public/styles/header.css';
import localFont from "next/font/local";
import Image from 'next/image';
import Link from 'next/link'
import Nav from "./header/Nav";
import Social from "./header/Social";

const brouwerij = localFont({
  src: "../fonts/Brouwerij.otf",
  variable: "--font-brouwerij"
});

export default function Header({ title }) {
  return (
    <header>
      <Link href="/" className="header__inicio">
        <Image
          src="/main/logo_50.jpg"
          alt={title}
          width={75}
          height={75}
          style={{marginRight:"10px"}}
        ></Image>
        <div className={`header__inicio-title ${brouwerij.variable}`}>
          <div>{(title).toUpperCase()}</div>
          <div style={{color:"#f8bc66"}}>360</div>
        </div>
      </Link>
      <div className="header__pages">
        <Nav />
      </div>
      <div className="header__social">
        <Social />
      </div>
    </header>
  );
}