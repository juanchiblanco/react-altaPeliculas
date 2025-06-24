import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardPelicula = () => {
    return (
        <Card className="shadow col-12 col-md-4 col-lg-3 my-3">
      <Card.Header className="bg-light text-center">
        <p className="fs-2">Nombre</p>
        <p className="fs-5">Genero</p>
      </Card.Header>
      <Card.Body className="bg-primary-subtle">
        <p>Descripcion</p>
      </Card.Body>
      <Card.Footer>
        <Button type="button" variant="danger">
          Borrar
        </Button>
      </Card.Footer>
    </Card>
    );
};

export default CardPelicula;