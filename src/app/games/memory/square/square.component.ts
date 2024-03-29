import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";


@Component({
  selector: 'app-square',
  template: `
    <div class="item" [ngClass]="{'selectedItem':isSelected&&!isHidden, 'notSelected':!isSelected&&!isHidden,
                                   'play1Turn':altHover&&!isHidden, play2Turn:!altHover&&!isHidden,
                                   'isHidden':isHidden, 'paused':paused}  ">
      <div *ngIf="!isSelected; then hide else unHide "></div>
      <ng-template #hide>
        <ng-container>X</ng-container>
      </ng-template>
      <ng-template #unHide>
        <ng-container>{{ cardContent }}</ng-container>
      </ng-template>
      <div *ngIf="paused">
        <ng-container></ng-container>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  styleUrl: './square.component.scss'
})

export class SquareComponent {
  @Input() cardContent: any;
  @Input() squareUniqueId: number | undefined;
  @Input() isSelected: boolean = false;
  @Input() isHidden: boolean = false;
  @Input() altHover: boolean = false;
  @Input() paused: boolean = false;
  @Input() isBeingShuffled: boolean = false
}
