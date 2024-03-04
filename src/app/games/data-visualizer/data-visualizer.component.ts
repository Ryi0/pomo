import {Component, computed, OnInit, signal} from '@angular/core';
import {ButtonComponent} from "../../components/items/button/button.component";
import {TimeSInkService} from "../../time-sink.service";
import {VisualizingToolComponent} from "./visualizing-tool/visualizing-tool.component";
import {UserDataHandlerService} from "../../../assets/data/user-data-handler.service";
import {FormsModule} from "@angular/forms";
import {User} from "../../../assets/data/user/user";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-data-visualizer',
  standalone: true,
  imports: [
    ButtonComponent,
    VisualizingToolComponent,
    FormsModule,
    NgIf
  ],
  template: `
    <h1>{{ TimeSInkService.FormattedString()}}</h1>
    <h1>{{CustomMessage()}}</h1>

    <ng-container *ngIf="usingCurrentUser()">
<!--    <h3>Welcome {{UserDataHandlerService.Selection.name}}</h3>-->
    </ng-container>
    <div class="contBg">


        <div class="container">
          <div class="inputContainer">

          <input type="text" [(ngModel)]="selectedId">
          </div>
          <div class="buttonsContainerDV">
          <app-button type="funcBtn" tmpLbl="Change&nbsp;Mode"  (click)="UseChildOptions()" [isDisabled]="false"></app-button>
          <app-button type="funcBtn" (click)="clickHandler()" tmpLbl="Visualize" [isDisabled]="false"></app-button>
          <app-button type="funcBtn" (click)="addToSelection()" tmpLbl="Select+" [isDisabled]="false"></app-button>
          <app-button type="funcBtn" (click)="useCurrentUser()" tmpLbl="Use Current User" [isDisabled]="false"></app-button>
        </div>
        <div class="toolContainer">
          <app-visualizing-tool [inputUser]="userAsSig()" [usingChildData]="usingChildOptions()">
          </app-visualizing-tool>
        </div>
<!--          <app-button type="funcBtn" tmpLbl="Compare to Selection" [isDisabled]="false"></app-button>-->
      </div>

    </div>

    <h1>Visualizer</h1>
  `,
  styles: `
    .inputContainer{
      input{
        width: 80%;
        text-align: center;
        padding-right: 5rem;
      }
      width: 100%;


    }
    .buttonsContainerDV {
      width: 100%;
      display: flex;
      flex-wrap: wrap-reverse;
      gap: 1.5rem;
      justify-content: center;
    }

    .toolContainer {
     /* background-color: #5b5b5b;*/
      margin-left: 5%;
      width: 70%;
    }

    .container {
      display: grid;
      grid-row-gap: 2rem;
      background: unset;
      /*mix-blend-mode: lighten;*/
      /*background-color: black;*/
      width: fit-content;
      font-size: .8rem;
      overflow: hidden;

    }
  `
})


export class DataVisualizerComponent {
  CustomMessage =computed(() => {
    if (this.usingCurrentUser()){
      return "Welcome "+ UserDataHandlerService.Selection.name
    }
    if (!this.usingCurrentUser()){
      return "Log in to compare your stats "
    }
    else return "";
  });
  usingCurrentUser = signal(false);
  useCurrentUser(){
    if (UserDataHandlerService.Selection!=undefined) {
      this.usingCurrentUser.update(value => !value);
    //  this.CustomMessage.set("Welcome "+UserDataHandlerService.Selection.name);
      this.clickHandler();

    }
   // else this.CustomMessage.set("There is no selected user.")
  }

  selectedId:number = 1;
  usingChildOptions = signal(false);
  UseChildOptions (){
    this.usingChildOptions.update(value => !value);
  };
  uDataService = new UserDataHandlerService();
  testUser = this.usingCurrentUser()?UserDataHandlerService.Selection: new User(this.selectedId, "Bob");
  userAsSig = signal(this.testUser);

  addToSelection(){
    this.uDataService.addUserToLocal(this.testUser = new User(this.selectedId , "OtherUser"));
    console.log(UserDataHandlerService.localLoggedUsers)
  }
  clickHandler(){
    this.testUser = new User(this.selectedId , "Bob");
    if (this.usingCurrentUser()){
      this.userAsSig.set(UserDataHandlerService.Selection)

    }
    else this.userAsSig.set(this.testUser);
    // console.log(this.testUser.dataMap())
    // console.log(this.testUser.getKVPairs())
   // this.uDataService.logUserData(5);
  }
 // uDataService = UserDataHandlerService;
  protected readonly TimeSInkService = TimeSInkService;
  protected readonly UserDataHandlerService = UserDataHandlerService;
}
