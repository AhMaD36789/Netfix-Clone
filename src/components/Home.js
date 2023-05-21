// import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from './MovieList.js';


function Home() {

    const [movieData, setMovieData] = useState([])

    const getAllMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;

        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setMovieData(data)

                })
            })
    }

    useEffect(() => {
        getAllMovies()
    }, [])

    return (
        <>
        <div className="container">
         < MoviesList item={movieData} />
         </div>
        </>
    );

}


export default Home;