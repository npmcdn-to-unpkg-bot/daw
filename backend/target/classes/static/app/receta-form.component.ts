import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Receta, RecetaService}   from './receta.service';
import {LoginService} from './login.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
        <div *ngIf="receta">
      <div class="container-fluid">
        <div class="row">
            <div class="col-xs-2 col-md-2">
                <ul class="nav nav-pills nav-stacked">
                    <li>
                        <a>Mi Cuenta</a>
                    </li>
                    <li>
                        <a>Mis Recetas</a>
                    </li>
                    <li class="active">
                        <a>Añadir Receta</a>
                    </li>
                    <li>
                        <a>Favoritos</a>
                    </li>
                    <li *ngIf="loginService.isAdmin">
                        <a>Añadir Restaurante</a>
                    </li>
                    <li *ngIf="loginService.isAdmin">
                        <a>Ver restaurantes</a>
                    </li>
                    <li *ngIf="loginService.isAdmin">
                        <a>Añadir Tipo comida</a>
                    </li>
                    <li *ngIf="loginService.isAdmin">
                        <a>Ver tipo comida</a>
                    </li>
                    <li>
                        <a>Ajustes</a>
                    </li>
                </ul>
            </div>
            <div *ngIf="!newReceta" class="col-xs-2 col-md-8">
                <div class="cabecera-subrayada">
                    <h1>Editar receta</h1>
                </div>
                <div class="inputs-receta">
                  <input type="text" class="form-control" [(ngModel)]="receta.title" placeholder="Título"/>
                  <input type="text" class="form-control" [(ngModel)]="receta.abstract" placeholder="Descripción" />
                  <textarea [(ngModel)]="receta.details" rows="9" class="form-control" placeholder="Detalles de la receta"></textarea>
                  <input type="text" class="form-control" [(ngModel)]="receta.thumbnail" placeholder="Imagen pequeña" />
                  <input type="text" class="form-control" [(ngModel)]="receta.thumbnailbig" placeholder="Imagen grande" />
                  <button (click)="cancel()" type="submit" class="btn btn-default publicar">Cancelar</button>
                  <button (click)="save()" type="submit" class="btn btn-default publicar">Publicar</button>
                </div>
            </div>
            <div *ngIf="newReceta" class="col-xs-2 col-md-8">
                <div class="cabecera-subrayada">
                    <h1>Añadir receta</h1>
                </div>
                <div class="inputs-receta">
                  <input type="text" class="form-control" [(ngModel)]="receta.title" placeholder="Título"/>
                  <input type="text" class="form-control" [(ngModel)]="receta.abstract" placeholder="Descripción" />
                  <textarea [(ngModel)]="receta.details" rows="9" class="form-control" placeholder="Detalles de la receta"></textarea>
                  <input type="text" class="form-control" [(ngModel)]="receta.thumbnail" placeholder="Imagen pequeña" />
                  <input type="text" class="form-control" [(ngModel)]="receta.thumbnailbig" placeholder="Imagen grande" />
                  <button (click)="cancel()" type="submit" class="btn btn-default publicar">Cancelar</button>
                  <button (click)="save()" type="submit" class="btn btn-default publicar">Publicar</button>
                </div>
            </div>
        </div>
    </div>
    </div>`
})
export class RecetaFormComponent{

    newReceta: boolean;
    receta: Receta;
    
  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: RecetaService,
    private loginService: LoginService
  ){

      let id = routeParams.get('id');
      if(id){
        service.getReceta(id).subscribe(
          receta => this.receta = receta,
          error => console.error(error)
        );
        this.newReceta = false;
      } else {
        this.receta = { title: '', description: '', details: '', thumbnail: '', thumbnailbig: '' };
        this.newReceta = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
      this.service.saveReceta(this.receta).subscribe(
    	receta => {}, 
    	error => console.error('Error al crear nueva receta: '+error)
    );
    window.history.back();
  }
}
