import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';

@Component({ 
  template: `
    
     <div class="container-fluid">
            <div class="row">
                <div class="col-md-5 perfil-publico">
                    <img class="avatar" src="{{perfil.thumbnail}}" width="200px" height="200px"/>
                    <h3>{{perfil.user}}</h3>
                    <p>{{perfil.descripcion}}</p>
                    <p>Reputación: Alta</p>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <h1 class="text-center recetas-h1">Recetas de {{perfil.user}}</h1>
            <div *ngFor="#receta of recetasUsuario" class="col-xs-6 col-md-4">
                <div class="thumbnail">
                    <img src="{{receta.thumbnail}}" alt="{{receta.title}}">
                    <div class="caption">
                        <h3><a [routerLink]="['RecetaDetail', {id: receta.id}]">{{receta.title}}</a></h3>
                        <p>{{receta.abstract}}</p>
                    </div>
                </div>
            </div>     
        </div>
        
        <div class="container-fluid">
            <nav>
                <ul class="pagination centrado-pagination">
                    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="container-fluid">
            <h1 class="text-center recetas-h1">Platos favoritos de {{perfil.user}}</h1>
            <div *ngFor="#receta of favsUsuario" class="col-xs-6 col-md-4">
                <div class="thumbnail">
                    <img src="{{receta.thumbnail}}" alt="{{receta.title}}">
                    <div class="caption">
                        <h3><a [routerLink]="['RecetaDetail', {id: receta.id}]">{{receta.title}}</a></h3>
                        <p>{{receta.abstract}}</p>
                    </div>
                </div>
            </div>     
            
        </div>
        <div class="container-fluid">
            <nav>
                <ul class="pagination centrado-pagination">
                    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
  `
})
export class PerfilPublicoDetailComponent { 
    
    perfil: Perfil;
    recetasUsuario: Receta[];
    favsUsuario: Receta[];
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
    
}