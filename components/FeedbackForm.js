import styles from './FeedbackForm.module.css'

let windowObjectReference = null; // global variable
function openRequestedTab(url, windowName) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName);
  } else {
    windowObjectReference.focus();
  }
}

const link = document.querySelector("a[target='openpdf1']");
link.addEventListener(
  "click",
  (event) => {
    openRequestedTab(link.href);
    event.preventDefault();
  },
  false
);

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
        
        <img src="/napoleon.jpg" className={styles['form-image']}/>
        <fieldset>
          <legend>¿El caballo de Napoleón es blanco?</legend>
          <div>
            <input type="radio" id="verdadero" name="pregunta1" value="verdadero"/>
            <label for="verdadero">Verdadero</label>

            <input type="radio" id="falso" name="pregunta1" value="falso" />
            <label for="falso">Falso</label>
          </div>
        </fieldset>

        <img src="/brushless.jpg" className={styles['form-image']}/>
        <fieldset>
          <legend>¿Un motor brushless funciona con PWM?</legend>
          <div>
            <input type="radio" id="verdadero" name="pregunta2" value="verdadero"/>
            <label for="verdadero">Verdadero</label>

            <input type="radio" id="falso" name="pregunta2" value="falso" />
            <label for="falso">Falso</label>
          </div>
        </fieldset>

        <label htmlFor="feedback">Despues de leer <a href="https://www.redalyc.org/pdf/478/47802507.pdf" target="openpdf1">este</a> paper, ¿qué opinas?</label>
        <textarea id="feedback" className={styles['form-field']} wrap="soft" name="feedback" required></textarea>
        <button className={styles.button} type="submit">Enviar</button>
      </form>
  )
}
