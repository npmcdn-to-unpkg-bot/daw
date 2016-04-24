import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Perfil, PerfilService}   from './perfil.service';

@Component({ 
  template: `
    <body>    
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-2 col-md-2">
                <ul class="nav nav-pills nav-stacked">
                    <li  class="active">
                        <a href="#"> Mi Cuenta</a>
                    </li>
                    <li>
                        <a href="#"> Mis Recetas</a>
                    </li>
                    <li >
                        <a href="#"> Favoritos</a>
                    </li>
                    <li>
                        <a href="#">Añadir Receta</a>
                    </li>
                    <li>
                        <a href="#">Ajustes</a>
                    </li>
                </ul>
            </div>
            <div *ngFor="#perfil of perfiles"  class="col-xs-2 col-md-8">
                <div  class="cabecera-subrayada">
                <h1>{{perfil.name}}</h1>
                </div>
                <div class="imagen-de-perfil">
                    <img src="img/avatar.jpg" width="200px" height="200px" />
                    <div class="botones-foto">
                         <button type="submit" class="btn btn-default separado">Quitar</button>
                          <button type="submit" class="btn btn-default separado">Subir...</button>
                    </div>
                </div>
                <div class="inputs">
                    <input type="text" class="form-control" placeholder="Manuela">
                    <input type="text" class="form-control" placeholder="Carmema">
                     <textarea rows="9" class="form-control" placeholder="Añade una descripción:"></textarea>
                    <button type="submit" class="btn btn-default">Guardar</button>
                </div>
            </div>
        </div>
    </div>    
    <script src="js/jquery.min.js"></script>
    <script src="js/js/bootstrap.min.js"></script>
</body>
  `
})

export class PerfilDetailComponent { 
    perfil: Perfil;
    perfiles: Perfil[];

    constructor(
    private router: Router,
    routeParams: RouteParams,
    private service: PerfilService,
    private perfilService: PerfilService,
    ) {
        let id = routeParams.get('id');
        service.getPerfil(id).subscribe(
            perfil => this.perfil = perfil,
            error => console.error(error)
        );
    }
     ngOnInit(){
        this.perfilService.getPerfiles().subscribe(
        perfiles => this.perfiles = perfiles,
        error => console.log(error)
        );
    }
    

    

/*(gotoRestaurantesFav() {
        this.router.navigate(['Restaurantes']);
    }

*/
}
