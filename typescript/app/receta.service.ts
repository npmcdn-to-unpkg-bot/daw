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
  	new Receta(1, 'Pollo al limón', 'Del chino fa', 'Liquiiiiisimo', 'https://i.ytimg.com/vi/shrNtGTrDFs/maxresdefault.jpg'),
  	new Receta(2, 'Rollito de primavera','Al principio no sabe a nada', 'Pero luego le coges el gusto y es la polla con alas', 'https://s-media-cache-ak0.pinimg.com/236x/f4/68/0d/f4680deefb6a7a5394437cb466fed6e9.jpg'),
  	new Receta(3, 'Se nota que tengo ganas de ir al chino?','Buf, maldita salsa agridulce', 'Mazo de buena', 'https://cis-public.foodpanda.com/dynamic/production/es/images/vendors/restaurante_chino_fa-centro_200067_sqp.jpg'),
  	new Receta(4, 'Y ya paro','Que no se me ocurre nada', '(－‸ლ)(－‸ლ)(－‸ლ)(－‸ლ)', 'https://i.stack.imgur.com/jdhVC.png'),
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
