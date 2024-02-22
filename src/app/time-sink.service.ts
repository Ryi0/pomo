import {computed, effect, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSInkService {
  static curTime = 0;
  static getCurrentTime(){
    return this.curTime;
  }
  static setCurrentTime(time:number){
    this.curTime=time;
  }
  static currentInterval:any;
  static setInterval(interval:any){
    this.currentInterval=interval;
  }

  locked = false;
  interval:any;
  timeLeft = signal(0);
  timeEnded = computed(()=> this.timeLeft() <= 0);
  _thisActuallyMagicFrFr = effect(() => {
    console.log(this.timeLeft())
  })
  setTimeLeft(time:number){
    this.timeLeft.set(time);
  }


  started = signal(false);
  startTimer() {
    if (this.started()){
      return
    }
    else this.started.set(true);
    clearInterval(this.interval)
    this.locked=true
    this.interval = setInterval(() => {
      if (this.timeEnded()){
        this.stopTimer();
      }else this.timeLeft.update(value => value-1)
    },1000)
  }
  stopTimer(){
    if (this.started()){
      this.started.set(false)
    }
    else return
    this.locked=false
    clearInterval(this.interval)
  }

  constructor() { }
}
