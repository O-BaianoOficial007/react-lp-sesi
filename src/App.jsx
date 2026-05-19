import s from './App.module.css'
import cdb from '/cdb.jpg'
import liberta from '/liberta.jpg'
import br from '/brasileirão.jpg'

function App() {

  return (
    <>
      <nav>
        <span className={s.navItems} onclick="navTo('s1')">
            <img src="../assets/icons/home.png" alt="Jogo" width="30px"/>
                <a className={s.navWorlds}>Ínicio</a>
        </span>
         <span className={s.navItems} onclick="navTo('s2')">
            <img src="../assets/icons/taça.png" alt="Carros"  width="30px"/>
            <a className={s.navWorlds} >Títulos</a>
        </span>
         <span className={s.navItems}onclick="navTo('s3')">
            <img src="../assets/icons/jogador.png" alt="Vídeo"  width="30px"/>
            <a className={s.navWorlds}>Nossos Jogadores</a>
        </span>
         <span className={s.navItems}onclick="navTo('s4')">
            <img src="../assets/icons/mobile.png" alt="Contato"  width="30px"/>
            <a className={s.navWorlds}>Contato</a>
        </span>
    </nav>
    <main>
        <section id="s1">
           <h1>Flamengo</h1>
           <h2>Uma vez Flamengo, sempre Flamengo!!!</h2>
        </section>
        <section id="s2">
            <h3>QUEM SOMOS</h3>
            <div className={s.card}>
                <div>
                    <h4>Libertadores</h4>
                    <img src={liberta} alt=""></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae sed modi, obcaecati rerum voluptas aliquam fugit sint facere laudantium, numquam nihil at ipsum, ad consectetur quia assumenda. In, similique.</p>
                </div>
            </div>
            <div className={s.card}>
                  
                <div>
                    <h4>Brasileirão</h4>
                    <img src={br} alt=""/>
                    <p></p>
                </div>
            </div>
            <div classname={s.card}>
                
                <div>
                    <h4>Copa do Brasil</h4>
                    <img src={cdb}alt=""/>
                    <p></p>
                </div>
            </div>
        </section>
        <section id="s3">
            <iframe class="video" width="1900" height="1000" src="https://www.youtube.com/embed/LxFRxMrTXLg?si=3XeiRZ9FtIeNwrb8autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <section id="s4">
            <h2></h2>
        </section>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
