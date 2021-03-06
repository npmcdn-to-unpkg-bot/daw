import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {TipoComida, TipoComidaService} from './tipo-comida.service';
import {Receta, RecetaService} from './receta.service';
import {Restaurante, RestauranteService} from './restaurante.service';
import {Perfil, PerfilService} from './perfil.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
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
      `
})

export class TipoComidaDetailComponent {
    
    tipocomida: TipoComida;
    tiposcomidas: TipoComida[];
    recetas: Receta[];
    restaurantes: Restaurante[];
    pactual: Perfil;
    user: boolean;
    admin: boolean;
    
    constructor(
        private router: Router,
        routeParams: RouteParams,
        private service: TipoComidaService,
        private recetaService: RecetaService,
        private restauranteService: RestauranteService,
        private perfilService: PerfilService
        
    ){
        let id = routeParams.get('id');
        service.getTipoComida(id).subscribe(
            tipocomida => this.tipocomida = tipocomida,
            error => console.error(error)
        );
    }
    ngOnInit(){
        this.service.getTiposComidas().subscribe(
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
       this.perfilService.getUsuario().subscribe(
            pactual => this.pactual = pactual,
            error => console.error(error)
        );
        this.perfilService.getUser().subscribe(
            user => this.user = user,
            error => console.error(error)
        );
        this.perfilService.getAdmin().subscribe(
            admin => this.admin = admin,
            error => console.error(error)
        );
    }
    removeTipoComida() {
        let okResponse = window.confirm("¿Quieres eliminar este tipo de comida?");
        if (okResponse) {
            this.service.removeTipoComida(this.tipocomida).subscribe(
                _ => this.router.navigate(['TiposComidas']),
                error => console.error(error)
            )
        }
    }
    
    editTipoComida() {
        this.router.navigate(['TipoComidaEdit', { id: this.tipocomida.id }]);
    }
    
    gotoTipoComida() {
        this.router.navigate(['TiposComidas']);
    }
    
}