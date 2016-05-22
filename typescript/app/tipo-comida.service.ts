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
    public recetas: number[],
    public restaurantes: number[],
    public thumbnail: string,
    public thumbnailbig: string
    ) {}
}

@Injectable()
export class TipoComidaService{
private tiposComidas = [
    new TipoComida(1,'Comida Española', 'Comida de todo el territorio español','<h3>Descripción</h3><p>ESTA ES LA BUENA HAMBURGUESA. La calidad está aquí. Llamándonos The Good Burger pensarás que somos americanos, o ingleses, pero somos una hamburguesería española que ha cogido la esencia de la hamburguesa clásica con los sabores que más nos gustan aquí. Por eso las elaboramos con ingredientes de la mejor calidad y adaptadas a tu gusto. Porque hamburguesas buenas hay muchas, pero nosotros queremos ser los mejores.</p><h3>Recomendación de platos</h3><div class="row"><div class="col-xs-4 col-md-4 videos"><h3>Hamburguesas</h3><ul><li><img src="img/tgb-burguertgb.png" width="100px" height="auto" />Hamburguesa TGB<hr align="left" noshade="noshade" size="2" width="80%" /></li><li><img src="img/tgb-bbq.png" width="100px" height="auto" />Hamburguesa BBQ<hr align="left" noshade="noshade" size="2" width="80%" /></li><li><img src="img/tgb-pollo.png" width="100px" height="auto" />Hamburguesa de Pollo<hr align="left" noshade="noshade" size="2" width="80%" /></li></ul></div><div class="col-xs-4 col-md-4 resources"><h3>Hot Dogs</h3><ul><li><img src="img/tgb-hotdog_California.png" width="100px" height="auto" />Hot Dog California<hr align="left" noshade="noshade" size="2" width="80%" /></li><li><img src="img/tgb-hotdog_NewYork.png" width="100px" height="auto" />Hot Dog New York<hr align="left" noshade="noshade" size="2" width="80%" /></li><li><img src="img/tgb-hotdog_Washington.png" width="100px" height="auto" />Hot Dog Washington<hr align="left" noshade="noshade" size="2" width="80%" /></li></ul></div><div class="col-xs-4 col-md-4 popular"><h3>Ensaladas</h3><ul><li><img src="img/tgb-santa_fe.png" width="100px" height="auto" />Ensalada Santa Fe<hr align="left" noshade="noshade" size="2" width="80%" /></li><li><img src="img/tgb-cesar.png" width="100px" height="auto" />Ensalada César<hr align="left" noshade="noshade" size="2" width="80%" /></li><li><img src="img/tgb-huerta.png" width="100px" height="auto" />Ensalada de la Huerta<hr align="left" noshade="noshade" size="2" width="80%" /></li></ul></div></div>', [1,2],[3,1], 'img/TGBGrande.jpg', 'img/tgb-restaurante.jpg')
    ];
    
    getTiposComidas() {
    return withObserver(this.tiposComidas);
  }

  getTipoComida(id: number | string) {
    let tipoComida = this.tiposComidas.filter(h => h.id === +id)[0]
    return withObserver(new TipoComida(tipoComida.id, tipoComida.title, tipoComida.abstract, tipoComida.details, tipoComida.thumbnail, tipoComida.thumbnailbig, tipoComida.map));
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
    } else {
      tipoComida.id = this.tiposComidas.length+1;
      this.tiposComidas.push(tipoComida);
    }
    return withObserver(tipoComida);
  }
    
}