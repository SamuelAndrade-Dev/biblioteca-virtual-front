import { NavLink } from 'react-router';
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <aside className="navbar-brand">
        <span className="navbar__logo">Biblioteca Virtual</span>
      </aside>

      <nav className="navbar-nav" aria-label="Principal">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cadastro"
          className={({ isActive }) =>
            isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
          }
        >
          Cadastro
        </NavLink>
        <NavLink
          to="/listagem"
          className={({ isActive }) =>
            isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
          }
        >
          Listagem
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar;