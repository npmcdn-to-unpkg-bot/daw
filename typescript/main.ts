import {bootstrap} from 'angular2/platform/browser';
import {CabeceraComponent} from './cabecera/cabecera.component';
import {MenuComponent} from './menu/menu.component';
import {MenuPrivadoComponent} from './menuprivado/menuprivado.component';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(CabeceraComponent, [
  ROUTER_PROVIDERS
]);

bootstrap(MenuComponent, [
  ROUTER_PROVIDERS
]);

bootstrap(MenuPrivadoComponent, [
  ROUTER_PROVIDERS
]);