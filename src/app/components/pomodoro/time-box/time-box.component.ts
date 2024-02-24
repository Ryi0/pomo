import {Component, computed, effect, input, Input, Output, signal} from '@angular/core';
import {interval} from "rxjs";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ButtonComponent} from "../../items/button/button.component";
import {TimeSInkService} from "../../../time-sink.service";
import {ThisReceiver} from "@angular/compiler";

@Component({
  selector: 'app-time-box',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ButtonComponent
  ],
  template: `

      <p>Time : <input type="text" maxlength="2" [(ngModel)]="inputTime" [disabled]="locked"></p>

    <p>
      {{TimeSInkService.FormattedString()}}

    </p>


    <div>
      <ul>
        <li> <app-button [isGrey]="!TimeSInkService.timeEnded()" id="_starter" type="funcBtn"  (click)="TimeSInkService.timerSetup(inputTime)" tmpLbl="START"></app-button></li>
        <li>  <app-button [isGrey]="TimeSInkService.timeEnded()" id="_stopper" type="funcBtn" (click)="TimeSInkService.stopTimer()" tmpLbl="STOP"></app-button></li>
      </ul>
      <h1 *ngIf="TimeSInkService.timeEnded()"> Time's up!</h1>

    </div>
  `,
  styles: `
    @import "../../../../variables.scss";
    li{
      scale: 90%;
      margin: 0 0.1rem;
      width: fit-content;
      overflow: hidden;
      flex: 1;
      padding: 0rem 1rem;
  }
     ul {
      width: fit-content;

      scale: 75%;
      border-radius: .5rem;
      padding: 0rem;
      top: 0;
      display: flex;
      justify-content: center;
      position: relative;
      margin: .4rem;
      list-style-type: none;
  }`
})
export class TimeBoxComponent {
 // mode = input<"minutes"|"seconds">("minutes");
  modeChecker = computed(()=>{

  })
  inputTime = 0;
  locked = false;
  // interval:any = TimeSInkService.getInterval();

  // timeLeft = TimeSInkService.curTime;
  // timeEnded = computed(()=> this.timeLeft() <= 0);
  // _thisActuallyMagicFrFr = effect(() => {
  //   if (this.timeLeft()%59===0){
  //     this.interCounter--;
  //     // TimeSInkService.minutesIn=this.interCounter;
  //     console.log("Inter Counter : "+this.interCounter)
  //   }
  //   this.started = !this.timeEnded();
  //  // TimeSInkService.setCurrentTime(this.timeLeft());
  //   // console.log("LOL THIS IS NOT CALLED HOW DOES IT WORK???")
  //   /*
  //   Actually pretty simple. It runs once when the component is initialized. It then tracks any signal calls
  //   inside the brackets. Everytime that those signals change, the code is executed.
  //   */
  // })
  // interCounter = 60;
  //
  // //I like having conversations with my sleep deprived mind. I answer questions the following morning it makes me feel like i'm part of something
  // //started = signal(false);
  // started = false;
  // /**
  //  * Ooof, I have started() and timeLeft() AND timeEnded().
  //  * Bloat on par with bonzi buddy
  //  */
  //
  //
  // startTimer() {
  //   if (this.started||!TimeSInkService.ended()){
  //     return
  //   }
  //
  //   else this.started = true;
  //   clearInterval(this.interval)
  //   this.locked=true
  //   if (this.mode()==="seconds"){
  //     this.interCounter=1;
  //     this.timeLeft.set(this.inputTime)
  //     console.log(this.mode())
  //   }
  //   else {
  //     TimeSInkService.minutesLeft.set(this.inputTime);
  //     this.interCounter = this.inputTime;
  //     this.timeLeft.set(61);
  //   }
  //
  //   //this.ts.setTimeLeft(this.timeLeft());
  //   this.interval = setInterval(() => {
  //     if (this.interCounter===0){
  //       this.timeLeft.set(0);
  //     }
  //     if (this.timeEnded()){
  //       this.stopTimer();
  //     }else {
  //       if (this.timeLeft()===1){
  //         TimeSInkService.minutesLeft.update(value => value-1);
  //         this.timeLeft.set(61);
  //       }
  //       console.log("Inter counter : "+this.interCounter)
  //       this.timeLeft.update(value => value - 1)
  //       TimeSInkService.setCurrentTime(this.timeLeft())
  //       console.log(TimeSInkService.getCurrentTime())
  //       //this.ts.setTimeLeft(this.timeLeft());
  //     }
  //   },1000)
  //   TimeSInkService.setInterval(this.interval);
  // }
  // stopTimer(){
  //   this.interCounter=10;
  //   this.locked=false;
  //   clearInterval(this.interval);
  //   clearInterval(TimeSInkService.currentInterval);
  //   TimeSInkService.setCurrentTime(0);
  //   TimeSInkService.clearIntervalFunction();
  //   this.started = false;
  //     TimeSInkService.setInterval(undefined);
  //
  // }
  //
  // protected readonly TimeSInkService = TimeSInkService;
  protected readonly TimeSInkService = TimeSInkService;
}
