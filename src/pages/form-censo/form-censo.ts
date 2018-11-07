import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-form-censo',
  templateUrl: 'form-censo.html',
})
export class FormCensoPage {

  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.credentialsForm = this.formBuilder.group({
      email: [''],
      documentType: [''],
      documentNumber: [''],
      firstName: [''],
      lastName: [''],
      address: [''],
      phone: [''],
      gender: [''],
      orientation: [''],
      identity: [''],
      age: ['']

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormCensoPage');
  }

  sendData(){

  }

}
