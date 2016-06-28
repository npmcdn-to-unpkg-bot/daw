import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

// Books
import {BookListComponent} from './book-list.component';
import {BookDetailComponent} from './book-detail.component';
import {BookFormComponent} from './book-form.component';
import {BookService} from './book.service';

// Login
import {LoginComponent} from './login.component';
import {LoginService} from './login.service';

// Restaurantes
import {RestauranteListComponent} from './restaurante-list.component';
import {RestauranteDetailComponent} from './restaurante-detail.component';
import {RestauranteFormComponent} from './restaurante-form.component';
import {RestauranteService} from './restaurante.service';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  providers:  [BookService, RestauranteService, LoginService, HTTP_PROVIDERS],
  directives: [LoginComponent, ROUTER_DIRECTIVES, Alert]
})
@RouteConfig([
  {path: '/books', name: 'Books', component: BookListComponent, useAsDefault: true},
  {path: '/book/:id', name: 'BookDetail', component: BookDetailComponent},
  {path: '/book/new', name: 'BookNew', component: BookFormComponent},
  {path: '/book/edit/:id', name: 'BookEdit', component: BookFormComponent},
  {path: '/restaurantes', name: 'Restaurantes', component: RestauranteListComponent},
  {path: '/restaurante/:id', name: 'RestauranteDetail', component: RestauranteDetailComponent},
  {path: '/restaurante/new', name: 'RestauranteNew', component: RestauranteFormComponent},
  {path: '/restaurante/edit/:id', name: 'RestauranteEdit', component: RestauranteFormComponent}
])
export class AppComponent {	
}
