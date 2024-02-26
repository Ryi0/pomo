import {Component, OnInit} from '@angular/core';
import data from '../../data/finalDATA.json'
import * as d3 from 'd3';

class userData {
  constructor(obj: Object) {

  }

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

}

@Component({
  selector: 'app-scatter',
  standalone: true,
  imports: [],
  templateUrl: './scatter.component.html',
  styleUrl: './scatter.component.scss'
})
export class ScatterComponent implements OnInit {
  private readonly data: userData[] = data;
  private _db: userData[] = [];
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
    },
    {
      "_userId": 24,
      "startedCycles": 78.0,
      "completedCycles": 50,
      "sessionsCompleted": 107.0,
      "sessionsStarted": 203,
      "averageSessionDuration": 23,
      "cyclesCompletedStartedRatio": 0.64,
      "sessionsCompletedStartedRatio": 0.53
    },
    {
      "_userId": 25,
      "startedCycles": 73.0,
      "completedCycles": 5,
      "sessionsCompleted": 79.0,
      "sessionsStarted": 243,
      "averageSessionDuration": 6,
      "cyclesCompletedStartedRatio": 0.07,
      "sessionsCompletedStartedRatio": 0.33
    },
    {
      "_userId": 26,
      "startedCycles": 37.0,
      "completedCycles": 17,
      "sessionsCompleted": 70.0,
      "sessionsStarted": 172,
      "averageSessionDuration": 18,
      "cyclesCompletedStartedRatio": 0.46,
      "sessionsCompletedStartedRatio": 0.41
    },
    {
      "_userId": 27,
      "startedCycles": 44.0,
      "completedCycles": 43,
      "sessionsCompleted": 110.0,
      "sessionsStarted": 218,
      "averageSessionDuration": 3,
      "cyclesCompletedStartedRatio": 0.98,
      "sessionsCompletedStartedRatio": 0.5
    },
    {
      "_userId": 28,
      "startedCycles": 52.0,
      "completedCycles": 49,
      "sessionsCompleted": 157.0,
      "sessionsStarted": 205,
      "averageSessionDuration": 15,
      "cyclesCompletedStartedRatio": 0.94,
      "sessionsCompletedStartedRatio": 0.77
    },
    {
      "_userId": 29,
      "startedCycles": 61.0,
      "completedCycles": 40,
      "sessionsCompleted": 154.0,
      "sessionsStarted": 310,
      "averageSessionDuration": 9,
      "cyclesCompletedStartedRatio": 0.66,
      "sessionsCompletedStartedRatio": 0.5
    },
    {
      "_userId": 30,
      "startedCycles": 18.0,
      "completedCycles": 3,
      "sessionsCompleted": 60.0,
      "sessionsStarted": 60,
      "averageSessionDuration": 3,
      "cyclesCompletedStartedRatio": 0.17,
      "sessionsCompletedStartedRatio": 1.0
    },
    {
      "_userId": 31,
      "startedCycles": 68.0,
      "completedCycles": 52,
      "sessionsCompleted": 125.0,
      "sessionsStarted": 211,
      "averageSessionDuration": 11,
      "cyclesCompletedStartedRatio": 0.76,
      "sessionsCompletedStartedRatio": 0.59
    },
    {
      "_userId": 32,
      "startedCycles": 70.0,
      "completedCycles": 43,
      "sessionsCompleted": 149.0,
      "sessionsStarted": 213,
      "averageSessionDuration": 8,
      "cyclesCompletedStartedRatio": 0.61,
      "sessionsCompletedStartedRatio": 0.7
    },
    {
      "_userId": 33,
      "startedCycles": 47.0,
      "completedCycles": 45,
      "sessionsCompleted": 141.0,
      "sessionsStarted": 246,
      "averageSessionDuration": 24,
      "cyclesCompletedStartedRatio": 0.96,
      "sessionsCompletedStartedRatio": 0.57
    },
    {
      "_userId": 34,
      "startedCycles": 25.0,
      "completedCycles": 14,
      "sessionsCompleted": 74.0,
      "sessionsStarted": 80,
      "averageSessionDuration": 4,
      "cyclesCompletedStartedRatio": 0.56,
      "sessionsCompletedStartedRatio": 0.93
    },
    {
      "_userId": 35,
      "startedCycles": 34.0,
      "completedCycles": 9,
      "sessionsCompleted": 76.0,
      "sessionsStarted": 82,
      "averageSessionDuration": 10,
      "cyclesCompletedStartedRatio": 0.26,
      "sessionsCompletedStartedRatio": 0.93
    },
    {
      "_userId": 36,
      "startedCycles": 32.0,
      "completedCycles": 1,
      "sessionsCompleted": 75.0,
      "sessionsStarted": 106,
      "averageSessionDuration": 16,
      "cyclesCompletedStartedRatio": 0.03,
      "sessionsCompletedStartedRatio": 0.71
    },
    {
      "_userId": 37,
      "startedCycles": 32.0,
      "completedCycles": 8,
      "sessionsCompleted": 46.0,
      "sessionsStarted": 119,
      "averageSessionDuration": 22,
      "cyclesCompletedStartedRatio": 0.25,
      "sessionsCompletedStartedRatio": 0.39
    },
    {
      "_userId": 38,
      "startedCycles": 36.0,
      "completedCycles": 31,
      "sessionsCompleted": 108.0,
      "sessionsStarted": 185,
      "averageSessionDuration": 3,
      "cyclesCompletedStartedRatio": 0.86,
      "sessionsCompletedStartedRatio": 0.58
    },
    {
      "_userId": 39,
      "startedCycles": 57.0,
      "completedCycles": 48,
      "sessionsCompleted": 152.0,
      "sessionsStarted": 217,
      "averageSessionDuration": 17,
      "cyclesCompletedStartedRatio": 0.84,
      "sessionsCompletedStartedRatio": 0.7
    },
    {
      "_userId": 40,
      "startedCycles": 96.0,
      "completedCycles": 53,
      "sessionsCompleted": 168.0,
      "sessionsStarted": 365,
      "averageSessionDuration": 18,
      "cyclesCompletedStartedRatio": 0.55,
      "sessionsCompletedStartedRatio": 0.46
    },
    {
      "_userId": 41,
      "startedCycles": 59.0,
      "completedCycles": 59,
      "sessionsCompleted": 170.0,
      "sessionsStarted": 249,
      "averageSessionDuration": 15,
      "cyclesCompletedStartedRatio": 1.0,
      "sessionsCompletedStartedRatio": 0.68
    },
    {
      "_userId": 42,
      "startedCycles": 92.0,
      "completedCycles": 74,
      "sessionsCompleted": 239.0,
      "sessionsStarted": 345,
      "averageSessionDuration": 7,
      "cyclesCompletedStartedRatio": 0.8,
      "sessionsCompletedStartedRatio": 0.69
    },
    {
      "_userId": 43,
      "startedCycles": 39.0,
      "completedCycles": 31,
      "sessionsCompleted": 106.0,
      "sessionsStarted": 179,
      "averageSessionDuration": 1,
      "cyclesCompletedStartedRatio": 0.79,
      "sessionsCompletedStartedRatio": 0.59
    },
    {
      "_userId": 44,
      "startedCycles": 87.0,
      "completedCycles": 69,
      "sessionsCompleted": 225.0,
      "sessionsStarted": 395,
      "averageSessionDuration": 19,
      "cyclesCompletedStartedRatio": 0.79,
      "sessionsCompletedStartedRatio": 0.57
    },
    {
      "_userId": 45,
      "startedCycles": 4.0,
      "completedCycles": 1,
      "sessionsCompleted": 25.0,
      "sessionsStarted": 30,
      "averageSessionDuration": 7,
      "cyclesCompletedStartedRatio": 0.25,
      "sessionsCompletedStartedRatio": 0.83
    },
    {
      "_userId": 46,
      "startedCycles": 16.0,
      "completedCycles": 10,
      "sessionsCompleted": 57.0,
      "sessionsStarted": 83,
      "averageSessionDuration": 1,
      "cyclesCompletedStartedRatio": 0.63,
      "sessionsCompletedStartedRatio": 0.69
    },
    {
      "_userId": 47,
      "startedCycles": 56.0,
      "completedCycles": 53,
      "sessionsCompleted": 182.0,
      "sessionsStarted": 263,
      "averageSessionDuration": 2,
      "cyclesCompletedStartedRatio": 0.95,
      "sessionsCompletedStartedRatio": 0.69
    },
    {
      "_userId": 48,
      "startedCycles": 74.0,
      "completedCycles": 38,
      "sessionsCompleted": 145.0,
      "sessionsStarted": 187,
      "averageSessionDuration": 24,
      "cyclesCompletedStartedRatio": 0.51,
      "sessionsCompletedStartedRatio": 0.78
    },
    {
      "_userId": 49,
      "startedCycles": 68.0,
      "completedCycles": 47,
      "sessionsCompleted": 167.0,
      "sessionsStarted": 301,
      "averageSessionDuration": 12,
      "cyclesCompletedStartedRatio": 0.69,
      "sessionsCompletedStartedRatio": 0.55
    },
    {
      "_userId": 50,
      "startedCycles": 45.0,
      "completedCycles": 0,
      "sessionsCompleted": 95.0,
      "sessionsStarted": 128,
      "averageSessionDuration": 4,
      "cyclesCompletedStartedRatio": 0.0,
      "sessionsCompletedStartedRatio": 0.74
    },
    {
      "_userId": 51,
      "startedCycles": 24.0,
      "completedCycles": 12,
      "sessionsCompleted": 83.0,
      "sessionsStarted": 145,
      "averageSessionDuration": 15,
      "cyclesCompletedStartedRatio": 0.5,
      "sessionsCompletedStartedRatio": 0.57
    },
    {
      "_userId": 52,
      "startedCycles": 55.0,
      "completedCycles": 9,
      "sessionsCompleted": 43.0,
      "sessionsStarted": 110,
      "averageSessionDuration": 13,
      "cyclesCompletedStartedRatio": 0.16,
      "sessionsCompletedStartedRatio": 0.39
    },
    {
      "_userId": 53,
      "startedCycles": 40.0,
      "completedCycles": 40,
      "sessionsCompleted": 153.0,
      "sessionsStarted": 209,
      "averageSessionDuration": 7,
      "cyclesCompletedStartedRatio": 1.0,
      "sessionsCompletedStartedRatio": 0.73
    },
    {
      "_userId": 54,
      "startedCycles": 46.0,
      "completedCycles": 16,
      "sessionsCompleted": 88.0,
      "sessionsStarted": 199,
      "averageSessionDuration": 2,
      "cyclesCompletedStartedRatio": 0.35,
      "sessionsCompletedStartedRatio": 0.44
    },
    {
      "_userId": 55,
      "startedCycles": 1.0,
      "completedCycles": 1,
      "sessionsCompleted": 59.0,
      "sessionsStarted": 59,
      "averageSessionDuration": 7,
      "cyclesCompletedStartedRatio": 1.0,
      "sessionsCompletedStartedRatio": 1.0
    },
    {
      "_userId": 56,
      "startedCycles": 68.0,
      "completedCycles": 1,
      "sessionsCompleted": 100.0,
      "sessionsStarted": 280,
      "averageSessionDuration": 2,
      "cyclesCompletedStartedRatio": 0.01,
      "sessionsCompletedStartedRatio": 0.36
    },
    {
      "_userId": 57,
      "startedCycles": 89.0,
      "completedCycles": 60,
      "sessionsCompleted": 203.0,
      "sessionsStarted": 248,
      "averageSessionDuration": 13,
      "cyclesCompletedStartedRatio": 0.67,
      "sessionsCompletedStartedRatio": 0.82
    },
    {
      "_userId": 58,
      "startedCycles": 75.0,
      "completedCycles": 42,
      "sessionsCompleted": 150.0,
      "sessionsStarted": 328,
      "averageSessionDuration": 21,
      "cyclesCompletedStartedRatio": 0.56,
      "sessionsCompletedStartedRatio": 0.46
    },
    {
      "_userId": 59,
      "startedCycles": 45.0,
      "completedCycles": 31,
      "sessionsCompleted": 123.0,
      "sessionsStarted": 255,
      "averageSessionDuration": 8,
      "cyclesCompletedStartedRatio": 0.69,
      "sessionsCompletedStartedRatio": 0.48
    },
    {
      "_userId": 60,
      "startedCycles": 97.0,
      "completedCycles": 13,
      "sessionsCompleted": 75.0,
      "sessionsStarted": 181,
      "averageSessionDuration": 14,
      "cyclesCompletedStartedRatio": 0.13,
      "sessionsCompletedStartedRatio": 0.41
    },
    {
      "_userId": 61,
      "startedCycles": 11.0,
      "completedCycles": 2,
      "sessionsCompleted": 57.0,
      "sessionsStarted": 57,
      "averageSessionDuration": 6,
      "cyclesCompletedStartedRatio": 0.18,
      "sessionsCompletedStartedRatio": 1.0
    },
    {
      "_userId": 62,
      "startedCycles": 31.0,
      "completedCycles": 14,
      "sessionsCompleted": 99.0,
      "sessionsStarted": 126,
      "averageSessionDuration": 5,
      "cyclesCompletedStartedRatio": 0.45,
      "sessionsCompletedStartedRatio": 0.79
    },
    {
      "_userId": 63,
      "startedCycles": 35.0,
      "completedCycles": 20,
      "sessionsCompleted": 93.0,
      "sessionsStarted": 196,
      "averageSessionDuration": 24,
      "cyclesCompletedStartedRatio": 0.57,
      "sessionsCompletedStartedRatio": 0.47
    },
    {
      "_userId": 64,
      "startedCycles": 36.0,
      "completedCycles": 21,
      "sessionsCompleted": 86.0,
      "sessionsStarted": 133,
      "averageSessionDuration": 17,
      "cyclesCompletedStartedRatio": 0.58,
      "sessionsCompletedStartedRatio": 0.65
    },
    {
      "_userId": 65,
      "startedCycles": 36.0,
      "completedCycles": 19,
      "sessionsCompleted": 81.0,
      "sessionsStarted": 100,
      "averageSessionDuration": 7,
      "cyclesCompletedStartedRatio": 0.53,
      "sessionsCompletedStartedRatio": 0.81
    },
    {
      "_userId": 66,
      "startedCycles": 2.0,
      "completedCycles": 0,
      "sessionsCompleted": 99.0,
      "sessionsStarted": 99,
      "averageSessionDuration": 21,
      "cyclesCompletedStartedRatio": 0.0,
      "sessionsCompletedStartedRatio": 1.0
    },
    {
      "_userId": 67,
      "startedCycles": 38.0,
      "completedCycles": 7,
      "sessionsCompleted": 87.0,
      "sessionsStarted": 162,
      "averageSessionDuration": 7,
      "cyclesCompletedStartedRatio": 0.18,
      "sessionsCompletedStartedRatio": 0.54
    },
    {
      "_userId": 68,
      "startedCycles": 15.0,
      "completedCycles": 11,
      "sessionsCompleted": 77.0,
      "sessionsStarted": 118,
      "averageSessionDuration": 21,
      "cyclesCompletedStartedRatio": 0.73,
      "sessionsCompletedStartedRatio": 0.65
    },
    {
      "_userId": 69,
      "startedCycles": 100.0,
      "completedCycles": 45,
      "sessionsCompleted": 151.0,
      "sessionsStarted": 168,
      "averageSessionDuration": 1,
      "cyclesCompletedStartedRatio": 0.45,
      "sessionsCompletedStartedRatio": 0.9
    },
    {
      "_userId": 70,
      "startedCycles": 26.0,
      "completedCycles": 13,
      "sessionsCompleted": 75.0,
      "sessionsStarted": 98,
      "averageSessionDuration": 7,
      "cyclesCompletedStartedRatio": 0.5,
      "sessionsCompletedStartedRatio": 0.77
    },
    {
      "_userId": 71,
      "startedCycles": 18.0,
      "completedCycles": 0,
      "sessionsCompleted": 36.0,
      "sessionsStarted": 37,
      "averageSessionDuration": 15,
      "cyclesCompletedStartedRatio": 0.0,
      "sessionsCompletedStartedRatio": 0.97
    },
    {
      "_userId": 72,
      "startedCycles": 95.0,
      "completedCycles": 68,
      "sessionsCompleted": 220.0,
      "sessionsStarted": 350,
      "averageSessionDuration": 24,
      "cyclesCompletedStartedRatio": 0.72,
      "sessionsCompletedStartedRatio": 0.63
    },
    {
      "_userId": 73,
      "startedCycles": 40.0,
      "completedCycles": 3,
      "sessionsCompleted": 12.0,
      "sessionsStarted": 67,
      "averageSessionDuration": 19,
      "cyclesCompletedStartedRatio": 0.08,
      "sessionsCompletedStartedRatio": 0.18
    },
    {
      "_userId": 74,
      "startedCycles": 53.0,
      "completedCycles": 10,
      "sessionsCompleted": 70.0,
      "sessionsStarted": 136,
      "averageSessionDuration": 6,
      "cyclesCompletedStartedRatio": 0.19,
      "sessionsCompletedStartedRatio": 0.51
    },
    {
      "_userId": 75,
      "startedCycles": 98.0,
      "completedCycles": 81,
      "sessionsCompleted": 123.0,
      "sessionsStarted": 207,
      "averageSessionDuration": 15,
      "cyclesCompletedStartedRatio": 0.83,
      "sessionsCompletedStartedRatio": 0.59
    },
    {
      "_userId": 76,
      "startedCycles": 44.0,
      "completedCycles": 19,
      "sessionsCompleted": 85.0,
      "sessionsStarted": 208,
      "averageSessionDuration": 7,
      "cyclesCompletedStartedRatio": 0.43,
      "sessionsCompletedStartedRatio": 0.41
    },
    {
      "_userId": 77,
      "startedCycles": 80.0,
      "completedCycles": 72,
      "sessionsCompleted": 223.0,
      "sessionsStarted": 408,
      "averageSessionDuration": 3,
      "cyclesCompletedStartedRatio": 0.9,
      "sessionsCompletedStartedRatio": 0.55
    },
    {
      "_userId": 78,
      "startedCycles": 43.0,
      "completedCycles": 33,
      "sessionsCompleted": 118.0,
      "sessionsStarted": 216,
      "averageSessionDuration": 18,
      "cyclesCompletedStartedRatio": 0.77,
      "sessionsCompletedStartedRatio": 0.55
    },
    {
      "_userId": 79,
      "startedCycles": 94.0,
      "completedCycles": 88,
      "sessionsCompleted": 213.0,
      "sessionsStarted": 367,
      "averageSessionDuration": 11,
      "cyclesCompletedStartedRatio": 0.94,
      "sessionsCompletedStartedRatio": 0.58
    },
    {
      "_userId": 80,
      "startedCycles": 99.0,
      "completedCycles": 28,
      "sessionsCompleted": 108.0,
      "sessionsStarted": 392,
      "averageSessionDuration": 1,
      "cyclesCompletedStartedRatio": 0.28,
      "sessionsCompletedStartedRatio": 0.28
    },
    {
      "_userId": 81,
      "startedCycles": 66.0,
      "completedCycles": 62,
      "sessionsCompleted": 182.0,
      "sessionsStarted": 238,
      "averageSessionDuration": 5,
      "cyclesCompletedStartedRatio": 0.94,
      "sessionsCompletedStartedRatio": 0.76
    },
    {
      "_userId": 82,
      "startedCycles": 92.0,
      "completedCycles": 89,
      "sessionsCompleted": 234.0,
      "sessionsStarted": 302,
      "averageSessionDuration": 2,
      "cyclesCompletedStartedRatio": 0.97,
      "sessionsCompletedStartedRatio": 0.77
    },
    {
      "_userId": 83,
      "startedCycles": 54.0,
      "completedCycles": 25,
      "sessionsCompleted": 100.0,
      "sessionsStarted": 202,
      "averageSessionDuration": 9,
      "cyclesCompletedStartedRatio": 0.46,
      "sessionsCompletedStartedRatio": 0.5
    },
    {
      "_userId": 84,
      "startedCycles": 94.0,
      "completedCycles": 91,
      "sessionsCompleted": 296.0,
      "sessionsStarted": 437,
      "averageSessionDuration": 8,
      "cyclesCompletedStartedRatio": 0.97,
      "sessionsCompletedStartedRatio": 0.68
    },
    {
      "_userId": 85,
      "startedCycles": 74.0,
      "completedCycles": 13,
      "sessionsCompleted": 91.0,
      "sessionsStarted": 172,
      "averageSessionDuration": 22,
      "cyclesCompletedStartedRatio": 0.18,
      "sessionsCompletedStartedRatio": 0.53
    },
    {
      "_userId": 86,
      "startedCycles": 87.0,
      "completedCycles": 26,
      "sessionsCompleted": 103.0,
      "sessionsStarted": 352,
      "averageSessionDuration": 21,
      "cyclesCompletedStartedRatio": 0.3,
      "sessionsCompletedStartedRatio": 0.29
    },
    {
      "_userId": 87,
      "startedCycles": 11.0,
      "completedCycles": 2,
      "sessionsCompleted": 84.0,
      "sessionsStarted": 104,
      "averageSessionDuration": 5,
      "cyclesCompletedStartedRatio": 0.18,
      "sessionsCompletedStartedRatio": 0.81
    },
    {
      "_userId": 88,
      "startedCycles": 69.0,
      "completedCycles": 5,
      "sessionsCompleted": 88.0,
      "sessionsStarted": 282,
      "averageSessionDuration": 13,
      "cyclesCompletedStartedRatio": 0.07,
      "sessionsCompletedStartedRatio": 0.31
    },
    {
      "_userId": 89,
      "startedCycles": 20.0,
      "completedCycles": 1,
      "sessionsCompleted": 95.0,
      "sessionsStarted": 96,
      "averageSessionDuration": 15,
      "cyclesCompletedStartedRatio": 0.05,
      "sessionsCompletedStartedRatio": 0.99
    },
    {
      "_userId": 90,
      "startedCycles": 66.0,
      "completedCycles": 35,
      "sessionsCompleted": 140.0,
      "sessionsStarted": 165,
      "averageSessionDuration": 18,
      "cyclesCompletedStartedRatio": 0.53,
      "sessionsCompletedStartedRatio": 0.85
    },
    {
      "_userId": 91,
      "startedCycles": 100.0,
      "completedCycles": 65,
      "sessionsCompleted": 232.0,
      "sessionsStarted": 293,
      "averageSessionDuration": 17,
      "cyclesCompletedStartedRatio": 0.65,
      "sessionsCompletedStartedRatio": 0.79
    },
    {
      "_userId": 92,
      "startedCycles": 5.0,
      "completedCycles": 5,
      "sessionsCompleted": 77.0,
      "sessionsStarted": 79,
      "averageSessionDuration": 9,
      "cyclesCompletedStartedRatio": 1.0,
      "sessionsCompletedStartedRatio": 0.97
    },
    {
      "_userId": 93,
      "startedCycles": 26.0,
      "completedCycles": 1,
      "sessionsCompleted": 75.0,
      "sessionsStarted": 125,
      "averageSessionDuration": 13,
      "cyclesCompletedStartedRatio": 0.04,
      "sessionsCompletedStartedRatio": 0.6
    },
    {
      "_userId": 94,
      "startedCycles": 25.0,
      "completedCycles": 18,
      "sessionsCompleted": 77.0,
      "sessionsStarted": 139,
      "averageSessionDuration": 12,
      "cyclesCompletedStartedRatio": 0.72,
      "sessionsCompletedStartedRatio": 0.55
    },
    {
      "_userId": 95,
      "startedCycles": 81.0,
      "completedCycles": 38,
      "sessionsCompleted": 142.0,
      "sessionsStarted": 175,
      "averageSessionDuration": 11,
      "cyclesCompletedStartedRatio": 0.47,
      "sessionsCompletedStartedRatio": 0.81
    },
    {
      "_userId": 96,
      "startedCycles": 29.0,
      "completedCycles": 20,
      "sessionsCompleted": 84.0,
      "sessionsStarted": 143,
      "averageSessionDuration": 12,
      "cyclesCompletedStartedRatio": 0.69,
      "sessionsCompletedStartedRatio": 0.59
    },
    {
      "_userId": 97,
      "startedCycles": 38.0,
      "completedCycles": 9,
      "sessionsCompleted": 60.0,
      "sessionsStarted": 134,
      "averageSessionDuration": 14,
      "cyclesCompletedStartedRatio": 0.24,
      "sessionsCompletedStartedRatio": 0.45
    },
    {
      "_userId": 98,
      "startedCycles": 35.0,
      "completedCycles": 7,
      "sessionsCompleted": 80.0,
      "sessionsStarted": 150,
      "averageSessionDuration": 12,
      "cyclesCompletedStartedRatio": 0.2,
      "sessionsCompletedStartedRatio": 0.53
    },
    {
      "_userId": 99,
      "startedCycles": 71.0,
      "completedCycles": 0,
      "sessionsCompleted": 55.0,
      "sessionsStarted": 111,
      "averageSessionDuration": 17,
      "cyclesCompletedStartedRatio": 0.0,
      "sessionsCompletedStartedRatio": 0.5
    },
    {
      "_userId": 100,
      "startedCycles": 54.0,
      "completedCycles": 16,
      "sessionsCompleted": 67.0,
      "sessionsStarted": 201,
      "averageSessionDuration": 7,
      "cyclesCompletedStartedRatio": 0.3,
      "sessionsCompletedStartedRatio": 0.33
    }]

  ngOnInit(): void {
   // this.dataFunc();
    this.createSvg();
    this.drawBars(this.rawData);
  }

  logData() {
    console.log(this.rawData)
  }

  get db(): userData[] {
    return this._db;
  }

  private dataFunc() {
    this.data.forEach(value => {
      this._db.push((<userData>value));
    })
  }


  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  // private createSvg() {
  //   this.svg = d3.select("figure#bar")
  //     .append("svg").attr("width", this.width + (this.margin * 2))
  //     .attr("height", this.height + (this.margin * 2)).append("g")
  //     .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  // }
  private createSvg() {
    this.svg = d3.select("figure#scatter")
      .append("svg").attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2)).append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  drawPlot(){
   const x = d3.scaleLinear().domain()
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d._userId))
      .padding(5.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 1])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d._userId))
      .attr("y", (d: any) => y(d.cyclesCompletedStartedRatio))
      .attr("width", 200)
      .attr("height", (d: any) => this.height - y(d.cyclesCompletedStartedRatio))
      .attr("fill", "#d04a35");
  }
}
