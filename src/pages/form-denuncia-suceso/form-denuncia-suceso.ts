import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormDenunciaPage } from '../form-denuncia/form-denuncia';
import { HomePage } from '../home/home';
import { ComplaintProvider } from '../../providers/complaint/complaint';
import { ServerConfig } from '../../../config/server';

@Component({
  selector: 'page-form-denuncia-suceso',
  templateUrl: 'form-denuncia-suceso.html',
})
export class FormDenunciaSucesoPage {

  denunciaForm: FormGroup;
  modalWindow: boolean = false;
  protected api = ServerConfig.apiEndPoint;

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
  }

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private formBuilder: FormBuilder,
               private complaintProvider: ComplaintProvider ) {
    this.denunciaForm = this.formBuilder.group({
      date: new FormControl ('', Validators.required),
      place: new FormControl ('', Validators.required),
      description: new FormControl ('', Validators.required)

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ');
  }

  sendData(){

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
      }

      this.complaintProvider.postData( `${this.api}/complaints`, data)
      .subscribe(res => {
        this.modalWindow=true;
      }
      , err => {
        this.modalWindow=false;
        console.log( err );
        alert('there was an error');
      } );

  }

  closeData(){
      this.modalWindow=false;
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    }

}
