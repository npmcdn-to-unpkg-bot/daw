import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';
import {PerfilService, Perfil} from 'perfil.service.ts';

export class Login {

  constructor(
    public usuario: string;
    public contrasena: string){}
}

@Injectable()
export class LoginService {

  public isLogged: boolean;
  constructor(){
    this.isLogged = false;
  } 

  getLog() {
    return withObserver(this.log);
  }

  logIn(logi:Login){
    for(let i=0; i<this.log.length; i++){
      if(this.log[i].usuario === logi.usuario && this.log[i].contrasena === logi.contrasena){
        this.isLogged = true;
        break;
      }
    }
}

	logFuera(){
		this.isLogged = false;
	}
}