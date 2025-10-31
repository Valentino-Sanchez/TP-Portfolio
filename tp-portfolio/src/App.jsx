import "./App.css";
import perfil from "./assets/perfil.png";
import gymbro from "./assets/gymbro.png";
import volley from "./assets/volley.png";
import cvanalytics from "./assets/cvanalytics.png";
import gmail from "./assets/gmail.png";
import linkedin from "./assets/linkedin.png";

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
        <h1>Valentino Sanchez</h1>
        <div className="about-container">
        <img src={perfil} alt="Perfil" className="perfil" />
        <div className="info">
            <h3>Developer</h3>
            <p>
            Soy Valentino, estudiante orientado a la tecnología. Me gusta
            transformar ideas en algo que pueda verse, usarse y disfrutarse.
            Me interesa la programación, el diseño y el desarrollo web.
            Me considero curioso, autodidacta y entusiasta del detalle.
            Cada proyecto en el que trabajo es una forma de aprender algo nuevo.
            </p>
            <p>📍 Buenos Aires, Argentina</p>
            <div className="icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            </div>
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
