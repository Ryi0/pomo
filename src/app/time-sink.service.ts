import {computed, effect, Injectable, OnInit, signal, WritableSignal} from '@angular/core';
import {max} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class TimeSInkService {

  static timeToString(timeUnit:number, maxValue:number){
    const unitValue:number = Math.floor(timeUnit%maxValue);
    const unitStringRep = unitValue<10?`0${unitValue}`:`${unitValue}`
    return unitStringRep;
  }

  static timeDisplay(timeInSec:number){
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
  static SECONDS = "Seconds";
  static MINUTES = "Minutes";
  static HOURS = "Hours";
  static DAYS  = "Days";

  private static currentInterval:any;
  static timeInSeconds = signal(0);
  public static Mode: WritableSignal<"Seconds"|"Minutes"|"Hours"|"Days"> = signal("Seconds");
  static multiplier:1|60|3600|86400 = 1;
  static getMultiplierUnitTypeKV ():object {
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
  static FormattedString = computed(()=>{
    return TimeSInkService.timeDisplay(TimeSInkService.timeInSeconds())
  })
  public static timeEnded = computed(() => {
    if (TimeSInkService.listening()){
      console.log("Time ended signal is listening")
      return TimeSInkService.timeInSeconds()<=0;
    }
    else return false;
  }
    )
  private static listening = signal(false);

  /**
   * who cares about readability anyways
   * @param time will be modified based on the Mode()
   */
 static timerSetup(time:number){
   const mKV:any = this.getMultiplierUnitTypeKV();
   this.multiplier = mKV[this.Mode()];
   console.log(`mkv = ${JSON.stringify(mKV)} multiplier = ${this.multiplier} mode = ${this.Mode()} `)
   const timeInSeconds = time*this.multiplier
   this.startTimer(timeInSeconds);
 }
  private static startTimer(time:number){

    if (!TimeSInkService.timeEnded()) {
      TimeSInkService.stopTimer();
      if (TimeSInkService.listening()) {
        TimeSInkService.listening.set(false);
      }
    } //checks if time has ended then stops timer with func

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
      },1000)
  }
  static stopTimer(){
    this.listening.set(false);
    clearInterval(this.currentInterval)
  }

  constructor() {

  }


}
