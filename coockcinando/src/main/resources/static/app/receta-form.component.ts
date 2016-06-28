import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Receta, RecetaService}   from './receta.service';
import {Perfil, PerfilService}   from './perfil.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
      <div *ngIf="user" class="container-fluid">
        <div class="row">
            <div class="col-xs-2 col-md-2">
                <ul class="nav nav-pills nav-stacked">
                    <li>
                        <a [routerLink]="['PerfilDetail', {id: pactual.id}]">Mi Cuenta</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilMisRecetas', {id: pactual.id}]">Mis Recetas</a>
                    </li>
                    <li class="active">
                        <a>Añadir Receta</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilMisFavoritos', {id: pactual.id}]">Favoritos</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['RestauranteNew']">Añadir Restaurante</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['PerfilMisRestaurantes', {id: pactual.id}]">Ver restaurantes</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilAjustes', {id: pactual.id}]">Ajustes</a>
                    </li>
                </ul>
            </div>
            <div *ngIf="receta.userid == pactual.id" class="col-xs-2 col-md-8">
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
    </div>`
})
export class RecetaFormComponent{

    newReceta: boolean;
    receta: Receta;
    pactual: Perfil;
    user: boolean;
    admin: boolean;
    
  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: RecetaService,
    private perfilService: PerfilService,
  ){

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
      
      this.perfilService.getUsuario().subscribe(
            pactual => this.pactual = pactual,
            error => console.log(error),
        );
      this.perfilService.getUser().subscribe(
            user => this.user = user,
            error => console.log(error),
        );
      this.perfilService.getAdmin().subscribe(
            admin => this.admin = admin,
            error => console.log(error),
        );
  }

  cancel() {
    window.history.back();
  }

  save() {
      this.receta.userid = this.pactual.id;
    this.service.saveReceta(this.receta);
    window.history.back();
  }
}
