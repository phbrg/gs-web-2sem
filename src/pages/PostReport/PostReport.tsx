import img from '../../assets/images/cellphone.png'

import { NavLink } from 'react-router-dom'
import { toast } from 'sonner'

import s from './PostReport.module.css'

export const PostReport = () => {
  toast.success('Chamado Registrado com sucesso!\nMuito obrigado pela colaboração');
  
  return (
    <main className={s.PostReport}>
      <img src={img} alt="" />
      <div>
        <div>
          <h1>Seu chamado foi registrado com sucesso!</h1>
          <p>Agradecemos por colaborar ainda mais com a sociedade</p>
          <h2>Em breve os profissionais da prefeitura irão arrumar o bueiro</h2>
        </div>
        <NavLink className={s.button} to='/'>Retornar a Home</NavLink>
      </div>
    </main>
  )
}
