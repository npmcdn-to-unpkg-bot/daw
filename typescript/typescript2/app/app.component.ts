import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
// Restaurantes
import {RestauranteListComponent} from './restaurante-list.component';
import {RestauranteDetailComponent} from './restaurante-detail.component';
import {RestauranteFormComponent} from './restaurante-form.component';
import {RestauranteService} from './restaurante.service';
//Recetas
import {RecetaListComponent} from './receta-list.component';
import {RecetaDetailComponent} from './receta-detail.component';
import {RecetaFormComponent} from './receta-form.component';
import {RecetaService} from './receta.service';
//PerfilPrivado
import {Perfil, PerfilService} from './perfil.service';
import {PerfilDetailComponent} from './perfil-detail.component';
import {PerfilFormComponent} from './perfil-form.component';
//Index
import {IndexService} from './index.service';
import {IndexListComponent} from './index-list.component';

@Component({
  selector: 'app',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-7 titulo">
          <a href="/"><h1>Cookcinando</h1></a>
        </div>
        <div class="col-xs-6 col-md-5 menu">
          <ul class="nav nav-pills">
            <li *ngIf="PerfilService.isLogged"><a>Mi Perfil</a></li>
            <li><a href="#aCerca">Acerca de</a></li>
            <li><a href="#aCerca">Ayuda</a></li>
            <li><a href="/typescript/#/perfil/new">Inicia sesión</a></li>
            <li class="active"><a href="/typescript/#/perfil/new">Regístrate</a></li>
          </ul>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
    <div class="container-fluid footer">
      <a name="aCerca"></a>
      <div class="row">
        <div class="col-xs-3 col-md-3 logo">
          <h1>Cookcinando</h1>
        </div>
        <div class="col-xs-5 col-md-5 enlaces">
          <h1>ENLACES</h1>
          <div class="col-xs-4 col-md-4">
            <ul>
              <li>Acerca de</li>
              <li>Ayuda</li>
              <li>Inicia sesión</li>
              <li>Registrate</li>
            </ul>
          </div>
          <div class="col-xs-4 col-md-4">
            <ul>
              <li>Recetas</li>
              <li>Vídeos</li>
              <li>Restaurantes</li>
            </ul>
          </div>
        </div>
        <div class="col-xs-4 col-md-4 imagenes">
          <h1>Redes Sociales</h1>
          <img src="img/facebook.png" width="100px" height="auto" />
          <img src="img/twitter.png" width="100px" height="auto" />
          <img src="img/googleplus.png" width="100px" height="auto" />
        </div>
      </div>
    </div>
  `,
  providers: [RestauranteService, RecetaService, PerfilService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  //Index
  {path: '/', name: 'Index', component: IndexListComponent, useAsDefault: true},
  //Restaurantes
  {path: '/restaurantes', name: 'Restaurantes', component: RestauranteListComponent},
  {path: '/restaurante/:id', name: 'RestauranteDetail', component: RestauranteDetailComponent},
  {path: '/restaurante/new', name: 'RestauranteNew', component: RestauranteFormComponent},
  {path: '/restaurante/edit/:id', name: 'RestauranteEdit', component: RestauranteFormComponent},
  //Recetas
  {path: '/recetas', name: 'Recetas', component: RecetaListComponent},
  {path: '/receta/:id', name: 'RecetaDetail', component: RecetaDetailComponent},
  {path: '/receta/new', name: 'RecetaNew', component: RecetaFormComponent},
  {path: '/receta/edit/:id', name: 'RecetaEdit', component: RecetaFormComponent},
  //PerfilPrivado
  {path: '/perfil/:id', name: 'PerfilDetail', component: PerfilDetailComponent},
  {path: '/perfil/new', name: 'PerfilNew', component: PerfilFormComponent},
])

export class AppComponent implements OnInit{

  constructor (private router: Router, private perfilService: PerfilService){

    ngOnInit(){
      this.perfilService.getPerfiles().subscribe(
        perfil => this.perfil = perfil,
        error => console.log(error)
      );
    }
  }
  
  logIn() {
    this.perfilService.logIn(this.perfil);
  }
  
  logFuera() {
    this.perfilService.logFuera();
  }
}