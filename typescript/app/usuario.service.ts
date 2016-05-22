import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Perfil} from './perfil.service';

@Injectable()
export class UsuarioService{    
  usuario: Perfil;
    
  getUsuario() {
    return withObserver(this.usuario);
  }

  setUsuario(user: Perfil) {
    this.usuario = user;
    console.log(this.usuario.user);
  }
  /*getPerfil(id: number | string) {
    let perfil = this.perfiles.filter(h => h.id === +id)[0]
    return withObserver(new Perfil(perfil.id, perfil.name, perfil.apellidos, perfil.descripcion, perfil.correo, perfil.user, perfil.pass,  perfil.thumbnail, perfil.restFavs, perfil.recFavs));
  }*/
  
}