import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Restaurante {
	id?: number;
	title: string;
	description: string;
	details: string;
	thumbnail: string;
	thumbnailbig: string;
	map: string;
}

const URL = 'restaurantes/';

@Injectable()
export class RestauranteService {
  constructor(private http: Http) { }

  getRestaurantes() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getRestaurante(id: number | string) {
    return this.http.get(URL + id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }
	
  saveRestaurante(restaurante: Restaurante){
    let body = JSON.stringify(restaurante);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  removeRestaurante(restaurante: Restaurante){
    let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });  
	  
    return this.http.delete(URL + restaurante.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }
  
  updateBook(restaurante: Restaurante) {

    let body = JSON.stringify(restaurante);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + restaurante.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }

}