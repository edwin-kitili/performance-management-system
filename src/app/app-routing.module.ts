import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/dashboard/layout/layout.component';

const routes: Routes = [
  // Redirect any undefined routes to the default login
  {path:'', component:LoginComponent,pathMatch:'full'},
  // {path:'', redirectTo: 'layout',pathMatch:'full'},
  // {path:'dashboard', component:DashboardComponent},
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      
     
      
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
