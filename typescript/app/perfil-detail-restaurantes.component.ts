import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';
import {Restaurante, RestauranteService} from './restaurante.service';

@Component({
directives: [ROUTER_DIRECTIVES],
  template: `
    <div *ngIf="admin" class="container-fluid">
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
                    <li>
                        <a [routerLink]="['PerfilMisFavoritos']">Favoritos</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['RestauranteNew']">Añadir Restaurante</a>
                    </li>
                    <li class="active" *ngIf="admin">
                        <a>Ver restaurantes</a>
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
            <div class="col-xs-2 col-md-8">
                <div *ngFor="#restaurante of restaurantes">
                    <div class="col-xs-6 col-md-4">
                    <div class="thumbnail">
                        <img src="{{restaurante.thumbnail}}" alt="{{restaurante.title}}">
                        <div class="caption">
                            <h3><a [routerLink]="['RestauranteEdit', {id: restaurante.id}]">{{restaurante.title}}</a></h3>
                            <p>{{restaurante.abstract}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
})
export class PerfilDetailRestaurantesComponent implements OnInit{

    restaurante: Restaurante[];
    pactual: Perfil;
    user: boolean;
    admin: boolean;
    
    constructor(
    private router: Router,
    routeParams: RouteParams,
    private service: PerfilService,
    private restauranteService: RestauranteService,
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
        this.restauranteService.getRestaurantes().subscribe(
        restaurantes => this.restaurantes = restaurantes,
        error => console.log(error),
        );
    }
}