import {Component, computed, effect, Input, Output, signal} from '@angular/core';
import {interval} from "rxjs";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ButtonComponent} from "../../items/button/button.component";

@Component({
  selector: 'app-time-box',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ButtonComponent
  ],
  template: `
    Time : <input type="text" [(ngModel)]="inputTime" [disabled]="locked">
    <p>
      {{ timeLeft() }}
    </p>
    <h1 *ngIf="timeEnded()"> Time's up!</h1>
    <div>
      <ul>
        <li> <app-button [isGrey]="started()" id="_starter" type="funcBtn"  (click)="startTimer()" tmpLbl="START"></app-button></li>
        <li>  <app-button [isGrey]="!started()" id="_stopper" type="funcBtn" (click)="stopTimer()" tmpLbl="STOP"></app-button></li>
      </ul>


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
  locked = false;
  interval:any;
  inputTime = 0;
  timeLeft = signal(0);
  timeEnded = computed(()=> this.timeLeft() <= 0);
  _thisActuallyMagicFrFr = effect(() => {
    console.log(this.timeLeft())
    console.log("LOL THIS IS NOT CALLED HOW DOES IT WORK???")
    /*
    Actually pretty simple. It runs once when the component is initialized. It then tracks any signal calls
    inside the brackets. Everytime that those signals change, the code is executed.
    */
  })

  //I like having conversations with my sleep deprived mind. I answer questions the following morning it makes me feel like i'm part of something
  started = signal(false);

  /**
   * Ooof, I have started() and timeLeft() AND timeEnded().
   * Bloat on par with bonzi buddy
   */
  startTimer() {
    if (this.started()){
      return
    }

    else this.started.set(true);
    clearInterval(this.interval)
    this.locked=true
    this.timeLeft.set(this.inputTime)
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
}
