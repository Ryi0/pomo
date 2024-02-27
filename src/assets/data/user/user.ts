import {UserData} from "./user-data";
import {UserDataHandlerService} from "../user-data-handler.service";

export class User {
  private accessor dataService = new UserDataHandlerService
  public readonly userStats: UserData = {
    _userId: 999,
    startedCycles: 0,
    completedCycles: 0,
    sessionsCompleted: 0,
    sessionsStarted: 0,
    averageSessionDuration: 0,
    cyclesCompletedStartedRatio: 0,
    sessionsCompletedStartedRatio: 0
  }

  getUserId(){
    return this.userStats._userId;
  }
  public readonly name: string;

  constructor(userId: number, name: string) {
    this.userStats = this.dataService.getDataFromUserId(userId);
    this.name = name
  }

  public getSessionRatio(){
    return this.userStats.sessionsCompletedStartedRatio;
  }
  public getCyclesRatio(){
    return this.userStats.cyclesCompletedStartedRatio;
  }
  public dataMap(): Map<any, any> {
    const map:Map<any, any> = new Map((this.getKVPairs().slice(1, 8)));
    return map;
  }
  public toString() {
    let message = "";
    message = "Name : "+this.name + " ID: " + this.userStats._userId;
    return message;
  }
  public getKVPairs(): [string, any][] {
    const kv = Object.entries(this.userStats);
    return kv
  }
  // public getValuesAsValuesArray(){
  //   const values = Object.values(this.userStats);
  //   return values;
  // }
}
