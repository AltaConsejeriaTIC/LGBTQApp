import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalMenuPage } from '../pages/modal-menu/modal-menu';
import { ListadoPage } from '../pages/listado/listado';
import { DerechoPage } from '../pages/derecho/derecho';
import { DenunciaPage } from '../pages/denuncia/denuncia';
import { AlianzaPage } from '../pages/alianza/alianza';
import { OrganizacionPage } from '../pages/organizacion/organizacion';

import { QuienesSomosPage } from '../pages/quienes-somos/quienes-somos';
import { FormularioPage } from '../pages/formulario/formulario';

import {DiscriminacionPage} from '../pages/discriminacion/discriminacion';
import {ArcoirisPage} from '../pages/arcoiris/arcoiris';
import {PurpuraPage} from '../pages/purpura/purpura';

import { ContentDetailPage } from '../pages/content-detail/content-detail';
import { DetailContentService } from '../services/detail-content.service';
import { EventProvider } from '../providers/event/event';
import { HttpClientModule } from '@angular/common/http';

import { CallNumber } from '@ionic-native/call-number';
//used to give format to date
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

import { Geolocation } from '@ionic-native/geolocation';
import { ContactPage } from '../pages/contact/contact';

import { Contacts } from '@ionic-native/contacts';
import { IonicStorageModule } from '@ionic/storage';
import { SMS } from '@ionic-native/sms';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalMenuPage,
    ListadoPage,
    DerechoPage,
    DenunciaPage,
    AlianzaPage,
    OrganizacionPage,
    QuienesSomosPage,
    FormularioPage,
    ContentDetailPage,
    DiscriminacionPage,
    ArcoirisPage,
    PurpuraPage,
    ContactPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalMenuPage,
    ListadoPage,
    DerechoPage,
    DenunciaPage,
    AlianzaPage,
    OrganizacionPage,
    QuienesSomosPage,
    FormularioPage,
    ContentDetailPage,
    DiscriminacionPage,
    ArcoirisPage,
    PurpuraPage,
    ContactPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    DetailContentService,
    EventProvider,
    CallNumber,
    Contacts,
    SMS,
    CallNumber
  ]
})
export class AppModule {}
