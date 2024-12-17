import styles from "./Footer.module.css";

export const FooterComponent = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContainer}>
        {/* Lista de contactos a la izquierda */}
        <ul className={styles.ContactList}>

          <li className={styles.ContactTitle}>¡Contactate con nosotros!</li>

          <li className={styles.ContactItem}>
            <img className={styles.telIcon}  src="/assets/resources/icon_tel_verde.png" alt="Telefono icono" />
            <p>+598 94 639 951</p>
          </li>

          <li className={styles.ContactItem}>
            <img className={styles.mailIcon} src="/assets/resources/icon_mail_verde.png" alt="Mail icono" />
            <p>efiko.asg@gmail.com</p>
          </li>

          <li className={styles.ContactItem}>
            <img className={styles.liIcon} src="/assets/resources/icon_li_verde.png" alt="LinkedIn icono" />
            <p>GreenMetricUruguay</p>
          </li>

        </ul>

        {/* Logo*/}
        <div className={styles.FooterLogo}>
          <img src="/assets/resources/logo_completo_verde_vertical.png" alt="EFIKO Logo" />
        </div>
        
      </div>
    </footer>
  );
};
