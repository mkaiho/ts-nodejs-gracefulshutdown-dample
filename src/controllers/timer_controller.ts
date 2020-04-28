import { Request, Response } from 'express';
import TimerService from '../services/timer_service';

export default class TimerController {
  private readonly timerService: TimerService;

  public constructor(timerService: TimerService) {
    this.timerService = timerService;
  }

  public async wait(request: Request, response: Response): Promise<void> {
    // request parameter
    const seconds = Number(request.query.wait_seconds);

    // request parameter validation
    if (Number.isNaN(seconds)) {
      response.status(400).json({ message: 'Invalid reqeust' });
      return;
    }

    try {
      await this.timerService.countSeconds(seconds);
      response.status(200).json({ message: `Waited ${seconds} seconds` });
    } catch (error) {
      response.status(500).json({ message: 'Server Error' });
    }
  }
}
