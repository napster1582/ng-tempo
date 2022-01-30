import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './@core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tempo-app';

  isLogin$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isLogin$ = this.authService.isLoggedIn;
  }
}
