import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserFields } from './user-fields';


@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {

  constructor() { }

  userList: Array<UserFields> = [];
  userFormObj: any = new UserFields();

  ngOnInit() {
    console.log(this.userList);
  }

  addHost() {
    var newUserObj = new UserFields(this.userFormObj);
    this.userList.push(newUserObj);
    this.userFormObj = new UserFields();
  }

  removeUser(listIndex: number) {
    this.userList.splice(listIndex, 1);
  }

}