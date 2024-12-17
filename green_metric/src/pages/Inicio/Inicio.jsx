import styles from "./Inicio.module.css";
import { ServiciosPreview } from "../ServiciosPreview/ServiciosPreview";
import { Proposito } from "../Proposito/Proposito";
import { Nosotros } from "../Nosotros/Nosotros";
import { Presentacion } from "../Presentacion/Presentacion";
import { Contacto } from "../Contacto/Contacto"
import { useEffect } from "react";


export const Inicio = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, []);

    return (
        <div className={styles.Inicio_Main_Container}>
            <Presentacion/>
            <Proposito/>
            <Nosotros/>
            <ServiciosPreview/>
            <Contacto/>
        </div>

    )

}