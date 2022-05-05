import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HitosRoutingModule } from './hitos-routing.module';
import { HitosComponent } from './hitos.component';
import { ListaHitosComponent } from './lista-hitos/lista-hitos.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    HitosComponent,
    ListaHitosComponent
  ],
  imports: [
    CommonModule,
    HitosRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class HitosModule { }
