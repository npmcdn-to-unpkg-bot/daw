import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';
import {Receta, RecetaService} from './receta.service';
import {Restaurante, RestauranteService} from './restaurante.service';

@Component({
directives: [ROUTER_DIRECTIVES],
  template: `
    <div *ngIf="user" class="container-fluid">
        <div class="row">
            <div class="col-xs-2 col-md-2">
                <ul class="nav nav-pills nav-stacked">
                    <li>
                        <a [routerLink]="['PerfilDetail']">Mi Cuenta</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilMisRecetas']">Mis Recetas</a>
                    </li>
                    <li>
                        <a [routerLink]="['RecetaNew']">Añadir Receta</a>
                    </li>
                    <li class="active">
                        <a>Favoritos</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['RestauranteNew']">Añadir Restaurante</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['PerfilMisRestaurantes']">Ver restaurantes</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['TipoComidaNew']">Añadir Tipo comida</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['PerfilMisTiposComidas']">Ver tipo comida</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilAjustes']">Ajustes</a>
                    </li>
                </ul>
            </div>
            <div class="row">   
                <div class="col-xs-2 col-md-8">
                    <h2>Mis Recetas favoritas</h2>
                    <div *ngFor="#fav of pactual.recFavs">
                        <div *ngFor="#receta of recetas">
                            <div *ngIf="receta.id == fav" class="col-xs-6 col-md-4">
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
                </div>
                <div class="col-xs-2 col-md-2"></div>
                    <div class="col-xs-2 col-md-8">
                    <h2>Mis Restaurantes Favoritos</h2>
                    <div *ngFor="#fav of pactual.restFavs">
                        <div *ngFor="#rest of restaurantes">
                            <div *ngIf="rest.id == fav" class="col-xs-6 col-md-4">
                                <div class="thumbnail">
                                    <img src="{{rest.thumbnail}}" alt="{{rest.title}}">
                                    <div class="caption">
                                        <h3><a [routerLink]="['RestauranteDetail', {id: rest.id}]">{{rest.title}}</a></h3>
                                        <p>{{rest.abstract}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
})
export class PerfilDetailFavoritosComponent {

    recetas: Receta[];
    restaurantes: Restaurante[];
    pactual: Perfil;
    user: boolean;
    admin: boolean;
    
    constructor(
        private router: Router,
        routeParams: RouteParams,
        private service: PerfilService,
        private recetaService: RecetaService,
        private restauranteService: RestauranteService 
    ) {
        service.getUsuario().subscribe(
            pactual => this.pactual = pactual,
            error => console.error(error)
        );
        service.getUser().subscribe(
            user => this.user = user,
            error => console.error(error)
        );
        service.getAdmin().subscribe(
            admin => this.admin = admin,
            error => console.error(error)
        );
    }
    ngOnInit(){
      this.recetaService.getRecetas().subscribe(
        recetas => this.recetas = recetas,
        error => console.log(error)
      );
      this.restauranteService.getRestaurantes().subscribe(
        restaurantes => this.restaurantes = restaurantes,
        error => console.log(error)
      );
    }
    
    save() {
        this.service.savePerfil(this.pactual);
        window.history.back();
    }

    deletePhoto() {
        this.pactual.thumbnail = '';
    }
}