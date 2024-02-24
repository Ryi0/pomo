import {computed, effect, Injectable, OnInit, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSInkService {
  private static currentInterval:any;
  static timeInSeconds = signal(0);
  static curTime = signal(0);
  static minutesLeft = computed(()=>TimeSInkService.timeInSeconds()/60);
  public static timeEnded = computed(() => {
    if (TimeSInkService.listening()){
      console.log("Time ended signal is listening")
      return TimeSInkService.timeInSeconds()<=0;
    }
    else return false;
  }
    )
  private static listening = signal(false);

  static startTimer(time:number){

    if (TimeSInkService.timeEnded()) {

      if (TimeSInkService.listening()) {
        TimeSInkService.listening.set(false);
      }
      TimeSInkService.stopTimer();
    }

    let _tmpTime = time;
      this.timeInSeconds.set(time);
      this.currentInterval = setInterval(() => {
      this.timeInSeconds.update(value => value-1);
      _tmpTime--;
      if (_tmpTime===5){
        this.listening.set(true);
      }
        console.log(`Time ended : ${this.timeEnded()}`)
        console.log(`Time listening : ${this.listening()}`)
        if (this.timeEnded()){
          this.listening.set(false);
          this.stopTimer();
        }
      },1000)
  }
  static stopTimer(){
    clearInterval(this.currentInterval)
  }

  constructor() {

  }


}
