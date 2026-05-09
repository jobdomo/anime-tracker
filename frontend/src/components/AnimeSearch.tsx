import React, { useState } from 'react';
import { Anime } from '../types';


export const AnimeSearch = () => {
    const [searchQuery, setSearchQuery] = useState(""); 
    const [results, setResults] = useState<any[]>([]); 
    // any[] holds any data from API

    const convertStatus = (status: string) => {
        if (status === "FINISHED") return "Finished";
        if (status === "RELEASING") return "Airing";
        return "Upcoming";
    }

    const convertFormat = (format: string) => {
        if (format === "TV") return "TV";
        if (format === "MOVIE") return "Movie";
        return "OVA";
    }



    const query = `
    query($search: String) {
        Page(page: 1, perPage: 10) {
        media(search: $search, type: ANIME) {
            id
            title {
            romaji
            english
            }
            episodes
            status
            format
            coverImage {
            large
            }
            genres
        }
        }
    }`;


    const handleSearch = () => {
        fetch(`https://graphql.anilist.co`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: {
                    search: searchQuery,
                },
            }),
        })
            .then(res => res.json())
            .then(data => setResults(data.data.Page.media));
    }

    const handleAddToTracker = (anime: any) => {
        const animeToSave = {
            title: anime.title.romaji,
            englishTitle: anime.title.english,
            episodes: anime.episodes,
            status: convertStatus(anime.status),
            type: convertFormat(anime.format),
            posterUrl: anime.coverImage.large,
            genres: anime.genres,
        };
        fetch("http://localhost:5000/api/anime", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(animeToSave),
        });

    
    }

    return (
        <div>
            <input value= {searchQuery} onChange={(e) => setSearchQuery(e.target.value)}   
                placeholder="Search anime..." />
            <button onClick={handleSearch}>Search</button>
            {results.map(anime => (
                <div key={anime.id}>
                    <p>{anime.title.romaji}</p>
                    <button onClick={() => handleAddToTracker(anime)}>Add to Tracker</button>
                </div>
            ))}
        </div>
    );
}