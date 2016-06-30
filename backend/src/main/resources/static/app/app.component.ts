import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

// Books
import {BookListComponent} from './book-list.component';
import {BookDetailComponent} from './book-detail.component';
import {BookFormComponent} from './book-form.component';
import {BookService} from './book.service';

//Index
import {IndexService} from './index.service';
import {IndexListComponent} from './index-list.component';

// Login
import {LoginComponent} from './login.component';
import {LoginService} from './login.service';
import {LoginDetailComponent} from './login-detail.component';
import {LoginFormComponent} from './login-form.component';

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

//Tipos de Comidas
import {TipocomidaListComponent} from './tipo-comida-list.component';
import {TipocomidaDetailComponent} from './tipo-comida-detail.component';
import {TipocomidaFormComponent} from './tipo-comida-form.component';
import {TipocomidaService} from './tipo-comida.service';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  providers:  [BookService, IndexService, RecetaService, RestauranteService, LoginService, TipocomidaService, HTTP_PROVIDERS],
  directives: [LoginComponent, ROUTER_DIRECTIVES, Alert]
})
@RouteConfig([
 	//Index
  {path: '/', name: 'Index', component: IndexListComponent, useAsDefault: true},
  {path: '/books', name: 'Books', component: BookListComponent},
  {path: '/book/:id', name: 'BookDetail', component: BookDetailComponent},
  {path: '/book/new', name: 'BookNew', component: BookFormComponent},
  {path: '/book/edit/:id', name: 'BookEdit', component: BookFormComponent},
  {path: '/restaurantes', name: 'Restaurantes', component: RestauranteListComponent},
  {path: '/restaurante/:id', name: 'RestauranteDetail', component: RestauranteDetailComponent},
  {path: '/restaurante/new', name: 'RestauranteNew', component: RestauranteFormComponent},
  {path: '/restaurante/edit/:id', name: 'RestauranteEdit', component: RestauranteFormComponent},
  {path: '/recetas', name: 'Recetas', component: RecetaListComponent},
  {path: '/receta/:id', name: 'RecetaDetail', component: RecetaDetailComponent},
  {path: '/receta/new', name: 'RecetaNew', component: RecetaFormComponent},
  {path: '/receta/edit/:id', name: 'RecetaEdit', component: RecetaFormComponent},
  {path: '/tipocomida', name: 'TipoComida', component: TipocomidaListComponent},
  {path: '/tipocomida/:id', name: 'TipoComidaDetail', component: TipocomidaDetailComponent},
  {path: '/tipocomida/new', name: 'TipoComidaNew', component: TipocomidaFormComponent},
  {path: '/tipocomida/edit/:id', name: 'TipoComidaEdit', component: TipocomidaFormComponent},
  {path: '/perfil/', name: 'PerfilDetail', component: LoginDetailComponent},
  {path: '/perfil/new', name: 'PerfilNew', component: LoginFormComponent}
])
export class AppComponent {
}
