import styles from "./Inicio.module.css";
import { ServiciosPreview } from "../ServiciosPreview/ServiciosPreview";
import { Proposito } from "../Proposito/Proposito";
import { Nosotros } from "../Nosotros/Nosotros";
import { Presentacion } from "../Presentacion/Presentacion";
import { Contacto } from "../Contacto/Contacto"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const Inicio = () => {
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const hash = location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        handleScroll(); // Llama al desplazamiento en cada cambio de ubicación
    }, [location]); // Escucha cambios en `location`

    return (
        <div className={styles.Inicio_Main_Container}>
            <Presentacion />
            <Proposito />
            <Nosotros />
            <ServiciosPreview />
            <Contacto />
        </div>
    );
};
