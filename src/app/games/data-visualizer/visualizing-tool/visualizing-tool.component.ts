import {Component, input, OnInit} from '@angular/core';
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

  ngOnInit(): void {
    const userData = () => {
      return this.inputUser().getKVPairs();
    }
    // const data = this.inputUser().getValuesAsValuesArray();
    // const xAxisData = data.map(item => `User ${item}`);
    // const completedCyclesData = data.map(item => item);
    // Extract properties from the first user data object to get series names
    const seriesNames = Object.keys(userData()[0]);

    // Remove '_userId' from series names
    const seriesData = seriesNames.filter(name => name !== '_userId').map(name => ({
      name,
      data: userData().map(user => user[1])
    }));

    // Prepare x-axis labels
    const xAxisData = userData().map(user => `User ${user}`);

    // ECharts configuration
    this.chartOptions = {
      xAxis: {
        type: 'category',
        data: xAxisData
      },
      yAxis: {
        type: 'value'
      },
      legend: {
        data: seriesData.map(item => item.name)
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      series: seriesData.map(item => ({
        name: item.name,
        type: 'bar',
        data: item.data
      }))
    };
  }




}
