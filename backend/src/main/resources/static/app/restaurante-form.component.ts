import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Restaurante, RestauranteService}   from './restaurante.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
   <div *ngIf="restaurante">
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
                    <li>
                        <a>Añadir Receta</a>
                    </li>
                    <li>
                        <a>Favoritos</a>
                    </li>
                    <li class="active">
                        <a>Añadir Restaurante</a>
                    </li>
                    <li>
                        <a>Ver restaurantes</a>
                    </li>
                    <li>
                        <a>Añadir Tipo comida</a>
                    </li>
                    <li>
                        <a>Ver tipo comida</a>
                    </li>
                    <li>
                        <a>Ajustes</a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-2 col-md-8">
                <div class="cabecera-subrayada">
                    <h1>Añadir o editar nuevo restaurante</h1>
                </div>
                <div class="inputs-receta">
                    <input [(ngModel)]="restaurante.title" class="form-control" placeholder="Nombre"/>
                    <input [(ngModel)]="restaurante.description" class="form-control" placeholder="Breve descripción" />
                    <textarea rows="9" class="form-control" [(ngModel)]="restaurante.details" placeholder="Detalles"></textarea>
                    <input class="form-control" [(ngModel)]="restaurante.thumbnail" placeholder="Imagen pequeña"/>
                    <input class="form-control" [(ngModel)]="restaurante.thumbnailbig" placeholder="Imagen grande"/>
                    <input class="form-control" [(ngModel)]="restaurante.map" placeholder="URL Mapa"/>
                    <button (click)="save()" type="submit" class="btn btn-default publicar">Publicar</button>
                    <button (click)="cancel()" type="submit" class="btn btn-default publicar">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    </div>`
})
export class RestauranteFormComponent {

  newRestaurante: boolean;
  restaurante: Restaurante;

  constructor(private _router:Router,
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
        this.restaurante = { title: '', description: '', details: '', thumbnail: '', thumbnailbig: '', map: '' };
        this.newRestaurante = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
  	this.service.saveRestaurante(this.restaurante).subscribe(
  		restaurante => {},
  		error => console.error('Error al crear el nuevo restaurante: '+error)
  	);
    window.history.back();
  }
}
