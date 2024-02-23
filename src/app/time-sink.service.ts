import {computed, effect, Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeSInkService {
  static curTime = signal(0);
  static getCurrentTime(){
    return this.curTime();
  }
  static setCurrentTime(time:number){

    this.curTime.set(time)
  }
  static currentInterval:any;
  static setInterval(interval:any){
    if (this.currentInterval){
      return
    }
    this.currentInterval=interval;
  }
  static  getInterval(){
    return this.currentInterval;
  }

  static ended=computed(()=>TimeSInkService.curTime()<=0)
  
  static clearIntervalFunction(){
    clearInterval(this.currentInterval)
  }
  constructor() { }
}
