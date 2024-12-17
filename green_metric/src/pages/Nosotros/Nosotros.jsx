import styles from "./Nosotros.module.css";

export const Nosotros = () => {
  return (
    <div className={styles.Nosotros_Main_Container}>
      <section className={styles.Nosotros_List_Container}>
        <h2> Nosotros </h2>
        <div className={`${styles.Nosotros_List_Card}`}>
          <div className={styles.Nosotros_List_Card_Img}>
            <img
              src="/assets/resources/Laura_Marquez3.jpg"
              alt="Laura Márquez / EFIKO"
              className={styles.LauraImg}
            />
          </div>

          <div className={styles.Nosotros_List_Card_Content}>
            <div className={styles.Nosotros_List_Card_Header}>
              <h3>Laura Márquez</h3>
              <h4>Máster en Responsabilidad Social Corporativa</h4>
            </div>

            <div className={styles.Nosotros_List_Card_Body}>
              <p>
                Máster en Responsabilidad Social Corporativa y Liderazgo
                Sostenible. Ingeniería Química, especializada en abordajes
                ambientales como Economía Circular, Producción más Limpia,
                Empleos Verdes, Cálculo de la Huella de Carbono y Desarrollo
                Sostenible. Con Certificación en Reportes de Sostenibilidad.
                Egresada del Programa de Desarrollo Directivo.
                <br />
                Poseo más de 15 años de experiencia en roles gerenciales y
                técnicos, integrando y liderando equipos para la gestión de
                políticas públicas en desarrollo empresarial, ambiental, de
                formación profesional, innovación e investigación.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.Nosotros_List_Card_Right}`}>
          <div className={styles.Nosotros_List_Card_Content}>
            <div
              className={`${styles.Nosotros_List_Card_Header} ${styles.Nosotros_List_CardRight_Header}`}
            >
              <h3>Federico Secondo</h3>
              <h4>Master en Gerencia Energética</h4>
            </div>

            <div className={styles.Nosotros_List_Card_Body}>
              <p>
                Master en gerencia energética por la Universidad Católica del
                Uruguay. Posgrado en costos y Economista por la Universidad de
                la República. Certificado en gestión de la energía por parte de
                Eurem (European Energy Management ) y posgrado en aprendizaje
                automatizado por la Universidad Tecnológica del Uruguay. Más de
                una década vinculado al sistema de innovación del Uruguay, he
                gestionando fondos públicos para la ejecución de centenas de
                proyectos de investigación, innovación y emprendedurismo,
                principalmente proyectos vinculados a áreas de energía,
                tecnologías limpias y sostenibilidad. Trabajé como analista
                financiero para diversas instituciones bancarias y financieras.
              </p>
            </div>
          </div>

          <div className={styles.Nosotros_List_Card_Img}>
            <img
              src="/assets/resources/Federico_Secondo.jpeg"
              alt="Federico Secondo / EFIKO"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
