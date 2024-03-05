import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { TimeSession } from './time-session';

@Injectable({
  providedIn: 'root',
})
export class TimeSInkService {
  public static OnBreak = signal(false);
  public static timerStartedSwitch = signal(false);
  public static sessionCounter = signal(0);
  public static Mode: WritableSignal<'Seconds' | 'Minutes' | 'Hours' | 'Days'> =
    signal('Seconds');
  private static sessionSetCheck = false;
  private static readonly SECONDS = 'Seconds';
  private static readonly MINUTES = 'Minutes';
  private static readonly HOURS = 'Hours';
  private static readonly DAYS = 'Days';
  private static organicStop = true;
  private static listening = signal(false);
  private static currentInterval: any;
  private static timeInSeconds = signal(0);
  public static FormattedString = computed(() => {
    return TimeSInkService.timeDisplay(TimeSInkService.timeInSeconds());
  });
  private static multiplier: 1 | 60 | 3600 | 86400 = 1;
  private static timeEnded = computed(() => {
    if (TimeSInkService.listening()) {
      console.log('Time ended signal is listening');
      return TimeSInkService.timeInSeconds() <= 0;
    } else return false;
  });
  private static session: TimeSession = new (class implements TimeSession {
    breakTimeDuration: number = 0;
    workTimeDuration: number = 0;
  })();

  constructor() {
    throw new Error();
  }

  public static changeMode() {
    if (TimeSInkService.Mode() === 'Minutes') {
      if (this.sessionSetCheck) {
        this.session.workTimeDuration = this.session.workTimeDuration * 60;
        this.session.breakTimeDuration = this.session.breakTimeDuration * 60;
      }
      TimeSInkService.Mode.set('Seconds');
    } else {
      if (this.sessionSetCheck) {
        this.session.workTimeDuration = this.session.workTimeDuration / 60;
        this.session.breakTimeDuration = this.session.breakTimeDuration / 60;
      }
      TimeSInkService.Mode.set('Minutes');
    }
  }

  public static getBreak() {
    console.log('On break ? ' + this.OnBreak());
    return this.OnBreak();
  }

  /**
   * Completely optional. Uses values assigned previously to the session for
   * the break timer and the work timer
   * @constructor
   */
  static TimerSetupFromSession() {
    if (this.OnBreak()) {
      this.TimerSetup(this.session.breakTimeDuration);
    } else this.TimerSetup(this.session.workTimeDuration);
  }

  static getTimerFromSession(): number {
    if (this.OnBreak()) {
      return this.session.breakTimeDuration;
    } else return this.session.workTimeDuration;
  }

  /**
   * who cares about readability anyways
   * @param time will be modified based on the Mode()
   */
  public static TimerSetup(time: number) {
    if (this.timerStartedSwitch()) {
      return;
    }
    if (!this.timeEnded()) {
      //   this.stopTimer();
      if (this.listening()) {
        this.listening.set(false);
      }
    } //checks if time has ended then stops timer with func
    // const varToUse = this.sessionSetCheck?this.getTimerFromSession():time
    // if (this.sessionSetCheck){
    //   console.log(this.session)
    //   this.TimerSetupFromSession();
    // //  return;
    // }

    const mKV: any = this.getMultiplierUnitTypeKV();
    this.multiplier = mKV[this.Mode()];
    const timeInSeconds =
      (this.sessionSetCheck ? this.getTimerFromSession() : time) *
      this.multiplier;
    // const timeInSeconds = varToUse*this.multiplier
    timeInSeconds > 5 ? this.startTimer(timeInSeconds) : null;
    console.log(this.session);
  }

  public static stopTimer(stoppedOrganically: boolean) {
    this.OnBreak.update((value) => !value);
    this.organicStop = stoppedOrganically;
    this.timerStartedSwitch.set(false);
    this.timeInSeconds.set(0);
    this.listening.set(false);
    clearInterval(this.currentInterval);
  }

  public static sessionSetter(breakTime: number, workTime: number) {
    if (breakTime * workTime === 0) {
      return;
    }
    if (this.Mode() === 'Seconds') {
      if (breakTime <= 5) {
        return;
      }
      if (workTime <= 5) {
        return;
      }
    }
    this.sessionSetCheck = true;
    this.session.breakTimeDuration = breakTime;
    this.session.workTimeDuration = workTime;
    console.log(this.session);
  }

  private static getMultiplierUnitTypeKV(): object {
    const s = this.SECONDS;
    const m = this.MINUTES;
    const h = this.HOURS;
    const d = this.DAYS;

    const multiplierKV: any = {};
    multiplierKV[s] = 1;
    multiplierKV[m] = 60;
    multiplierKV[h] = 3600;
    multiplierKV[d] = 86400;
    return multiplierKV;
  }

  private static timeToString(timeUnit: number, maxValue: number) {
    const unitValue: number = Math.floor(timeUnit % maxValue);
    const unitStringRep = unitValue < 10 ? `0${unitValue}` : `${unitValue}`;
    return unitStringRep;
  }

  private static timeDisplay(timeInSec: number) {
    const maxSeconds = 60;
    const maxMinutes = 60;
    const maxHours = 10;
    const minutes: number = timeInSec / 60;
    const hours: number = minutes / 60;

    const strTime: string = `${this.timeToString(hours, maxHours)}\
    :${this.timeToString(minutes, maxMinutes)}\
    :${this.timeToString(timeInSec, maxSeconds)}`;
    return strTime;
  }

  /**
   * Introduce additional parameter for what timer and insert the parameter automatically
   * in function call based on the button that is pressed.
   * @param time
   * @private
   */
  private static startTimer(time: number) {
    if (this.organicStop) {
    }
    //this.onBreak=false;
    console.log('Outer log ' + this.getSwitch());

    const timerSetter = () => {
      this.timerStartedSwitch.set(true);
      let _tmpTime = time;
      this.timeInSeconds.set(time);
      this.currentInterval = setInterval(() => {
        console.log(this.FormattedString());
        this.timeInSeconds.update((value) => value - 1);
        _tmpTime--;
        if (_tmpTime === 5) {
          this.listening.set(true);
        }
        console.log(`Time ended : ${this.timeEnded()}`);
        console.log(`Time listening : ${this.listening()}`);
        if (this.timeEnded()) {
          this.sessionCounter.update((value) => value + 1);
          this.stopTimer(true);
        }
        console.log('Outer log' + this.getSwitch());
      }, 1000);
    };
    timerSetter.call(this);
  }

  private static getSwitch() {
    console.log('The switch is on : ' + this.timerStartedSwitch);
    return this.timerStartedSwitch;
  }

  private static setBreakTime(time: number) {}

  private static setWorkTime(time: number) {}
}
