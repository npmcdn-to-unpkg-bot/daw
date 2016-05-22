import {Component, OnInit}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';
import {UsuarioService} from './usuario.service';

@Component({
    template: `
        <div class="row">
        
        <div class="col-xs-6 col-md-6 text-center">
            <h3>Registrate</h3>
          <div class="form-group">
	 				 <input type="text" class="form-control" [(ngModel)]="perfil.name" id="username" placeholder="Nombre">
	 				</div>
          <div class="form-group">
	 					<input type="text" class="form-control" [(ngModel)]="perfil.apellidos" id="username" placeholder="Apellidos">
	 				</div>
          <div class="form-group">
	 					<input type="text" class="form-control" [(ngModel)]="perfil.descripcion" id="username" placeholder="descripcion">
	 				</div>
          <div class="form-group">
					  <input type="text" [(ngModel)]="perfil.correo" class="form-control" id="email" placeholder="Dirección de email">
					</div>
	 				<div class="form-group">
	 					<input type="text" class="form-control" [(ngModel)]="perfil.user" id="username" placeholder="Nombre de usuario">
	 				</div>
					<div class="form-group">
					  <input type="password" [(ngModel)]="perfil.pass" class="form-control" id="password" placeholder="Contraseña">
					</div>
          <div class="form-group">
				    <input type="text" [(ngModel)]="perfil.thumbnail" class="form-control" id="email" placeholder="Dirección de email">
					</div>
          <button (click)="save()" type="submit" class="btn btn-default">Entrar</button>
				</div>
        </div>
        <div class="row">
        
        <div class="col-xs-6 col-md-6 text-center ">
            <h3>Inicia sesión</h3>
					<form>
		 				<div class="form-group">
						    <input type="text" [(ngModel)]="usuario" class="form-control" id="exampleInputEmail1" placeholder="Dirección de email">
						</div>
						<div class="form-group">
						    <input type="password" [(ngModel)]="pass" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
						</div>
						<button type="submit" (click)="login(usuario, pass)" class="btn btn-default">Entrar</button>
					</form>
				</div>
        </div>
      `
})
export class PerfilFormComponent {
  
  newPerfil: boolean;
  perfil: Perfil;
  perfiles: Perfil[];
  usuarioActual: Perfil;
  usuario: string;
  pass: string;
  prueba: boolean;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: PerfilService,
    private usuarioService: UsuarioService){

      let id = routeParams.get('id');
      if(id){
        service.getPerfil(id).subscribe(
          perfil => this.perfil = perfil,
          error => console.error(error)
        );
        this.newPerfil = false;
      } else {
        this.perfil = new Perfil(undefined,'','','','','','','','','');
        this.prueba = new Perfil(undefined,'','','','','','','','','');
        this.newPerfil = true;
      }
  }

  ngOnInit(){
    this.service.getPerfiles().subscribe(
      perfiles => this.perfiles = perfiles,
      error => console.log(error)
    );
  }

  cancel() {
    window.history.back();
  }

  login(usuario: string, pass: string;) {
    this.prueba = false;
    for (var user of this.perfiles) {
      if (user.user == usuario) {
        if (user.pass == pass) {
          this.usuarioActual = user;
          this.usuarioService.setUsuario(user);
          this.prueba = true;
          break;
        }
      }
    }
    console.log(this.prueba);
    /*this._router.navigate(['Index']);*/
    this._router.navigate(['PerfilPublicoDetail', {id: this.usuarioActual.id}]);
  }
  
  save() {
    this.service.savePerfil(this.perfil);
    this._router.navigate(['Index']);
  }
}