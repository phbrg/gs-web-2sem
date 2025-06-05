import { NavLink } from 'react-router-dom'
import { toast } from 'sonner';

import s from './Login.module.css'

export const Login = () => {
  return (
    <main className={s.Login}>
      <form onSubmit={(e) => e.preventDefault()}>
        <header>
          <h1>Acesse sua conta</h1>
          <h2>Insira suas credenciais para acessar sua conta</h2>
        </header>
        <div>
          <label htmlFor='email'>
            Email:
            <input required name='email' type='email' placeholder='Digite seu Email...' />
          </label>
          <label htmlFor='password'>
            Senha:
            <input required name='password' type='password' placeholder='Digite sua Senha...' />
          </label>
        </div>
        <div>
          <button onClick={() => toast.error('Em desenvolvimento.')}>Realizar o login</button>
          <p>Ainda não é registrado? <NavLink to='/register'>Registrar-se</NavLink></p>
        </div>
      </form>
    </main>
  )
}
