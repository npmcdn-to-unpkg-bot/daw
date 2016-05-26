import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Restaurante, RestauranteService}   from './restaurante.service';
import {Perfil, PerfilService} from './perfil.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
   <div *ngIf="admin" class="container-fluid">
        <div class="row">
            <div class="col-xs-2 col-md-2">
                <ul class="nav nav-pills nav-stacked">
                    <li>
                        <a [routerLink]="['PerfilDetail', {id: pactual.id}]"> Mi Cuenta</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilMisRecetas', {id: pactual.id}]"> Mis Recetas</a>
                    </li>
                    <li >
                        <a [routerLink]="['PerfilMisFavoritos', {id: pactual.id}]"> Favoritos</a>
                    </li>
                    <li>
                        <a [routerLink]="['RecetaNew']">Añadir Receta</a>
                    </li>
                    <li class="active">
                        <a>Añadir Restaurante</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilAjustes', {id: pactual.id}]">Ajustes</a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-2 col-md-8">
                <div class="cabecera-subrayada">
                    <h1>Añadir o editar nuevo restaurante</h1>
                </div>
                <div class="inputs-receta">
                    <input [(ngModel)]="restaurante.title" class="form-control" placeholder="Nombre"/>
                    <input [(ngModel)]="restaurante.abstract" class="form-control" placeholder="Breve descripción" />
                    <textarea rows="9" class="form-control" [(ngModel)]="restaurante.details" placeholder="Detalles"></textarea>
                    <input class="form-control" [(ngModel)]="restaurante.thumbnail" placeholder="Imagen pequeña"/>
                    <input class="form-control" [(ngModel)]="restaurante.thumbnailbig" placeholder="Imagen grande"/>
                    <input class="form-control" [(ngModel)]="restaurante.map" placeholder="URL Mapa"/>
                    <button (click)="save()" type="submit" class="btn btn-default publicar">Publicar</button>
                    <button (click)="cancel()" type="submit" class="btn btn-default publicar">Cancelar</button>
                </div>
            </div>
        </div>
    </div>`
})
export class RestauranteFormComponent {

  newRestaurante: boolean;
  restaurante: Restaurante;
    user: boolean;
    admin: boolean;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: RestauranteService,
    private perfilService: PerfilService){

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
        perfilService.getUsuario().subscribe(
                pactual => this.pactual = pactual,
                error => console.error(error)
            );
        perfilService.getUser().subscribe(
            user => this.user = user,
            error => console.error(error)
        );
        perfilService.getAdmin().subscribe(
            admin => this.admin = admin,
            error => console.error(error)
        );
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveRestaurante(this.restaurante);
    window.history.back();
  }
}
