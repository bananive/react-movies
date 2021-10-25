
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Movie = ({ movieobj }) => {
    return (
        <div className="movie">
            <img src={IMAGE_URL + movieobj.poster_path} alt={movieobj.title} />
            {movieobj.title ? movieobj.title : movieobj.name}
        </div>
    );
}

export default Movie;