import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';

@Component({
    template: `
        <div class="col-xs-6 col-md-6 text-center centrado">
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
        <div style="display:none" class="col-xs-6 col-md-6 text-center centrado">
					<h1>Cookcinando</h1>
					<form>
		 				<div class="form-group">
						    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Dirección de email">
						</div>
						<div class="form-group">
						    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
						</div>
						<button type="submit" class="btn btn-default">Entrar</button>
					</form>
					<p>Regístrate si aún no lo has hecho</p>
				</div>
      `
})
export class PerfilFormComponent {

  newPerfil: boolean;
  perfil: Perfil;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: PerfilService){

      let id = routeParams.get('id');
      if(id){
        service.getPerfil(id).subscribe(
          perfil => this.perfil = perfil,
          error => console.error(error)
        );
        this.newPerfil = false;
      } else {
        this.perfil = new Perfil(undefined,'','');
        this.newPerfil = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.savePerfil(this.perfil);
    this._router.navigate(['Index']);
  }
}