import { toast } from 'sonner'
import { NavLink } from 'react-router-dom'

import s from './Register.module.css'

export const Register = () => {
  return (
    <main className={s.Register}>
      <form onSubmit={(e) => e.preventDefault()}>
        <header>
          <h1>Acesse sua conta</h1>
          <h2>Insira suas credenciais para acessar sua conta</h2>
        </header>
        <div>
          <label htmlFor='name'>
            Nome:
            <input name='name' type='text' placeholder='Digite seu Nome...' />
          </label>
          <label htmlFor='email'>
            Email:
            <input name='email' type='email' placeholder='Digite seu Email...' />
          </label>
          <label htmlFor='password'>
            Senha:
            <input name='password' type='password' placeholder='Digite sua Senha...' />
          </label>
        </div>
        <div>
          <button onClick={() => toast.error('Em desenvolvimento.')}>Realizar o registro</button>
          <p>Ja é registrado? <NavLink to='/login'>Entrar na sua conta</NavLink></p>
        </div>
      </form>
    </main>
  )
}
