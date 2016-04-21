import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Receta, RecetaService}   from './receta.service';

@Component({
  template: `
  <h2>Receta "{{receta.title}}"</h2>
  <div *ngIf="receta.id">
    <label>Id: </label>{{receta.id}}</div>
    <div>
        <label>Title: </label>
        <input [(ngModel)]="receta.title" placeholder="title"/>
    </div>
    <div>
        <label>Abstract: </label>
        <textarea [(ngModel)]="receta.abstract" placeholder="abstract"></textarea>
    </div>
    <div>
        <label>Details: </label>
        <textarea [(ngModel)]="receta.details" placeholder="details"></textarea>
    </div>
    <div>
        <label>Thumbnail: </label>
        <input [(ngModel)]="receta.thumbnail" placeholder="thumbnail"/>
    </div>
    <p>
        <button (click)="cancel()">Cancel</button>
        <button (click)="save()">Save</button>
    </p>`
})
export class RecetaFormComponent {

  newReceta: boolean;
  receta: Receta;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: RecetaService){

      let id = routeParams.get('id');
      if(id){
        service.getReceta(id).subscribe(
          receta => this.receta = receta,
          error => console.error(error)
        );
        this.newReceta = false;
      } else {
        this.receta = new Receta(undefined,'','');
        this.newReceta = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveReceta(this.receta);
    window.history.back();
  }
}
