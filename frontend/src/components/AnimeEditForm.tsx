import { Props } from '../types';
import { useState } from 'react';

export const AnimeEditForm = ({ anime }: Props) => {
    const [title, setTitle] = useState(anime.title);
    const [englishTitle, setEnglishTitle] = useState(anime.englishTitle || "");
    const [description, setDescription] = useState(anime.description || "");
    const [status, setStatus] = useState(anime.status);
    const [myRating, setMyRating] = useState(anime.myRating || 0);
    const [episodes, setEpisodes] = useState(anime.episodes || 0);
    const [myStatus, setMyStatus] = useState(anime.myStatus || "Watching");
    const [season, setSeason] = useState(anime.season || "Winter");
    const [year, setYear] = useState(anime.year || new Date().getFullYear());
    const [type, setType] = useState(anime.type || "TV");
    const [airedStart, setAiredStart] = useState(anime.aired?.start || "");
    const [airedEnd, setAiredEnd] = useState(anime.aired?.end || "");
    const [posterUrl, setPosterUrl] = useState(anime.posterUrl || "");
    const [genres, setGenres] = useState(anime.genres || "");
    const [themes, setThemes] = useState(anime.themes || "");
    const [demographics, setDemographics] = useState(anime.demographics || "");
    const [dateStartedWatching, setDateStartedWatching] = useState(anime.dateStartedWatching || "");
    const [dateCompletedWatching, setDateCompletedWatching] = useState(anime.dateCompletedWatching || "");
    const [review, setReview] = useState(anime.review || "");
    
    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`http://localhost:5000/api/anime/${anime._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                title,
                englishTitle,
                description,
                status,
                myRating,
                episodes,
                myStatus,
                season,
                year,
                type,
                aired: {
                    start: airedStart,
                    end: airedEnd,
                },
                posterUrl,
                genres,
                themes,
                demographics,
                dateStartedWatching,
                dateCompletedWatching,
                review,
            })
        });
    };
    return (
        <form onSubmit={handleEdit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <button type="submit">Edit Anime</button>
        </form>
    );

};


    

