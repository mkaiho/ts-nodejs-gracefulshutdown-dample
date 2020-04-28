import express from 'express';
import Controller from '../controllers/timer_controller';
import TimerService from '../services/timer_service';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  new Controller(new TimerService()).wait(req, res);
});

export default router;
