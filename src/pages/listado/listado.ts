import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { ContentDetailPage } from '../content-detail/content-detail';
import { DetailContentService } from '../../services/detail-content.service';
import { EventProvider } from '../../providers/event/event';

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {
  @ViewChild(Content)
  content: Content;

  public evento: boolean = true;
  public noticia: boolean = false;
  public title: string = 'EVENTOS Y NOTICIAS';
  public monthTitle: string = 'Agosto';

  public rect1: any;
  public rect2: any;
  public rect3: any;
  public rect4: any;

  events = [];
  newsTitle: string[] = ['Aguanilé', 'Ciclo rosa 2018 Muestras audiovisuales', 'Noticia 3', 'Noticia 4'];
  newsDate: string[] = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre'];
  newsDuration: string[] = [
    'Del 28 de Marzo al 30 de Marzo de 2018',
    'Del 28 de Marzo al 30 de Marzo de 2018',
    'Del 28 de Marzo al 30 de Marzo de 2018',
    'Del 28 de Marzo al 30 de Marzo de 2018'
  ];
  newsPlace: string[] = ['Teatro Julio Mario Santo Domingo', 'Biblioteca Luis Angel Arango', 'La Candelaria', 'Unicentro'];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private detailService: DetailContentService,
    public ref: ChangeDetectorRef,
    public eventService: EventProvider
  ) {
    this.detailService.setEvento(this.evento);
  }
  ngOnInit() {
    this.eventService.getEvents('http://127.0.0.1:8080/events').subscribe(
      (response) => {
        console.log(response);
        console.log(typeof response[0].start_date);
        this.events = response;
      },
      (error) => console.log(error)
    );
  }
  ionViewDidLoad() {
    if (this.evento) {
      this.content.ionScroll.subscribe(() => {
        this.changeMonthTitle();
      });
    }
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

  goToDetails() {
    this.navCtrl.push(ContentDetailPage);
  }

  changeMonthTitle() {
    this.rect1 = document.getElementById('new1').getBoundingClientRect();
    this.rect2 = document.getElementById('new2').getBoundingClientRect();
    this.rect3 = document.getElementById('new3').getBoundingClientRect();
    this.rect4 = document.getElementById('new4').getBoundingClientRect();

    if (this.rect1.top > 420 && this.rect1.top < 600) {
      this.monthTitle = this.newsDate[0];
    }
    if (this.rect2.top > 420 && this.rect2.top < 600) {
      this.monthTitle = this.newsDate[1];
    }
    if (this.rect3.top > 420 && this.rect3.top < 600) {
      this.monthTitle = this.newsDate[2];
    }
    if (this.rect4.top > 420 && this.rect4.top < 600) {
      this.monthTitle = this.newsDate[3];
    }
    this.ref.detectChanges();
  }
}
