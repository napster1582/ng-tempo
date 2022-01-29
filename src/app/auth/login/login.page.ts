import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {
  @ViewChild('container', { static: true })
  container!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onClickSignUp() {
    this.container.nativeElement.classList.add('sign-up-mode');
  }

  onClickSignIn() {
    this.container.nativeElement.classList.remove('sign-up-mode');
  }
}
