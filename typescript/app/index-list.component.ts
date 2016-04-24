import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Index, IndexService}   from './index.service';
import {Receta, RecetaService}   from './receta.service';
import {Restaurante, RestauranteService}   from './restaurante.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="row">
      <div class="col-xs-12 col-md-12 menu_imgs">
          <div class="col-xs-3 col-md-3 img-contenedor1">
              <div class="row">
                  <p class="tituloGrande">
                  <a [routerLink]="['Restaurantes']">Restaurantes</a></p>
                  <img src="img/CabRestaurantes.png" alt="" />
              </div>
          </div>
          <div class="col-xs-4 col-md-4" >
              <div class="row img-contenedor2">
                  <p class="tituloGrande contenedorPequenio1"><a [routerLink]="['Recetas']">Recetas</a></p>
                  <img src="img/CabRecetas.png" alt="" />
              </div>
              <div class="row img-contenedor2">
                  <p class="tituloGrande contenedorPequenio2">Platos de Restaurantes</p>
                  <img src="img/CabPlatoRestaurante.png" alt="" />
              </div>
          </div>
          <div class="col-xs-3 col-md-3 img-contenedor1">
               <div class="row">
                   <p class="tituloGrande">Favoritos</p>
                  <img src="img/CabFavoritos.png" alt="" />
              </div>
          </div>
          <div class="col-xs-2 col-md-2">
              <div class="row img-contenedor2">
                  <p class="contenedorPequenio1 tituloPequenio1">Restaurante del mes</p>
                  <img src="img/CabRestauranteMes.png" alt="" />
              </div>
              <div class="row img-contenedor2">
                  <p class="contenedorPequenio2 tituloPequenio2">Plato del mes</p>
                  <img src="img/CabPlato.png" alt="" />
              </div>
          </div>
      </div>
    </div>
  `
})
export class IndexListComponent implements OnInit {

    restaurantes: Restaurante[];
    recetas: Recetas[];

    constructor(
      private router:Router,
      private RestauranteService: RestauranteService,
      private RecetaService: RecetaService,
    ) {}

    ngOnInit(){
      this.RestauranteService.getRestaurantes().subscribe(
        restaurantes => this.restaurantes = restaurantes,
        error => console.log(error)
      );
      this.RecetaService.getRecetas().subscribe(
        recetas => this.recetas = recetas,
        error => console.log(error)
      );
    }
    gotoRestaurantess() {
        this.router.navigate(['Restaurantes']);
    }
    gotoRecetas() {
        this.router.navigate(['Recetas']);
    }
}
