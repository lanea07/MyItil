import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'myitil', loadChildren: () => import( './myitil/index/index.module' ).then( m => m.IndexModule ) },
  { path: '**', redirectTo: 'myitil' }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
