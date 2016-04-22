import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Restaurante, RestauranteService}   from './restaurante.service';

@Component({
    template: `
      <div class="thumbnail-restaurante" style="background: url({{restaurante.thumbnail}}) no-repeat 0 30px fixed;">
      </div>
      <div class="container-fluid seccInter">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center">{{restaurante.title}}</h2>
            <div class="contenido">
              <h3>Descripción</h3>
              {{restaurante.details}}
             </div>
          </div>
        </div>
      </div>
  <h2>Restaurante "{{restaurante.title}}"</h2>
  <div>
    <p>{{restaurante.abstract}}</p>
  </div>
  <div>
    {{restaurante.details}}
  </div>
  <div>
    <img src="{{restaurante.thumbnail}}" />
  </div>
  <p>
    <button (click)="removeRestaurante()">Eliminar</button>
    <button (click)="editRestaurante()">Editar</button>
    <br>
    <button (click)="gotoRestaurantes()">All restaurantes</button>
  </p>`
})
export class RestauranteDetailComponent {

    restaurante: Restaurante;

    constructor(private router: Router, routeParams: RouteParams, private service: RestauranteService) {
        let id = routeParams.get('id');
        service.getRestaurante(id).subscribe(
            restaurante => this.restaurante = restaurante,
            error => console.error(error)
        );
    }

    removeRestaurante() {
        let okResponse = window.confirm("¿Quieres eliminar este restaurante?");
        if (okResponse) {
            this.service.removeRestaurante(this.restaurante).subscribe(
                _ => this.router.navigate(['Restaurantes']),
                error => console.error(error)
            )
        }
    }

    editRestaurante() {
        this.router.navigate(['RestauranteEdit', { id: this.restaurante.id }]);
    }

    gotoRestaurantes() {
        this.router.navigate(['Restaurantes']);
    }
}
