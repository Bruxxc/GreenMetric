import styles from "./ServiciosPreview.module.css";
import { Link } from "react-router-dom";

export const ServiciosPreview = () => {
    return ( 

        <div className={styles.ServiciosPreview_Main_Container}>

            <h2> Servicios </h2>

            <div className={styles.ServiciosPreview_List_Container}>

                <div className={styles.ServiciosPreview_List_Card}>
                    <img src="/assets/resources/Servicio1Alt.png" alt="" />
                    <h3>Elaboración de Reportes de Sostenibilidad</h3>
                    <Link to="/servicios"><button>Saber más</button></Link>
                </div>

                <div className={styles.ServiciosPreview_List_Card}>
                    <img src="/assets/resources/Servicio2Alt.png" alt="" />
                    <h3>Diagnóstico, Propuesta y Monitoreo de acciones de Sostenibilidad</h3>
                    <Link to="/servicios"><button>Saber más</button></Link>
                </div>

                <div className={styles.ServiciosPreview_List_Card}>
                    <img src="/assets/resources/Servicio3Alt.png" alt="" />
                    <h3>Consultoría en Gestión de la Sostenibilidad Empresarial</h3>
                    <Link to="/servicios"><button>Saber más</button></Link>
                </div>

                <div className={styles.ServiciosPreview_List_Card}>
                    <img src="/assets/resources/Servicio4Alt.png" alt="" />
                    <h3>Cálculo de la Huella de Carbono</h3>
                    <Link to="/servicios"><button>Saber más</button></Link>
                </div>


            </div>
        </div>


    );
};