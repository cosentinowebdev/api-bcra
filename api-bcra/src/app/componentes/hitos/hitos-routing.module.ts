import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HitosComponent } from './hitos.component';
import { ListaHitosComponent } from './lista-hitos/lista-hitos.component';

const routes: Routes = [{ path: '', component: HitosComponent },
                        { path: 'lista', component:ListaHitosComponent}  
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HitosRoutingModule { }
