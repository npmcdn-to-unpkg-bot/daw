import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Restaurante, RestauranteService}   from './restaurante.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
     	<p>{{restaurante.title}}</p>
    `
})
export class RestauranteDetailComponent {

    restaurante: Restaurante;
    restaurantes: Restaurantes[];

    constructor(private router: Router, routeParams: RouteParams, private service: RestauranteService) {
        let id = routeParams.get('id');
        service.getRestaurante(id).subscribe(
            restaurante => this.restaurante = restaurante,
            error => console.error(error)
        );
    }
    removeRestaurante() {
        let okResponse = window.confirm("¿Quieres eliminar este restaurante?");
        if (okResponse) {
            this.service.removeRestaurante(this.restaurante).subscribe(
                _ => this.router.navigate(['Restaurantes']),
                error => console.error(error)
            )
        }
    }

    editRestaurante() {
        this.router.navigate(['RestauranteEdit', { id: this.restaurante.id }]);
    }
    
    addFavoritosRest(){
    this.perfilService.anadirFavoritoRest(this.pactual, this.restaurante.id)
    }

    gotoRestaurantes() {
        this.router.navigate(['Restaurantes']);
    }
}