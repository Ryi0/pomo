import {Component, OnInit, signal} from '@angular/core';
import {ButtonComponent} from "../../components/items/button/button.component";
import {TimeSInkService} from "../../time-sink.service";
import {VisualizingToolComponent} from "./visualizing-tool/visualizing-tool.component";
import {UserDataHandlerService} from "../../../assets/data/user-data-handler.service";
import {FormsModule} from "@angular/forms";
import {User} from "../../user/user";

@Component({
  selector: 'app-data-visualizer',
  standalone: true,
  imports: [
    ButtonComponent,
    VisualizingToolComponent,
    FormsModule
  ],
  template: `
    <h1>Visualizer</h1>
    <div class="contBg">
      <div class="buttonsContainerDV">
        <div class="container">
          <input type="text" [(ngModel)]="selectedId">
          <app-button type="funcBtn" tmpLbl="Input&nbsp;Data" [isDisabled]="false"></app-button>
          <app-button type="funcBtn" (click)="clickHandler()" tmpLbl="Visualize" [isDisabled]="false"></app-button>
        </div>
        <div class="toolContainer">
          <app-visualizing-tool [inputUser]="userAsSig()">
          </app-visualizing-tool>
        </div>
      </div>

    </div>
    <h1>{{ TimeSInkService.FormattedString() }}</h1>
  `,
  styles: `
    .buttonsContainerDV {
      width: 100%;
      display: flex;
    }

    .toolContainer {
     /*// background-color: #5b5b5b;*/
      margin-left: 5%;
      width: 70%;
    }

    .container {
      display: grid;
      grid-row-gap: 2rem;
      background: unset;
      /*mix-blend-mode: lighten;*/
      background-color: black;
      width: fit-content;
      font-size: .8rem;
      overflow: hidden;

    }
  `
})


export class DataVisualizerComponent {
  selectedId:number = 1;

  uDataService = new UserDataHandlerService();
  testUser = new User(this.selectedId, "Bob");
  userAsSig = signal(this.testUser);
  clickHandler(){
    this.testUser = new User(9, "Bob");
    this.userAsSig.set(this.testUser);
    console.log(this.testUser.dataMap())
    console.log(this.testUser.getKVPairs())
   // this.uDataService.logUserData(5);
  }
 // uDataService = UserDataHandlerService;
  protected readonly TimeSInkService = TimeSInkService;
}
