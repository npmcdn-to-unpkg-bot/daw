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
                  <p class="contenedorPequenio1 tituloPequenio1"><a href="#restaurantes-mes">Restaurantes del mes</a></p>
                  <img src="img/CabRestauranteMes.png" alt="" />
              </div>
              <div class="row img-contenedor2">
                  <p class="contenedorPequenio2 tituloPequenio2"><a href="#platos-mes">Platos del mes</a></p>
                  <img src="img/CabPlato.png" alt="" />
              </div>
          </div>
      </div>
    </div>
    <div class="container-fluid">
        <div class="col-xs-12 col-md-12 descripcion">
            <div class="tituloSeccion"><h1>¿QUIÉNES SOMOS?</h1></div>
            <div id="texto">
                <p>Somos una página especializada en recetas de cadenas de restaurantes, pero también hacemos un hueco a las recetas caseras y tradicionales.</p>
                <p>Nos gusta que nuestros usuarios interactuen entre ellos, comenten cada receta, añadan las suyas propias y nos ayuden a elegir los mejores restaurantes, ya sea por sus experiencias, precios, calidad de la comida, etc. Y obviamente también entre los mejores platos, ya sea de restaurantes como caseros.</p>
            </div>
        </div>
    </div>
    <div class="container-fluid zonaBusq">
        <div class="row">
            <div class="col-xs-0 col-md-4"></div>
            <div class="col-xs-12 col-md-8">
                <form class="navbar-form navbar-left " role="search">
                    <input type="text" class="form-control busqueda " placeholder="Buscar">
                    <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"> </span></button>
                </form>
            </div>
        </div>
    </div>
    <div class="container-fluid platosFav">
            <a name="platos-mes"></a>
            <div class="tituloSeccion"><h1>PLATOS DEL MES</h1></div>
            
            <div class="row">
                <div class="col-xs-12 col-md-12 menu_imgs">
                    <a [routerLink]="['RecetaDetail',{id:5}]">
                    <div class="col-xs-8 col-md-8 imagenGrande" id="imgFavGrande" >
                        <p class="tituloGrande">Crema de guisantes </p></div>
                    </a>
                    <div class="col-xs-4 col-md-4">
                        <a [routerLink]="['RecetaDetail',{id:3}]">
                        <div class="row imagenPequenia" id="imgFav1">
                            <p class="tituloPequenio">Roscón de hojaldre</p>
                        </div></a>
                         <a [routerLink]="['RecetaDetail',{id:2}]">
                        <div class="row imagenPequenia" id="imgFav2">
                            <p class="tituloPequenio">Solomillo con setas</p>
                        </div></a>
                        <a [routerLink]="['RecetaDetail',{id:1}]">
                        <div class="row imagenPequenia" id="imgFav3">
                            <p class="tituloPequenio">Empanadas burguer</p>
                        </div></a>
                        <a [routerLink]="['RecetaDetail',{id:4}]">
                        <div class="row imagenPequenia" id="imgFav4">
                            <p class="tituloPequenio">Pijama Helado</p>
                        </div></a>
                    </div>
                </div>
            </div>
            <div class="row masPlatos">
                <div class="col-xs-0 col-md-4"></div>
                <div class="col-xs-12 col-md-8">
                    <button type="button" class="btn btn-default btn-lg btnMasPlatos"><a href="/typescript/#/recetas">Más Platos</a></button>
                    
                </div>
            </div>
        </div>
    <div class="container-fluid seccInter ">
        
        <div class="row">
            <div class="col-xs-4 col-md-4 videos">
                <h3>VIDEOS NUEVOS</h3>
                <ul>
                    <li>
                        <div id="cont-youtube">
                            <iframe src="https://www.youtube.com/embed/EWIzqwqoFuw" height="100px" frameborder="1" allowfullscreen>
                            </iframe>
                        </div>
                        Foster Hollywood - Bacon Cheese Fries
                        <hr align="left" noshade="noshade" size="2" width="80%" />

                    </li>
                    <li>
                        <div id="cont-youtube">
                            <iframe src="https://www.youtube.com/embed/_EC4hDZ9www" height="100px" frameborder="1" allowfullscreen>
                            </iframe>
                        </div>
                        VIPS - Batido de Oreo
                        <hr align="left" noshade="noshade" size="2" width="80%" />
                    </li>
                    <li>
                        <div id="cont-youtube">
                            <iframe src="https://www.youtube.com/embed/WXvcK5058XM" height="100px" frameborder="1" allowfullscreen>
                            </iframe>
                        </div>
                        Telepizza - Pizza Carbonara
                        <hr align="left" noshade="noshade" size="2" width="80%" />
                    </li>
                </ul>
            </div>
            <div class="col-xs-4 col-md-4 resources">
                <h3>FAVORITOS</h3>
                <ul>
                    <li>
                        <div id="cont-youtube">
                            <iframe src="https://www.youtube.com/embed/EmJm3U49XA8" height="100px" frameborder="1" allowfullscreen>
                            </iframe>
                        </div>
                        McDonalds - Patatas Deluxe
                        <hr align="left" noshade="noshade" size="2" width="80%" />

                    </li>
                    <li>
                        <div id="cont-youtube">
                            <iframe src="https://www.youtube.com/embed/eCpKkTfI5hg" height="100px" frameborder="1" allowfullscreen>
                            </iframe>
                        </div>
                        KFC - Pollo Crujiente
                        <hr align="left" noshade="noshade" size="2" width="80%" />
                    </li>
                    <li>
                        <div id="cont-youtube">
                            <iframe src="https://www.youtube.com/embed/OgRtjZ9ZSSo" height="100px" frameborder="1" allowfullscreen>
                            </iframe>
                        </div>
                        Burguer King - Whopper
                        <hr align="left" noshade="noshade" size="2" width="80%" />
                    </li>
                </ul>
            </div>
            <div class="col-xs-4 col-md-4 popular">
                <h3>RECETAS CASERAS</h3>
                <ul>
                    <li>
                        <div id="cont-youtube">
                            <iframe src="https://www.youtube.com/embed/0kCcaoFz3q8" height="100px" frameborder="1" allowfullscreen>
                            </iframe>
                        </div>
                        Lentejas Caseras con Chorizo
                        <hr align="left" noshade="noshade" size="2" width="80%" />

                    </li>
                    <li>
                        <div id="cont-youtube">
                            <iframe src="https://www.youtube.com/embed/w_3YM-DZVOE" height="100px" frameborder="1" allowfullscreen>
                            </iframe>
                        </div>
                        Tortilla de Patatas Española
                        <hr align="left" noshade="noshade" size="2" width="80%" />
                    </li>
                    <li>
                        <div id="cont-youtube">
                            <iframe src="https://www.youtube.com/embed/rFJYG_Opauc" height="100px" frameborder="1" allowfullscreen>
                            </iframe>
                        </div>
                        Croquetas Caseras de Pollo
                        <hr align="left" noshade="noshade" size="2" width="80%" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container-fluid restMes">
        <a name="restaurantes-mes"></a>
        <div class="tituloSeccion"><h1>RESTAURANTES DEL MES</h1></div>
        <div class="row">
            <div class="col-xs-12 col-md-12 menu_imgs">
                <a [routerLink]="['RestauranteDetail',{id:1}]">
                    <div class="col-xs-8 col-md-8 imagenGrande" id="imgRestGrande">
                    <p class="tituloGrande">THE GOOD BURGUER</p>
                    </div>
                </a>
                
                    <div class="col-xs-4 col-md-4 imagenPequenya">
    <a [routerLink]="['RestauranteDetail',{id:2}]">
                        <div class="row imagenPequenia" id="imgRest1">
                        <p class="tituloPequenio">Foster Hollywood</p>
                        </div>
                </a>
                    <a [routerLink]="['RestauranteDetail',{id:3}]">
                    <div class="row imagenPequenia" id="imgRest2">
                        <p class="tituloPequenio">Ribs</p>
                    </div> </a> 
                    <a [routerLink]="['RestauranteDetail',{id:4}]">
                    <div class="row imagenPequenia" id="imgRest3">
                        <p class="tituloPequenio">La Tagliatella</p>
                    </div></a>
                    <a [routerLink]="['RestauranteDetail',{id:5}]">
                    <div class="row imagenPequenia" id="imgRest4">
                        <p class="tituloPequenio">Telepizza'</p>
                    </div></a>
                </div>
            </div>
        </div>
        <div class="row masRest">
            <div class="col-xs-0 col-md-4"></div>
            <div class="col-xs-12 col-md-8">
                <button type="button" class="btn btn-default btn-lg btnMasRest"><a href="/typescript/#/restaurantes">Más Restaurantes</a></button>
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
