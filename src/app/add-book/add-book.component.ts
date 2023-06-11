import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MyBook } from 'src/model/myBook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
 
    allGenres:any[]=[];
    bookName:string=''
    book:MyBook={}
  constructor(private api:ApiService,private router:Router){
    this.book.genreId="Select A Group"
  }

  ngOnInit():void{
    this.api.getAllGenres().subscribe((data:any)=>{
      console.log(data);
      this.allGenres=data
    })
      }
      
      addBook( ){
this.api.addBook(this.book).subscribe((data:any)=>{
this.router.navigateByUrl('')
})  

   }
  }
