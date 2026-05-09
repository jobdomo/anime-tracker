import React, { useState } from "react";

export const AnimeForm = () => {
    const [title, setTitle] = useState("");
    const [englishTitle, setEnglishTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Airing");
    const [myRating, setMyRating] = useState(0);
    const [episodes, setEpisodes] = useState(0);
    const [myStatus, setMyStatus] = useState("Watching");
    const [season, setSeason] = useState("Winter");
    const [year, setYear] = useState(new Date().getFullYear());
    const [type, setType] = useState("TV");
    const [airedStart, setAiredStart] = useState("");
    const [airedEnd, setAiredEnd] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [genres, setGenres] = useState("");
    const [themes, setThemes] = useState("");
    const [demographics, setDemographics] = useState("");
    const [dateStartedWatching, setDateStartedWatching] = useState("");
    const [dateCompletedWatching, setDateCompletedWatching] = useState("");
    const [review, setReview] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch("http://localhost:5000/api/anime", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
            }),
        });

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <button type="submit">Add Anime</button>
        </form>
    );

    // flow:
    // user types which goes to onchange (setTitle)
    // state updates only on the frontend
    // user clicks button which triggers handleSubmit
    // handleSubmit sends POST request to backend with form data
    // backend saves to database

};