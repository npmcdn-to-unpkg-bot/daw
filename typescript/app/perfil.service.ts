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
        
        public recetasFavs: Receta[]
    
    ){}
        
}

var recetasFavs:Receta[new Receta(1, 1, 'Costillas BBQ', 'Las famosas del Ribs', 'Liquiiiiisimo', 'img/RibsGrande.jpg', 'img/pabellon-criollo.jpg'),
    new Receta(2, 1, 'Tortilla de Patatas','Plato español, de raza.', 'Pero luego le coges el gusto y es la polla con alas', 'img/FavoritoGrande4.png', 'img/pabellon-criollo.jpg'),
    new Receta(3, 1, 'Pulpo a la Gallega','Plato Gallego', 'No sabe si entra o sale del plato', 'img/FavoritoGrande3.png', 'img/pabellon-criollo.jpg') ];

@Injectable()
export class PerfilService{    

    private perfiles = [
      new Perfil(1, 'Mariano', 'Rajoy Brei', 'Soy el presi despaña', 'mariano@tocameelano.com', 'NanianoRajoy','123', 'http://wikiblues.net/sites/default/files/upload/fueracopia.jpg', recetasFavs), 
        new Perfil(1, 'Mariano', 'Rajoy Brei', 'Soy el presi despaña', 'mariano@tocameelano.com', 'NanianoRajoy','123', 'http://wikiblues.net/sites/default/files/upload/fueracopia.jpg', recetasFavs)
    ];

    

getPerfiles() {
  return withObserver(this.perfiles);
}

getPerfil(id: number | string) {
  let perfil = this.perfiles.filter(h => h.id === +id)[0]
  return withObserver(new Perfil(perfil.id, perfil.name, perfil.apellidos, perfil.descripcion, perfil.correo, perfil.user, perfil.pass,  perfil.thumbnail, perfil.recetasFav));
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
      
    oldPerfil.recetasFav = perfil.recetasFav;
  } else {
    perfil.id = this.perfiles.length+1;
    this.perfiles.push(perfil);
  }
  return withObserver(perfil);

  }
}