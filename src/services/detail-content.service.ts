import { Injectable } from '@angular/core';

@Injectable()
export class DetailContentService {
  constructor() {}

  private evento: boolean;

  setEvento(evento: boolean) {
    this.evento = evento;
  }

  getContent() {
    if (this.evento) {
      return 'evento';
    } else {
      return 'noticia';
    }
  }
}
