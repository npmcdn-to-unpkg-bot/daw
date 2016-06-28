import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Book, BookService}   from './book.service';

@Component({
  template: `
  <div *ngIf="book">
  <h2>Book "{{book.nombre}}"</h2>
  <div *ngIf="book.id">
    <label>Id: </label>{{book.id}}
  </div>
  <div>
    <label>nombre: </label>
    <input [(ngModel)]="book.nombre" placeholder="nombre"/>
  </div>
  <div>
    <label>Abstract: </label>
    <textarea [(ngModel)]="book.descripcion" placeholder="descripcion"></textarea>
  </div>
  <p>
    <button (click)="cancel()">Cancel</button>
    <button (click)="save()">Save</button>
  </p>
  </div>`
})
export class BookFormComponent {

  newBook: boolean;
  book: Book;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: BookService){

      let id = routeParams.get('id');
      if(id){
        service.getBook(id).subscribe(
          book => this.book = book,
          error => console.error(error)
        );
        this.newBook = false;
      } else {
        this.book = { nombre:'', descripcion:'' };
        this.newBook = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveBook(this.book).subscribe(
    	book => {}, 
    	error => console.error('Error creating new book: '+error)
    );
    window.history.back();
  }
}
