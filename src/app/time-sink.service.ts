import {computed, effect, Injectable, OnInit, signal, WritableSignal} from '@angular/core';
import {max} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class TimeSInkService {


  private static readonly SECONDS = "Seconds";
  private static readonly MINUTES = "Minutes";
  private static readonly HOURS = "Hours";
  private static readonly DAYS  = "Days";

  private static listening = signal(false);
  private static currentInterval:any;
  private static timeInSeconds = signal(0);
  private static multiplier:1|60|3600|86400 = 1;
  private static timeEnded = computed(() => {
    if (TimeSInkService.listening()){
      console.log("Time ended signal is listening")
      return TimeSInkService.timeInSeconds()<=0;
    }
    else return false;
  })

  public static timerStartedSwitch = signal(false);

  public static Mode: WritableSignal<"Seconds"|"Minutes"|"Hours"|"Days"> = signal("Seconds");
  public static FormattedString = computed(()=>{
    return TimeSInkService.timeDisplay(TimeSInkService.timeInSeconds())
  })

  private static getMultiplierUnitTypeKV ():object {
    const s = this.SECONDS;
    const m = this.MINUTES;
    const h = this.HOURS;
    const d=this.DAYS;

    const multiplierKV:any = {};
    multiplierKV[s]=1;
    multiplierKV[m]=60;
    multiplierKV[h]=3600;
    multiplierKV[d]=86400;
    return multiplierKV
  }
  private static timeToString(timeUnit:number, maxValue:number){
    const unitValue:number = Math.floor(timeUnit%maxValue);
    const unitStringRep = unitValue<10?`0${unitValue}`:`${unitValue}`
    return unitStringRep;
  }


  private static timeDisplay(timeInSec:number){
    const maxSeconds = 60
    const maxMinutes = 60;
    const maxHours = 10;
    const minutes:number = timeInSec/60;
    const hours:number = minutes/60;

    const strTime:string =
      `${this.timeToString(hours,maxHours)}\
    :${this.timeToString(minutes, maxMinutes)}\
    :${this.timeToString(timeInSec, maxSeconds)}`;
    return strTime;
  }
  private static startTimer(time:number){

    console.log("Outer log "+this.getSwitch())
    if (!this.timeEnded()) {
      this.stopTimer();
      if (this.listening()) {
        this.listening.set(false);
      }
    } //checks if time has ended then stops timer with func

      this.timerStartedSwitch.set(true);
      let _tmpTime = time;
      this.timeInSeconds.set(time);
      this.currentInterval = setInterval(() => {

        console.log(this.FormattedString());
      this.timeInSeconds.update(value => value-1);
      _tmpTime--;
      if (_tmpTime===5){
        this.listening.set(true);
      }
        console.log(`Time ended : ${this.timeEnded()}`)
        console.log(`Time listening : ${this.listening()}`)
        if (this.timeEnded()){

          this.stopTimer();
        }
        console.log("Outer log"+this.getSwitch())
      },1000)

  }

  public

  private static getSwitch(){
    console.log("The switch is on : "+this.timerStartedSwitch)
    return this.timerStartedSwitch;
  }
  /**
   * who cares about readability anyways
   * @param time will be modified based on the Mode()
   */
  public static TimerSetup(time:number){
    if (this.timerStartedSwitch()){
      return;
    }
    const mKV:any = this.getMultiplierUnitTypeKV();
    this.multiplier = mKV[this.Mode()];
    const timeInSeconds = time*this.multiplier
    timeInSeconds>5?this.startTimer(timeInSeconds):null;


  }

  public static stopTimer(){
    this.timerStartedSwitch.set(false);
    this.timeInSeconds.set(0);
    this.listening.set(false);
    clearInterval(this.currentInterval)
  }

  constructor() {
  throw new Error();
  }


}
