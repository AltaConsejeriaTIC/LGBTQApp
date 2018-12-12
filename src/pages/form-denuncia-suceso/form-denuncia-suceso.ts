import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, ViewController } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HomePage } from '../home/home';
import { ComplaintProvider } from '../../providers/complaint/complaint';
import { ServerConfig } from '../../../config/server';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-form-denuncia-suceso',
  templateUrl: 'form-denuncia-suceso.html',
})
export class FormDenunciaSucesoPage {

  denunciaForm: FormGroup;
  modalWindow: boolean = false;
  modalWindow2: boolean = false;
  protected api = ServerConfig.apiEndPoint;
  isButtonOn = false;
  @ViewChild(Content) content: Content;

  validation_messages = {

      'date': [
        { type: 'required', message: 'Debe seleccionar una fecha' }
      ],
      'place': [
        { type: 'required', message: 'El lugar del suceso es requerido' }
      ],
      'description': [
        { type: 'required', message: 'La descripción no puede ser vacía' }
      ]
  };

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private formBuilder: FormBuilder,
               private complaintProvider: ComplaintProvider,
               public viewCtrl: ViewController,
               private iab: InAppBrowser ) {
    this.denunciaForm = this.formBuilder.group({
      date: new FormControl ('', Validators.required),
      place: new FormControl ('', Validators.required),
      description: new FormControl ('', Validators.required),
      checkBox: new FormControl (false, Validators.required)

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ');
  }

  sendData(){
    if(this.denunciaForm.valid) {

      var data = {
        "first_name": this.navParams.get('first_name'),
        "last_name": this.navParams.get('last_name'),
        "document_type": this.navParams.get('document_type'),
        "document_number": this.navParams.get('document_number'),
        "email": this.navParams.get('email'),
        "phone": this.navParams.get('phone'),
        "event_day": this.denunciaForm.get('date').value,
        "event_place": this.denunciaForm.get('place').value,
        "description": this.denunciaForm.get('description').value
      };

      this.complaintProvider.postData(`${this.api}/complaints`, data)
        .subscribe(res => {
            this.modalWindow = true;
          }
          , err => {
            this.modalWindow = false;
            console.log(err);
            this.modalWindow2 = true;
          });
    }
    this.markFormGroupTouched(this.denunciaForm);
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

  closeData2(){
    this.modalWindow2=false;
  }

  goToTermsAndConditions(){
    this.iab.create('http://www.sdp.gov.co/sites/default/files/terminos_de_uso_app.pdf', '_system');
    this.viewCtrl.dismiss().catch(err => {
      console.error("Error en goToPDF", err, err.stack);
    });
  }
   isCheckBoxPressed(){
    if( this.denunciaForm.get('checkBox').value ){
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

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
