import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { FarmComponent } from './farm/farm.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { FarmCadastroComponent } from './farm-cadastro/farm-cadastro.component';

const routes: Routes = [
  { path: '', component: FarmComponent },
  { path: 'cadastro', component: FarmCadastroComponent },
  { path: 'cadastro/:id', component: FarmCadastroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
