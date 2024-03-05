import {
  Component,
  computed,
  effect,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { ScatterComponent } from './scatter/scatter.component';
import { NgxEchartsDirective } from 'ngx-echarts';
import { User } from '../../../../assets/data/user/user';
import { NgIf } from '@angular/common';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { UserDataHandlerService } from '../../../../assets/data/user-data-handler.service';

@Component({
  selector: 'app-visualizing-tool',
  standalone: true,
  imports: [ScatterComponent, NgxEchartsDirective, NgIf, RadarChartComponent],
  templateUrl: './visualizing-tool.component.html',
  styleUrl: './visualizing-tool.component.scss',
})
export class VisualizingToolComponent implements OnInit {
  usingChildData = input(false);
  inputUser = input.required<User>();
  chartOptions: any;
  chartOptionsSig = signal({});
  UsersDatasMap = computed(() => {
    const tmp = UserDataHandlerService.localLoggedUsers.map((value) =>
      value.dataMap(),
    );
    return UserDataHandlerService.localLoggedUsers;
  });
  UserDataMap = computed(() => this.inputUser().dataMap());
  UserDataKVArray = computed(() => this.inputUser().getKVPairs());
  DataCategories = computed(() => {
    return Array.from(this.UserDataMap().keys());
  });
  SeriesData = computed(() => {
    return Array.from(this.UserDataMap().values());
  });

  constructor() {
    effect(() => {
      console.log('ASDASD');
      this.chartUpdater(this.inputUser());
    });
  }

  UseChildOptions() {}

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

  private chartUpdater(user: User) {
    if (this.usingChildData()) {
    }
    console.log('NEW USER : ' + user);
    console.log(user);
    console.log(this.DataCategories());
    console.log(this.SeriesData());
    const userDataAsMap: Map<any, any> = this.inputUser().dataMap();
    this.chartOptions = {
      color: ['#79FF8D', '#171a1c', '#eeeeee'],
      tooltip: {
        backgroundColor: '#171a1c',
        borderWidth: 2,
        borderColor: '#79FF8D',
        textStyle: {
          color: '#eeeeee',
        },
        trigger: 'axis', // Show tooltip when hovering over data points
        axisPointer: {
          type: 'shadow', // Show tooltip shadow
        },
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: this.DataCategories(),
      },
      series: [
        {
          data: this.SeriesData(),
          type: 'bar',
        },
      ],
    };
  }
}
