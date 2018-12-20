import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import {NavController, NavParams, Content, ScrollEvent, Platform} from 'ionic-angular';
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
  public imagesHeight = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private detailService: DetailContentService,
    public ref: ChangeDetectorRef,
    public eventService: EventProvider,
    public platform: Platform
  ) {
    this.detailService.setEvento(this.evento);
    platform.ready().then((readySource) => {
      this.imagesHeight = platform.width()/1.25;
    });
    this.eventService.getData(`${this.api}/events`).subscribe(
      (response) => {
        this.events = response.map((event)=>{
          event.start_date = event.start_date.slice(0, -1);
          event.finish_date = event.finish_date.slice(0, -1);
          return event;
        });

        if( response[0]){
          this.monthTitle = this.months[response[0].start_date.slice(5,7)-1];
          this.yearTitle = response[0].start_date.slice(0,4);
        }

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
    this.content.scrollToTop(0).catch(err => {
      console.error("Error en changeSectionEvents", err, err.stack);
    });
    if(this.events[0]){
      this.monthTitle = this.months[this.events[0].start_date.slice(5,7)-1];
      this.yearTitle = this.events[0].start_date.slice(0,4);
    }
    this.detailService.setEvento(true);
  }

  changeSectionNews() {
    this.evento = false;
    this.noticia = true;
    this.title = 'ACTUALIDAD BOGOTÁ';
    this.content.scrollToTop(0).catch(err => {
      console.error("Error en changeSectionNews", err, err.stack);
    });
    if(this.news[0]) {
      this.monthTitle = this.months[this.news[0].date.slice(5,7)-1];
      this.yearTitle = this.news[0].date.slice(0,4);
    }
    this.detailService.setEvento(false);
  }

  goToDetails(params) {
    this.navCtrl.push('content', { id: params.id , data: params}).catch(err => {
      console.error("Error en goToDetails", err, err.stack);
    });
  }

  onScroll(e: ScrollEvent) {
    let currentEvent;
    if (this.evento) {
      currentEvent = this.events[Math.ceil((e.scrollTop - this.imagesHeight)/ (this.imagesHeight+160))].start_date;
    }else{
      currentEvent = this.news[Math.ceil((e.scrollTop - this.imagesHeight)/ (this.imagesHeight+189))].date;
    }
    this.monthTitle = this.months[currentEvent.slice(5,7)-1];
    this.yearTitle = currentEvent.slice(0,4);
    this.ref.detectChanges();
  }
}
