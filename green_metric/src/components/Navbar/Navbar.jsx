import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

export const NavbarComponent = () => {


  
  return (
    <Navbar className={styles.Navbar}>
      <NavbarContainer className={styles.NavbarContainer}>
        <NavbarBrand className={styles.NavbarBrand}>
          <a href="../"><img src="/assets/resources/logo2.png" alt="Logo"/></a>
        </NavbarBrand>

        <NavbarList className={styles.NavbarList}>
          <Link to="../"><NavbarItem className={styles.NavbarItem}>Inicio</NavbarItem></Link>
         <NavbarItem className={styles.NavbarItem}><a href="../#nosotros-seccion">Nosotros</a></NavbarItem>
          <Link to="/servicios"><NavbarItem className={styles.NavbarItem}>Servicios</NavbarItem></Link>
          <NavbarItem className={styles.NavbarItem}><a href="../#contacto-seccion">Contactanos</a></NavbarItem>
        </NavbarList>

        <NavbarCollapseBtn />
        <NavbarCollapse className={styles.MobileCollapse}>
          <NavbarItem className={styles.NavbarItem}><a href="../">Inicio</a></NavbarItem>
          <NavbarItem className={styles.NavbarItem}><a href="../#nosotros-seccion">Nosotros</a></NavbarItem>
          <NavbarItem className={styles.NavbarItem}><a href="/servicios">Servicios</a></NavbarItem>
          <NavbarItem className={styles.NavbarItem}><a href="../#contacto-seccion">Contactanos</a></NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
