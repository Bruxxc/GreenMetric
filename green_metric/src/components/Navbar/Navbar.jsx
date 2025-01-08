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
          <Link to="../#nosotros-seccion"><NavbarItem className={styles.NavbarItem}>Nosotros</NavbarItem></Link>
          <Link to="/servicios#top"><NavbarItem className={styles.NavbarItem}>Servicios</NavbarItem></Link>
          <Link to="../#contacto-seccion"><NavbarItem className={styles.NavbarItem}>Contactanos</NavbarItem></Link>
        </NavbarList>

        <NavbarCollapseBtn />
        <NavbarCollapse className={styles.MobileCollapse}>
          <Link className={styles.MainNavbarItem} to="../"><NavbarItem className={styles.NavbarItem}>Inicio</NavbarItem></Link>
          <Link className={styles.MainNavbarItem} to="../#nosotros-seccion"><NavbarItem className={styles.NavbarItem}>Nosotros</NavbarItem></Link>
          <Link className={styles.MainNavbarItem} to="../servicios#top"><NavbarItem className={styles.NavbarItem}>Servicios</NavbarItem></Link>
          <Link className={styles.MainNavbarItem} to="../#contacto-seccion"><NavbarItem className={styles.NavbarItem}>Contactanos</NavbarItem></Link>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
