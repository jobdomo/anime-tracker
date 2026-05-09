import {Props} from '../types';
import { AnimeEditForm } from './AnimeEditForm';

export const AnimeItem = ({ anime }: Props) => {
    const handleDelete = () => {
        fetch(`http://localhost:5000/api/anime/${anime._id}`, {
            method: 'DELETE',
        });
    };

    return (
        <div>
            <p>{anime.title}</p>
            <p>{anime.myRating}</p>
            <button onClick={handleDelete}>Delete</button>
            <AnimeEditForm anime={anime} />
        </div>
        
    );
};
