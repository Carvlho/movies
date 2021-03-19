import React, {useState} from 'react';
import axios from 'axios';

import Search from '../Search/Search';

const Movies = () => {

        const [movies, setMovies] = useState([]);
        const [query, setQuery] = useState('');

        //API
        const searchMovie = async (e) => {
            e.preventDefault();

            const API_KEY = 'ca639ea2';
            const apiurl = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

            try {
                const response = await axios.get(apiurl);
                const data = response.data.Search;
                console.log(data);

                setMovies(data);

            }catch(err) {
                console.error(err);
            }
        }
        return(
            <div>
                <Search
                    searchMovie={searchMovie}
                    query={query}
                    setQuery={setQuery}
                    movies={movies}
                />
            </div>
        );
}

export default Movies;