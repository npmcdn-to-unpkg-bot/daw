import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Receta, RecetaService} from './receta.service';
import {User, LoginService} from './login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div *ngIf="receta">
    <div class="thumbnail-receta" style=" background: url({{receta.thumbnailbig}}) no-repeat 50% fixed; background-size: 100%;">
    </div>
    <div class="container-fluid">
          <div class="row">
              <div class="col-md-3 info-usuario">
              	<div *ngIf="user">
	                <img class="avatar" src="{{user.thumbnail}}" width="200px" height="200px"/>
    	            <h3><a [routerLink]="['PerfilPublicoDetail', {id: user.id}]">{{user.name}} {{user.apellidos}}</a></h3>
        	        <h4><a [routerLink]="['PerfilPublicoDetail', {id: user.id}]">@{{user.user}}</a></h4>
            	    <p>{{user.descripcion}}</p>
                </div>
                <div *ngIf="loginService.isLogged">
                    <button *ngIf="loginService.user.id == receta.userid" type="submit" class="btn btn-default publicar" (click)="removeReceta()">Eliminar</button>
                    <button *ngIf="loginService.user.id == receta.userid" type="submit" class="btn btn-default publicar" (click)="editReceta()">Editar</button>
                    <button (click)="addFavoritosRec()" type="submit" class="btn btn-default publicar">Añadir a Favoritos</button>
                </div>
              </div>
              <div class="col-md-9">
                  <h2>{{receta.title}}</h2>
                    <div class="contenido" [innerHtml]="receta.details">
                  </div>
              </div>
          </div>
      </div>
      <div class="container-fluid">
            <h3 class="text-center recetas-h1">Recetas relacionadas</h3>
            <div *ngFor="#receta of recetas" class="col-xs-6 col-md-4">
                <div class="thumbnail">
                    <img src="{{receta.thumbnail}}" alt="{{receta.title}}">
                    <div class="caption">
                        <h3><a [routerLink]="['RecetaDetail', {id: receta.id}]">{{receta.title}}</a></h3>
                        <p>{{receta.abstract}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})
export class RecetaDetailComponent implements OnInit{

    receta: Receta;
    recetas: Recetas[];
    user: User;
    constructor(
      private router: Router,
      routeParams: RouteParams,
      private service: RecetaService,
      private recetasService: RecetaService,
      private loginService: LoginService
      ){
        let id = routeParams.get('id');
        service.getReceta(id).subscribe(
            receta => this.receta = receta,
            error => console.error(error)
        );
    }

    ngOnInit(){
        this.recetasService.getRecetas().subscribe(
            recetas => this.recetas = recetas,
            error => console.log(error),
        );
        /*this.loginService.getPerfil(this.receta.userid).subscribe(
        	user => this.user = user,
        	error => console.log(error),
        );*/
    }
    removeReceta() {
        let okResponse = window.confirm("¿Quieres eliminar esta receta?");
        if (okResponse) {
            this.service.removeReceta(this.receta).subscribe(
                _ => this.router.navigate(['Receta']),
                error => console.error(error)
            )
        }
    }

    editReceta() {
        this.router.navigate(['RecetaEdit', { id: this.receta.id }]);
    }
    
    addFavoritosRec(){
        //this.userService.anadirFavoritoRec(this.pactual, this.receta.id);
    }

    gotoReceta() {
        this.router.navigate(['Receta']);
    }
}
