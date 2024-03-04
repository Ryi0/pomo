import {Component, computed, effect, input, Input, InputSignal, OnInit, Signal, signal} from '@angular/core';
import {User} from "../../../../../assets/data/user/user";
import {NgxEchartsDirective} from "ngx-echarts";
import {graphic} from "echarts";
import {UserDataHandlerService} from "../../../../../assets/data/user-data-handler.service";

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
  public initOptions:any;
  public options: any;
  usingLocalData = false;
  UserDataSet: number[][] = UserDataHandlerService.getAllDataAsMap();
  DataMap: InputSignal<Map<any, any>> = input.required()
  DataCategories = computed(() => {
    return Array.from(this.DataMap().keys());
  })
  SeriesData = computed(() => {
//    console.log(this.DataMap().values())
    return Array.from(this.DataMap().values());
  })
   UserDataMap = () => {
    let tmp:any = [];
   // console.log(this.otherUsersData.map(value => value.dataMap()));
    // this.otherUsersData.forEach(value => {
    //   tmp.push(value.dataMap().values())
    //   console.log(tmp)
    // })

    return this.otherUsersData.map(value => value.dataMap());
  };
   series = () => {
   //  console.log(Array.from(this.UserDataMap().map(value => Array.from(value.values()))))
   //  console.log(this.otherUsersData)
   //  console.log(this.UserDataMap())
   // return this.UserDataMap().map(value => Array.from(value.values()));
  }
  ngOnInit() {
    this.initiator()
     /*{TODO
        1- figure out an algorithm to calculate maximum values on a case
        by case basis using a ratio between started cycles and started sessions
        }*/
  }
  otherUsersData:User[];
  constructor() {
    console.log(this.UserDataSet)
   this.otherUsersData= [];

    effect(() => {

      console.log("RADAR EFFECT TRIGGERED, \n VALUES : ")
      //console.log(this.DataMap());
     // console.log(this.SeriesData());
      this.chartUpdater()
    });

  }
  LocalData = UserDataHandlerService.getLocalDataAsMap();
  protected chartUpdater() {
    if (!this.usingLocalData){
      this.LocalData=UserDataHandlerService.getLocalDataAsMap();
    }
    // let otherUsersData:User[];
    // UserDataHandlerService.localLoggedUsers.forEach(value => this.otherUsersData.push(value))
    //UserDataHandlerService.localLoggedUsers.forEach(value => this.otherUsersData.find(value1 => value1.getUserId()===value.getUserId())===undefined?this.otherUsersData.push(value):null)
   // console.log(this.SeriesData())
  // console.log(this.series())
    const lineStyle = {
      width: 1,
      opacity: 0.25,
      join:'bevel'
    }
    const mainLineStyle = {
      color:'#79FF8D',
      join:'bevel',
      cap:'square',
    }
    this.options = {
      // dataset:{
      //   source:this.series()
      // },
     // backgroundColor: '#171a1c',
      color:['#171a1c','#eeeeee','#171a1c','#eeeeee','#171a1c','#eeeeee'],
      title: {
        text: `User Data}`
      },
      animation: true,
      animationEasing:'circularInOut',
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

        data: ['User', 'OtherUsers','Selection']
      },
      radar: {


        indicator: [
          {name: 'Started Cycles', max: 100},
          {name: 'Completed Cycles', max: 100},
          {name: 'Sessions Completed', max: 300},
          {name: 'Sessions Started', max: 300},
          {name: 'Average Session Duration', max: 25},
          {name: 'Cycles Completed/Started Ratio', max: 1},
          {name: 'Sessions Completed/Started Ratio', max: 1}
        ],
        splitNumber:5,
        radius: 150,
        splitArea:{
            areaStyle: {
              color:['rgba(31,31,31,0.4)', 'rgba(87,98,94,0.26)']
            },
        },
        splitLine:{
          lineStyle:{
            color:'#000000'
          }
        },
        axisLine:{
          lineStyle:{
            color:'#000000'
          }
        },
        axisName: {
          color: '#fff',
          backgroundColor: '#171a1c',
          borderRadius: 3,
          padding: [3, 5]
        },


      },
      series: [
        {
        // name: 'User Stats',
        type: 'radar',
        backgroundColor: '#171a1c',
        // selectedMode:false,
          // areaStyle: {normal: {}},
        data: [
          {
            backgroundColor: '#171a1c',
            value: this.SeriesData(),
            name: 'User',
            symbol: 'none',
            areaStyle:{
              backgroundColor: '#171a1c',
              color: new graphic.RadialGradient(0.5, 0.5, 1, [
                {

                  color: 'rgba(0,0,0,0)',
                  offset: 0
                },

                {
                  color: 'rgba(121,255,141,0.32)',
                  offset: 1
                }
              ])
            },
            lineStyle:mainLineStyle,


          },
        ],
          z:10000,

        },
        {
          name: 'OtherUsers',
          type: 'radar',
          data: this.UserDataSet,
          symbol: 'none',
          lineStyle:lineStyle,
          areaStyle:{
            color: 'rgba(134,255,245,0.01)',
          }
        },
        {
          name: 'Selection',
          type: 'radar',
          data: this.LocalData,
          symbol: 'none',
          lineStyle:lineStyle,
          areaStyle:{
            color: 'rgba(255,154,71,0.09)',
          }
        }

      ],

    } ;
  }
  protected initiator(){
    const lineStyle = {
      width: 1,
      opacity: 0.25,
      join:'bevel'
    }
    const mainLineStyle = {
      color:'#79FF8D',
      join:'bevel',
      cap:'square',
    }
    this.initOptions = {
      // dataset:{
      //   source:this.series()
      // },
      // backgroundColor: '#171a1c',
      color:['#171a1c','#eeeeee','#171a1c','#eeeeee','#171a1c','#eeeeee'],
      title: {
        text: `User Data}`
      },
      animation: true,
      animationEasing:'circularInOut',
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

        data: ['User', 'OtherUsers','Selection']
      },
      radar: {


        indicator: [
          {name: 'Started Cycles', max: 100},
          {name: 'Completed Cycles', max: 100},
          {name: 'Sessions Completed', max: 300},
          {name: 'Sessions Started', max: 300},
          {name: 'Average Session Duration', max: 25},
          {name: 'Cycles Completed/Started Ratio', max: 1},
          {name: 'Sessions Completed/Started Ratio', max: 1}
        ],
        splitNumber:5,
        radius: 150,
        splitArea:{
          areaStyle: {
            color:['rgba(31,31,31,0.4)', 'rgba(87,98,94,0.26)']
          },
        },
        splitLine:{
          lineStyle:{
            color:'#000000'
          }
        },
        axisLine:{
          lineStyle:{
            color:'#000000'
          }
        },
        axisName: {
          color: '#fff',
          backgroundColor: '#171a1c',
          borderRadius: 3,
          padding: [3, 5]
        },


      },
      series: [
        {
          // name: 'User Stats',
          type: 'radar',
          backgroundColor: '#171a1c',
          // selectedMode:false,
          // areaStyle: {normal: {}},
          data: [
            {
              backgroundColor: '#171a1c',
              value: this.SeriesData(),
              name: 'User',
              symbol: 'none',
              areaStyle:{
                backgroundColor: '#171a1c',
                color: new graphic.RadialGradient(0.5, 0.5, 1, [
                  {

                    color: 'rgba(0,0,0,0)',
                    offset: 0
                  },

                  {
                    color: 'rgba(121,255,141,0.32)',
                    offset: 1
                  }
                ])
              },
              lineStyle:mainLineStyle,


            },
          ],
          z:10000,

        },
        {
          name: 'OtherUsers',
          type: 'radar',
          data: this.UserDataSet,
          symbol: 'none',
          lineStyle:lineStyle,
          areaStyle:{
            color: 'rgba(134,255,245,0.01)',
          }
        },
        {
          name: 'Selection',
          type: 'radar',
          data: this.LocalData,
          symbol: 'none',
          lineStyle:lineStyle,
          areaStyle:{
            color: 'rgba(255,154,71,0.09)',
          }
        }

      ],

    } ;
  }

}
