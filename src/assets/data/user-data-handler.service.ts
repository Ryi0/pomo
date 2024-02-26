import { Injectable } from '@angular/core';
import {UserData} from "../../app/user/user-data";
import data from './finalDATA.json'
import {User} from "../../app/user/user";

@Injectable({
  providedIn: 'root'
})
export class UserDataHandlerService {
  private AllUsersData:UserData[] = [];
  private static readonly _data:UserData[] = data;
  public static createUser(id:number, name:string):User{
    return new User(id, name)
  }
  private getIndex(_id:number){
    // console.log(_id)
    // console.log(this._data.findIndex(user=>user._userId=== Number(_id)))
    return UserDataHandlerService._data.findIndex(user=>user._userId===Number(_id));
  }
  getDataFromUserId(userId:number){
    const _tmpId = this.getIndex(userId);
    console.log(_tmpId);
    if (_tmpId>=0){
      return UserDataHandlerService._data[_tmpId];
    }
    else throw new Error();
  }
  getDataFromUserIdUnsafe(userId:number){

  }
  logUserData(userId:number){
    const userData = this.getDataFromUserId(userId);
    console.log(userData)
  }
  public static localLoggedUsers:Array<User> = new Array<User>();
  public addUserToLocal(user:User){
      if (UserDataHandlerService.localLoggedUsers.find(value => value.userStats._userId==user.userStats._userId)==undefined){
        UserDataHandlerService.localLoggedUsers.push(user)
      }
      else UserDataHandlerService.localLoggedUsers.splice(this.getIndex(user.userStats._userId),1)
  }
}
