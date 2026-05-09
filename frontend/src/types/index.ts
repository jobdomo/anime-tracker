export interface Anime {
    _id: string;
    title: string;
    englishTitle?: string;
    episodes?: number;
    description?: string;
    status: string;
    myRating?: number;
    myStatus?: string;
    season?: string;
    year?: number;
    type?: string;
    aired?: {
        start?: Date;
        end?: Date;
    };
    posterUrl?: string;
    genres?: string[];
    themes?: string[];
    demographics?: string;
    dateStartedWatching?: Date;
    dateCompletedWatching?: Date;
    review?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Props {
    anime: Anime;
}

