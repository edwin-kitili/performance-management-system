// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { KpiFormComponent } from './components/kpi-form/kpi-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { DashboardService } from './components/dashboard/dashboard.service';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { LayoutComponent } from './components/dashboard/layout/layout.component';
import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KpiFormComponent,
    DashboardComponent,
    LayoutComponent,
    SidenavComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    
    



  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
