import mongoose from 'mongoose';

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  englishTitle: { type: String },
  episodes: { type: Number },
  description: { type: String },
  status: { type: String, enum: ['Airing', 'Finished', 'Upcoming'], required: true },
  myRating: { type: Number, min: 0, max: 10 },
  myStatus: { type: String, enum: ['Watching', 'Completed', 'On Hold', 'Dropped', 'Plan to Watch'] },
  season: { type: String, enum: ['Winter', 'Spring', 'Summer', 'Fall'] },
  year: { type: Number },
  type: { type: String, enum: ['TV', 'Movie', 'OVA', 'ONA', 'TV Short', 'Special']  },
  aired: { 
      start: { type: Date },
      end: { type: Date },
  },
  posterUrl: { type: String },
  genres: [{ type: String }],
  themes: [{ type: String }],
  demographics: { type: String },
  dateStartedWatching: { type: Date },
  dateCompletedWatching: { type: Date },
  review: { type: String },
  
},
    { timestamps: true }
);

export const Anime = mongoose.model('Anime', animeSchema);