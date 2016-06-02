import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';
import {Receta, RecetaService} from './receta.service';

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
                    <li class="active">
                        <a>Mis Recetas</a>
                    </li>
                    <li>
                        <a [routerLink]="['RecetaNew']">Añadir Receta</a>
                    </li>
                    <li >
                        <a [routerLink]="['PerfilMisFavoritos']">Favoritos</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['RestauranteNew']">Añadir Restaurante</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['PerfilMisRestaurantes']">Ver restaurantes</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilAjustes']">Ajustes</a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-2 col-md-8">
                <div *ngFor="#receta of recetas">
                    <div class="col-xs-6 col-md-4" *ngIf="receta.userid == pactual.id">
                    <div class="thumbnail">
                        <img src="{{receta.thumbnail}}" alt="{{receta.title}}">
                        <div class="caption">
                            <h3><a [routerLink]="['RecetaEdit', {id: receta.id}]">{{receta.title}}</a></h3>
                            <p>{{receta.abstract}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
})
export class PerfilDetailRecetasComponent implements OnInit {
    
    recetas: Recetas[];
    pactual: Perfil;
    user: boolean;
    admin: boolean;
    
    constructor(
    private router: Router,
    routeParams: RouteParams,
    private service: PerfilService,
    private recetasService: RecetaService,
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
        this.recetasService.getRecetas().subscribe(
        recetas => this.recetas = recetas,
        error => console.log(error),
        );
    }
}