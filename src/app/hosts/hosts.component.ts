import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HostFields } from './user-fields';


@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {

  constructor() { }

  hostList: Array<HostFields> = [];
  userFormObj: any = new HostFields();

  ngOnInit() {
    console.log(this.hostList);
  }

  addHost() {
    var newUserObj = new HostFields(this.userFormObj);
    this.hostList.push(newUserObj);
    this.userFormObj = new HostFields();
  }

  removeUser(listIndex: number) {
    this.hostList.splice(listIndex, 1);
  }

}
