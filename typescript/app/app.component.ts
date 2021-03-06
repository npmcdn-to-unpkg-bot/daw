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
import {PerfilDetailRecetasComponent} from './perfil-detail-recetas.component';
import {PerfilDetailRestaurantesComponent} from './perfil-detail-restaurantes.component';
import {PerfilDetailTipoComidaComponent} from './perfil-detail-tipocomida.component';
import {PerfilDetailFavoritosComponent} from './perfil-detail-favoritos.component';
import {PerfilDetailAjustesComponent} from './perfil-detail-ajustes.component';
//PerfilPublico
import {PerfilPublicoDetailComponent} from './perfil-publico-detail.component';
//Tipos de Comidas
import {TipoComidaListComponent} from './tipo-comida-list.component';
import {TipoComidaDetailComponent} from './tipo-comida-detail.component';
import {TipoComidaFormComponent} from './tipo-comida-form.component';
import {TipoComidaService} from './tipo-comida.service';
//Index
import {IndexService} from './index.service';
import {IndexListComponent} from './index-list.component';

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `,
  providers:  [RestauranteService, RecetaService, PerfilService, TipoComidaService],
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
  {path: '/perfil/', name: 'PerfilDetail', component: PerfilDetailComponent},
  {path: '/perfil/new', name: 'PerfilNew', component: PerfilFormComponent},
  {path: '/perfil/misrecetas/', name: 'PerfilMisRecetas', component: PerfilDetailRecetasComponent},
    {path: '/perfil/restaurantes/', name: 'PerfilMisRestaurantes', component: PerfilDetailRestaurantesComponent},
    {path: '/perfil/tipocomida/', name: 'PerfilMisTiposComidas', component: PerfilDetailTipoComidaComponent},
  {path: '/perfil/misfavoritos/', name: 'PerfilMisFavoritos', component: PerfilDetailFavoritosComponent},
  {path: '/perfil/ajustes/', name: 'PerfilAjustes', component: PerfilDetailAjustesComponent},
//PerfilPublico
  {path: '/perfil/publico/:id', name: 'PerfilPublicoDetail', component: PerfilPublicoDetailComponent},
//TipoComida
  {path: '/tipocomida', name: 'TipoComida', component: TipoComidaListComponent},
  {path: '/tipocomida/:id', name: 'TipoComidaDetail', component: TipoComidaDetailComponent},
  {path: '/tipocomida/new', name: 'TipoComidaNew', component: TipoComidaFormComponent},
    {path: '/tipocomida/edit/:id', name: 'TipoComidaEdit', component: TipoComidaFormComponent},
])
export class AppComponent { }