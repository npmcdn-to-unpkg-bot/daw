import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Receta, RecetaService}   from './receta.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container-fluid">
      <h1 class="text-center recetas-h1">Recetas</h1>
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
    <button (click)="newReceta()">Nuevo receta</button>
    <button (click)="gotoRestaurantes()">Ir a restaurantes</button>
  `
})
export class RecetaListComponent implements OnInit {

    recetas: Receta[];

    constructor(private router:Router, private service: RecetaService) {}

    ngOnInit(){
      this.service.getRecetas().subscribe(
        recetas => this.recetas = recetas,
        error => console.log(error)
      );
    }

    newReceta() {
      this.router.navigate(['RecetaNew']);
    }
    gotoRestaurantes() {
      this.router.navigate(['Restaurantes']);
    }
}
