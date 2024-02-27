import {Component, computed, effect, input, Input, InputSignal, OnInit, Signal, signal} from '@angular/core';
import {User} from "../../../../../assets/data/user/user";
import {NgxEchartsDirective} from "ngx-echarts";

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [
    NgxEchartsDirective
  ],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.scss'
})
export class RadarChartComponent implements OnInit{
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
  private chartUpdater(){
    this.options = {
      title: {
        text: 'Radar Chart'
      },
      tooltip: {},
      legend: {
        data: ['User']
      },
      radar: {
        shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: 'Started Cycles', max: 100},
          { name: 'Completed Cycles', max: 100},
          { name: 'Sessions Completed', max: 300},
          { name: 'Sessions Started', max: 300},
          { name: 'Average Session Duration', max: 25},
          { name: 'Cycles Completed/Started Ratio', max: 1},
          { name: 'Sessions Completed/Started Ratio', max: 1}
        ]
      },
      series: [{
        name: 'User Stats',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
          {
            value : this.SeriesData(),
            name : 'User'
          }
        ]
      }]
    };
  }
}
