import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit{

bookId:string=''
book:any
genreId:string=''
genreName:string=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.bookId=data.bookId
      console.log(this.bookId);
      

      this.api.viewBook(this.bookId).subscribe((data:any)=>{
        console.log(data);
         this.book=data 
         this.genreId=data.genreId
         console.log(this.book);
         
        this.api.getGenreName(this.genreId).subscribe((data:any)=>{
          console.log(data);
          this.genreName=data.name
          console.log(this.genreName);
          
          
        })
      })
    })
  }
}
