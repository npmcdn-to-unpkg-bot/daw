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
  	new Restaurante(1, 'The Good Burger', 'Especialistas en el mundo de la hamburguesa', 'COMO ESTO CUELE ASCIENDO AL DE MARKETING', 'http://www.comprarfranquicia.com/sites/default/files/tgb_b.jpg'),
  	new Restaurante(2, 'Fosters Hollywood','Sabor americano de alta calidat', 'JAJAJAJAJA YA QUISIERAMOS NOSOTROS PARECERNOS EN ALGO A LO QUE HACEN EN AMERICA EQUISDE', 'http://www.cenabarato.com/wp-content/uploads/2014/07/fosters-hollywood.jpg'),
  	new Restaurante(3, 'Ribs','Como el Fosters', 'Pero con mejores costillas', 'https://media-cdn.tripadvisor.com/media/photo-s/05/8b/72/77/restaurante-ribs.jpg'),
  	new Restaurante(4, 'La tagliatella','Comida italiana demasiado cara', 'y encima las pizzas son finisimas', 'http://www.latagliatella.es/wp-content/uploads/benvenuti-blog.jpg'),
  	new Restaurante(5, 'Telepizza','Sí, seguimos haciendo la pizzalada', 'No tenemos puta vergüenza', 'https://i.ytimg.com/vi/MCbgh42ykYk/hqdefault.jpg')
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
