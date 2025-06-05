import s from './About.module.css'

export const About = () => {
  return (
    <main className={s.About}>
      <div className={s.img}></div>
      <div className={s.holder}>
        <div>
          <h1>Sobre o Projeto Mapeia</h1>
          <h2>Uma cidade mais segura começa com informação</h2>
        </div>
        <p>Mapeia é uma plataforma digital desenvolvida para ajudar no combate às enchentes em São Paulo. O sistema permite que qualquer cidadão reporte pontos de alagamento, bueiros entupidos e outros riscos urbanos com poucos cliques, utilizando localização geográfica e imagens para detalhar o problema. Essas informações são imediatamente enviadas a um painel de gestão utilizado pela prefeitura e equipes de manutenção, possibilitando uma resposta mais rápida, eficaz e direcionada.</p>
      </div>
      <div className={s.holder}>
        <div>
          <h1>Como funciona?</h1>
          <p>A solução é composta por diferentes tecnologias integradas para garantir agilidade, precisão e inclusão:</p>
        </div>
        <ul>
          <li><span>Aplicativo Web:</span> Construído com React, permite aos usuários enviar relatos de forma simples, com foto, localização e descrição.</li>
          <li><span>Dashboard Administrativo:</span> Utilizando Arduinos e Node-Red, apresenta os pontos críticos em tempo real para a prefeitura tomar decisões baseadas em dados.</li>
          <li><span>Notificações em Tempo Real:</span> O cidadão recebe atualizações sobre o andamento de sua solicitação por meio de notificações push.</li>
        </ul>
      </div>
      <div className={s.holder}>
        <div>
          <h1>Aplicação em Python</h1>
          <h2>Chamados via Terminal</h2>
        </div>
          <p>Além da interface gráfica, o sistema conta com uma aplicação em Python que permite o registro de chamados diretamente pelo terminal. Essa aplicação é ideal para testes, automações e uso técnico em ambientes com poucos recursos gráficos. Os dados gerados são armazenados em arquivos .json, mantendo a compatibilidade com o ecossistema da plataforma.</p>
      </div>
      <div className={s.holder}>
        <div>
          <h1>Projeto Arduino</h1>
          <h2>Detecção Automática de Bueiros</h2>
        </div>
        <p>A inovação vai além do digital. O Mapeia também conta com um projeto em Arduino que utiliza sensores para detectar automaticamente anomalias em bueiros — como acúmulo de água ou obstruções. Os sensores enviam os dados para uma dashboard, onde técnicos e gestores podem acompanhar em tempo real as condições da drenagem urbana, possibilitando intervenções antes que os problemas se agravem.</p>
      </div>
    </main>
  )
}
