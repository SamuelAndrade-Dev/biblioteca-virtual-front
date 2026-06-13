import { NavLink } from 'react-router';
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo">Biblioteca Virtual</span>
      </div>

      <nav className="navbar__nav" aria-label="Principal">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cadastro"
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
          }
        >
          Cadastro
        </NavLink>
        <NavLink
          to="/listagem"
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
          }
        >
          Listagem
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar;