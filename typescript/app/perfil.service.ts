import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class Perfil{
    constructor(
        public id: number,
        public name: string,
        public apellidos: string,
        public user: string,
        public pass: string,
        public thumbnail: string){}
}

@Injectable()
export class PerfilService{
    
    private perfiles = [
        new Perfil(1,'Mariano','Rajoy Brei','123','123','https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjsgeCL1aLMAhXEWhoKHZONApAQjRwIBw&url=https%3A%2F%2Ftwitter.com%2Fmarianorajoy&psig=AFQjCNGrpCOVA2LCb8An98IIvYMHQhlSuA&ust=1461428898072137')
    ];
        
    
    
   getPerfiles() {
    return withObserver(this.perfiles);
  }

  getPerfil(id: number | string) {
    let perfil = this.perfiles.filter(h => h.id === +id)[0]
    return withObserver(new Perfil(perfil.id, perfil.name, perfil.user, perfil.pass, perfil.apellidos, perfil.thumbnail));
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
      oldPerfil.name = perfil.title;
      oldPerfil.apellidos = perfil.apellidos; 
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