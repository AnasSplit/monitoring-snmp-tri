import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRepository } from '../repository/user';

interface Hello {
  hello: any;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})

export class ServicesComponent {
  Name: '';
  IP = '';
  Marque = '';
  VersionSNMP: '';
  Credentials: '';
  Int: '';
  CPU: '';
  reponsesnmp: '';

  hostForm: FormGroup;
  hostForm2: FormGroup;
  hello: Hello | null = null;

  constructor(private fb: FormBuilder, private userRepo: UserRepository, private httpClient: HttpClient) {

    this.hostForm = this.fb.group({
      Hosts: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.syncAPI();
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
  }

  addHost() {
    this.Hosts().push(this.newHost());
  }

  removeIP(i: number) {
    this.Hosts().removeAt(i);
  }

  onSubmit() {
    console.log(this.hostForm.value);
  }
}
