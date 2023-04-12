import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import styles from '@components/FeedbackForm.module.css'

export default function Home() {
  return (

    <div className={styles.background-colors}>
      <Head>
        <title>Cuestionario Prueba</title>
        <link rel="icon" href="/ticoman.ico" />
      </Head>

      <main>
        <Header title="Cuestionario IPN ESIME Ticomán" />
        <hr />
        <p className="description">
          Favor de llenar el custionario con sus respectivas respuestas:
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
