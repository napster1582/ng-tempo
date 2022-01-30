import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxGenericRestService } from 'ngx-grs';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/response';
import { LoginUser } from '../models/login-user.model';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService extends NgxGenericRestService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    super({ baseUrl: environment.apiUrl, resourceName: 'Account' });
    this.checkToken();
  }

  loginUser(loginUser: LoginUser): Observable<Response> {
    return this.add<any>(loginUser, {
      urlPostfix: 'Login',
      mapFn: (response) => response,
    }).pipe(
      map((res: Response) => {
        const { token }: { token: string } = res.result;

        if (res.isSuccess) {
          this.saveToken(token);
          this.loggedIn.next(true);
          return res;
        } else return res;
      }),
      catchError((error) => this.handlerError(error))
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['/auth/login']);
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  private checkToken(): void {
    const token = localStorage.getItem('token');

    if (token) {
      const isExpired = helper.isTokenExpired(token);

      if (isExpired) {
        this.logout();
      } else {
        this.loggedIn.next(true);
      }
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  private handlerError(err: any): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
