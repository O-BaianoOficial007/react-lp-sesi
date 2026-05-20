import s from './App.module.css'
import cdb from '/cdb.jpg'
import liberta from '/liberta.jpg'
import br from '/brasileirão.jpg'

function App() {

  return (
    <>
      <nav>
        <span className={s.navItems} onclick="navTo('s1')">
            <img src="/home.png" alt="Jogo" width="30px"/>
                <a className={s.navWorlds}>Ínicio</a>
        </span>
         <span className={s.navItems} onclick="navTo('s2')">
            <img src="/taça.png" alt="Carros"  width="30px"/>
            <a className={s.navWorlds} >Títulos</a>
        </span>
         <span className={s.navItems}onclick="navTo('s3')">
            <img src="/jogador.png" alt="Vídeo"  width="30px"/>
            <a className={s.navWorlds}>Nossos Jogadores</a>
        </span>
         <span className={s.navItems}onclick="navTo('s4')">
            <img src="/mobile.png" alt="Contato"  width="30px"/>
            <a className={s.navWorlds}>Contato</a>
        </span>
    </nav>
    <main>
        <section className={s.s1}>
           <h1>Flamengo</h1>
           <h2>Uma vez Flamengo, sempre Flamengo!!!</h2>
        </section>
             <h3>QUEM SOMOS</h3>
        <section id="s2" className={s.s2}>
       
            <div className={s.card}>
                <div>
                    <h4>Libertadores</h4>
                    <img src='/liberta.jpg' alt="" width={200} height={200}></img>
                    <p>Tetracampeões: 1981; 2019; 2022; 2025</p>
                </div>
            </div>
            <div className={s.card}>
                  
                <div>
                    <h4>Brasileirão</h4>
                    <img src='/brasileirão.jpg' alt="" width={200} height={200}/>
                    <p>Eneacampeões: 1980; 1982; 1983; 1987; 1992; 2009; 2019; 2020; 2025</p>
                </div>
            </div>
            <div className={s.card}>
                
                <div>
                    <h4>Copa do Brasil</h4>
                    <img src='/cdb.jpg' alt="" width={200} height={200}/>
                    <p>Pentacampeões: 1990 (invicto); 2006; 2013; 2022; 2024</p>
                </div>
            </div>
        </section>
        <section id="s3" className={s.s3}>
            <iframe class="video" width="1900" height="1000" src="https://www.youtube.com/embed/LxFRxMrTXLg?si=3XeiRZ9FtIeNwrb8autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <section id="s4" className={s.s4}>
            <h3>CONTATO</h3>
      
        <div className={s.formulario}>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" placeholder="Digite seu nome"/>
          <label for="assunto">Mensagem:</label>
          <textarea id="assunto" placeholder="Digite uma mensagem"></textarea>
          <button onclick="enviar()">ENVIAR</button>
        </div>
        <div>
          <div id="saturno-container"></div>
        </div>
        </section>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
