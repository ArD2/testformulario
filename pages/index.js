import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

var selectedValue = document.querySelector('input[name="contact"]:checked')

if(selectedValue != null) {   
  alert("Selected radio button values is: " + SelectedValue.value);  
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cuestionario Prueba</title>
        <link rel="icon" href="/ticoman.ico" />
      </Head>

      <main>
        <Header title="Cuestionario IPN ESIME Ticoman" />
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
