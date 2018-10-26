import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';



@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    // FormsModule,
    RouterModule.forRoot(routes),

  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
