import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

import {Receta} from './receta.service';

export class Perfil{
    constructor(
        public id: number,
        public name: string,
        public apellidos: string,
        public descripcion: string,
        public correo: string,
        public user: string,
        public pass: string,        
        public thumbnail: string,
        public restFavs: number[],
        public recFavs: number[]
    ){}
}

@Injectable()
export class PerfilService{    
    
    private perfiles = [
      new Perfil(1, 'Tim', 'Cook', 'CEO de Apple. Amante de La Tierra. Me gusta hacer buenos productos y cobrar mucho por ello. También disfruto haciendo recetas y cocinando para mis seres queridos tras una buena keynote.', 'tcook@apple.com', 'TimCook','apple4ever', 'http://images.apple.com/pr/bios/images/cook_hero.png',[1,2],[2,3]),
      new Perfil(2, 'Lebron', 'James', 'Dos veces ganador de la NBA. Cuatro veces MVP. Dos veces Oro Olímpico. Pero nada de esto se puede comparar con mi pasión por la comida. Mis recetas son exóticas y fáciles de hacer para los que como yo, no tenemos mucho tiempo (porque estamos ganando millones haciendo lo que amamos).', 'lebronj@m.es', 'TheChosenOne','IMTHEBEST', 'http://cdn5.triplepundit.com/wp-content/uploads/2011/04/chosen_lebron_james1.png',[2],[1])
    ];
    private pactual: Perfil;

    getUsuario() {
        return withObserver(this.pactual);
            //return withObserver(new Perfil(pactual.id, pactual.name, pactual.apellidos, pactual.descripcion, pactual.correo, pactual.user, pactual.pass,  pactual.thumbnail, pactual.restFavs, pactual.recFavs));
      }

setUsuario(user: Perfil) {
    //this.pactual = user;
    this.pactual = new Perfil (user.id, user.name, user.apellidos, user.descripcion, user.correo, user.user, user.pass, user.thumbnail, user.restFavs, user.recFavs);
  }
getRecFavs() {    
    return withObserver(this.recFavs);
  }
getRestFavs() {    
    return withObserver(this.restFavs);
  }
    
getPerfiles() {
  return withObserver(this.perfiles);
}

getPerfil(id: number | string) {
  let perfil = this.perfiles.filter(h => h.id === +id)[0]
  return withObserver(new Perfil(perfil.id, perfil.name, perfil.apellidos, perfil.descripcion, perfil.correo, perfil.user, perfil.pass,  perfil.thumbnail, perfil.restFavs, perfil.recFavs));
}

removePerfil(perfil: Perfil){
  for(let i=0; i<this.perfiles.length; i++){
      if(this.perfiles[i].id === perfil.id){
        this.perfiles.splice(i,1);
        break;
      }
  }
  return withObserver(undefined);
}

savePerfil(perfil: Perfil){
  if(perfil.id){
    let oldPerfil = this.perfiles.filter(h => h.id === perfil.id)[0];
    oldPerfil.name = perfil.name;
    oldPerfil.apellidos = perfil.apellidos;
    oldPerfil.descripcion = perfil.descripcion;
    oldPerfil.correo = perfil.correo;
    oldPerfil.user = perfil.user;
    oldPerfil.pass = perfil.pass;    
    oldPerfil.thumbnail = perfil.thumbnail;
    oldPerfil.restFavs = perfil.restFavs;
    oldPerfil.recFavs = perfil.recFavs;
  } else {
    perfil.id = this.perfiles.length+1;
    this.perfiles.push(perfil);
  }
  return withObserver(perfil);

  }
    
anadirFavorito (perfil: Perfil, receta: Receta) {
    perfil.recetasFavs.push(receta);
    return withObserver(perfil);
}
}