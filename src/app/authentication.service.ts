import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';
  apiUrl = 'http://192.168.89.184:8080';

  constructor(private http: HttpClient, private router: Router) {}

  setToken(token: string) {
    if (!this.isValidToken(token)) {
      throw new Error('Invalid token');
    }
    localStorage.setItem(this.tokenKey, token);
  }

  public login(emailaddress: string, password: string): Observable<any> {
    const data = { emailAddress: emailaddress, password: password };
    const url = `${this.apiUrl}/auth/login`;
    console.log(data, "12334", url);

    return this.http.post<any>(url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(
      tap({
        next: (response: any) => {
          console.log('Login successful:', response);
          if (response.token) {
            this.setToken(response.token);
            this.router.navigate(['/layout']);
          } else {
            throw new Error('No token in response');
          }
        },
        error: (error: HttpErrorResponse) => {
          console.error('Login error:', error);
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    let errorMessage = 'Something went wrong; please try again later.';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      errorMessage = `Server error: ${error.status}, message: ${error.message}`;
    }
    return throwError(errorMessage);
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
    return '';
  }

  private isValidToken(token: string): boolean {
    return typeof token === 'string' && this.isNotJsonString(token) && token.length > 30;
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
