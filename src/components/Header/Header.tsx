import { NavLink } from 'react-router-dom'

import s from './Header.module.css'

export const Header = () => {
  return (
    <header className={s.Header}>
      <p>Mapeia</p>
      <nav>
        <NavLink className={({ isActive }) => isActive ? s.active : s.inactive} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? s.active : s.inactive} to='/about'>Sobre</NavLink>
        <NavLink className={({ isActive }) => isActive ? s.active : (s.inactive, s.login)} to='/login'>Login</NavLink>
      </nav>
    </header>
  )
}
