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
    Time Left : &nbsp;
    </p>
  <p>{{TimeSInkService.FormattedString()}}</p>
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

 // timeIN = input<number>(0);
  @Output() timeOUT = 0;
  protected readonly onscroll = onscroll;
  isSticky: boolean = false;
  scrollPosSig = signal(0);
  stickyTop: number = 0;
  fixed = computed(()=>{

  })

  @HostListener('window:scroll', [])
  handleScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollPosSig.set(scrollPosition);
    this.isSticky = scrollPosition >= 400;
    this.stickyTop = document.querySelector('header')!.offsetTop;
  }
  ngOnInit() {

  }

  protected readonly TimeSInkService = TimeSInkService;
}

