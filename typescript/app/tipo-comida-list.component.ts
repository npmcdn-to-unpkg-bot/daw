import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {TipoComida, TipoComidaService}   from './tipo-comida.service';
import {Perfil, PerfilService} from './perfil.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container-fluid">
      <h1 class="text-center recetas-h1">Tipos de Comida</h1>
    <div *ngIf="admin"><button style="margin-bottom: 10px; margin-left: 20px;" (click)="newTipoComida()" class="btn btn-default publicar">Nuevo Tipo de Comida</button></div>
      <div *ngFor="#tipocomida of tiposcomidas" class="col-xs-6 col-md-4">
          <div class="thumbnail">
              <img src="{{tipocomida.thumbnail}}" alt="{{tipocomida.title}}">
              <div class="caption">
                  <h3><a [routerLink]="['TipoComidaDetail', {id: tipocomida.id}]">{{tipocomida.title}}</a></h3>
                  <p>{{tipocomida.abstract}}</p>
              </div>
          </div>
      </div>
    </div>
  `
})
export class TipoComidaListComponent implements OnInit {

    tiposcomidas: TipoComida[];
    pactual: Perfil;
    user: boolean;
    admin: boolean;

    constructor(private router:Router, private service: TipoComidaService, private perfilService: PerfilService) {}

    ngOnInit(){
      this.service.getTiposComidas().subscribe(
        tiposcomidas => this.tiposcomidas = tiposcomidas,
        error => console.log(error)
      );
        this.perfilService.getUsuario().subscribe(
            pactual => this.pactual = pactual,
            error => console.error(error)
        );
        this.perfilService.getUsuario().subscribe(
            user => this.user = user,
            error => console.error(error)
        );
        this.perfilService.getAdmin().subscribe(
            admin => this.admin = admin,
            error => console.error(error)
        );
    }

    newTipoComida() {
      this.router.navigate(['TipoComidaNew']);
    }
}
