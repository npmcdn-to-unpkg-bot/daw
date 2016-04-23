import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Restaurante {
  constructor(
    public id: number,
    public title: string,
    public abstract: string,
    public details: string,
    public thumbnail: string,
    public thumbnailbig: string,
    public map: string) {}
}

@Injectable()
export class RestauranteService {
  private restaurantes = [
  	new Restaurante(1, 'The Good Burger', 'Especialistas en el mundo de la hamburguesa', 'Algo', 'img/TGBGrande.jpg', '', 'https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US'),
  	new Restaurante(2, "Foster's Hollywood",'Sabor americano de alta calida', `<div class="col-xs-4 col-md-4 popular"><h3>Entrantes</h3><ul><li><img src="img/foster-patatas.png" width="100px" height="auto" />Bacon & Cheese Fries<hr align="left" noshade="noshade" size="2" width="80%" /></li><li><img src="img/foster-combo.png" width="100px" height="auto" />Hollywood Combo<hr align="left" noshade="noshade" size="2" width="80%" /></li><li><img src="img/foster-chicken.png" width="100px" height="auto" />Fosters Chicken Pops<hr align="left" noshade="noshade" size="2" width="80%" /></li></ul></div>`, 'img/FosterGrande.jpg', 'img/fostershollywood-restaurante.jpg', 'https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US'),
  	new Restaurante(3, 'Ribs','De las mejores parrillas actualmente', 'Pero con mejores costillas', 'img/RibsGrande.jpg', '', 'https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US'),
  	new Restaurante(4, 'La tagliatella','El toque italiano más fresco', 'y encima las pizzas son finisimas', 'img/TagliatellaGrande.jpg', '', 'https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US'),
  	new Restaurante(5, 'Telepizza','Uno de los referentes en pizzas', 'No tenemos puta vergüenza', 'img/telepizza.png', '', 'https://www.google.com/maps/d/embed?mid=zgD1lMPodVgY.kwc1klKug9fM&hl=en_US')
  ];

  getRestaurantes() {
    return withObserver(this.restaurantes);
  }

  getRestaurante(id: number | string) {
    let restaurante = this.restaurantes.filter(h => h.id === +id)[0]
    return withObserver(new Restaurante(restaurante.id, restaurante.title, restaurante.abstract, restaurante.details, restaurante.thumbnail, restaurante.thumbnailbig, restaurante.map));
  }

  removeRestaurante(restaurante: Restaurante){
    for(let i=0; i<this.restaurantes.length; i++){
        if(this.restaurantes[i].id === restaurante.id){
          this.restaurantes.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveRestaurante(restaurante: Restaurante){
    if(restaurante.id){
      let oldRestaurante = this.restaurantes.filter(h => h.id === restaurante.id)[0];
      oldRestaurante.title = restaurante.title;
      oldRestaurante.abstract = restaurante.abstract;
      oldRestaurante.details = restaurante.details;
      oldRestaurante.thumbnail = restaurante.thumbnail;
      oldRestaurante.thumbnailbig = restaurante.thumbnailbig;
      oldRestaurante.map = restaurante.map;
    } else {
      restaurante.id = this.restaurantes.length+1;
      this.restaurantes.push(restaurante);
    }
    return withObserver(restaurante);
  }
}
