import React from 'react';
import './Home.css';

const Home =() =>(

  <section className="home">
      <img src="/Images/banner1.jpg" className="banner" alt="imagen de mesa de trabajo"/>
        <div className="sobremi">
          <h3>¡Hola! Soy Laura Carceller Varona</h3>
          <h2>Desarrolladora frontend en <strong>búsqueda activa de empleo</strong>.</h2>
          <h3>Sobre mí:</h3>
          <p>Durante algunos años he estado trabajando en sector de agricultura, ganadería y pesca, principalmente trabajando como cuidadora de animales salvajes en zoológicos y caballos. Luego estuve 9 meses trabajando de auxiliar de jardinería para el Ayuntamiento de Colmenar del Arroyo.
        Al mismo tiempo y dado que me interesaba el mundo de la informática, sobre todo orientado en el mundo de las páginas web y desarrollo de la parte front, he realizado dos cursos para poder cambiarme de sector. Uno por parte del Servicio Estatal de Empleo y otro por Fictizia más profundizado sobre el tema. Por este motivo, busco empleo como desarrolladora Frontend para poder seguir aprendiendo más sobre la parte front y por tanto desarrollarme.
          </p>
          <h4>Si desean saber algo más sobre mí, pulsen el enlace para acceder a mi currículum personal.</h4>
            <a href="/Archives/Currículum Vitae2 Laura Carceller Varona.pdf">
          Saber más
            </a>
          <h4>O si desean ponerse en contacto conmigo:</h4>
            <a href="/Contacto">Contacto</a>
      </div>
      <div className="foto"><img src="/Images/imagen1.jpg" className="fotomia" alt="fotomia" /></div>
    </section>
    
)

export default Home;