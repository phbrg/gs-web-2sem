import { toast } from 'sonner'

import s from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={s.Footer}>
      <p className={s.logo}>Mapeia</p>
      <p onClick={() => toast.error('Em desenvolvimento.')} className={s.terms}>Termos de uso.</p>
    </footer>
  )
}
