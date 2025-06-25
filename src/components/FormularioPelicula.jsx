import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaPeliculas from "./ListaPeliculas";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormularioPelicula = () => {

  const peliculasLocalStorage = JSON.parse(localStorage.getItem("peliculas")) || []

  const [peliculas, setPeliculas] = useState(peliculasLocalStorage);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(
  () => localStorage.setItem("peliculas", JSON.stringify(peliculas)), [peliculas]
  )

  const agregarPelicula = (pelicula) => {
    setPeliculas([...peliculas, pelicula]);
    reset();
  };

  const borrarColor = (nombrePelicula) => {
    const peliculasFiltradas = peliculas.filter((item)=>item!==nombrePelicula)
    setPeliculas(peliculasFiltradas)
  }

  return (
    <section className="row justify-content-center">
      <div className="w-75 border border-light-subtle rounded p-3 my-3">
        <Form onSubmit={handleSubmit(agregarPelicula)}>
          <Form.Group className="mb-3" controlId="nombrePelicula">
            <Form.Label>Nombre de la pelicula *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Interestellar" {...register("inputNombre",{required:"Este campo es obligatorio"})}/>
          </Form.Group>
          <Form.Text className="text-danger">
              {errors.inputNombre?.message}
            </Form.Text>
          <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label>Descripcion *</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Ej: Gracias a un descubrimiento, un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí."
              {...register("inputDescripcion",{required:"Este campo es obligatorio"})}
            />
          </Form.Group>
          <Form.Text className="text-danger">
              {errors.inputDescripcion?.message}
            </Form.Text>
          <Form.Group className="mb-3" controlId="genero">
            <Form.Label>Genero *</Form.Label>
            <Form.Select aria-label="Default select example" {...register("inputGenero",{required:"Este campo es obligatorio"})}>
              <option>Elige una opcion</option>
              <option value="Acción">Acción</option>
              <option value="2">Aventura</option>
              <option value="Aventura">Ciencia ficción</option>
              <option value="Comedia">Comedia</option>
              <option value="Drama">Drama</option>
              <option value="Terror">Terror</option>
              <option value="Fantasía">Fantasía</option>
              <option value="Musical">Musical</option>
              <option value="Romántico">Romántico</option>
              <option value="Thriller">Thriller</option>
              <option value="Animación">Animación </option>
              <option value="Documental">Documental</option>{" "}
            </Form.Select>
          </Form.Group>
          <Form.Text className="text-danger">
              {errors.inputGenero?.message}
            </Form.Text>
          <Button variant="primary" type="submit" className="mt-4 w-100 shadow">
            Agregar nueva cita
          </Button>
        </Form>
      </div>
      <ListaPeliculas peliculas={peliculas} borrarColor={borrarColor}/>
    </section>
  );
};

export default FormularioPelicula;
