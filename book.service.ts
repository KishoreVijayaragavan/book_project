# book_project
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  apiUrl= "http://localhost:8080/books";
  constructor(private httpBook : HttpClient) { }
  getBookDetails(){
    const book = this.httpBook.get(this.apiUrl);
    return book;
  }
}
