import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaPeliculas from "./ListaPeliculas";

const FormularioPelicula = () => {
  return (
    <section className="row justify-content-center">
      <div className="w-75 border border-light-subtle rounded p-3 my-3">
        <Form>
          <Form.Group className="mb-3" controlId="nombrePelicula">
            <Form.Label>Nombre de la pelicula *</Form.Label>
            <Form.Control type="text" placeholder="Ej: Interestellar" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label>Descripcion *</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Ej: Gracias a un descubrimiento, un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nombreMascota">
            <Form.Label>Genero *</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Elige una opcion</option>
              <option value="1">Acción</option>
              <option value="2">Aventura</option>
              <option value="3">Ciencia ficción</option>
              <option value="4">Comedia</option>
              <option value="5">Drama</option>
              <option value="6">Terror</option>
              <option value="7">Fantasía</option>
              <option value="8">Musical</option>
              <option value="9">Romántico</option>
              <option value="10">Thriller</option>
              <option value="11">Animación </option>
              <option value="12">Documental</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4 w-100 shadow">
            Agregar nueva cita
          </Button>
        </Form>
      </div>
      <ListaPeliculas />
    </section>
  );
};

export default FormularioPelicula;
