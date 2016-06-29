import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Tipocomida, TipocomidaService}   from './tipo-comida.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
   <div *ngIf="tipocomida">
   <div  class="container-fluid">
        <div class="row">
            <div class="col-xs-2 col-md-2">
                <ul class="nav nav-pills nav-stacked">
                    <li>
                        <a >Mi Cuenta</a>
                    </li>
                    <li>
                        <a>Mis Recetas</a>
                    </li>
                    <li>
                        <a >Añadir Receta</a>
                    </li>
                    <li>
                        <a>Favoritos</a>
                    </li>
                    <li >
                        <a>Añadir Restaurante</a>
                    </li>
                    <li>
                        <a >Ver restaurantes</a>
                    </li>
                    <li class="active" >
                        <a>Añadir Tipo comida</a>
                    </li>
                    <li >
                        <a >Ver tipo comida</a>
                    </li>
                    <li>
                        <a >Ajustes</a>
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
	        this.tipocomida = { title: '', description: '', details: '', thumbnail: '', thumbnailbig: '',recetas: [],restaurantes: [] };
	        this.newTipoComida = true;
	      }
  }
  

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveTipocomida(this.tipocomida).subscribe(
  		tipocomida => {},
  		error => console.error('Error al crear el nuevo restaurante: '+error)
  	);
    window.history.back();
  }
}
