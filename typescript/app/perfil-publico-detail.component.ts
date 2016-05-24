import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';
import {Receta, RecetaService} from './receta.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
    <p>{{pactual.user}}</p>
     <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 perfil-publico">
                <img class="avatar" src="{{perfil.thumbnail}}" width="200px" height="200px"/>
                <h3>@{{perfil.user}}</h3>
                <p>{{perfil.descripcion}}</p>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <h1 class="text-center recetas-h1">Recetas de {{perfil.user}}</h1>
        <div *ngFor="#receta of recetas">
            <div class="col-xs-6 col-md-4" *ngIf="receta.userid == perfil.id">
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

export class PerfilPublicoDetailComponent implements OnInit{ 
    
    perfil: Perfil;
    recetas: Receta[];
    pactual: Perfil;
    
    constructor(
        private router: Router,
        routeParams: RouteParams,
        private service: PerfilService,
        private recetasService: RecetaService,
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
    }
    
    ngOnInit() {
        this.recetasService.getRecetas().subscribe(
            recetas => this.recetas = recetas,
            error => console.log(error),
        );
        /*this.service.getUsuario().subscribe(
            pactual => this.pactual = pactual,
            error => console.log(error),
      );*/
    }
    
}