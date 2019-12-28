import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  public users = new BehaviorSubject<string[]>([]);
  listUsers : string[] = [];
  constructor() {}

  addUser(user : string) {
    this.listUsers.push(user);
    this.users.next([...this.listUsers]);
  }
}
