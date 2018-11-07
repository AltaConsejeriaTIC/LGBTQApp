import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormDenunciaSucesoPage} from '../form-denuncia-suceso/form-denuncia-suceso'


@Component({
  selector: 'page-form-denuncia',
  templateUrl: 'form-denuncia.html',
})
export class FormDenunciaPage {

  denunciaForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.denunciaForm = this.formBuilder.group({
      email: [''],
      documentType: [''],
      documentNumber: [''],
      firstName: [''],
      lastName: [''],
      phone: ['']

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormDenunciaPage');
  }

  goToFormDenunciaSuceso(){
    this.navCtrl.push(FormDenunciaSucesoPage);
  }

}
