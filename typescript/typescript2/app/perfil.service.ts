import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Perfil{
  constructor(
    public id: number,
    public name: string,
    public apellidos: string,
    public descripcion: string,
    public correo: string,
    public user: string,
    public pass: string,
    public thumbnail: string){}
}

@Injectable()
export class PerfilService{
  
  public isLogged: boolean;

  constructor() {
    this.isLogged = false;
  }

  private perfiles = [
    new Perfil(1, 'Mariano', 'Rajoy Brei', 'Soy el presi despaña', 'mariano@tocameelano.com', '@NanianoRajoy','123', 'http://wikiblues.net/sites/default/files/upload/fueracopia.jpg')
  ];

  getPerfiles() {
    return withObserver(this.perfiles);
  }

  logIn(perfil:Perfil) {
    for(let i=0; i < this.perfiles.length; i++) {
      if (this.perfiles[i].user === perfil.user && this.perfiles[i].pass === perfil.pass) {
        this.isLogged = true;
        break;
      }
    }
  }
  logFuera() {
    this.isLogged = false;
  }

  getPerfil(id: number | string) {
    let perfil = this.perfiles.filter(h => h.id === +id)[0]
    return withObserver(new Perfil(perfil.id, perfil.name, perfil.apellidos, perfil.descripcion, perfil.correo, perfil.user, perfil.pass, perfil.thumbnail));
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
    } else {
      perfil.id = this.perfiles.length+1;
      this.perfiles.push(perfil);
    }
    return withObserver(perfil);
  }
}