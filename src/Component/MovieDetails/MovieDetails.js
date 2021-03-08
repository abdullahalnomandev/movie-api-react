import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MovieDetails = () => {

    const { id } = useParams();

    const apiKey = '870967436c1517d581daf3b245495790';


    const [movies, setMovies] = useState([]);
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovies(data))

    }, [])
    console.log(movies);
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img style={{width:"400px"}} className="img-fluid" src={`https://image.tmdb.org/t/p/w1280/${movies.poster_path}`} alt="" />
                </div>
                <div className="col-md-6">
                    <h3>{movies.title}</h3>
                    <p>Release Date {movies.release_date}</p>
                    <p>{movies.overview}</p>

                </div>
            </div>

        </div>
    );
};

export default MovieDetails;