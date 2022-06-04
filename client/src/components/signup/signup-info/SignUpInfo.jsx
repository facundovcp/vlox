import React from 'react'
import "./SignUpInfo.scss";
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";


export default function SignUpInfo() {
    return (
        <>
            <div className="signup-info-container">
                <div className="first-page-container">
                    <div className="first-page-header">
                        <span className="signup-info-title">Registro</span>
                        <span className="multi-label">¡Bienvenido!</span>
                    </div>
                    <div className="first-page-body">
                        <div className="first-page-body-1">
                            <div className="what-is-title">
                                <span>¿Qué es VLOX?</span>
                            </div>
                            <div className="what-is-container">
                                <p className="expl-body">VLOX es un espacio para compartir información, media, memes, conectarte con personas que compartan tus intereses y
                                    descubrir contenido de calidad creado por diferentes usuarios de la comunidad.
                                    Consideramos que la libre expresión respetando a todos los miembros es el pilar fundamental de nuestra plataforma.
                                    El sitio posee reglas básicas para toda la comunidad que nos permitirán mantener un buen clima potenciando
                                    la creatividad y la interacción entre nuestros usuarios. El sitio está apuntado al público hispano.</p>

                            </div>

                            <div className="what-is-title">
                                <span>Acerca de la comunidad</span>
                            </div>
                            <div className="what-is-container">
                                <p className="expl-body"> Tanto la comunidad como su opinion sobre la página, son aspectos que creemos fundamentales y tendrán total seguimiento. Por ello, la administración estará en contacto con la misma en fin de escuchar sus sugerencias/ideas para el futuro de la página.<br></br>
                                    ¿Cómo será ésto? A través de encuestas/votaciones se iran tomando las decisiones mas improtantes de la plataforma, siempre creando un espacio para hablar sobre el cambio del sitio donde todas las opinones serán tomadas en cuenta.</p>

                            </div>

                            <div className="rules-container">
                                <Link className="btn-rules" to="/reglas" target="_blank">Leer las reglas</Link>
                            </div>
                            <div className="rules-container">
                                <Link className="btn-rules" to="/termcond" target="_blank">Revisar los Términos y Condiciones</Link>
                            </div>
                        </div>
                        <div className="first-page-body-2">
                            <div className="first-page-body-2-bottom">
                                <div className="form-container"></div>
                            </div>
                        </div>
                        {/* <div className="rules-container">
                <input type="checkbox" id="checkbox" />
                <label className="vlox-checkbox" for="checkbox" ><span class="ui"></span>Acepto respetar las Reglas, los Términos y  las Condiciones.</label>
            </div> */}
                    </div>
                    <div className="first-page-footer">
                        <FaChevronDown className="down-arrow-footer"></FaChevronDown><p className="footer-text">Aconsejamos a los nuevos a leer acerca de las funcionalidades del sitio</p><FaChevronDown className="down-arrow-footer"></FaChevronDown>
                    </div>
                </div>
                <div className="second-page-container">
                    <div className="what-is-title">
                        <span>¿Qué encontraré en VLOX?</span>
                    </div>
                    <div className="what-ill-found-container">
                        <div className="content-expl-container">
                            <div className="icon-expl-container"></div>
                            <div className="text-expl-container">
                                <p className="expl-title">Contenidos</p>
                                <p className="expl-body">Los contenidos publicados en la página seran mediante <strong class="cyan">Posts</strong> o <strong class="magenta">Shouts</strong>. El primero
                                    apuntado a contenidos más largos mientras que el último está apuntado a imágenes/videos/memes o contenidos
                                    más cortos. El Creador de Contenido permite al usuario crearlo de manera rápida y customizable adjuntandolo en las categorías disponibles.
                                </p>
                                <p className="expl-body">
                                    Existen muchas categorías y es muy fácil editar qué te interesa ver y qué ocultar.
                                </p>
                                <p className="expl-body">
                                    Los Post/Shouts acumularán votos positivos y negativos de la comunidad, estos mismos determinarán el ranking de la plataforma.
                                    El contenido diario que los usuarios puedan subir será limitado, evitando así spam y shitposting.
                                </p>
                            </div>
                        </div>
                        <div className="content-expl-container-last-row">
                            <div className="text-expl-container">
                                <p className="expl-title">Gamification</p>
                                <p className="expl-body">
                                    Corazones que representan vida, niveles, barra de experiencia, misiones, logros desbloqueables con recompenzas, estados, entre otras funcionalidades, estarán disponibles para el usuario.<br></br>
                                    Al recibir votos positivos y completar logros o misiones obtienes experiencia, ir subiendo de nivel otorgará beneficios a tu cuenta.
                                    Al inflingir las reglas o al recibir determinadas cantidades de votos negativos se restarán corazones. Al llegar a cero el usuario ya no podrá crear contenido por cierto tiempo.
                                </p>
                                <p className="expl-body">
                                    Estos son algunos ejemplos, para este tópico hay un apartado con explicaciones más detalladas:
                                </p>
                                <Link className="btn-rules" to="/termcond" target="_blank">Gamification en VLOX</Link>
                            </div>
                            <div className="icon-expl-container"></div>
                        </div>
                    </div>
                </div>
                <div className="third-page-container">
                    <div className="content-expl-container">
                        <div className="icon-expl-container"></div>
                        <div className="text-expl-container">
                            <p className="expl-title">Premios</p>
                            <p className="expl-body">
                                Compite en el  <strong class="cyan">Top Mensual</strong> para ser uno de los tres usuarios que reciben  <strong class="magenta">premios.</strong><br></br>
                                La puntuación en el ranking será calculada con la cantidad de votos positivos y negativos recibidos en los contenidos creados ese mes.
                                Este mismo se reinicia todos los meses dandole posibilidades a todos los usuarios de la comunidad a participar.
                            </p>
                            <p className="expl-body">Así mismo existe el Top Anual y Ranking de Niveles que también otorgarán recompensas.</p>
                        </div>
                    </div>
                    <div className="content-expl-container-last-row">
                        <div className="text-expl-container">
                            <p className="expl-title">Web 3.0 - Apostamos al futuro</p>
                            <p className="expl-body">
                                La plataforma contará con la posibilidad de conectar una  <strong class="yellow">Wallet</strong> para recibir las ganancias de los premios en forma de  <strong class="quaternary">crypto.</strong><br></br>
                                Este proceso agilizará el recibo del pago y permitirá que personas de todas partes puedan acceder a él.
                                Para los usuarios residentes en Argentina, este método de pago será opcional y se podrá recibir de distintas maneras.
                            </p>
                            <p className="expl-body">
                                Además, una guía sobre cómo crear una Wallet personal de manera rápida y vincularla a la cuenta se encontrará disponible.
                            </p>
                        </div>
                        <div className="icon-expl-container"></div>
                    </div>
                </div>
                {/* 
                <div className="version-footer"></div>
            </div> */}
            </div>
        </>
    )
}

{/* La plataforma brinda funcionabilidades que permitiran
    auto-regular usuarios y contenidos, que no respeten las reglas, de una manera justa.
    A través de votos positivos que den los usuarios,
    y votos negativos que reciban, un sistema de ranking es formado.  */}
{/* VLOX es una comunidad virtual de origen argentino en la cual los
usuarios pueden compartir información/contenido por medio
de posts o shouts. */}