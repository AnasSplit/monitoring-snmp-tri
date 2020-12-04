import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRepository } from '../repository/user';
import axios from 'axios'
import { ThisReceiver } from '@angular/compiler';

interface Hello {
  hello: any;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})

export class ServicesComponent {
  //Variables globales :

  //Attributs
  Name: '';
  IP = '';
  Marque = '';
  VersionSNMP: '';
  Credentials: '';

  //Métriques à monitorer
  Int: '';
  CPU: '';
  True = 'True';
  False = 'False';

  //Interface avec la bdd
  Basedd: '';
  reponsesnmpcpu: '';
  reponsesnmpint: '';

  //OIDs
  OIDint = '1.3.6.1.2.1.2.2.1.5.1';
  OIDcpu = '1.3.6.1.4.1.9.9.109.1.1.1.1.25';

  //Hosts
  hostForm: FormGroup;
  hostForm2: FormGroup;

  //TestHelloAPIRest
  hello: Hello | null = null;

  constructor(private fb: FormBuilder, private userRepo: UserRepository, private httpClient: HttpClient) {

    this.hostForm = this.fb.group({
      Hosts: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.syncAPI();
    this.getMachine();
  }

  async clearAPI() {
    this.hello = null;
  }

  public async fetchAPI() {
    this.hello = await this.userRepo.random();
  }

  async syncAPI() {
    this.hello = null;
    this.hello = await this.userRepo.random();
  }

  Hosts(): FormArray {
    return this.hostForm.get("Hosts") as FormArray
  }

  postMachine() {
    axios.post('https://snmp-server.herokuapp.com/addclient/' + this.Name + '/' + this.IP + '/' + this.Marque);
  }

  deleteMachine() {
    axios.delete('https://snmp-server.herokuapp.com/deleteclient/' + this.Name + '/' + this.IP + '/' + this.Marque);
  }

  getMachine() {
    axios.get('https://snmp-server.herokuapp.com/showclients')
      .then(function (response) {
        this.infos = response;
        console.log(this.infos);
        this.Basedd = response;
      })
  }

  SNMPreq() {
    if (this.CPU === this.True) {
      this.CheckCPU();
      console.log('Check CPU executed.');
    }

    if (this.Int === this.True) {
      this.CheckInt();
      console.log('Check Int executed.');
    }
  }

  CheckCPU() {
    axios.get('http://snmp-server.herokuapp.com/informations/' + this.OIDcpu + '/' + this.IP + '/' + this.Credentials)
      .then(function (response) {
        this.infos = response
        console.log(this.infos)
        this.reponsesnmpcpu = response;
      })
  }

  CheckInt() {
    axios.get('https://snmp-server.herokuapp.com/showclients' + this.OIDint + '/' + this.IP + '/' + this.Credentials)
      .then(function (response) {
        this.infos = response;
        console.log(this.infos);
        this.reponsesnmpint = response;
      })
  }

  newHost(): FormGroup {
    return this.fb.group({
      Name: this.Name,
      IP: this.IP,
      Marque: this.Marque,
      Version_SNMP: this.VersionSNMP,
      Credentials: this.Credentials,
      Int: this.Int,
      CPU: this.CPU,
    })
  }

  saveHost(i: number) {
    this.Hosts();
    console.log(this.Name);
    console.log(this.IP);
    console.log(this.Marque);
    this.postMachine();
  }

  addHost() {
    this.Hosts().push(this.newHost());
  }

  removeIP(i: number) {
    this.Hosts().removeAt(i);
    this.deleteMachine();
  }

  onSubmit() {
    console.log(this.hostForm.value);
  }
}
