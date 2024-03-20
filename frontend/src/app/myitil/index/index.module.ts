import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { UserComponent } from './user/user.component';
import { PrimeNGModule } from '../../globals/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    PrimeNGModule
  ]
})
export class IndexModule { }
