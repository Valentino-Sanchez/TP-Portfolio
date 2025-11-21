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

function App() {
return (
    <div className="index">
      {/* HEADER */}
    <header className="header">
        <nav>
        <ul>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
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



    {/* PROYECTOS */}
    <section id="projects" className="projects">
        <h2>Proyectos</h2>

        <div className="cards">
        {/* GymBro */}
        <div className="card red">
            <img src={gymbro} alt="GymBro" className="project-img" />
            <h3>Proyecto: My GymBro</h3>
            <p><strong>Rol:</strong> Diseñador UI/UX</p>
            <p>
            Diseño de la interfaz y experiencia de usuario para una aplicación
            orientada a rutinas de gimnasio. Se buscó crear una interfaz clara,
            intuitiva y motivadora.
            </p>
        </div>

        {/* Volley Tactics */}
        <div className="card blue">
            <img src={volley} alt="Volley Tactics" className="project-img" />
            <h3>Proyecto: Volley Tactics</h3>
            <p><strong>Rol:</strong> Programador (Multijugador)</p>
            <p>
            Implementé la parte multijugador del juego en Unity usando Photon PUN 2.
            Logré que los jugadores se conecten y jueguen partidas por turnos
            sincronizadas sin errores.
            </p>
        </div>

        {/* CV Analytics */}
        <div className="card gray">
            <img src={cvanalytics} alt="CV Analytics" className="project-img" />
            <h3>Proyecto: CV Analytics</h3>
            <p><strong>Rol:</strong> Front-End Developer</p>
            <p>
            Desarrollé el front del sitio usando HTML, CSS y JavaScript.
            Implementé diseño responsive, modo oscuro y funcionalidades simples
            para una experiencia fluida.
            </p>
        </div>
        </div>
    </section>



    {/* SECCIÓN DETALLADA - MYGYMBRO */}
{/* SECCIÓN DETALLADA - MYGYMBRO */}
<section id="mygymbro-details" className="detail-section gymbro-detail">
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
