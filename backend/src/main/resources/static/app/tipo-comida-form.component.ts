import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Tipocomida, TipocomidaService}   from './tipo-comida.service';


@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
   <div *ngIf="tipocomida">
   <div *ngIf="admin" class="container-fluid">
        <div class="row">
            <div class="col-xs-2 col-md-2">
                <ul class="nav nav-pills nav-stacked">
                    <li>
                        <a [routerLink]="['PerfilDetail']">Mi Cuenta</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilMisRecetas']">Mis Recetas</a>
                    </li>
                    <li>
                        <a [routerLink]="['RecetaNew']">Añadir Receta</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilMisFavoritos']">Favoritos</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['RestauranteNew']">Añadir Restaurante</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['PerfilMisRestaurantes']">Ver restaurantes</a>
                    </li>
                    <li class="active" *ngIf="admin">
                        <a>Añadir Tipo comida</a>
                    </li>
                    <li *ngIf="admin">
                        <a [routerLink]="['PerfilMisTiposComidas']">Ver tipo comida</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilAjustes']">Ajustes</a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-2 col-md-8">
                <div class="cabecera-subrayada">
                    <h1>Añadir o editar nuevo Tipo de Comida</h1>
                </div>
                <div class="inputs-receta">
                    <input [(ngModel)]="tipocomida.title" class="form-control" placeholder="Nombre"/>
                    <input [(ngModel)]="tipocomida.description" class="form-control" placeholder="Breve descripción" />
                    <textarea rows="9" class="form-control" [(ngModel)]="tipocomida.details" placeholder="Detalles"></textarea>
                    <input class="form-control" [(ngModel)]="tipocomida.thumbnail" placeholder="Imagen pequeña"/>
                    <input class="form-control" [(ngModel)]="tipocomida.thumbnailbig" placeholder="Imagen grande"/>
                    <input class="form-control" [(ngModel)]="tipocomida.map" placeholder="URL Mapa"/>
                    <button (click)="save()" type="submit" class="btn btn-default publicar">Publicar</button>
                    <button (click)="cancel()" type="submit" class="btn btn-default publicar">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    </div>`
})

export class TipocomidaFormComponent {

    newTipoComida: boolean;
    tipocomida: Tipocomida;
    
    user: boolean;
    admin: boolean;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: TipocomidaService){
    let id = routeParams.get('id');
      if(id){
        service.getTipocomida(id).subscribe(
          tipocomida => this.tipocomida = tipocomida,
          error => console.error(error)
        );
        this.newTipoComida = false;
      } else {
        this.tipocomida = new Tipocomida(undefined,'','');
        this.newTipoComida = true;
      }
    }
  

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveTipocomida(this.tipocomida).suscribe(
  		tipocomida => {},
  		error => console.error('Error al crear el nuevo restaurante: '+error)
  	);
    window.history.back();
  }
}
