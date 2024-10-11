import styles from "./Footer.module.css";

export const FooterComponent = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContainer}>
        {/* Lista de contactos a la izquierda */}
        <ul className={styles.ContactList}>

          <li className={styles.ContactTitle}>CONTACTO</li>

          <li className={styles.ContactItem}>
            <img className={styles.telIcon}  src="/assets/resources/icon_tel_verde.png" alt="" />
            <p>+598 99 999 999</p>
          </li>

          <li className={styles.ContactItem}>
            <img className={styles.mailIcon} src="/assets/resources/icon_mail_verde.png" alt="" />
            <p>ejemplo@gmail.com</p>
          </li>

          <li className={styles.ContactItem}>
            <img className={styles.liIcon} src="/assets/resources/icon_li_verde.png" alt="" />
            <p>GreenMetricUruguay</p>
          </li>

        </ul>

        {/* Logo*/}
        <div className={styles.FooterLogo}>
          <img src="/assets/resources/logo_completo_verde_vertical.png" alt="Logo" />
        </div>
        
      </div>
    </footer>
  );
};
