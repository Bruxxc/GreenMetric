import styles from "./Servicios.module.css";

export const Servicios = () => {
    return (
       
        <div className={styles.Servicios_Main_Container}>
            <h1> Servicios </h1>

            <section className={styles.Servicios_List_Container}>

                <div className={`${styles.Servicios_List_Card} ${styles.ItemIzq}`}>
                    <div className={`${styles.Servicios_List_Card_Text} ${styles.text_Izq}`}>
                        <h2>Medición y Reportes de Sostenibilidad</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        </p>
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
                        <h2>Postulación y Seguimiento de Proyectos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        </p>
                    </div>

                </div>

                <div className={`${styles.Servicios_List_Card} ${styles.ItemIzq}`}>
                    <div className={`${styles.Servicios_List_Card_Text} ${styles.text_Izq}`}>
                        <h2>Consultoría en Eficiencia Energética</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        </p>
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
                        <h2>Consultoría en Gestión de la Sostenibilidad Empresarial</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        </p>
                    </div>

                </div>

            </section>

        </div>
        
    

    );
};