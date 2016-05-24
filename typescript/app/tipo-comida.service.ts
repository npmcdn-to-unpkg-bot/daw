import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

import {Receta} from './receta.service';
import {Restaurante} from './restaurante.service';

export class TipoComida {
  constructor(
    public id: number,
    public title: string,
    public abstract: string,
    public details: string,
    public thumbnail: string,
    public thumbnailbig: string,
    public recetas: number[],
    public restaurantes: number[]    
    ) {}
}

@Injectable()
export class TipoComidaService{
private tiposComidas = [
    new TipoComida(1,'Comida Española', 'Comida de todo el territorio español','<h3>Descripción</h3><p>Desde La Coruña a Murcia, desde Bilbao a Cádiz o desde Badajoz a Valencia, todas nuestras recetas (no independentistas).</p>', 'img/banderaEsp.jpg', 'img/banderaEsp.jpg', [1,2],[3,1]),
    
    new TipoComida(2,'Comida Norte Americana', 'Aquí encontrarás toda la gastronomía típica de los Estados Unidos','<h3>Descripción</h3><p>Recorreras todos los sabores y productos desde la costa Este a la Oeste y desde Alaska a la frontera con México.</p>', 'img/banderaEEUU.jpg', 'img/banderaEEUU.jpg', [2,4,5],[2,4,5])
    ];
    
    getTiposComidas() {
    return withObserver(this.tiposComidas);
  }

  getTipoComida(id: number | string) {
    let tipoComida = this.tiposComidas.filter(h => h.id === +id)[0]
    return withObserver(new TipoComida(tipoComida.id, tipoComida.title, tipoComida.abstract, tipoComida.details, tipoComida.thumbnail, tipoComida.thumbnailbig, tipoComida.restaurantes, tipoComida.recetas));
  }

  removeTipoComida(tipoComida: TipoComida){
    for(let i=0; i<this.tiposComidas.length; i++){
        if(this.tiposComidas[i].id === tipoComida.id){
          this.tiposComidas.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveTipoComida(tipoComida: TipoComida){
    if(tipoComida.id){
      let oldTipoComida = this.tiposComidas.filter(h => h.id === restaurante.id)[0];
      oldTipoComida.title = tipoComida.title;
      oldTipoComida.abstract = tipoComida.abstract;
      oldTipoComida.details = tipoComida.details;
      oldTipoComida.thumbnail = tipoComida.thumbnail;
      oldTipoComida.thumbnailbig = tipoComida.thumbnailbig;
      oldTipoComida.map = tipoComida.map;
      oldPerfil.recetas = perfil.recetas;
      oldPerfil.restaurantes = perfil.restaurantes;
    } else {
      tipoComida.id = this.tiposComidas.length+1;
      this.tiposComidas.push(tipoComida);
    }
    return withObserver(tipoComida);
  }
    
}