import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Restaurante, RestauranteService}   from './restaurante.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container-fluid">
      <h1 class="text-center recetas-h1">Restaurantes</h1>
      <div *ngFor="#restaurante of restaurantes" class="col-xs-6 col-md-4">
          <div class="thumbnail">
              <img src="{{restaurante.thumbnail}}" alt="{{restaurante.title}}">
              <div class="caption">
                  <h3><a [routerLink]="['RestauranteDetail', {id: restaurante.id}]">{{restaurante.title}}</a></h3>
                  <p>{{restaurante.abstract}}</p>
              </div>
          </div>
      </div>
    </div>
    <button (click)="newRestaurante()">Nuevo Restaurante</button>
    <button (click)="gotoRecetas()">Ir a Recetas</button>
  `
})
export class RestauranteListComponent implements OnInit {

    restaurantes: Restaurante[];

    constructor(private router:Router, private service: RestauranteService) {}

    ngOnInit(){
      this.service.getRestaurantes().subscribe(
        restaurantes => this.restaurantes = restaurantes,
        error => console.log(error)
      );
    }

    newRestaurante() {
      this.router.navigate(['RestauranteNew']);
    }
    gotoRecetas() {
        this.router.navigate(['Recetas']);
    }
}
