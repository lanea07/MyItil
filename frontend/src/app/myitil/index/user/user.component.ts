import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component( {
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: ``
} )
export class UserComponent {

  response?: string;
  constructor (
    private httpClient: HttpClient
  ) {
    this.httpClient.get( 'http://localhost:8000/api' ).subscribe( ( data: any ) => {
      this.response = data.message;
    } );
  }
}
