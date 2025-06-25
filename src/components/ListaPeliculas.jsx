import CardPelicula from "./CardPelicula";

const ListaPeliculas = ({peliculas, borrarColor}) => {
    return (
        <article className="w-75 border border-light-subtle rounded">
            <div className="row justify-content-center gap-2">
                {
                    peliculas.map((pelicula, indice)=> <CardPelicula pelicula={pelicula} key={indice} borrarColor={borrarColor}></CardPelicula>)
                }
            </div>
        </article>
    );
};

export default ListaPeliculas;