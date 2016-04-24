import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {LogIn, LogInService}   from './login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="col-xs-6 col-md-6 text-center centrado">
					<h1>Cookcinando</h1>
					<form>
		 				<div class="form-group">
		 					<input type="text" class="form-control" id="username" placeholder="Nombre de usuario">
		 				</div>
		 				<div class="form-group">
						    <input type="email" class="form-control" id="email" placeholder="Dirección de email">
						</div>
						<div class="form-group">
						    <input type="password" class="form-control" id="password" placeholder="Contraseña">
						</div>
						<div class="form-group">
						    <input type="password" class="form-control" id="re-password" placeholder="Repetir ontraseña">
						</div>
						<button type="submit" class="btn btn-default">Entrar</button>
					</form>
				</div>
    
                <div class="col-xs-6 col-md-6 text-center centrado">
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
export class LogInDetailComponent {

    

    constructor(
    private router: Router,
    routeParams: RouteParams,
    private service: LogInService,
   
    ) {
        let id = routeParams.get('id');
        service.getRestaurante(id).subscribe(
            restaurante => this.restaurante = restaurante,
            error => console.error(error)
        );
    }
     ngOnInit(){
        
    }
    
    logIn(){
    
    }
    
    createUser(){
    
    }
    
}










