import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {TipoComida, TipoComidaService}   from './tipo-comida.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container-fluid">
      <h1 class="text-center recetas-h1">Restaurantes</h1>
    <div><button style="margin-bottom: 10px; margin-left: 20px;" (click)="newTipoComida()" class="btn btn-default publicar">Nuevo Restaurante</button></div>
      <div *ngFor="#tipocomida of tiposcomidas" class="col-xs-6 col-md-4">
          <div class="thumbnail">
              <img src="{{tipocomida.thumbnail}}" alt="{{restaurante.title}}">
              <div class="caption">
                  <h3><a [routerLink]="['TipoComidaDetail', {id: tipocomida.id}]">{{tipocomida.title}}</a></h3>
                  <p>{{tipocomida.abstract}}</p>
              </div>
          </div>
      </div>
    </div>
  `
})
export class TipoComidaListComponent implements OnInit {

    tipocomida: TipoComida[];

    constructor(private router:Router, private service: TipoComidaService) {}

    ngOnInit(){
      this.service.getRestaurantes().subscribe(
        tiposcomidas => this.tiposcomidas = tiposcomidas,
        error => console.log(error)
      );
    }

    newRestaurante() {
      this.router.navigate(['TipoComidaNew']);
    }
}
