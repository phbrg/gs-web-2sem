import { toast } from 'sonner'
import s from './Report.module.css'

export const Report = () => {
  return (
    <main className={s.Report}>
      <form onSubmit={(e) => (e.preventDefault(), window.location.href='/postreport')}>
        <header>
          <h1>Registrar um chamado</h1>
          <h2>Preencha as informações abaixo para localizarmos o bueiro</h2>
        </header>
        <div>
          <label htmlFor='cep'>
            CEP:
            <input name='cep' type='number' placeholder='Digite o CEP...' />
          </label>
          <label htmlFor='end'>
            Endereço:
            <input name='end' type='text' placeholder='Digite o endereço...' />
          </label>
          <label htmlFor='hood'>
            Bairro:
            <input name='hood' type='text' placeholder='Digite o bairro...' />
          </label>
          <label htmlFor='number'>
            Numero do Bueiro:
            <input name='number' type='number' placeholder='Digite o Numero do Bueiro...' />
          </label>
          <label htmlFor='number'>
            Descrição:
            <textarea name="description" placeholder='Digite uma breve descrição do problema...'></textarea>
          </label>
        </div>
        <div>
          <button onClick={() => toast.success('Chamado registrado com sucesso!\nObrigado pela sua colaboração.')}>Registrar chamado</button>
        </div>
      </form>
    </main>
  )
}
