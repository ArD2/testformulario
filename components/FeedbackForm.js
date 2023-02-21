import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (  

      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="name">Nombre</label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        
        <img src="/napoleon.jpg" className={styles['form-image']}/>
        <fieldset>
          <legend>¿De que color es el caballo blanco de Napoleón?</legend>
          <div>
            <input type="radio" id="verdadero" name="contact" value="verdadero"/>
            <label for="verdadero">Verdadero</label>

            <input type="radio" id="falso" name="contact" value="falso" />
            <label for="falso">Falso</label>
          </div>
        </fieldset>

        <label htmlFor="email">Correo</label>
        <input id="email" className={styles['form-field']} type="email" name="email" required />

        <label htmlFor="feedback">Despues de leer <a href="https://www.redalyc.org/pdf/478/47802507.pdf">este</a> paper, ¿qué opinas?</label>
        <textarea id="feedback" className={styles['form-field']} wrap="soft" name="feedback" required></textarea>
        <button className={styles.button} type="submit">Enviar</button>
      </form>
  )
}
