import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Restaurante {

  constructor(
    public id: number,
    public title: string,
    public abstract: string,
    public details: string,
    public thumbnail: string) {}

}

@Injectable()
export class RestauranteService {

  private restaurantes = [
  	new Restaurante(1, 'The Good Burger', 'Especialistas en el mundo de la hamburguesa', 'COMO ESTO CUELE ASCIENDO AL DE MARKETING', 'img/TGBGrande.jpg'),
  	new Restaurante(2, 'Fosters Hollywood','Sabor americano de alta calida', 'JAJAJAJAJA YA QUISIERAMOS NOSOTROS PARECERNOS EN ALGO A LO QUE HACEN EN AMERICA EQUISDE', 'img/FosterGrande.jpg'),
  	new Restaurante(3, 'Ribs','De las mejores parrillas actualmente', 'Pero con mejores costillas', 'img/RibsGrande.jpg'),
  	new Restaurante(4, 'La tagliatella','El toque italiano más fresco', 'y encima las pizzas son finisimas', 'img/TagliatellaGrande.jpg'),
  	new Restaurante(5, 'Telepizza','Uno de los referentes en pizzas', 'No tenemos puta vergüenza', 'img/telepizza.png')
  ];

  getRestaurantes() {
    return withObserver(this.restaurantes);
  }

  getRestaurante(id: number | string) {
    let restaurante = this.restaurantes.filter(h => h.id === +id)[0]
    return withObserver(new Restaurante(restaurante.id, restaurante.title, restaurante.abstract, restaurante.details, restaurante.thumbnail));
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
    } else {
      restaurante.id = this.restaurantes.length+1;
      this.restaurantes.push(restaurante);
    }
    return withObserver(restaurante);
  }
}
