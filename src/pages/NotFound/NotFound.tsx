import { NavLink } from 'react-router-dom'

import img from '../../assets/images/404.png'

import s from './NotFound.module.css'

export const NotFound = () => {
  return (
    <main className={s.NotFound}>
      <img src={img} alt="" />
      <div>
        <div>
          <h1>404</h1>
          <h2><span>ERRO:</span> Pagina não encontrada!</h2>
        </div>
        <NavLink className={s.button} to='/'>Voltar a Home</NavLink>
      </div>
    </main>
  )
}
