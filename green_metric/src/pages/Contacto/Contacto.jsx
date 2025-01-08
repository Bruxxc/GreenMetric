import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contacto.module.css";

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jalqigc",
        "template_84wlj3h",
        form.current,
        "OjnPwePadqxug51w1"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Correo enviado con éxito");
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el correo");
        }
      );
  };

  return (
    <section className={styles.contacto}>
      <div className={styles.contacto_parent}>
        <div id="contacto-seccion" className={styles.formulario_main_container}>
          <div className={styles.contactanos_form_head}>
            <h2>Contáctanos</h2>
            <p>
              Si deseas obtener más información sobre nuestros servicios en sostenibilidad empresarial, estaríamos encantados de ayudarte.
            </p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className={styles.formulario}
          >
            <div>
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Escribe tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Escribe tu correo"
              />
            </div>

            <div>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>

            <button type="submit">Enviar Mensaje</button>
          </form>

          <img
            src="./assets/resources/ContactoImg.jpg"
            alt="ContactoEFIKO"
            className={styles.contacto_img}
          />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
