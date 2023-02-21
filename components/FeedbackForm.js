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

        <label htmlFor="email">Correo</label>
        <input id="email" className={styles['form-field']} type="email" name="email" required />
        <br>\n</br>
        
        <img src="/napoleon.jpg" className={styles['form-image']}/>
        <fieldset>
          <legend>1.- ¿El caballo de Napoleón es blanco?</legend>
          <div>
            <input type="radio" id="verdadero" name="pregunta1" value="verdadero"/>
            <label for="verdadero">Verdadero</label>

            <input type="radio" id="falso" name="pregunta1" value="falso" />
            <label for="falso">Falso</label>
          </div>
        </fieldset>

        <img src="/brushless.jpg" className={styles['form-image']}/>
        <fieldset>
          <legend>2.- ¿Un motor brushless funciona con PWM?</legend>
          <div>
            <input type="radio" id="verdadero" name="pregunta2" value="verdadero"/>
            <label for="verdadero">Verdadero</label>

            <input type="radio" id="falso" name="pregunta2" value="falso" />
            <label for="falso">Falso</label>
          </div>
        </fieldset>

        <img src="/national.png" className={styles['form-image']}/>
        <fieldset>
          <legend>3.- ¿Este es un ejemplo de un sistema de primer orden?</legend>
          <div>
            <input type="radio" id="verdadero" name="pregunta3" value="verdadero"/>
            <label for="verdadero">Verdadero</label>

            <input type="radio" id="falso" name="pregunta3" value="falso" />
            <label for="falso">Falso</label>
          </div>
        </fieldset>

        <img src="/13Question.png" className={styles['form-image']}/>
        <fieldset>
          <legend>4.- ¿En este sistema existe la retroalimentación?</legend>
          <div>
            <input type="radio" id="verdadero" name="pregunta4" value="verdadero"/>
            <label for="verdadero">Verdadero</label>

            <input type="radio" id="falso" name="pregunta4" value="falso" />
            <label for="falso">Falso</label>
          </div>
        </fieldset>

        <img src="/encoder.jpg" className={styles['form-image']}/>
        <fieldset>
          <legend>5.- ¿El encoder es un transductor?</legend>
          <div>
            <input type="radio" id="verdadero" name="pregunta5" value="verdadero"/>
            <label for="verdadero">Verdadero</label>

            <input type="radio" id="falso" name="pregunta5" value="falso" />
            <label for="falso">Falso</label>
          </div>
        </fieldset>

        <br></br>
        <label htmlFor="feedback">Despues de leer <a href="https://www.redalyc.org/pdf/478/47802507.pdf" target="_blank">este</a> paper, ¿qué opinas?</label>
        <textarea id="feedback" className={styles['form-field']} wrap="soft" name="feedback" required></textarea>
        <button className={styles.button} type="submit">Enviar</button>
      </form>
  )
}