import img from '../../assets/images/pedreiro.png'

import { NavLink } from 'react-router-dom'

import s from './Home.module.css'

export default function Home() {
  return (
    <main className={s.Home}>
      <img src={img} alt="" />
      <div>
          <div>
          <h1>Registre um <span>bueiro</span> com probelma.</h1>
          <h2>Achou um bueiro com algum tipo de <span>problema</span>, <span>entupido</span> ou <span>alagado</span>?</h2>
        </div>
        <div>
          <NavLink className={s.button} to='/report'>Registrar um chamado agora!</NavLink>
          <p><span>Mapeia</span>, a poucos clicks de resolver um grande problema.</p>
        </div>
      </div>
    </main>
  )
}
