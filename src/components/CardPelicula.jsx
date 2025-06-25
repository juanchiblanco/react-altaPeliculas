import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardPelicula = ({pelicula, borrarColor}) => {
    return (
        <Card className="shadow col-12 col-md-4 col-lg-3 my-3">
      <Card.Header className="bg-light text-center text-dark">
        <p className="fs-2 lead">{pelicula.inputNombre}</p>
        <p className="fs-5">{pelicula.inputGenero}</p>
      </Card.Header>
      <Card.Body className="bg-primary-subtle text-center">
        <p>{pelicula.inputDescripcion}</p>
      </Card.Body>
      <Card.Footer>
        <Button type="button" variant="danger" onClick={()=> borrarColor(pelicula)}>
          Borrar
        </Button>
      </Card.Footer>
    </Card>
    );
};

export default CardPelicula;