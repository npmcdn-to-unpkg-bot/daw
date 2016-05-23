import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {Perfil} from './perfil.service';

@Injectable()
export class UsuarioService{    
  usuario: Perfil;
    
  getUsuario() {
    //return withObserver(this.usuario);
    if (this.usuario != undefined) {
        return withObserver(new Perfil(usuario.id, usuario.name, usuario.apellidos, usuario.descripcion, usuario.correo, usuario.user, usuario.pass,  usuario.thumbnail, usuario.restFavs, usuario.recFavs));
    } else {
        return withObserver(new Perfil(undefined, '', '', '', '', '', '', '', '', ''));
    }
  }

  setUsuario(user: Perfil) {
    //this.usuario = user;
    this.usuario = new Perfil (user.id, user.name, user.apellidos, user.descripcion, user.correo, user.user, user.pass, user.thumbnail, user.restFavs, user.recFavs);
  }
  /*getPerfil(id: number | string) {
    let perfil = this.perfiles.filter(h => h.id === +id)[0]
    return withObserver(new Perfil(perfil.id, perfil.name, perfil.apellidos, perfil.descripcion, perfil.correo, perfil.user, perfil.pass,  perfil.thumbnail, perfil.restFavs, perfil.recFavs));
  }*/
  
}