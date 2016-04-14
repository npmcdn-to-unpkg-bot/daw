import {Component} from 'angular2/core';

@Component({
	selector: 'menuprivado',
	templateUrl: 'menuprivado/menuprivado.component.html'
})
export class MenuPrivadoComponent {
	menuprivado = [
		{desc: 'Mi Cuenta', active: false },
        {desc: 'Mis Receta', active: false },
        {desc: 'Favoritos', active: false },
        {desc: 'Añadir Receta', active: true },
        {desc: 'Ajustes', active: false }
	]
}
