import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Restaurante, RestauranteService}   from './restaurante.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Restaurantes</h2>
    <ul class="items">
      <li *ngFor="#restaurante of restaurantes">
        <a [routerLink]="['RestauranteDetail', {id: restaurante.id}]">{{restaurante.title}}</a>
        {{restaurante.abstract}}
      </li>
    </ul>
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
