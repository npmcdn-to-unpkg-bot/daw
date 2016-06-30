import {Component, OnInit}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Login, LoginService} from './login.service';

@Component({
    template: `
        <div class="row">
        
    <div class="col-md-6 col-md-offset-3 center" style="margin-bottom: 75px;">
          <h3>Registrate</h3>
          <div class="form-group">
	 		<input type="text" class="form-control" [(ngModel)]="user.name" id="username" placeholder="Nombre">
	 	  </div>
          <div class="form-group">
	 			<input type="text" class="form-control" [(ngModel)]="user.apellidos" id="username" placeholder="Apellidos">
	 	  </div>
          <div class="form-group">
				<input type="text" [(ngModel)]="user.correo" class="form-control" id="email" placeholder="Dirección de email">
		  </div>
		  <div class="form-group">
			 	<input type="password" [(ngModel)]="user.passwordHash" class="form-control" id="password" placeholder="Contraseña">
		</div>
        <button (click)="save()" type="submit" class="btn btn-default center-block">Entrar</button>
	</div>
        </div>
      `
})
export class LoginFormComponent {
  
  newPerfil: boolean;
  user: User;
  usuario: string;
  pass: string;


  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: LoginService){

      let id = routeParams.get('id');
      if(id){
        service.getUsuario(id).subscribe(
          user => this.user = user,
          error => console.error(error)
        );
        this.newPerfil = false;
      } else {
        this.user = { name: '', apellidos: '', descripcion: '', user: '', roles: [], thumbnail: '', recFavs: [], resFavs: [] };
        this.newPerfil = true;
      }
  }

  ngOnInit(){
    
  }

  cancel() {
    window.history.back();
  }
  
  save() {
  	this.user.roles = ["ROLE_USER"];
    this.service.saveUser(this.user).subscribe(
    	user => {}, 
    	error => console.error('Error al crear nuevo usuario: ' +error)
    );
    this.service.logIn(this.user.name, this.user.passwordHash);
    this._router.navigate(['Index']);
  }
}