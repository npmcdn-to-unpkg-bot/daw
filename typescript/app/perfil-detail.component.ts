import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService} from './perfil.service';

@Component({
directives: [ROUTER_DIRECTIVES],
  template: `
    <div *ngIf="user" class="container-fluid">
        <div *ngIf="perfil.id == pactual.id" class="row">
            <div class="col-xs-2 col-md-2">
                <ul class="nav nav-pills nav-stacked">
                    <li class="active">
                        <a>Mi Cuenta</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilMisRecetas', {id: perfil.id}]">Mis Recetas</a>
                    </li>
                    <li >
                        <a [routerLink]="['PerfilMisFavoritos', {id: perfil.id}]">Favoritos</a>
                    </li>
                    <li>
                        <a [routerLink]="['RecetaNew']">Añadir Receta</a>
                    </li>
                    <li>
                        <a [routerLink]="['PerfilAjustes', {id: perfil.id}]">Ajustes</a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-2 col-md-8">
                <div class="cabecera-subrayada">
                <h1>{{perfil.user}}</h1>
                </div>
                <div class="imagen-de-perfil">
                    <img src="{{perfil.thumbnail}}" width="200px" height="200px" />
                    <div class="botones-foto">
                        <button type="submit" (click)="deletePhoto()" class="btn btn-default separado">Quitar</button>
                        <button type="submit" class="btn btn-default separado">Subir...</button>
                    </div>
                </div>
                <div class="inputs">
                    <input type="text" class="form-control" [(ngModel)]="perfil.name" placeholder="Nombre"/>
                    <input type="text" class="form-control" [(ngModel)]="perfil.apellidos" placeholder="Apellidos"/>
                    <textarea type="text" rows="9" class="form-control" [(ngModel)]="perfil.descripcion" placeholder="Descripción"></textarea>
                    
                    <input type="text" class="form-control" [(ngModel)]="perfil.thumbnail" placeholder="Photo"/>
                    <button (click)="save()" type="submit" class="btn btn-default">Guardar</button>
                </div>
            </div>
        </div>
    </div>
  `
})
export class PerfilDetailComponent { 
    
    perfil: Perfil;
    pactual:Perfil;
    user: boolean;
    admin: boolean;
    
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
        service.getUsuario().subscribe(
            pactual => this.pactual = pactual,
            error => console.error(error)
        );
        service.getUser().subscribe(
            user => this.user = user,
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