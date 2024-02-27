import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "../items/button/button.component";
import {UserDataHandlerService} from "../../../assets/data/user-data-handler.service";
import {User} from "../../../assets/data/user/user";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-user-select',
  standalone: true,
  imports: [
    FormsModule,
    ButtonComponent,
    NgForOf,
    NgIf
  ],
  template: `
    <!--    <div  class="statsContainer">-->
    <!--      <ng-container *ngFor="let kvPair of  userAsObj.getKVPairs()">-->
    <!--        <div class="gridKey">{{kvPair[1]}}</div>-->
    <!--      </ng-container>-->
    <!--    </div>-->
    <ng-container *ngIf="UserDataHandlerService.Selection">
      <h1>Welcome {{ UserDataHandlerService.Selection.name }}</h1>
    </ng-container>
    <label for="userss">Select User:</label>
    <select [(ngModel)]="UserDataHandlerService.Selection" name="userss" id="userss">
      <option  *ngFor="let user of  UserDataHandlerService.localLoggedUsers"
              [ngValue]="user">{{ user.toString() }}

      </option>
    </select>
    <div class="modeSelectorCont">
      <div class="mainCont">

        <h2>Log to user :</h2>
        <div>
          <p>&nbsp;Id&nbsp;:&nbsp;&nbsp;<input type="text" maxlength="2" [(ngModel)]="selectionId"></p>
          <p>&nbsp;Name&nbsp;:&nbsp;<input type="text" [(ngModel)]="inputName"></p>
        </div>
      </div>

      <div class="statsContainer">
        <ng-container *ngIf="UserDataHandlerService.Selection!=undefined">
          <ng-container><h2>User Stats : </h2>
                <ng-container *ngFor="let kvPair of UserDataHandlerService.Selection.getKVPairs()">
              <div class="gridRow">
                <div class="gridKey">{{ kvPair[0] }}</div>
                <div class="gridValue">{{ kvPair[1] }}</div>
              </div>
                </ng-container>
          </ng-container>
        </ng-container>

      </div>
    </div>
    <app-button type="funcBtn" tmpLbl="Connect" [isDisabled]="false" (click)="clickHandler()"></app-button>


  `,
  styleUrl: './user-select.component.scss'
})
export class UserSelectComponent {

  userAsObj!: User;
  selectedUser: User|undefined;
  getSelectedStats(user:User|undefined){
    if (user!=undefined) {
      console.log(user)
      return user.userStats;
    }
    else return false
  }
  indexOfOfOption = -1
  selectionId = -1;
  inputName : string = "";
  private uDataService  = new UserDataHandlerService;
  // localLoggedUsers:Array<User> = new Array<User>();
  clickHandler(){
    console.log(this.indexOfOfOption);
    console.log(this.selectionId);
    console.log(typeof this.selectedUser)
    const u = new User(this.selectionId, this.inputName);
    //this.localLoggedUsers.push(u);
    //console.log(u);
    this.uDataService.addUserToLocal(u);
    console.log(UserDataHandlerService.localLoggedUsers)
  }

displayStats(){

}

  protected readonly UserDataHandlerService = UserDataHandlerService;
  protected readonly User = User;
}
