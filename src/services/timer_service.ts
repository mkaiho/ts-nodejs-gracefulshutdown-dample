import timerModule from '../modules/timer_module';

export default class TimerService {
  public async countSeconds(sec: number): Promise<void> {
    const UNITTIME_MS = 1000;
    const count = sec > 0 ? sec : 0;
    for (let counter = count; counter > 0; counter -= 1) {
      console.info(`${counter}[ms]`);
      await timerModule.sleep(UNITTIME_MS);
    }
    console.info(`Done`);
  }
}
