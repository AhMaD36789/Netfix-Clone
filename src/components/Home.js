// import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from './MovieList.js';
import axios from "axios";


function Home() {

    const [movieData, setMovieData] = useState([])

    const getAllMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;

        axios.get(serverURL)
        .then(respnose=>{
            console.log(respnose.data)
            setMovieData(respnose.data)
        })
        .catch(error=>{
            console.log(error)
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