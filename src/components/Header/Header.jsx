import "./header.css"
import { useState } from 'react'
import Cv from '../../assets/CV-Franco-Palavecino(Full-Stack-Developer).pdf'

export function Header() {
  const [activo, setActivo] = useState(false)

  function closeMenu() {
    setActivo(false)
  }

  return (
    <div className="header-fixed">
        <a href="#home" className="logo">
          <span>P</span>
          <span>Fran</span>
        </a>
        <nav className={activo ? 'activo' : ''}>
          <a className="nav-a" href="#home" onClick={closeMenu}>
            Home
          </a>
          <a className="nav-a" href="#sobre" onClick={closeMenu}>
            About me
          </a>
          <a className="nav-a" href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>
          <a className="nav-a" href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-a buthrefn" href={Cv} download>
            CV
          </a>
        </nav>

        <div
          aria-expanded={activo ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={activo ? 'Fechar menu' : 'Abrir menu'}
          className={activo ? 'menu activo' : 'menu'}
          onClick={() => {
            setActivo(!activo)
          }}
        ></div>
    </div>
  )
}