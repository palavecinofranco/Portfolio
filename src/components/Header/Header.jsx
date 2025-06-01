import "./header.css"
import { useState } from 'react'

export function Header() {
  const [activo, setActivo] = useState(false)

  function closeMenu() {
    setActivo(false)
  }

  return (
    <div className="header-fixed">
        <a href="#home" className="logo">
          <span>F</span>
          <span>Cino</span>
        </a>
        <nav className={activo ? 'active' : ''}>
          <a className="nav-a" href="#home" onClick={closeMenu}>
            Inicio
          </a>
          <a className="nav-a" href="#sobre" onClick={closeMenu}>
            Sobre Mi
          </a>
          <a className="nav-a" href="#portfolio" onClick={closeMenu}>
            Portafolio
          </a>
          <a className="nav-a buthrefn" href="#contact" onClick={closeMenu}>
            Contacto
          </a>

        </nav>

        <div
          aria-expanded={activo ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={activo ? 'Fechar menu' : 'Abrir menu'}
          className={activo ? 'menu active' : 'menu'}
          onClick={() => {
            setActivo(!activo)
          }}
        ></div>
    </div>
  )
}
