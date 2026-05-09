import { Request, Response } from 'express';
import { Anime } from '../models/anime';

export const getAllAnime = async (req: Request, res: Response) => {
    try {
        const anime = await Anime.find();
        res.json(anime);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching anime', error });
    }
};

export const getAnimeById = async (req: Request, res: Response) => {
    try {
        const anime = await Anime.findById(req.params.id);
        if (!anime) {
            return res.status(404).json({ message: 'Anime not found' });
        }
        res.json(anime);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching anime', error });
    }

};

export const addAnime = async (req: Request, res: Response) => {
    try {
        const newAnime = new Anime(req.body);
        await newAnime.save();
        res.status(201).json(newAnime);
    } catch (error) {
        res.status(500).json({ message: 'Error adding anime', error });
    }

};

export const updateAnime = async (req: Request, res: Response) => {
    try {
        const updatedAnime = await Anime.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAnime) {
            return res.status(404).json({ message: 'Anime not found' });
        }
        res.json(updatedAnime);
    } catch (error) {
        res.status(500).json({ message: 'Error updating anime', error });
    }
};

export const deleteAnime = async (req: Request, res: Response) => {
    try {
        const deletedAnime = await Anime.findByIdAndDelete(req.params.id);
        if (!deletedAnime) {
            return res.status(404).json({ message: 'Anime not found' });
        }
        res.json({ message: 'Anime deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting anime', error });
    }

};