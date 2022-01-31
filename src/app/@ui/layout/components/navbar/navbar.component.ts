import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/@core/interfaces/user-info';
import { AuthService } from 'src/app/@core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userInfo!: UserInfo;

  constructor(private authService: AuthService, private router: Router) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit(): void {}

  onClickClosedSesion() {
    this.authService.logout();
  }

  navegarActividades() {
    this.router.navigate(['/actividades/dashboard']);
  }
}
