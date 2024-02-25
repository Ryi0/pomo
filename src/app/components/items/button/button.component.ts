import {Component, computed, input, Input, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routes} from "../../../app.routes";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgClass
  ],
  template: `
    <ng-template [ngIf]="isRouter()">
      <div (click)="clickHandler()" class="btn" [routerLink]="'./'+btnRoute()"
           routerLinkActive="btnActive" ariaCurrentWhenActive="page">
        <h2>{{ tmpLbl() }}</h2>
      </div>
    </ng-template>
    <ng-template [ngIf]="!isRouter()">
      <div (click)="clickHandler()"  class="btn funkyButt" [ngClass]="{'greyed': isDisabled()}">
        <h2>{{ tmpLbl() }}</h2>
      </div>
    </ng-template>
  `,
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() route:string|undefined;
  logger(){
   // console.log(this.inFunc(this.inFuncParam())+"\n "+this.inFuncParam())
    console.log(this.tmpLbl())
    console.log(this.btnRoute())
  }
  isDisabled = input<boolean>(true)
  isRouter = computed(()=>{
    return this.type()==="routingBtn";
  })
  inFuncParam = input<any>();
  @Input()inFunc = (param:any)=>{} ;
  type = input.required<"routingBtn"|"funcBtn">();

  tmpLbl = input<string>("");


  btnRoute = computed(()=>{
    if (!this.isRouter()){
      return ;
    }

    if (this.route){ //if route is inputed, use route for routing. Else, use label as route
      return this.route.toLowerCase();
    }
    else
    return this.tmpLbl().toLowerCase()
  }); //defaults the route to the text

  clickHandler(){
    this.logger();
    this.inFunc(this.inFuncParam());
  }
}
