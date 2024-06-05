import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KpiFormComponent } from './components/kpi-form/kpi-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { DashboardService } from './components/dashboard/dashboard.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LayoutComponent } from './components/dashboard/layout/layout.component';
import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './authentication.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    KpiFormComponent,
    DashboardComponent,
    LayoutComponent,
    SidenavComponent,
    NavbarComponent,
    LoginComponent
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
    MatToolbarModule,
    BrowserAnimationsModule,
    CommonModule
  
  ],
  providers: [
    DashboardService,
    AuthenticationService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
