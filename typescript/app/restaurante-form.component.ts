import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Restaurante, RestauranteService}   from './restaurante.service';

@Component({
  template: `
  <h2>Restaurante "{{restaurante.title}}"</h2>
  <div *ngIf="restaurante.id">
    <label>Id: </label>{{restaurante.id}}</div>
    <div>
        <label>Title: </label>
        <input [(ngModel)]="restaurante.title" placeholder="title"/>
    </div>
    <div>
        <label>Abstract: </label>
        <textarea [(ngModel)]="restaurante.abstract" placeholder="abstract"></textarea>
    </div>
    <div>
        <label>Details: </label>
        <textarea [(ngModel)]="restaurante.details" placeholder="details"></textarea>
    </div>
    <div>
        <label>Thumbnail: </label>
        <input [(ngModel)]="restaurante.thumbnail" placeholder="thumbnail"/>
    </div>
    <p>
        <button (click)="cancel()">Cancel</button>
        <button (click)="save()">Save</button>
    </p>`
})
export class RestauranteFormComponent {

  newRestaurante: boolean;
  restaurante: Restaurante;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: RestauranteService){

      let id = routeParams.get('id');
      if(id){
        service.getRestaurante(id).subscribe(
          restaurante => this.restaurante = restaurante,
          error => console.error(error)
        );
        this.newRestaurante = false;
      } else {
        this.restaurante = new Restaurante(undefined,'','');
        this.newRestaurante = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveRestaurante(this.restaurante);
    window.history.back();
  }
}
