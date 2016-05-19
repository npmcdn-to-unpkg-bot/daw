import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';
import {Receta, RecetaService} from './receta.service';

@Component({
directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-2 col-md-2">
                <ul class="nav nav-pills nav-stacked">
                    <li>
                        <a [routerLink]="['PerfilDetail', {id: perfil.id}]">Mi Cuenta</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilMisRecetas', {id: perfil.id}]"> Mis Recetas</a>
                    </li>
                    <li>
                        <a>Favoritos</a>
                    </li>
                    <li>
                        <a [routerLink]="['RecetaNew']">Añadir Receta</a>
                    </li>
                    <li class="active">
                        <a>Ajustes</a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-2 col-md-8">
                <div class="cabecera-subrayada">
                <h1>{{perfil.user}}</h1>
                </div>
                <div class="imagen-de-perfil">
                    <img src="{{perfil.thumbnail}}" width="200px" height="200px" />
                </div>
                    
        <div class="container-fluid platosFav">
                <a name="platos-mes"></a>
            <div class="tituloSeccion">
                <h1>RECETAS FAVORITAS</h1>
            </div>
            
            <div class="row">
                <div class="col-xs-12 col-md-12 menu_imgs">
                <a [routerLink]="['RecetaDetail',{id:perfil.getRecFavs.get(1)}]">
                //<a [routerLink]="['RecetaDetail',{id:perfil.recFavs[1]}]">
                    <div class="col-xs-8 col-md-8 imagenGrande" id="imgFavGrande" >
                        <p class="tituloGrande"> Receta Fav1</p>
                    </div>
                    </a>                    
                </div>
            </div>
            
        </div>

            </div>
        </div>
    </div>
  `
})
export class PerfilDetailAjustesComponent { 
    
    perfil: Perfil;
    
    constructor(
    private router: Router,
    routeParams: RouteParams,
    private service: PerfilService,
    ) {
        let id = routeParams.get('id');
        service.getPerfil(id).subscribe(
            perfil => this.perfil = perfil,
            error => console.error(error)
        );
    }
    save() {
        this.service.savePerfil(this.perfil);
        window.history.back();
    }

    deletePhoto() {
        this.perfil.thumbnail = '';
    }
}