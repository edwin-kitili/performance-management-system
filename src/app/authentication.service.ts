import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from './environment.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';

  constructor(private http: HttpClient, private router: Router) {}

  setToken(token: any) {
    if (
      !(
        token &&
        typeof token === 'string' &&
        this.isNotJsonString(token) &&
        token.length > 30
      )
    ) {
      throw new Error('Invalid token');
    }
    localStorage.setItem(this.tokenKey, token);
    // Browser issues test
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/login', {
      email: email,
      password: password,
    }).pipe(
      tap({
        next: response => console.log('Login successful:', response),
        error: error => console.error('Login error:', error)
      })
    );
  }

  public logout() {
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
    this.router.navigate(['/']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token !== null && token.length > 0;
  }

  public getToken(): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey) ?? '';
    }
    return localStorage.getItem(this.tokenKey) ?? '';
  }

  public isNotJsonString(str: string): boolean {
    try {
      JSON.parse(str);
      return false;
    } catch (e) {
      return true;
    }
  }
}
