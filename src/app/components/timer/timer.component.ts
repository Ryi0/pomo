import {Component, computed, HostListener, input, OnInit, Output, signal} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {TimeSInkService} from "../../time-sink.service";



@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  template: `
    <div [style.margin-top.px]="0">
<header [ngClass]="{'sticky':isSticky, 'notSticky':!isSticky}" >
<!--  [ngStyle]="{'top.px':stickyTop}"-->
  <p>
    Minutes left :
  </p>
  <p>{{timeIN()}}</p>
    <p>
    Seconds left :
    </p>
  <p>{{timeIN()}}</p>
</header>
    </div>
  `,
  styles: `
    /*header{*/
    /*  !*width: 100%;*!*/
    /*  !*background-color: #333;*!*/
    /*  !*color: #fff;*!*/
    /*  !*padding: 10px 0;*!*/
    /*  position: static;*/
    /*  top:0px;*/
    /*  z-index: 1000;*/

    /*  transition: 5s;*/
    /*}*/

  `
})
export class TimerComponent implements OnInit{

  timeIN = input<number>(0);
  @Output() timeOUT = 0;
  protected readonly onscroll = onscroll;
  isSticky: boolean = false;
  scrollPosSig = signal(0);
  fixed = computed(()=>{

  })

  testFunc(){
    let ts:TimeSInkService;
  }
  stickyTop: number = 0;
  @HostListener('window:scroll', [])
  handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollPosSig.set(scrollPosition);
    this.isSticky = scrollPosition >= 400;
    this.stickyTop = document.querySelector('header')!.offsetTop;
  }
  ngOnInit() {
  //  this.stickyTop = document.querySelector('header')!.offsetTop;
  }

}
// @Component({
//   selector: 'app-timer',
//   standalone: true,
//   imports: [
//     NgClass
//   ],
//   template: `
//     <div  [ngClass]="isNavbarFixed?'fixed':'notfixed'">
//     <p>
//       timer works!
//     </p>
//     </div>
//   `,
//   styles: `
//     .fixed{
//       position: fixed;
//       z-index: 2;
//       width: 100%;
//     }
//     .notfixed{
//       position: static;
//       top: -60px;
//     }`
// })
// export class TimerComponent {
//
//   timeIN = input<number>();
//   @Output() timeOUT = 0;
//   protected readonly onscroll = onscroll;
//   isNavbarFixed: boolean = true;
// }
