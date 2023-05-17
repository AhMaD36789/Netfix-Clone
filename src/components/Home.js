// import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from './MovieList.js';


function Home() {

    const [movieData, setMovieData] = useState([])

    const getAllMovies = () => {
        const serverURL = "http://localhost:3001/trending";

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
         < MoviesList item={movieData} />
        </>
    );

}


export default Home;