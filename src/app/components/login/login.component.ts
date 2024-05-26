import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// goToLayout() {
// throw new Error('Method not implemented.');
// }
  constructor(private router:Router){

  }
  goToLayout(){
    this.router.navigate(['/layout'])
  }
}
