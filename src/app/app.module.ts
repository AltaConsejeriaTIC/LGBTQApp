import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Deeplinks } from '@ionic-native/deeplinks'

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

import { DetailContentService } from '../services/detail-content.service';
import { EventProvider } from '../providers/event/event';
import { HttpClientModule } from '@angular/common/http';
import { ContentDetailModule } from '../pages/content-detail/content-detail.module'
//used to give format to date
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

import { Geolocation } from '@ionic-native/geolocation';

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
    FormularioPage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp), ContentDetailModule],
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
    FormularioPage
  ],
  providers: [
    StatusBar,
    SocialSharing,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    DetailContentService,
    EventProvider,
    Deeplinks
  ]
})
export class AppModule {}
