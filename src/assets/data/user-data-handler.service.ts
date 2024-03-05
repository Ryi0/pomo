import {Injectable, signal} from '@angular/core';
import {UserData} from "./user/user-data";
import data from './finalDATA.json'
import {User} from "./user/user";

@Injectable({
  providedIn: 'root'
})
export class UserDataHandlerService {
  /*[TODO:{For the love of everything that is good, remove this hocus pocus shit. The entire functionality of the
      code should not rely on a single console.log statement}]*/
  static localUserCount = signal(0);
  public static localLoggedUsers: Array<User> = new Array<User>();
  private static readonly _data: UserData[] = data;
  private static UserArray: User[] = [];
  private AllUsersData: UserData[] = [];

  private static _Selection: User;

  static get Selection(): User {

    return this._Selection;
  }

  static set Selection(value: User) {
    if (this.Selection) {
      UserDataHandlerService.localLoggedUsers.push(this.Selection)
    }
    this._Selection = value;
    UserDataHandlerService.removeUserFromLocal(value)
  }

  public static createUser(id: number, name: string): User {
    return new User(id, name)
  }

  //public static LocalUsersDataMap = signal()
  public static getAllDataAsMap() {
    for (let i = 2; i < 50; i++) {
      this.UserArray.push(this.createUser(i, `User#${i}`))
    }
    // const numberArray:any = [];
    //
    // this.UserArray.map(value => value.dataMap()).map(value => Array.from(value.values())).forEach(value => numberArray.push(value));
    // return numberArray
    return this.UserArray.map(value => value.dataMap()).map(value => Array.from(value.values()));
  }

  public static getLocalDataAsMap() {
    console.log(this.localLoggedUsers.map(value => value.dataMap()).map(value => Array.from(value.values())))
    return this.localLoggedUsers.map(value => value.dataMap()).map(value => Array.from(value.values()))
  }

  public static removeUserFromLocal(user: User) {
    function getLocalIndex(_id: number) {
      console.log(UserDataHandlerService.localLoggedUsers.findIndex(user => user.getUserId() === Number(_id)))
      return UserDataHandlerService.localLoggedUsers.findIndex(user => user.getUserId() === Number(_id))
    }

    const index = getLocalIndex(user.getUserId());
    console.log(index)
    if (index >= 0) {
      this.localUserCount.update(value => value - 1)
      this.localLoggedUsers.splice(index, 1)
    }
    //  UserDataHandlerService.localLoggedUsers.splice(this._data.findIndex()
  }

  getDataFromUserId(userId: number) {
    const _tmpId = this.getIndex(userId);
    if (_tmpId >= 0) {
      return UserDataHandlerService._data[_tmpId];
    } else throw new Error();
  }

  getDataFromUserIdUnsafe(userId: number) {

  }

  logUserData(userId: number) {
    const userData = this.getDataFromUserId(userId);
    console.log(userData)
  }

  public addUserToLocal(user: User) {
    if (UserDataHandlerService.Selection != undefined) {
      if (user.getUserId() === UserDataHandlerService.Selection.getUserId()) {
        console.log(`user to be : ${user.getUserId()} selected user : ${UserDataHandlerService.Selection.getUserId()}`)
        return;
      }
    }
    if (UserDataHandlerService.localLoggedUsers.find(value => value.userStats._userId == user.userStats._userId) == undefined) {
      UserDataHandlerService.localUserCount.update(value => value + 1)
      UserDataHandlerService.localLoggedUsers.push(user)
    } else UserDataHandlerService.removeUserFromLocal(user)
    // console.log(this.getIndex(user.userStats._userId));
  }

  private getIndex(_id: number) {
    // console.log(_id)
    // console.log(this._data.findIndex(user=>user._userId=== Number(_id)))
    // console.log(UserDataHandlerService._data.findIndex(user=>user._userId===Number(_id)))
    return UserDataHandlerService._data.findIndex(user => user._userId === Number(_id));
  }
}
