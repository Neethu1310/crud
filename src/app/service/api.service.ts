import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyBook } from 'src/model/myBook';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


baseUrl = 'http://localhost:3000/books'
  constructor(private http:HttpClient) { }

  //get function for all books
  getAllBooks():Observable<MyBook>{
    return this.http.get(this.baseUrl)      //for fetching
  }

  viewBook(bookId:any){
    return this.http.get(`${this.baseUrl}/${bookId}`)
  }

  getGenreName(genreId:any){
   return this.http.get('http://localhost:3000/genres/'+genreId)
  }

  getAllGenres(){
    return this.http.get('http://localhost:3000/genres')
  }

  addBook(bookBody:any){
    return this.http.post(this.baseUrl,bookBody)
  }

  deleteBook(bookId:any){
    return this.http.delete(`${this.baseUrl}/${bookId}`)
  }

  updateBook(bookId:any,bookBody:any){
    return this.http.put(`${this.baseUrl}/${bookId}`,bookBody)
  } 
}
