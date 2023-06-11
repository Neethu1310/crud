import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyBook } from 'src/model/myBook';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css']
})
export class BookManagerComponent {


  allBooks:MyBook[]=[]

 
  url='https://m.media-amazon.com/images/I/71jLBXtWJWL.jpg'

searchKey:string=''

  loginDate:any
constructor(private api:ApiService){
  this.loginDate=new Date()
}

//ngOnInit() : Angular Lifecycle Hook
ngOnInit():void{
   this.getAllBooks()
  }

  getAllBooks(){
    this.api.getAllBooks().subscribe((data:any)=>{
      console.log(data);
      this.allBooks=data
  })
}
//event binding
nameChange(){
  alert('name change')
}
search(event:any){
  console.log(event.target.value);
  this.searchKey=event.target.value
}

deleteBook(bookId:any){
this.api.deleteBook(bookId).subscribe((data:any)=>{
this.getAllBooks()
alert('Book Deleted')
})
}
}
