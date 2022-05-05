import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent,
//     children:[
//       {path:'hitos',
//         loadChildren:: (),
//   { path: 'customers', loadChildren: () => import('./hitos/hitos/hitos.module').then(m => m.HitosModule) },
//   { path: 'customers', loadChildren: () => import('./hitos/hitos.module').then(m => m.HitosModule) } => import('./hitos/hitos.module').then(m=>m.HitosModule)
//       }
//     ]
//   }
// ];
const routes: Routes = [
  { path: '', component: HomeComponent,
    children:[
      { path: 'hitos', 
        loadChildren: () => import('./componentes/hitos/hitos.module').then(m => m.HitosModule) } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
