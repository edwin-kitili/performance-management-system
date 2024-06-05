import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailaddress: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.auth.logout();
      this.auth.login(
        this.loginForm.get('emailaddress')!.value,
        this.loginForm.get('password')!.value
      ).subscribe({
        next: (response: any) => {
          console.log('Login response:', response);
        },
        error: (error: any) => {
          console.error('Login failed:', error);
          alert('Login failed: ' + error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
