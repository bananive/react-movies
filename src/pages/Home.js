import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import { MY_API_KEY } from '../global';

// const TRENDING_MOVIES_API = `https://api.themoviedb.org/3/trending/all/day?api_key=${MY_API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&language=en-US&include_adult=false`;


const Home = () => {

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        fetch(SEARCH_API + '&query=a').then( res => res.json()).then( data => {
            setMoviesList(data.results);
            console.log(data.results);
        });
    }, []);

    const mappedMovies = moviesList.map( el => {
        return ( <Movie movieobj={el} key={el.id} /> );
    });

    const handleSearch = (e) => {
        if(e.target.value.length > 2) {
            fetch(SEARCH_API + `&query=${e.target.value}`).then(res => res.json()).then( data => {
                console.log(data.results);
                setMoviesList(data.results);
            });
        }
    };

    return (
      <div className="page-content">
            <div className="intro">
                <h1>Intro</h1>
            </div>
            <input type="text" placeholder="Search" onChange={handleSearch} />
            {mappedMovies}
      </div>
    );
}
  
export default Home;