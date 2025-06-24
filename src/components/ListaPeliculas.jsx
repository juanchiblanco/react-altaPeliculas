import CardPelicula from "./CardPelicula";

const ListaPeliculas = () => {
    return (
        <article className="w-75 border border-light-subtle rounded">
            <div className="row justify-content-center gap-2">
                <CardPelicula/>
                <CardPelicula/>
                <CardPelicula/>
                <CardPelicula/>
                <CardPelicula/>
            </div>
        </article>
    );
};

export default ListaPeliculas;