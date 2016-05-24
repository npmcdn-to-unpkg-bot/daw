import {Component, OnInit}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';

@Component({
    template: `
        <div class="row">
        
    <div *ngIf="user != true" class="col-xs-6 col-md-6 text-center">
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
		 				<div class="form-group">
						    <input type="text" [(ngModel)]="usuario" class="form-control" id="exampleInputEmail1" placeholder="Nombre de usuario">
						</div>
						<div class="form-group">
						    <input type="password" [(ngModel)]="pass" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
						</div>
						<button type="submit" (click)="login(usuario, pass)" class="btn btn-default">Entrar</button>
				</div>
        </div>
      `
})
export class PerfilFormComponent {
  
  newPerfil: boolean;
  perfil: Perfil;
  perfiles: Perfil[];
  pactual: Perfil;
  usuario: string;
  pass: string;
    user: boolean;
    admin: boolean;

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
        this.perfil = new Perfil(undefined,'','','','','','','','','');
        this.newPerfil = true;
      }
      service.getUsuario().subscribe(
            pactual => this.pactual = pactual,
            error => console.error(error)
        );
      service.getUser().subscribe(
                user => this.user = user,
                error => console.error(error)
            );
      
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
      this.user = false;
      //admin = false;
    for (var u of this.perfiles) {
      if (u.user == usuario) {
        if (u.pass == pass) {
            this.pactual = u;
            this.service.setUsuario(u);
            this.user = true;
            this.service.setUser(this.user);
            break;
        }
      }
    }
    if (this.user) {
        this._router.navigate(['PerfilPublicoDetail', {id: this.pactual.id}]);
    }
  }
  
  save() {
    this.service.savePerfil(this.perfil);
    this._router.navigate(['Index']);
  }
}