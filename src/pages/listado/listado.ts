import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import {NavController, NavParams, Content, ScrollEvent} from 'ionic-angular';
import { DetailContentService } from '../../services/detail-content.service';
import { EventProvider } from '../../providers/event/event';
import {ServerConfig} from "../../../config/server";

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {
  @ViewChild(Content)
  private content: Content;
  protected api = ServerConfig.apiEndPoint;

  public evento: boolean = true;
  public noticia: boolean = false;
  public title: string = 'EVENTOS Y NOTICIAS';
  public monthTitle: string;
  public yearTitle: string;

  public events = [];
  public news = [];
  private months: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private detailService: DetailContentService,
    public ref: ChangeDetectorRef,
    public eventService: EventProvider
  ) {
    this.detailService.setEvento(this.evento);
    this.eventService.getData(`${this.api}/events`).subscribe(
      (response) => {
        this.events = response;
        this.monthTitle = this.months[response[0].start_date.slice(5,7)-1];
        this.yearTitle = response[0].start_date.slice(0,4);
      },
      (error) => console.log("$$$$$$$$$$$",error)
    );
    this.eventService.getData(`${this.api}/news`).subscribe(
      (response) => {
        this.news = response;
      },
      (error) => console.log("*********",error)
    );
  }

  ionViewDidLoad() {
      this.content.ionScroll.subscribe( e => this.onScroll(e))
  }


  changeSectionEvents() {
    this.evento = true;
    this.noticia = false;
    this.title = 'EVENTOS Y NOTICIAS';
    this.detailService.setEvento(true);
  }

  changeSectionNews() {
    this.evento = false;
    this.noticia = true;
    this.title = 'ACTUALIDAD BOGOTÁ';
    this.detailService.setEvento(false);
  }

  goToDetails(params) {
    this.navCtrl.push('content', { id: params.id , data: params}).catch(err => {
      console.error("Error en goToDetails", err, err.stack);
    });
  }

  onScroll(e: ScrollEvent) {
    this.monthTitle = this.months[this.events[Math.ceil((e.scrollTop-293)/450)].start_date.slice(5,7)-1];
    this.yearTitle = this.events[Math.ceil((e.scrollTop-293)/450)].start_date.slice(0,4);
    this.ref.detectChanges();
  }


}
