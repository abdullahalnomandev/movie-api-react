import React, { useEffect, useState } from 'react';
import SingleMovie from '../SingleMovi/SingleMovie';


const AllMobiers = () => {

    const apiKey='870967436c1517d581daf3b245495790';

    const [movies,setMovies]=useState([]);
    useEffect(()=>{

        fetch (`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
        .then( res => res.json())
        .then (data => setMovies(data.results))

    },[]);
 console.log(movies);
    return (
        <div className="container mt-5 ">
        <div className="row">
            {
                movies.map( movie=> <SingleMovie movie={movie}></SingleMovie>)
            }
        </div>
        </div>
    );
};

export default AllMobiers;