import {UserData} from "./user-data";
import {UserDataHandlerService} from "../../assets/data/user-data-handler.service";

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


  public readonly name: string;

  constructor(userId: number, name: string) {
    this.userStats = this.dataService.getDataFromUserId(userId);
    this.name = name
  }

  public toString() {
    let message = "";
    message = "Name : "+this.name + " ID: " + this.userStats._userId;
    return message;
  }
  getKVPairs(){
    return Object.entries(this.userStats)
  }
}