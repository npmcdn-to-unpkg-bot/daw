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
        public recetas: Receta[],
        public thumbnail: string){}
        
}

@Injectable()
export class PerfilService{

    private recetas1 = [
        new Receta(1, 1, 'Pulpo a la Gallega','Plato Gallego', 'No sabe si entra o sale del plato', 'img/FavoritoGrande3.png', 'img/pabellon-criollo.jpg'),
        new Receta(2, 1, 'Raviolis con salsa de Queso Manchego', 'Con el mejor queso del mundo','Como va a saber mal', 'https://i.stack.imgur.com/jdhVC.png', 'img/pabellon-criollo.jpg'),
  ];

    
    private perfiles = [
      new Perfil(1, 'Mariano', 'Rajoy Brei', 'Soy el presi despaña', 'mariano@tocameelano.com', 'NanianoRajoy','123',recetas1, 'http://wikiblues.net/sites/default/files/upload/fueracopia.jpg')
    ];

getPerfiles() {
  return withObserver(this.perfiles);
}

getPerfil(id: number | string) {
  let perfil = this.perfiles.filter(h => h.id === +id)[0]
  return withObserver(new Perfil(perfil.id, perfil.name, perfil.apellidos, perfil.descripcion, perfil.correo, perfil.user, perfil.pass, perfil.recetas, perfil.thumbnail));
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
      oldPerfil.recetas = perfil.recetas;
    oldPerfil.thumbnail = perfil.thumbnail;
  } else {
    perfil.id = this.perfiles.length+1;
    this.perfiles.push(perfil);
  }
  return withObserver(perfil);

  }
}