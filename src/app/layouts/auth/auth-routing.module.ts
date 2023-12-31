import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component'; 

const routes: Routes = [
  {
    path:'auth',
    component: AuthComponent,
    children: [ 
      {path:'', component: AuthComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
