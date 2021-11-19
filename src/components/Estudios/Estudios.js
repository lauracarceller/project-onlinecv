import React from 'react';
import './Estudios.css';

const Estudios =() =>(
  <section className="formacion" id="estudios">
    <div className="cont-est">
      <h3>Mis Estudios</h3>
      <ul className="lista">
        <li>
          <div classname="cont-estdate">
            <span>07/2021 - Máster en Desarrollo Frontend con HTML, CSS, JavaScript y React</span>
            <p>Centro de Estudios: Fictizia</p>
          </div>
        </li>
        <li>
          <div classname="cont-estdate">
            <span>01/2021 - Confección y publicación de páginas web</span>
            <p>Ministerio de Trabajo y Empleo: Grupo LiderSystem</p>
          </div>
        </li>
        <li>
          <div classname="cont-estdate">
            <span>07/2019 - Actividades auxiliares en viveros, jardines y centros de jardinería</span>
            <p>Ministerio de Trabajo y Empleo: Ayuntamiento de Colmenar del Arroyo</p>
          </div>
        </li>
        <li>
          <div classname="cont-estdate">
            <span>08/2018 - Cuidados y Manejo del Caballo</span>
            <p>Ministerio de Trabajo y Empleo: Centro Hípico Sierra Norte - Virensis</p>
          </div>
        </li>
        <li>
          <div classname="cont-estdate">
            <span>08/2017 - Control y Protección del Medio Natural</span>
            <p>Ministerio de Trabajo y Empleo: ETECA (Centro de Estudios Técnicos Aplicados)</p>
          </div>
        </li>
        <li>
          <div classname="cont-estdate">
            <span>07/2014 - Grado en Biología, especialidad en biodiversidad y conservación</span>
            <p>Universidad de Alcalá - Madrid</p>
          </div>
        </li>
        <li>
          <div classname="cont-estdate">
            <span>12/2011 - Adiestrador profesional y técnico en modificación de conductas</span>
            <p>Educan S.L - Brunete, Madrid</p>
          </div>
        </li>
        <li>
          <div classname="cont-estdate">
            <span>06/2011 - Auxiliar técnico en Parques Zoológicos y Acuarios (ATZA)</span>
            <p>Universidad Complutense de Madrid</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
)

export default Estudios;