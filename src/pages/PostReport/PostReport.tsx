import { NavLink } from 'react-router-dom'

import s from './PostReport.module.css'

export const PostReport = () => {
  return (
    <main className={s.PostReport}>
      <div>
        <div>
          <h1>Seu chamado foi registrado com sucesso!</h1>
          <h2>Agradecemos por colaborar ainda mais com a sociedade</h2>
          <p>Em breve os profissionais da prefeitura irão arrumar o bueiro</p>
        </div>
        <NavLink to='/'>Retornar a Home</NavLink>
      </div>
    </main>
  )
}
