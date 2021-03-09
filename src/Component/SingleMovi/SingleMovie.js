import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMovie = (props) => {

   const{original_title,poster_path,id} =props.movie;

    return (
           <div  className="col-md-3 my-3">
                <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}/>
                <Card.Body>
                    <div className="text-center">
                    <Card.Title>{original_title}</Card.Title>
                    <Button as={Link} to={`/movie/${id}`} variant="primary">View Details</Button>
                    </div>
                </Card.Body>
            </Card>

           </div>
    );
};

export default SingleMovie;