import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPelicula from "./components/FormularioPelicula";

function App() {
  return (
    <main className="container my-3">
      <h1 className="text-center">Cartelera</h1>
       <section className="row justify-content-center">
        <FormularioPelicula/>
       </section>
    </main>
  )
}

export default App
