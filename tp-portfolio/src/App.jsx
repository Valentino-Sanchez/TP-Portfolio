import "./App.css";
import perfil from "./assets/perfil.png";
import gymbro from "./assets/gymbro.png";
import volley from "./assets/volley.png";
import cvanalytics from "./assets/cvanalytics.png";
import gmail from "./assets/gmail.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import mygymbro1 from "./assets/mygymbro1.png";
import mygymbro2 from "./assets/mygymbro2.png";
import volleystart from "./assets/volleystart.png";
import volleychars from "./assets/volleychars.png";
import volleygame from "./assets/volleygame.png";
import cvanalyticsmain from './assets/cvanalyticsmain.png';
import cvanalyticsup from './assets/cvanalyticsupload.png';
import cvanalyticsresult from './assets/cvanalyticsresult.png';

function App() {
return (
    <div className="index">
      {/* HEADER */}
    <header className="header">
        <nav>
        <ul>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#proyectos-anchor">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
        </ul>
        </nav>
    </header>

{/* SOBRE MI */}
<section id="about" className="about">
  <h1 className="about-name">Valentino Sanchez</h1>
  <div className="about-container">
    <div className="left-side">
      <img src={perfil} alt="Perfil" className="perfil" />
      <h3 className="role">Developer</h3>
      <div className="icons">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub" className="icon-img" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" className="icon-img" />
        </a>
      </div>
    </div>

    <div className="info">
      <p>
        Soy Valentino, estudiante orientado a la tecnología. Me gusta
        transformar ideas en algo que pueda verse, usarse y disfrutarse.
        Me interesa la programación, el diseño y el desarrollo web.
        Me considero curioso, autodidacta y entusiasta del detalle.
        Cada proyecto en el que trabajo es una forma de aprender algo nuevo.
      </p>
      <p className="location">📍 Buenos Aires, Argentina</p>
    </div>
  </div>
</section>


{/*Proyectos*/}

<section id="proyectos" div className="proyectos">
    <div id="proyectos-anchor" style={{ position: "relative", top: "-200px" }}></div>

    {/* GymBro */}
    <a href="#gymbro-anchor" className="project-link">
        <div className="project-card project-red">
            <img src={gymbro} alt="GymBro" className="project-logo" />
        </div>
    </a>

    {/* Volley Tactics */}
    <a href="#volley-anchor" className="project-link">
        <div className="project-card project-blue">
            <img src={volley} alt="Volley Tactics" className="project-logo" />
        </div>
    </a>

    {/* CV Analytics */}
    <a href="#cv-anchor" className="project-link">
        <div className="project-card project-gray">
            <img src={cvanalytics} alt="CV Analytics" className="project-logo" />
        </div>
    </a>

</section>



{/*SECCIONES PROYECTOS*/}

{/* SECCIÓN DETALLADA - MYGYMBRO */}
<section id="gymbro-section" className="detail-section gymbro-detail">
  <div id="gymbro-anchor" style={{ position: "relative", top: "0px" }}></div>
    <div className="gymbro-logo-top">
      <img src={gymbro} className="gymbro-logo-img" />
    </div>

    <div className="detail-content">
        
        <div className="text-block">
            <h2>Proyecto: MyGymBro</h2>
            <h3>Rol: Diseñador UI/UX</h3>

            <p>
                Diseño de la interfaz y experiencia de usuario para una aplicación orientada a la 
                planificación y seguimiento de rutinas de gimnasio. Me enfoqué en crear una interfaz 
                intuitiva, atractiva y fácil de usar, priorizando la claridad y la motivación del usuario.
            </p>
        </div>

        <div className="image-block">
            <img src={mygymbro1} className="detail-img" />
        </div>
    </div>

    <div className="center-img">
        <img src={mygymbro2} className="detail-img-small" />
        <p className="caption">Investigación sobre ejercicios y diseño simple</p>
    </div>
</section>



{/* SECCIÓN DETALLADA - VOLLEY TACTICS */}
<section id="volley-section" className="volley-detail">
  <div id="volley-anchor" style={{ position: "relative", top: "-100px" }}></div>

    {/* LOGO CENTRADO */}
    <div className="volley-title-img">
        <img src={volley} className="volley-logo" />
    </div>

    {/* FILA PRINCIPAL */}
    <div className="volley-content">

        {/* IZQUIERDA — TEXTO */}
        <div className="volley-text-block">
            <h2>Proyecto: Volley Tactics</h2>
            <h3>Rol: Programador (Multijugador)</h3>

            <p>
                Me encargué de la parte multijugador del juego. Usé Unity y Photon PUN 2
                para lograr que los jugadores puedan conectarse y jugar partidas por turnos
                de forma sincronizada y sin errores.
            </p>

            <p>
                También implementé la pantalla de selección de personajes, los menús
                principales y la lógica para administrar reconexiones y sincronización
                de estados.
            </p>
        </div>

        {/* DERECHA — IMAGEN PRINCIPAL */}
        <div className="volley-image-block">
            <img src={volleystart} className="volley-img" />
        </div>
    </div>

{/* IMÁGENES LADO A LADO */}
<div className="volley-two-columns">

    <div className="volley-column">
        <img src={volleychars} className="volley-column-img" />
        <p className="volley-column-caption">
            Menús y selección de personajes — UI conectada al sistema multijugador
        </p>
    </div>

    <div className="volley-column">
        <img src={volleygame} className="volley-column-img" />
        <p className="volley-column-caption">
            Gameplay sincronizado mediante Photon PUN 2 — turnos y física local
        </p>
    </div>

</div>
</section>





{/* SECCIÓN DETALLADA - CV ANALYTICS */}
<section id="cv-section" className="cvanalytics-detail">
  <div id="cv-anchor" style={{ position: "relative", top: "-100px" }}></div>
    {/* LOGO CENTRADO */}
    <div className="cvanalytics-title-img">
        <img src={cvanalytics} className="cvanalytics-logo" />
    </div>

    {/* FILA PRINCIPAL */}
    <div className="cvanalytics-content">

        {/* IZQUIERDA — TEXTO */}
        <div className="cvanalytics-text-block">
    <h2>Proyecto: CV Analytics</h2>
    <h3>Rol: Front-End Developer</h3>

    <p className="cv-text-chunk">
        Desarrollé el front del sitio web usando HTML, CSS y JavaScript. Me encargué del diseño responsivo,
        la estructura del contenido, cuidando que todo se vea bien en distintos dispositivos.
    </p>

    <p className="cv-text-chunk">
        La página cuenta con modo oscuro para la comodidad de los usuarios
    </p>

    <p className="cv-text-chunk">
        Funcionalidades simples y rápidas para mejorar la experiencia de usuario
    </p>
</div>

        {/* DERECHA — IMAGEN PRINCIPAL */}
        <div className="cvanalytics-image-block">
            <img src={cvanalyticsmain} className="cvanalytics-img" />
        </div>
    </div>

    {/* DOS IMÁGENES INFERIORES */}
    <div className="cvanalytics-two-columns">

        <div className="cvanalytics-column">
            <img src={cvanalyticsup} className="cvanalytics-column-img" />
            <p className="cvanalytics-column-caption">
                Subida de archivos y selección de formatos para analizar el CV
            </p>
        </div>

        <div className="cvanalytics-column">
            <img src={cvanalyticsresult} className="cvanalytics-column-img" />
            <p className="cvanalytics-column-caption">
                Comparación automática mediante IA y visualización del resultado
            </p>
        </div>

    </div>
</section>



    {/* CONTACTO */}
    <section id="contact" className="contact">
        <h2>Contactame:</h2>
        <div className="contact-icons">
        <div className="contact-item">
            <img src={gmail} alt="Gmail" />
            <p>sanchezvalentino518@gmail.com</p>
        </div>
        <div className="contact-item">
            <img src={linkedin} alt="LinkedIn" />
            <p>Valentino Sanchez</p>
        </div>
        </div>
    </section>
    </div>
);
}

export default App;
