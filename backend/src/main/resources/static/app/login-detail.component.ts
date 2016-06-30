import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {User, LoginService} from './login.service';

@Component({
directives: [ROUTER_DIRECTIVES],
  template: `
    <div *ngIf="user" class="container-fluid">
        <div class="row">
            <div class="col-xs-2 col-md-2">
                <ul class="nav nav-pills nav-stacked">
                    <li class="active">
                        <a>Mi Cuenta</a>
                    </li>
                    <li>
                        <a>Mis Recetas</a>
                    </li>
                    <li>
                        <a>Añadir Receta</a>
                    </li>
                    <li>
                        <a>Favoritos</a>
                    </li>
                    <li *ngIf="service.isAdmin">
                        <a>Añadir Restaurante</a>
                    </li>
                    <li *ngIf="service.isAdmin">
                        <a>Ver restaurantes</a>
                    </li>
                    <li *ngIf="service.isAdmin">
                        <a>Añadir Tipo comida</a>
                    </li>
                    <li *ngIf="service.isAdmin">
                        <a>Ver tipo comida</a>
                    </li>
                    <li>
                        <a>Ajustes</a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-2 col-md-8">
                <div class="cabecera-subrayada">
                <h1>{{user.user}}</h1>
                </div>
                <div class="imagen-de-perfil">
                    <img src="{{user.thumbnail}}" width="200px" height="200px" />
                    <div class="botones-foto">
                        <button type="submit" (click)="deletePhoto()" class="btn btn-default separado">Quitar</button>
                        <button type="submit" class="btn btn-default separado">Subir...</button>
                    </div>
                </div>
                <div class="inputs">
                    <input type="text" class="form-control" [(ngModel)]="user.name" placeholder="Nombre"/>
                    <input type="text" class="form-control" [(ngModel)]="user.apellidos" placeholder="Apellidos"/>
                    <textarea type="text" rows="9" class="form-control" [(ngModel)]="user.descripcion" placeholder="Descripción"></textarea>
                    
                    <input type="text" class="form-control" [(ngModel)]="user.thumbnail" placeholder="Photo"/>
                    <button (click)="save()" type="submit" class="btn btn-default">Guardar</button>
                </div>
            </div>
        </div>
    </div>
  `
})
export class LoginDetailComponent {

    user: User;
    
    constructor(
    private router: Router,
    routeParams: RouteParams,
    private service: LoginService,
    ) {
        this.user = service.getUser();
    }
    
    save() {
    
    	this.service.saveUser(this.user).subscribe(
	    	user => {}, 
	    	error => console.error('Error al guardar un usuario: '+error)
	    );
        window.history.back();
    }

    deletePhoto() {
        this.user.thumbnail = '';
    }
}