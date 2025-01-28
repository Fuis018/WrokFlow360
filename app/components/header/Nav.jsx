"use client";
import Pages from "./Pages";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // Importa usePathname para detectar cambios de ruta

export default function Nav() {
  const [isModal, setModal] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname(); // Hook para obtener la ruta actual

  // Efecto para cerrar el modal al cambiar de ruta
  useEffect(() => {
    setModal(false); // Cierra el modal cada vez que cambie la ruta
  }, [pathname]); // El efecto se ejecuta cada vez que pathname cambia

  return (
    <nav className="header__pages__nav">
      <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="header__pages__nav-svg"
          onClick={() => setModal(true)}
        >
          <path d="M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"></path>
        </svg>
        <div
          className={`header__pages__nav-content ${isModal ? "header__pages__nav-block" : "header__pages__nav-none"}`}
          ref={navRef}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="header__pages__nav-svg"
            onClick={() => setModal(false)}
          >
            <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
          </svg>
          <div className="header__pages__nav-pages">
            <Pages ref="" name="Inicio" onClick={() => setModal(false)} />
            {/* <Pages ref="bungalows" name="Bungalows" onClick={() => setModal(false)} /> */}
            <Pages ref="we" name="¿Quiénes somos?" onClick={() => setModal(false)} />
          </div>
        </div>
    </nav>
  );
}