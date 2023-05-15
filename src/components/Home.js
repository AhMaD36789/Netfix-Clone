// import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from './MovieList.js';


function Home() {

    const [movieData, setMovieData] = useState([])

    const getAllMovies = () => {
        const serverURL = "http://localhost:3000/trending";

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
            <h1>Home</h1>
            < MoviesList movieData={movieData} />
        </>
    );

}


export default Home;