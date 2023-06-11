import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MyBook } from 'src/model/myBook';
import { MyGenre } from 'src/model/myGenre';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  bookId:any;

  book:MyBook={}

  genre:MyGenre[]=[] as MyGenre []

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}

ngOnInit():void{
this.activatedRoute.params.subscribe((data:any)=>{
  console.log(data);  //{Id:'c4}
  console.log(data.Id); //c4
  this.bookId=data['Id']
  console.log(this.bookId);
  this.api.viewBook(this.bookId).subscribe((data:any)=>{
    console.log(data);
    this.book=data
    
})
this.api.getAllGenres().subscribe((data:any)=>{
  console.log(data);
  this.genre=data
  })

})
}

updateBook(){
 this.api.updateBook(this.bookId,this.book).subscribe((data:any)=>{
  console.log(data);
  this.route.navigateByUrl('')
 })
}
}
