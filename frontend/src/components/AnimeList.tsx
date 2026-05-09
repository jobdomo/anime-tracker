import { useEffect, useState } from "react";
// useEffect allows to run code at specific times
// useState stores data in the component
import { Anime } from "../types";
import { AnimeItem } from "./AnimeItem";


export const AnimeList = () => { 
    const [anime, setAnime] = useState<Anime[]>([]);
    // anime is my list []
    // setAnime is the function to update it
    // calling setAnime(), react renders with new data

    const handleRefresh = () => {
        fetch("http://localhost:5000/api/anime") //send get request
            .then((res) => res.json()) //convert resposne to JSON
            .then((data) => setAnime(data)); //update state with data
    }

    useEffect(() => { //runs automatically when component mounts
        fetch("http://localhost:5000/api/anime") //send get request
            .then((res) => res.json()) //convert resposne to JSON
            .then((data) => setAnime(data)); //update state with data
    }, []);

    return (
        <div>
            <button onClick={handleRefresh}>Refresh</button>
        {anime.map(item => ( //map loops through each item
            <AnimeItem key={item._id} anime={item} /> //render AnimeItem for each item
        ))}
    </div>
    );
};

