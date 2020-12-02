import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {
  name = 'Angular';

  hostForm: FormGroup;
  hostForm2: FormGroup;

  constructor(private fb:FormBuilder) {

    this.hostForm = this.fb.group({
      Hosts: this.fb.array([]) ,
    });
  }

  Hosts(): FormArray {
    return this.hostForm.get("Hosts") as FormArray
  }



  newHost(): FormGroup {
    return this.fb.group({
      Name: '',
      IP: '',
      Version_SNMP: '',
      Credentials: '',
      Marque: '',
      Métriques: '',
    })
  }

  addHost() {
    this.Hosts().push(this.newHost());
  }

  removeIP(i:number) {
    this.Hosts().removeAt(i);
  }

  onSubmit() {
    console.log(this.hostForm.value);
  }
}
