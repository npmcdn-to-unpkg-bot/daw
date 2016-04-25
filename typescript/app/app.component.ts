import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

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
import {PerfilService} from './perfil.service';
import {PerfilDetailComponent} from './perfil-detail.component';
import {PerfilFormComponent} from './perfil-form.component';
//Index
import {IndexService} from './index.service';
import {IndexListComponent} from './index-list.component';

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `,
  providers:  [RestauranteService, RecetaService, PerfilService],
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
  {path: '/perfil/:id', name: 'PerfilDetail', component: PerfilDetailComponent}
  {path: '/perfil/new', name: 'PerfilNew', component: PerfilFormComponent}
])
export class AppComponent { }