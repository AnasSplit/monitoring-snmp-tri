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

  constructor(private fb:FormBuilder) {

    this.hostForm = this.fb.group({
      Host: '',
      Attributes: this.fb.array([]) ,
    });
  }

  Attributes() : FormArray {
    return this.hostForm.get("Attributes") as FormArray
  }

  newIP(): FormGroup {
    return this.fb.group({
      IP: '',
      OID: '',
    })
  }

  addIP() {
    this.Attributes().push(this.newIP());
  }

  removeIP(i:number) {
    this.Attributes().removeAt(i);
  }

  onSubmit() {
    console.log(this.hostForm.value);
  }
}