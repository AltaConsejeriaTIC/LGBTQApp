import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'page-form-censo',
  templateUrl: 'form-censo.html',
})
export class FormCensoPage {

  credentialsForm: FormGroup;
  modalWindow: boolean = false;

  validation_messages = {
'email': [
		{ type: 'required', message: 'El correo es requerido.' },
		{ type: 'pattern', message: 'El formato no es válido' }
	],
  'documentType': [
		{ type: 'required', message: 'Debe escoger un tipo de documento' }
	],
  'documentNumber': [
		{ type: 'required', message: 'El número de documento es requerido' }
	],
  'firstName': [
		{ type: 'required', message: 'El nombre es requerido.' }
	],
  'lastName': [
		{ type: 'required', message: 'El apellido es requerido.' }
	],
  'address': [
		{ type: 'required', message: 'La dirección es requerida.' }
	],
  'phone': [
		{ type: 'required', message: 'El teléfono es requerido.' }
	],
  'gender': [
		{ type: 'required', message: 'El sexo de nacimiento es requerido.' }
	],
  'orientation': [
		{ type: 'required', message: 'La orientación sexual es requerida.' }
	],
  'identity': [
		{ type: 'required', message: 'El género es requerido.' }
	],
  'age': [
		{ type: 'required', message: 'La edad es requerida.' }
	]
}

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.credentialsForm = this.formBuilder.group({
      email: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                              	])),
      documentType: new FormControl ('', Validators.required),
      documentNumber: new FormControl ('', Validators.required),
      firstName: new FormControl ('', Validators.required),
      lastName: new FormControl ('', Validators.required),
      address: new FormControl ('', Validators.required),
      phone: new FormControl ('', Validators.required),
      gender: new FormControl ('', Validators.required),
      orientation: new FormControl ('', Validators.required),
      identity: new FormControl ('', Validators.required),
      age: new FormControl ('', Validators.required)

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormCensoPage');
  }

  sendData(){
      this.modalWindow=true;
    }

    closeData(){
        this.modalWindow=false;
      }

}
