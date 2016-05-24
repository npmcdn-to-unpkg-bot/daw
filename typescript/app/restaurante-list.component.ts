import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Restaurante, RestauranteService}   from './restaurante.service';
import {Perfil, PerfilService} from './perfil.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container-fluid">
      <h1 class="text-center recetas-h1">Restaurantes</h1>
    <div><button style="margin-bottom: 10px; margin-left: 20px;" (click)="newRestaurante()" class="btn btn-default publicar">Nuevo Restaurante</button></div>
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
  `
})
export class RestauranteListComponent implements OnInit {

    restaurantes: Restaurante[];
    pactual: Perfil;

    constructor(private router:Router, private service: RestauranteService, private perfilService: PerfilService) {}

    ngOnInit(){
      this.service.getRestaurantes().subscribe(
        restaurantes => this.restaurantes = restaurantes,
        error => console.log(error)
      );
        this.perfilService.getUsuario().subscribe(
            pactual => this.pactual = pactual,
            error => console.error(error)
        );
    }

    newRestaurante() {
      this.router.navigate(['RestauranteNew']);
    }
}
