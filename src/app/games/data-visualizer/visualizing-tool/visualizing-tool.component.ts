import {Component, computed, effect, input, OnInit, signal} from '@angular/core';
import {ScatterComponent} from "./scatter/scatter.component";
import {NgxEchartsDirective} from "ngx-echarts";
import {User} from "../../../user/user";

@Component({
  selector: 'app-visualizing-tool',
  standalone: true,
  imports: [
    ScatterComponent,
    NgxEchartsDirective
  ],
  templateUrl: './visualizing-tool.component.html',
  styleUrl: './visualizing-tool.component.scss'
})
export class VisualizingToolComponent implements OnInit{
  inputUser = input.required<User>();
  chartOptions:any;
  chartOptionsSig = signal({});
  UserDataMap = computed(() =>this.inputUser().dataMap());
  UserDataKVArray = computed( ()=>this.inputUser().getKVPairs());
  XAxisData = computed(() => {
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
  ngOnInit(): void {


    const userDataAsMap: Map<any, any> = this.inputUser().dataMap();
    const userDataAsKvArray: [string, any][] = this.inputUser().getKVPairs();

    // Prepare data for visualization
    const xAxisData = Array.from(userDataAsMap.keys());
    const seriesData = Array.from(userDataAsMap.values());


    // Configure chart options
    this.chartOptionsSig.set(  {
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
        data: this.XAxisData()
      },
      series: [{
        data: this.SeriesData(),
        type: 'bar'
      }],


    })
  }
  private chartUpdater(user:User){

    console.log("NEW USER : "+user)
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
        data: this.XAxisData()
      },
      series: [{
        data: this.SeriesData(),
        type: 'bar'
      }],
      dataZoom: [{ // Enable data zooming for the x-axis
        type: 'slider', // Use a slider for data zooming
        xAxisIndex: [0], // Apply data zooming to the first x-axis
        start: 0, // Start data zooming from the beginning
        end: 100 // End data zooming at 100% of the data
      }]
    };


  }

}
