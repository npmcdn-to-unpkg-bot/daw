import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Receta, RecetaService}   from './receta.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Recetas</h2>
    <ul class="items">
      <li *ngFor="#receta of recetas">
        <a [routerLink]="['RecetaDetail', {id: receta.id}]">{{receta.title}}</a>
        {{receta.abstract}}
      </li>
    </ul>
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
