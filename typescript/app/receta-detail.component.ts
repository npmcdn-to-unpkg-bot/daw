import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Receta, RecetaService}   from './receta.service';

@Component({
    template: `
  <h2>Receta "{{receta.title}}"</h2>
  <div>
    <p>{{receta.abstract}}</p>
  </div>
  <div>
    <p>{{receta.details}}</p>
  </div>
  <div>
    <img src="{{receta.thumbnail}}" />
  </div>
  <p>
    <button (click)="removeReceta()">Eliminar</button>
    <button (click)="editReceta()">Editar</button>
    <br>
    <button (click)="gotoReceta()">All recetas</button>
  </p>`
})
export class RecetaDetailComponent {

    receta: Receta;

    constructor(private router: Router, routeParams: RouteParams, private service: RecetaService) {
        let id = routeParams.get('id');
        service.getReceta(id).subscribe(
            receta => this.receta = receta,
            error => console.error(error)
        );
    }

    removeReceta() {
        let okResponse = window.confirm("¿Quieres eliminar este restaurante?");
        if (okResponse) {
            this.service.removeReceta(this.receta).subscribe(
                _ => this.router.navigate(['Receta']),
                error => console.error(error)
            )
        }
    }

    editReceta() {
        this.router.navigate(['RecetaEdit', { id: this.receta.id }]);
    }

    gotoReceta() {
        this.router.navigate(['Receta']);
    }
}
