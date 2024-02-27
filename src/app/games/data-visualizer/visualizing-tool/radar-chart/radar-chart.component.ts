import {Component, computed, effect, input, Input, InputSignal, OnInit, Signal, signal} from '@angular/core';
import {User} from "../../../../../assets/data/user/user";
import {NgxEchartsDirective} from "ngx-echarts";
import {graphic} from "echarts";

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [
    NgxEchartsDirective
  ],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.scss'
})
export class RadarChartComponent implements OnInit {
  public options: any;
  DataMap: InputSignal<Map<any, any>> = input.required()
  DataCategories = computed(() => {
    return Array.from(this.DataMap().keys());
  })
  SeriesData = computed(() => {
    return Array.from(this.DataMap().values());
  })

  ngOnInit() {
    /*{TODO
        1- figure out an algorithm to calculate maximum values on a case
        by case basis using a ratio between started cycles and started sessions
        }*/
  }

  constructor() {
    effect(() => {
      console.log("RADAR EFFECT TRIGGERED, \n VALUES : ")
      console.log(this.DataMap());
      console.log(this.SeriesData());
      this.chartUpdater()
    });
  }

  private chartUpdater() {

    this.options = {
      color:['#79FF8D','#171a1c','#eeeeee'],
      title: {
        text: `User Data}`
      },
      animation: true,
      animationEasing:'backInOut',
      animationDelayUpdate:100,
      animationEasingUpdate:'circularInOut',
      animationDurationUpdate :1000,

      tooltip: {
        trigger:'item',
        backgroundColor: '#171a1c',
        borderWidth:2,
        borderColor: '#79FF8D',
      textStyle:{
          color: '#eeeeee'
      }
      },
      legend: {
        data: ['User']
      },
      radar: {
       // symbol:'arrow',
        //shape: 'polygon',
        // name: {
        //   textStyle: {
        //     color: '#eeeeee',
        //     backgroundColor: '#171a1c',
        //     borderRadius: 3,
        //     padding: [3, 5]
        //   }
        // },

        indicator: [
          {name: 'Started Cycles', max: 100},
          {name: 'Completed Cycles', max: 100},
          {name: 'Sessions Completed', max: 300},
          {name: 'Sessions Started', max: 300},
          {name: 'Average Session Duration', max: 25},
          {name: 'Cycles Completed/Started Ratio', max: 1},
          {name: 'Sessions Completed/Started Ratio', max: 1}
        ],

        radius: 150,
        axisName: {
          color: '#fff',
          backgroundColor: '#171a1c',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      series: [
        {
        name: 'User Stats',
        type: 'radar',

          backgroundColor: '#171a1c',
        // areaStyle: {normal: {}},
        data: [

          {
            backgroundColor: '#171a1c',
            value: this.SeriesData(),
            name: 'User',
            areaStyle:{
              color: new graphic.RadialGradient(0.1, 0.6, 1, [
                {
                  color: 'rgba(38,38,38,0.1)',
                  offset: 0
                },
                {
                  color: 'rgb(121,255,141)',
                  offset: 1
                }
              ])
            }
          }
        ],
          animation: true,
          animationEasing:'backInOut',
          animationDelayUpdate:100,
          animationEasingUpdate:'circularInOut',
          animationDurationUpdate :1000,
          symbol:'arrow',
        }
      ],
      // animation: true
    };
  }
}
