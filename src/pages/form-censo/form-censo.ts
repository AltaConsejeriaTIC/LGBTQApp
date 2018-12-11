import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, App, ViewController, Content } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { ComplaintProvider } from '../../providers/complaint/complaint';
import { ServerConfig } from '../../../config/server';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-form-censo',
  templateUrl: 'form-censo.html'
})
export class FormCensoPage {

  credentialsForm: FormGroup;
  modalWindow: boolean = false;
  identityOhter: boolean = false;
  protected api = ServerConfig.apiEndPoint;
  isButtonOn = false;
  @ViewChild(Content) content: Content;

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
		{ type: 'required', message: 'El nombre es requerido.' },
		{ type: 'pattern', message: 'El formato no es válido' }
	],
  'lastName': [
		{ type: 'required', message: 'El apellido es requerido.' },
		{ type: 'pattern', message: 'El formato no es válido' }
	],
  'address': [
		{ type: 'required', message: 'La dirección es requerida.' }
	],
  'phone': [
		{ type: 'required', message: 'El teléfono es requerido.' },
    { type: 'pattern', message: 'El formato no es válido' }
	],
  'gender': [
		{ type: 'required', message: 'El sexo de nacimiento es requerido.' }
	],
  'orientation': [
		{ type: 'required', message: 'La orientación sexual es requerida.' }
	],
  'identity': [
		{ type: 'required', message: 'Debe colocar el género' }
	],
  'others': [
		{ type: 'required', message: 'Debe colocar alguna identidad' }
	],
  'age': [
		{ type: 'required', message: 'La fecha de nacimiento es requerida.' }
	],
  'education': [
		{ type: 'required', message: 'El nivel de educación es requerida.' }
	]
};

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private formBuilder: FormBuilder,
               public app: App,
               private complaintProvider: ComplaintProvider,
               public viewCtrl: ViewController,
               private iab: InAppBrowser) {
    this.credentialsForm = this.formBuilder.group({
      email: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z-.]{2,}$')
                              	])),
      documentType: new FormControl ('', Validators.required),
      documentNumber: new FormControl ('', Validators.required),
      firstName: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[a-záéíóúñüçA-ZÁÉÍÓÚ´ÑÜÇ\\s]*$')
                              	])),
      lastName: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[a-záéíóúñüçA-ZÁÉÍÓÚ´ÑÜÇ\\s]*$')
                              	])),
      address: new FormControl ('', Validators.required),
      phone: new FormControl ('', Validators.compose([
                              		Validators.required,
                              		Validators.pattern('^[0-9]*$')
                              	])),
      gender: new FormControl ('', Validators.required),
      orientation: new FormControl ('', Validators.required),
      identity: new FormControl ('', Validators.required),
      others: new FormControl ('', Validators.required),
      age: new FormControl ('', Validators.required),
      education: new FormControl ('', Validators.required),
      checkBox: new FormControl (false, Validators.required)

    });

    console.log(this.validation_messages.others['0']['type']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormCensoPage');
  }

  sendData(){
    if(this.credentialsForm.valid) {
      let data = {
        "document_type": this.credentialsForm.get('documentType').value,
        "document_number": this.credentialsForm.get('documentNumber').value,
        "first_name": this.credentialsForm.get('firstName').value,
        "last_name": this.credentialsForm.get('lastName').value,
        "address": this.credentialsForm.get('address').value,
        "email": this.credentialsForm.get('email').value,
        "phone": this.credentialsForm.get('phone').value,
        "sex_birth": this.identityOhter ? this.credentialsForm.get('others').value : this.credentialsForm.get('identity').value,
        "sexual_orientation": this.credentialsForm.get('orientation').value,
        "gender": this.credentialsForm.get('gender').value,
        "birth_day": this.credentialsForm.get('age').value,
        "education": this.credentialsForm.get('education').value
      };

      this.complaintProvider.postData(`${this.api}/users`, data)
        .subscribe(() => {
          this.modalWindow = true;
        }, err => {
          this.modalWindow = false;
          console.log(err);
          alert('there was an error');
        });
    }
    this.markFormGroupTouched(this.credentialsForm);

  }

  goToTermsAndConditions(){
    this.iab.create('http://www.sdp.gov.co/sites/default/files/terminos_de_uso_app.pdf', '_system');
    this.viewCtrl.dismiss().catch(err => {
      console.error("Error en goToPDF", err, err.stack);
    });
  }

  isCheckBoxPressed(){
    if( this.credentialsForm.get('checkBox').value ){
      console.log('is on');
      this.isButtonOn = true;
      setTimeout(() => {
        this.content.scrollToBottom();
      })
    }
    else{
      this.isButtonOn = false;
    }
  }
    closeData(){
        this.modalWindow=false;
        this.navCtrl.setRoot(HomePage).catch(err => {
          console.error("Error en closeData", err, err.stack);
        });
        this.navCtrl.popToRoot().catch(err => {
          console.error("Error en closeData", err, err.stack);
        });
      }

      onChangeIdentity($event){
        console.log($event);
        this.identityOhter = $event == 'Otro';
    }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
