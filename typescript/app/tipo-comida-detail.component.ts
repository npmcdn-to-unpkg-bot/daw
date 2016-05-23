import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {TipoComida, TipoComidaService} from './tipo-comida.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
      <div class="thumbnail-restaurante" style="background: url({{restaurante.thumbnailbig}}) no-repeat 0 30px fixed; background-size: 100%">
      </div>
      <div class="container-fluid seccInter">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center">{{restaurante.title}}</h2>
            <button (click)="editRestaurante()" type="submit" class="btn btn-default publicar">Editar</button>
            <button (click)="removeRestaurante()" type="submit" class="btn btn-default publicar">Eliminar</button>
            <div class="contenido" [innerHtml]="restaurante.details"></div>
            <div class="row">
                <div class="col-md-12">
                    <h3>Localización</h3>
                    <iframe src="{{restaurante.map}}" width="100%" height="480"></iframe>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <h3 class="text-center recetas-h1">Restaurantes relacionados</h3>
        <div *ngFor="#restaurante of restaurantes" class="col-xs-6 col-md-4">
            <div class="thumbnail">
                <img src="{{restaurante.thumbnail}}" alt="{{restaurante.title}}">
                <div class="caption">
                    <h3><a [routerLink]="['RestauranteDetail', {id: restaurante.id}]">{{restaurante.title}}</a></h3>
                    <p>{{restaurante.abstract}}</p>
                </div>
            </div>
        </div>
      </div>`
})

export class TipoComidaDetailComponent {
    
    tipocomida: TipoComida;
    
    constructor(
private router: Router,
    )
}