import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react';
  
import styles from "./Navbar.module.css";

export const NavbarComponent = () => {
  return (
    <Navbar className={styles.Navbar}>
      <NavbarContainer className={styles.NavbarContainer}>
        <NavbarBrand className={styles.NavbarBrand}>
          <img src="/assets/resources/logo_completo_verde.png" alt="Logo" />
        </NavbarBrand>

        <NavbarList className={styles.NavbarList}>
          <NavbarItem className={styles.NavbarItem}>Inicio</NavbarItem>
          <NavbarItem className={styles.NavbarItem}>Nosotros</NavbarItem>
          <NavbarItem className={styles.NavbarItem}>Conceptos</NavbarItem>
          <NavbarItem className={styles.NavbarItem}>Servicios</NavbarItem>
          <NavbarItem className={styles.NavbarItem}>Noticias</NavbarItem>
        </NavbarList>

        <NavbarCollapseBtn />
        <NavbarCollapse className={styles.MobileCollapse}>
        <NavbarItem className={styles.NavbarItem}>Inicio</NavbarItem>
          <NavbarItem className={styles.NavbarItem}>Nosotros</NavbarItem>
          <NavbarItem className={styles.NavbarItem}>Conceptos</NavbarItem>
          <NavbarItem className={styles.NavbarItem}>Servicios</NavbarItem>
          <NavbarItem className={styles.NavbarItem}>Noticias</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
