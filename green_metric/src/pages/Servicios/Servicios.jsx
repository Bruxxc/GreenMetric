import styles from "./Servicios.module.css";

export const Servicios = () => {
    return (
       
        <div className={styles.Servicios_Main_Container}>
            <h2> Servicios </h2>

            <section className={styles.Servicios_List_Container}>


                <div className={styles.Servicios_proposito_text_container}>
                    <p className={styles.Servicios_trabajo_text}>
                        Nuestros servicios brindarán <b> asesoramiento </b> tanto a nivel  <b>estratégico</b> para la buena Gobernanza y el Compliance, como a nivel de <b>gestión de los aspectos Ambientales y Sociales</b>.
                        Nos enfocamos en <b>acciones concretas</b> que muestren <b>resultados</b>.
                        Nuestro aporte es integral coordinando aspectos de <b>eficiencia, de rentabilidad y de impacto</b>. 
                        Colaboramos en la contribución de la empresa al <b>Desarrollo Sostenible</b>.


                    </p>

                </div>


                <div className={`${styles.Servicios_List_Card} ${styles.ItemIzq}`}>
                    <div className={`${styles.Servicios_List_Card_Text} ${styles.text_Izq}`}>
                        <h3>Elaboración de Reportes de Sostenibilidad</h3>
                        <p>Elaboramos Memorias de Sostenibilidad y Reportes basados en estándares internacionales para la comunicación del desempeño sostenible de la empresa.
                            Colaboramos con la definición de los principales indicadores ASG (Ambiental Social Gobernanza) y nos encargamos de transformar los datos recopilados en informes alineados con las expectativas regulatorias y de stakeholders, utilizando los principales estándares internacionales, por ejemplo GRI (Global Reporting Iniciative) alineando la información a los ODS (Objetivos de Desarrollo Sostenible) y otros esquemas que la empresa necesite.
                        </p>
                        <div className={`${styles.Servicios_beneficios_list}`}>
                            <h4>Beneficios:</h4>
                            <ul>
                                <li>Mayor transparencia que genera la confianza de los inversores, clientes y otras partes interesadas</li>
                                <li>Contribución a las políticas de cumplimiento de la empresa </li>
                                <li>Optimización de la gestión sostenible, la cultura de sostenibilidad y el proceso de reporte anual</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.Servicios_List_Card_Img}>
                        <img src="/assets/resources/Servicio1.png" alt="" />
                    </div>

                    

                </div>

                <div className={`${styles.Servicios_List_Card} ${styles.ItemDer}`}>
                    <div className={styles.Servicios_List_Card_Img}>
                        <img src="/assets/resources/Servicio2.png" alt="" />
                    </div>
                    <div className={`${styles.Servicios_List_Card_Text} ${styles.text_Der}`}>
                        <h3>Diagnóstico, Propuesta y Monitoreo de acciones de Sostenibilidad</h3>
                        <p>Ofrecemos el servicio de diagnóstico de la empresa en temas de Sostenibilidad que permitirá conocer su situación actual como punto de partida. 
                            <br/>Se proponen entonces, actividades, prácticas y proyectos concretos, incluyendo el diseño de indicadores clave para el monitoreo del desempeño en aspectos ASG (ambientales, sociales y de gobernanza), como base sólida para la toma de decisiones informadas.
                        </p>

                        <div className={`${styles.Servicios_beneficios_list}`}>
                            <h4>Beneficios:</h4>
                            <ul>
                                <li>Identificación de áreas críticas para mejorar o consolidar</li>
                                <li>Propuesta de actividades puntuales o proyectos concretos que puedan postularse a premios, reconocimientos, certificaciones, subsidios o financiamiento</li>
                                <li>Contar con datos de la línea de base para proponer métricas de Sostenibilidad y una estrategia de posicionamiento sostenible</li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div className={`${styles.Servicios_List_Card} ${styles.ItemIzq}`}>
                    <div className={`${styles.Servicios_List_Card_Text} ${styles.text_Izq}`}>
                        <h3>Consultoría en Gestión de la Sostenibilidad Empresarial</h3>
                        <p>Asesoramos a las empresas en el diseño e implementación de estrategias de sostenibilidad efectivas, que permitan integrar los aspectos ASG (Ambientales, Sociales y de Gobernanza) al negocio, anticipando riesgos y aprovechando oportunidades. 
                            Abarcamos desde la definición de la estrategia, pasando por la planificación, el fortalecimiento para la gestión, la definición de Indicadores y apoyo para la ejecución de actividades concretas para el cuidado del impacto.
                        </p>
                        <div className={`${styles.Servicios_beneficios_list}`}>
                            <h4>Beneficios:</h4>
                            <ul>
                                <li>Estrategia alineada con los objetivos corporativos y con el contexto de Desarrollo Sostenible</li>
                                <li>Integración de prácticas sostenibles en todos los niveles</li>
                                <li>Mejora de la competitividad y reputación de la empresa</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.Servicios_List_Card_Img}>
                        <img src="/assets/resources/Servicio3.png" alt="" />
                    </div>
                </div>

                <div className={`${styles.Servicios_List_Card} ${styles.ItemDer}`}>
                    <div className={styles.Servicios_List_Card_Img}>
                        <img src="/assets/resources/Servicio4.png" alt="" />
                    </div>
                    <div className={`${styles.Servicios_List_Card_Text} ${styles.text_Der}`}>
                        <h3>Cálculo de la Huella de Carbono</h3>
                        <p>Implementamos en la empresa el cálculo de la huella de carbono organizacional o de producto, ayudando a entender el impacto que genera su actividad en términos de las emisiones de gases de efecto invernadero (GEI) que genera. 
                            Realizamos recomendaciones para la reducción de emisiones. Nuestro enfoque incluye el potencial impacto del Cambio Climático en la actividad.
                        </p>
                        <div className={`${styles.Servicios_beneficios_list}`}>
                            <h4>Beneficios:</h4>
                            <ul>
                                <li>Posicionar la empresa o un producto determinado, a partir de la información valiosa sobre su huella de Carbono</li>
                                <li>Identificación de oportunidades para la reducción de emisiones</li>
                                <li>Contribución a los objetivos globales de descarbonización y anticipación de efectos del Cambio Climático</li>
                            </ul>
                        </div>
                    </div>


                </div>

            </section>

        </div>
        
    

    );
};