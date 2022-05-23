import React from 'react'
import "./SignUpInfo.scss";
import { Link } from 'react-router-dom';

export default function SignUpInfo() {
    return (
        <div className="signup-info-container">
            <span className="signup-info-title">Registro</span>
            <span className="multi-label">¡Bienvenido!</span>
            <div className="what-is-title">
                <span>¿Qué es VLOX?</span>
            </div>
            <div className="what-is-container">
                <p>VLOX es un espacio para compartir información, memes, conectarte con personas que compartan tus intereses y
                    descubrir contenido de calidad creado por diferentes usuarios de la comunidad.
                    Consideramos que la libre expresión respetando a todos los miembros es el pilar fundamental de nuestra plataforma.
                    El sitio posee reglas básicas para toda la comunidad que nos permitirán mantener un buen clima potenciando
                    la creatividad y la interacción entre nuestros usuarios.</p>
            </div>
            <div className="rules-container">
                <Link className="btn-rules" to="/reglas" target="_blank">Leer las reglas</Link>
            </div>
            <div className="rules-container">
                <Link className="btn-rules" to="/termcond" target="_blank">Revisar los Términos y Condiciones</Link>
            </div>
            <div className="what-is-title">
                <span>¿Qué encontraré en VLOX?</span>
            </div>
            <div className="what-ill-found-container">
                <div className="content-expl-container">
                    <div className="icon-expl-container"></div>
                    <div className="text-expl-container">
                        <p>Contenidos:</p>
                        <p>Los contenidos publicados en la página seran mediante Posts o Shouts. El primero
                            apuntado a contenidos más largos mientras que el último está apuntado a imágenes/videos/memes o contenidos
                            más cortos. El Creador de Contenido permite al usuario crearlo de manera rápida y customizable adjuntandolo en las categorías disponibles.
                        </p>
                        <p>
                            Existen muchas categorías y es muy fácil editar qué te interesa ver y qué ocultar.
                        </p>
                        <p>
                            Los Post/Shouts acumularán votos positivos y negativos de la comunidad, estos mismos determinarán el ranking de la plataforma.
                            El contenido diario que los usuarios puedan subir será limitado, evitando así spam y shitposting.
                        </p>
                    </div>
                </div>
                <div className="content-expl-container-reverse">
                    <div className="text-expl-container">
                        <p>Gamification:</p>
                        <p>
                            Corazones que representan vida, niveles, barra de experiencia, misiones, logros desbloqueables con recompenzas, estados, entre otras funcionalidades, estarán disponibles para el usuario.
                        </p>
                        <p>
                            Al recibir votos positivos y completar logros o misiones obtienes experiencia, ir subiendo de nivel otorgará beneficios a tu cuenta.
                            Al inflingir las reglas o al recibir determinadas cantidades de votos negativos se restarán corazones. Al llegar a cero el usuario ya no podrá crear contenido por cierto tiempo.
                        </p>
                        <p>
                            Estos son algunos ejemplos, para este tópico hay un apartado con explicaciones más detalladas:
                        </p>
                        <Link className="btn-rules" to="/termcond" target="_blank">Gamification en VLOX</Link>
                    </div>
                    <div className="icon-expl-container"></div>
                </div>
                <div className="content-expl-container">
                    <div className="icon-expl-container"></div>
                    <div className="text-expl-container">
                        <p>Ranking:</p>
                        <p>
                            Compite en el Top Mensual para ser uno de los tres usuarios que reciben premios.
                            La puntuación en el ranking será calculada con la cantidad de votos positivos y negativos recibidos en los contenidos creados ese mes.
                            Este mismo se reinicia todos los meses dandole posibilidades a todos los usuarios de la comunidad de participar.
                        </p>
                        <p>Así mismo existe el Top Anual y Ranking de Niveles que también otorgarán recompensas.</p>
                    </div>
                </div>
                {/* <div className="content-expl-container-reverse">
                    <div className="text-expl-container">
                        <p>Web 3.0</p>
                        <p>
                            Corazones que representan vida, niveles, barra de experiencia, misiones, logros desbloqueables con recompenzas, estados, entre otras funcionalidades, estarán disponibles para el usuario.
                        </p>
                        <p>
                            Al recibir votos positivos y completar logros o misiones obtienes experiencia, ir subiendo de nivel otorgará beneficios a tu cuenta.
                            Al inflingir las reglas o al recibir determinadas cantidades de votos negativos se restarán corazones. Al llegar a cero el usuario ya no podrá crear contenido por cierto tiempo.
                        </p>
                        <p>
                            Estos son algunos ejemplos, para este tópico hay un apartado con explicaciones más detalladas:
                        </p>
                        <Link className="btn-rules" to="/termcond" target="_blank">Gamification en VLOX</Link>
                    </div>
                    <div className="icon-expl-container"></div>
                </div> */}
            </div>
        </div>
    )
}

{/* La plataforma brinda funcionabilidades que permitiran
    auto-regular usuarios y contenidos, que no respeten las reglas, de una manera justa.
    A través de votos positivos que den los usuarios,
    y votos negativos que reciban, un sistema de ranking es formado.  */}
{/* VLOX es una comunidad virtual de origen argentino en la cual los
usuarios pueden compartir información/contenido por medio
de posts o shouts. */}