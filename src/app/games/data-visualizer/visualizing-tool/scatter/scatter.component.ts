import {Component} from '@angular/core';
import data from '../../../../../assets/data/finalDATA.json'
//import * as d3 from 'd3';


//   _userId: 1
// ,
//   startedCycles: 75.0
// ,
//   completedCycles: 32
// ,
//   sessionsCompleted: 107.0
// ,
//   sessionsStarted: 210
// ,
//   averageSessionDuration: 14
// ,
//   cyclesCompletedStartedRatio: 0.43
// ,
//   sessionsCompletedStartedRatio: 0.51


@Component({
  selector: 'app-scatter',
  standalone: true,
  imports: [],
  templateUrl: './scatter.component.html',
  styleUrl: './scatter.component.scss'
})
export class ScatterComponent {
  private readonly data = data;
  private _db = [];
  private rawData = [
    {
      "_userId": 1,
      "startedCycles": 75.0,
      "completedCycles": 32,
      "sessionsCompleted": 107.0,
      "sessionsStarted": 210,
      "averageSessionDuration": 14,
      "cyclesCompletedStartedRatio": 0.43,
      "sessionsCompletedStartedRatio": 0.51
    },
    {
      "_userId": 2,
      "startedCycles": 34.0,
      "completedCycles": 29,
      "sessionsCompleted": 115.0,
      "sessionsStarted": 168,
      "averageSessionDuration": 21,
      "cyclesCompletedStartedRatio": 0.85,
      "sessionsCompletedStartedRatio": 0.68
    },
    {
      "_userId": 3,
      "startedCycles": 89.0,
      "completedCycles": 88,
      "sessionsCompleted": 114.0,
      "sessionsStarted": 151,
      "averageSessionDuration": 19,
      "cyclesCompletedStartedRatio": 0.99,
      "sessionsCompletedStartedRatio": 0.75
    },
    {
      "_userId": 4,
      "startedCycles": 40.0,
      "completedCycles": 20,
      "sessionsCompleted": 96.0,
      "sessionsStarted": 177,
      "averageSessionDuration": 6,
      "cyclesCompletedStartedRatio": 0.5,
      "sessionsCompletedStartedRatio": 0.54
    },
    {
      "_userId": 5,
      "startedCycles": 82.0,
      "completedCycles": 29,
      "sessionsCompleted": 112.0,
      "sessionsStarted": 112,
      "averageSessionDuration": 20,
      "cyclesCompletedStartedRatio": 0.35,
      "sessionsCompletedStartedRatio": 1.0
    },
    {
      "_userId": 6,
      "startedCycles": 40.0,
      "completedCycles": 13,
      "sessionsCompleted": 66.0,
      "sessionsStarted": 169,
      "averageSessionDuration": 7,
      "cyclesCompletedStartedRatio": 0.33,
      "sessionsCompletedStartedRatio": 0.39
    },
    {
      "_userId": 7,
      "startedCycles": 77.0,
      "completedCycles": 51,
      "sessionsCompleted": 113.0,
      "sessionsStarted": 248,
      "averageSessionDuration": 21,
      "cyclesCompletedStartedRatio": 0.66,
      "sessionsCompletedStartedRatio": 0.46
    },
    {
      "_userId": 8,
      "startedCycles": 68.0,
      "completedCycles": 24,
      "sessionsCompleted": 98.0,
      "sessionsStarted": 149,
      "averageSessionDuration": 11,
      "cyclesCompletedStartedRatio": 0.35,
      "sessionsCompletedStartedRatio": 0.66
    },
    {
      "_userId": 9,
      "startedCycles": 77.0,
      "completedCycles": 62,
      "sessionsCompleted": 223.0,
      "sessionsStarted": 434,
      "averageSessionDuration": 12,
      "cyclesCompletedStartedRatio": 0.81,
      "sessionsCompletedStartedRatio": 0.51
    },
    {
      "_userId": 10,
      "startedCycles": 43.0,
      "completedCycles": 29,
      "sessionsCompleted": 115.0,
      "sessionsStarted": 241,
      "averageSessionDuration": 4,
      "cyclesCompletedStartedRatio": 0.67,
      "sessionsCompletedStartedRatio": 0.48
    },
    {
      "_userId": 11,
      "startedCycles": 33.0,
      "completedCycles": 12,
      "sessionsCompleted": 72.0,
      "sessionsStarted": 140,
      "averageSessionDuration": 24,
      "cyclesCompletedStartedRatio": 0.36,
      "sessionsCompletedStartedRatio": 0.51
    },
    {
      "_userId": 12,
      "startedCycles": 47.0,
      "completedCycles": 1,
      "sessionsCompleted": 65.0,
      "sessionsStarted": 152,
      "averageSessionDuration": 2,
      "cyclesCompletedStartedRatio": 0.02,
      "sessionsCompletedStartedRatio": 0.43
    },
    {
      "_userId": 13,
      "startedCycles": 10.0,
      "completedCycles": 4,
      "sessionsCompleted": 75.0,
      "sessionsStarted": 103,
      "averageSessionDuration": 13,
      "cyclesCompletedStartedRatio": 0.4,
      "sessionsCompletedStartedRatio": 0.73
    },
    {
      "_userId": 14,
      "startedCycles": 93.0,
      "completedCycles": 33,
      "sessionsCompleted": 131.0,
      "sessionsStarted": 168,
      "averageSessionDuration": 5,
      "cyclesCompletedStartedRatio": 0.35,
      "sessionsCompletedStartedRatio": 0.78
    },
    {
      "_userId": 15,
      "startedCycles": 73.0,
      "completedCycles": 37,
      "sessionsCompleted": 140.0,
      "sessionsStarted": 263,
      "averageSessionDuration": 2,
      "cyclesCompletedStartedRatio": 0.51,
      "sessionsCompletedStartedRatio": 0.53
    },
    {
      "_userId": 16,
      "startedCycles": 97.0,
      "completedCycles": 93,
      "sessionsCompleted": 325.0,
      "sessionsStarted": 367,
      "averageSessionDuration": 3,
      "cyclesCompletedStartedRatio": 0.96,
      "sessionsCompletedStartedRatio": 0.89
    },
    {
      "_userId": 17,
      "startedCycles": 40.0,
      "completedCycles": 18,
      "sessionsCompleted": 90.0,
      "sessionsStarted": 179,
      "averageSessionDuration": 9,
      "cyclesCompletedStartedRatio": 0.45,
      "sessionsCompletedStartedRatio": 0.5
    },
    {
      "_userId": 18,
      "startedCycles": 98.0,
      "completedCycles": 16,
      "sessionsCompleted": 81.0,
      "sessionsStarted": 140,
      "averageSessionDuration": 18,
      "cyclesCompletedStartedRatio": 0.16,
      "sessionsCompletedStartedRatio": 0.58
    },
    {
      "_userId": 19,
      "startedCycles": 89.0,
      "completedCycles": 85,
      "sessionsCompleted": 212.0,
      "sessionsStarted": 469,
      "averageSessionDuration": 4,
      "cyclesCompletedStartedRatio": 0.96,
      "sessionsCompletedStartedRatio": 0.45
    },
    {
      "_userId": 20,
      "startedCycles": 62.0,
      "completedCycles": 3,
      "sessionsCompleted": 87.0,
      "sessionsStarted": 125,
      "averageSessionDuration": 18,
      "cyclesCompletedStartedRatio": 0.05,
      "sessionsCompletedStartedRatio": 0.7
    },
    {
      "_userId": 21,
      "startedCycles": 59.0,
      "completedCycles": 4,
      "sessionsCompleted": 47.0,
      "sessionsStarted": 190,
      "averageSessionDuration": 14,
      "cyclesCompletedStartedRatio": 0.07,
      "sessionsCompletedStartedRatio": 0.25
    },
    {
      "_userId": 22,
      "startedCycles": 7.0,
      "completedCycles": 1,
      "sessionsCompleted": 80.0,
      "sessionsStarted": 90,
      "averageSessionDuration": 9,
      "cyclesCompletedStartedRatio": 0.14,
      "sessionsCompletedStartedRatio": 0.89
    },
    {
      "_userId": 23,
      "startedCycles": 67.0,
      "completedCycles": 27,
      "sessionsCompleted": 100.0,
      "sessionsStarted": 105,
      "averageSessionDuration": 1,
      "cyclesCompletedStartedRatio": 0.4,
      "sessionsCompletedStartedRatio": 0.95
    }]

  // ngOnInit(): void {
  //  // this.dataFunc();
  //   this.createSvg();
  //   this.drawBars(this.rawData);
  // }
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  logData() {
    console.log(this.rawData)
  }

  private dataFunc() {
    this.data.forEach(value => {
    })
  }

  // private createSvg() {
  //   this.svg = d3.select("figure#bar")
  //     .append("svg").attr("width", this.width + (this.margin * 2))
  //     .attr("height", this.height + (this.margin * 2)).append("g")
  //     .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  // }
//   private createSvg() {
//     this.svg = d3.select("figure#scatter")
//       .append("svg").attr("width", this.width + (this.margin * 2))
//       .attr("height", this.height + (this.margin * 2)).append("g")
//       .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
//   }
//
//   drawPlot(){
//    const x = d3.scaleLinear().domain()
//   }
//
//   private drawBars(data: any[]): void {
//     // Create the X-axis band scale
//     const x = d3.scaleBand()
//       .range([0, this.width])
//       .domain(data.map(d => d._userId))
//       .padding(5.2);
//
//     // Draw the X-axis on the DOM
//     this.svg.append("g")
//       .attr("transform", "translate(0," + this.height + ")")
//       .call(d3.axisBottom(x))
//       .selectAll("text")
//       .attr("transform", "translate(-10,0)rotate(-45)")
//       .style("text-anchor", "end");
//
//     // Create the Y-axis band scale
//     const y = d3.scaleLinear()
//       .domain([0, 1])
//       .range([this.height, 0]);
//
//     // Draw the Y-axis on the DOM
//     this.svg.append("g")
//       .call(d3.axisLeft(y));
//
//     // Create and fill the bars
//     this.svg.selectAll("bars")
//       .data(data)
//       .enter()
//       .append("rect")
//       .attr("x", (d: any) => x(d._userId))
//       .attr("y", (d: any) => y(d.cyclesCompletedStartedRatio))
//       .attr("width", 200)
//       .attr("height", (d: any) => this.height - y(d.cyclesCompletedStartedRatio))
//       .attr("fill", "#d04a35");
//   }
}
