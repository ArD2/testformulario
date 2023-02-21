import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

function enlargeImg() {
  // Set image size to 1.5 times original
  img.style.transform = "scale(1.5)";
  // Animation effect
  img.style.transition = "transform 0.25s ease";
}
// Function to reset image size
function resetImg() {
  // Set image size to original
  img.style.transform = "scale(1)";
  img.style.transition = "transform 0.25s ease";
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
