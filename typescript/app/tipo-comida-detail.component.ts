import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {TipoComida, TipoComidaService} from './tipo-comida.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
      <div class="thumbnail-restaurante" style="background: url({{tipocomida.thumbnailbig}}) no-repeat 0 30px fixed; background-size: 100%">
      </div>
      <div class="container-fluid seccInter">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center">{{tipocomida.title}}</h2>
            <button (click)="editTipoComida()" type="submit" class="btn btn-default publicar">Editar</button>
            <button (click)="removeTipoComida()" type="submit" class="btn btn-default publicar">Eliminar</button>
            <div class="contenido" [innerHtml]="tipocomida.details"></div>
            <div class="row">
                <div class="col-md-12">
                    <h3>Localización</h3>
                    <iframe src="{{tipocomida.map}}" width="100%" height="480"></iframe>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <h3 class="text-center recetas-h1">Tipo Comida relacionadas</h3>
        <div *ngFor="#tipocomida of tiposcomidas" class="col-xs-6 col-md-4">
            <div class="thumbnail">
                <img src="{{tipocomida.thumbnail}}" alt="{{tipocomida.title}}">
                <div class="caption">
                    <h3><a [routerLink]="['TipoComidaDetail', {id: tipocomida.id}]">{{restaurante.title}}</a></h3>
                    <p>{{tipocomida.abstract}}</p>
                </div>
            </div>
        </div>
      </div>`
})

export class TipoComidaDetailComponent {
    
    tipocomida: TipoComida;
    tiposcomidas: TipoComida[];
    
    constructor(
        private router: Router,
        routeParams: RouteParams,
        private service: TipoComidaService,
        
    ){
        let id = routeParams.get('id');
        service.getTipoComida(id).subscribe(
            tipocomida => this.tipocomida = tipoComida,
            error => console.error(error)
        );
    }
    ngOnInit(){
        this.tipoComidaService.getTiposComidas().subscribe(
        tiposcomidas => this.tiposcomidas = tiposcomidas,
        error => console.log(error)
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