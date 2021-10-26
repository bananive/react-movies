import { Link } from "react-router-dom";
import styled from 'styled-components';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = styled.div`
    background-color: #ccc;
    margin-bottom: 20px;
`;

const MoviePoster = styled.img`
    width: 200px;
    border-radius: 15px;
`;

const MovieTitle = styled.span`
    display: block;
    font-size: 18px;
    color: #222;
    text-transform: uppercase;
`;

const Movie = ({ movieobj }) => {

    const url = `/movie/${movieobj.id}`;
    return (
        <MovieCard>
            <MoviePoster src={IMAGE_URL + movieobj.poster_path} alt={movieobj.title} />
            {/* <img src={IMAGE_URL + movieobj.poster_path} alt={movieobj.title} /> */}
            <MovieTitle>{movieobj.title ? movieobj.title : movieobj.name}</MovieTitle>
            <Link to={url}>View this movie</Link>
        </MovieCard>
    );
}

export default Movie;