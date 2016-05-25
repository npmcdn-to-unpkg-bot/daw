import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';
import {Receta, RecetaService} from './receta.service';
import {Restaurante, RestauranteService} from './restaurante.service';

@Component({
directives: [ROUTER_DIRECTIVES],
  template: `
    <div *ngIf="user" class="container-fluid">        
        <div *ngIf="perfil.id == pactual.id" class="col-xs-2 col-md-2">
            <ul class="nav nav-pills nav-stacked">
                <li>
                    <a [routerLink]="['PerfilDetail', {id: perfil.id}]">Mi Cuenta</a>
                </li>
                <li>
                    <a [routerLink]="['PerfilMisRecetas', {id: perfil.id}]">Mis Recetas</a>
                </li>
                <li class="active">
                    <a>Favoritos</a>
                </li>
                <li>
                    <a [routerLink]="['RecetaNew']">Añadir Receta</a>
                </li>
                <li>
                    <a [routerLink]="['PerfilAjustes', {id: perfil.id}]">Ajustes</a>
                </li>
            </ul>
        </div>
        <div class="row">   
            <div class="col-xs-2 col-md-8">
                <h2>Mis Recetas favoritas</h2>
                <div *ngFor="#fav of perfil.recFavs">
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
                <div *ngFor="#fav of perfil.restFavs">
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
  `
})
export class PerfilDetailFavoritosComponent { 
    
    perfil: Perfil;
    recetas: Receta[];
    restaurantes: Restaurante[];
    pactual: Perfil;
    user: boolean;
    
    constructor(
        private router: Router,
        routeParams: RouteParams,
        private service: PerfilService,
        private recetaService: RecetaService,
        private restauranteService: RestauranteService 
    ) {
        let id = routeParams.get('id');
        service.getPerfil(id).subscribe(
            perfil => this.perfil = perfil,
            error => console.error(error)
        );
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
        this.service.savePerfil(this.perfil);
        window.history.back();
    }

    deletePhoto() {
        this.perfil.thumbnail = '';
    }
}