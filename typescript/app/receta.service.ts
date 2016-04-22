import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Receta {

  constructor(
    public id: number,
    public title: string,
    public abstract: string,
    public details: string,
    public thumbnail: string) {}

}

@Injectable()
export class RecetaService {

  private recetas = [
  	new Receta(1, 'Costillas BBQ', 'Las famosas del Ribs', 'Liquiiiiisimo', 'img/RibsGrande.jpg'),
  	new Receta(2, 'Tortilla de Patatas','Plato español, de raza.', 'Pero luego le coges el gusto y es la polla con alas', 'img/FavoritoGrande4.png'),
  	new Receta(3, 'Pulpo a la Gallega','Plato Gallego', 'No sabe si entra o sale del plato', 'img/FavoritoGrande3.png'),
  	new Receta(4, 'Raviolis con salsa de Queso Manchego', 'Con el mejor queso del mundo','Como va a saber mal', 'https://i.stack.imgur.com/jdhVC.png'),
  ];

  getRecetas() {
    return withObserver(this.recetas);
  }

  getReceta(id: number | string) {
    let receta = this.recetas.filter(h => h.id === +id)[0]
    return withObserver(new Receta(receta.id, receta.title, receta.abstract, receta.details, receta.thumbnail));
  }

  removeReceta(receta: Receta){
    for(let i=0; i<this.recetas.length; i++){
        if(this.recetas[i].id === receta.id){
          this.recetas.splice(i,1);
          break;
        }
    }
    return withObserver(undefined);
  }

  saveReceta(receta: Receta){
    if(receta.id){
      let oldReceta = this.recetas.filter(h => h.id === receta.id)[0];
      oldReceta.title = receta.title;
      oldReceta.abstract = receta.abstract;
      oldReceta.details = receta.details;
      oldReceta.thumbnail = receta.thumbnail;
    } else {
      receta.id = this.recetas.length+1;
      this.recetas.push(receta);
    }
    return withObserver(receta);
  }
}
