import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Tipocomida, TipocomidaService}   from './tipo-comida.service';
import {LoginService} from './login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container-fluid">
      <h1 class="text-center recetas-h1">Tipos de Comida</h1>
    <div *ngIf="loginService.isAdmin"><button style="margin-bottom: 10px; margin-left: 20px;" (click)="newTipocomida()" class="btn btn-default publicar">Nuevo Tipo de Comida</button></div>
      <div *ngFor="#tipocomida of tiposcomidas" class="col-xs-6 col-md-4">
          <div class="thumbnail">
              <img src="{{tipocomida.thumbnail}}" alt="{{tipocomida.title}}">
              <div class="caption">
                  <h3><a [routerLink]="['TipoComidaDetail', {id: tipocomida.id}]">{{tipocomida.title}}</a></h3>
                  <p>{{tipocomida.description}}</p>
              </div>
          </div>
      </div>
    </div>
  `
})
export class TipocomidaListComponent implements OnInit {

    tiposcomidas: Tipocomida[];

    constructor(private router:Router, private service: TipocomidaService, private loginService: LoginService) {}

    ngOnInit(){
      this.service.getTiposcomidas().subscribe(
        tiposcomidas => this.tiposcomidas = tiposcomidas,
        error => console.log(error)
      );

    }

    newTipocomida() {
      this.router.navigate(['TipoComidaNew']);
    }
}
