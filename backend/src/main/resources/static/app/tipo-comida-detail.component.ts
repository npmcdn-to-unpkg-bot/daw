import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Tipocomida, TipocomidaService} from './tipo-comida.service';
import {Receta, RecetaService} from './receta.service';
import {Restaurante, RestauranteService} from './restaurante.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div *ngIf="tipocomida">
      <div class="thumbnail-restaurante" style="background: url({{tipocomida.thumbnailbig}}) no-repeat 0 30px fixed; background-size: 100%">
      </div>
      <div class="container-fluid seccInter">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center">{{tipocomida.title}}</h2>
            <button *ngIf="admin" (click)="editTipoComida()" type="submit" class="btn btn-default publicar">Editar</button>
            <button *ngIf="admin" (click)="removeTipoComida()" type="submit" class="btn btn-default publicar">Eliminar</button>
            <div class="contenido" [innerHtml]="tipocomida.details"></div>
            
          </div>
        </div>
        <div class="row">   
            <div class="container-fluid">
                <h2>Recetas de {{tipocomida.title}}</h2>
                <div *ngFor="#fav of tipocomida.recetas">
                    <div *ngFor="#receta of recetas">
                        <div *ngIf="receta.id == fav" class="col-xs-6 col-md-4">
                            <div class="thumbnail">
                                <img src="{{receta.thumbnail}}" alt="{{receta.title}}">
                                <div class="caption">
                                    <h3><a [routerLink]="['RecetaDetail', {id: receta.id}]">{{receta.title}}</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <h2>Restaurantes de {{tipocomida.title}}</h2>
                <div *ngFor="#fav of tipocomida.restaurantes">
                    <div *ngFor="#rest of restaurantes">
                        <div *ngIf="rest.id == fav" class="col-xs-6 col-md-4">
                            <div class="thumbnail">
                                <img src="{{rest.thumbnail}}" alt="{{rest.title}}">
                                <div class="caption">
                                    <h3><a [routerLink]="['RestauranteDetail', {id: rest.id}]">{{rest.title}}</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
      `
})

export class TipocomidaDetailComponent {
    
    tipocomida: Tipocomida;
    tipocomidas: Tipocomida[];
    recetas: Receta[];
    restaurantes: Restaurante[];
    
    user: boolean;
    admin: boolean;
    
    constructor(
        private router: Router,
        routeParams: RouteParams,
        private service: TipocomidaService,
        private recetaService: RecetaService,
        private restauranteService: RestauranteService,
        
        
    ){
        let id = routeParams.get('id');
        service.getTipocomida(id).subscribe(
            tipocomida => this.tipocomida = tipocomida,
            error => console.error(error)
        );
    }
    ngOnInit(){
        this.service.getTiposcomidas().subscribe(
        	tiposcomidas => this.tiposcomidas = tiposcomidas,
        	error => console.log(error)
        );
        this.recetaService.getRecetas().subscribe(
        	recetas => this.recetas = recetas,
        	error => console.log(error)
      );
      this.restauranteService.getRestaurantes().subscribe(
        restaurantes => this.restaurantes = restaurantes,
        error => console.log(error)
      );
       
        
    }
    removeTipocomida() {
        let okResponse = window.confirm("¿Quieres eliminar este tipo de comida?");
        if (okResponse) {
            this.service.removeTipocomida(this.tipocomida).subscribe(
                _ => this.router.navigate(['TiposComidas']),
                error => console.error(error)
            )
        }
    }
    
    editTipocomida() {
        this.router.navigate(['TipoComidaEdit', { id: this.tipocomida.id }]);
    }
    
    gotoTipocomida() {
        this.router.navigate(['TiposComidas']);
    }
    
}