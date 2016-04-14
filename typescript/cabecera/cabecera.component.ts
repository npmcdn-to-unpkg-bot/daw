import {Component} from 'angular2/core';

@Component({
	selector: 'cabecera',
	templateUrl: 'cabecera/cabecera.component.html'
})
export class CabeceraComponent {
    nombre = 'Coockinando';
    menuprincipal = [
        {desc: 'Mi perfil', active: false },
        {desc: 'Acerca de', active: false },
        {desc: 'Ayuda', active: false },
        {desc: 'Inicia sesión', active: false },
        {desc: 'Registrate', active: true }
    ]
}
