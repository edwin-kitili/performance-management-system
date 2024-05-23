import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
goToLayout() {
throw new Error('Method not implemented.');
}
  constructor(private router:Router){

  }
  goToDashboard(){
    this.router.navigate(['/dashboard'])
  }
}
