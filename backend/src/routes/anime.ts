import express from 'express';
import { getAllAnime, getAnimeById, addAnime, updateAnime, deleteAnime} from '../controllers/animeController';

const router = express.Router();

router.get('/', getAllAnime);  // GET /api/anime → runs getAllAnime function
router.get('/:id', getAnimeById);  // GET /api/anime/:id → runs getAnimeById function
router.post('/', addAnime);  // POST /api/anime → runs addAnime function
router.put('/:id', updateAnime);  // PUT /api/anime/:id → runs updateAnime function
router.delete('/:id', deleteAnime);  // DELETE /api/anime/:id → runs deleteAnime function


export default router;