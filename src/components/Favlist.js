import { useEffect, useState } from "react";
import Favorite from "./Favorite";
import   "./Favorite.css";

function Favlist() {
    const [favARR, setfavARR] = useState([]);
    const getFavoriteMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getmovies`;
        fetch(serverURL)
            .then(response => {
                response.json()
                    .then(data => {
                        setfavARR(data);
                    })

            })
    }
    useEffect(() => {
        getFavoriteMovies();
    }, [])


    return (
        <>
        <div className="container">
            <Favorite favARR={favARR}/>
            </div>
        </>
    )
}
export default Favlist;