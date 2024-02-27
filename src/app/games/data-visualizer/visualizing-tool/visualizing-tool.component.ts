import {Component, computed, effect, input, OnInit, signal, viewChild} from '@angular/core';
import {ScatterComponent} from "./scatter/scatter.component";
import {NgxEchartsDirective} from "ngx-echarts";
import {User} from "../../../../assets/data/user/user";
import {NgIf} from "@angular/common";
import {RadarChartComponent} from "./radar-chart/radar-chart.component";

@Component({
  selector: 'app-visualizing-tool',
  standalone: true,
  imports: [
    ScatterComponent,
    NgxEchartsDirective,
    NgIf,
    RadarChartComponent
  ],
  templateUrl: './visualizing-tool.component.html',
  styleUrl: './visualizing-tool.component.scss'
})
export class VisualizingToolComponent implements OnInit{
  usingChildData = input(false);
  inputUser = input.required<User>();
  chartOptions:any;
  chartOptionsSig = signal({});
  UserDataMap = computed(() =>this.inputUser().dataMap());
  UserDataKVArray = computed( ()=>this.inputUser().getKVPairs());
  DataCategories = computed(() => {
    return Array.from(this.UserDataMap().keys());
  })
  SeriesData = computed(() => {
    return Array.from(this.UserDataMap().values());
  })

  constructor() {
    effect(() => {
      console.log("ASDASD")
      this.chartUpdater(this.inputUser())
    });
  }
  UseChildOptions (){

  };
  ngOnInit(): void {


    const userDataAsMap: Map<any, any> = this.inputUser().dataMap();
    const userDataAsKvArray: [string, any][] = this.inputUser().getKVPairs();


    // Configure chart options
    // this.chartOptionsSig.set(  {
    //   tooltip: {
    //     trigger: 'axis', // Show tooltip when hovering over data points
    //     axisPointer: {
    //       type: 'shadow' // Show tooltip shadow
    //     }
    //   },
    //
    //   xAxis: {
    //     type: 'value',
    //
    //   },
    //   yAxis: {
    //     type: 'category',
    //     data: this.DataCategories()
    //   },
    //   series: [{
    //     data: this.SeriesData(),
    //     type: 'bar'
    //   }],
    //
    //
    // })
  }
  /* {TODO :
       1- remove the ratio values from the chart, place them elsewhere,
       2- Remove user ID from the chart.\//
       3- Add comparator to compare current logged in user to other users in the database.
       }  */
  private chartUpdater(user:User){
    if (this.usingChildData()){

    }
    console.log("NEW USER : "+user)
    console.log(user)
    console.log(this.DataCategories())
    console.log(this.SeriesData())
    const userDataAsMap: Map<any, any> = this.inputUser().dataMap();
    this.chartOptions = {
      tooltip: {
        trigger: 'axis', // Show tooltip when hovering over data points
        axisPointer: {
          type: 'shadow' // Show tooltip shadow
        }
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: this.DataCategories()
      },
      series: [{
        data: this.SeriesData(),
        type: 'bar'
      }]
    };
  }
}
