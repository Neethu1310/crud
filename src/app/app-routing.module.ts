import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManagerComponent } from './book-manager/book-manager.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path:'',redirectTo:'book/admin',pathMatch:'full'
  },
  {
    path:'book/admin',component:BookManagerComponent
  },
  {
    path:'book/add',component:AddBookComponent
  },
  {
    path:'book/update/:Id',component:UpdateBookComponent
  },
  {
    path:'book/view/:bookId',component:ViewBookComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
