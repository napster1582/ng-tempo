import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { custom } from 'devextreme/ui/dialog';
import { Observable } from 'rxjs';
import { Response } from 'src/app/@core/interfaces/response';
import { LoginUser } from 'src/app/@core/models/login-user.model';
import { RegisterUser } from 'src/app/@core/models/register-user.model';
import { AuthService } from 'src/app/@core/services/auth.service';

interface IdentityError {
  code: string;
  description: string;
}

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {
  //#region Inputs
  //#endregion

  //#region Output
  //#endregion

  //#region ViewChild
  @ViewChild('container', { static: true })
  container!: ElementRef;
  //#endregion

  //#region Models
  formRegister!: FormGroup;
  formLogin!: FormGroup;
  userRegister!: RegisterUser;
  userLogin!: LoginUser;
  identityError: IdentityError[] = [];
  //#endregion

  //#region atributos (generales)
  isVisible = false;
  type = 'success';
  message!: string;
  //#endregion

  //#region Atributos privados
  //#endregion

  //#region atributos (componentes)
  //#endregion

  //#region Constructor y ciclos de vida

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildFormLogin();
    this.buildFormRegister();
  }

  ngOnInit(): void {}

  //#endregion

  //#region servicios

  private registerUser(registerUser: RegisterUser): Observable<Response> {
    return this.authService.add<any>(registerUser, {
      urlPostfix: 'Register',
      mapFn: (response) => response as Response,
    });
  }

  //#endregion

  //#region  Eventos
  onClickSignUp() {
    this.container.nativeElement.classList.add('sign-up-mode');
  }

  onClickSignIn() {
    this.container.nativeElement.classList.remove('sign-up-mode');
  }

  public get isDocumentInvalid() {
    return (
      this.formRegister.get('documento')?.invalid &&
      this.formRegister.get('documento')?.touched
    );
  }

  public get isNameInvalid() {
    return (
      this.formRegister.get('nombres')?.invalid &&
      this.formRegister.get('nombres')?.touched
    );
  }

  public get isLastNameInvalid() {
    return (
      this.formRegister.get('apellidos')?.invalid &&
      this.formRegister.get('apellidos')?.touched
    );
  }

  public get isEmailInvalid() {
    return (
      this.formRegister.get('email')?.invalid &&
      this.formRegister.get('email')?.touched
    );
  }

  public get isPasswordInvalid() {
    return (
      this.formRegister.get('password')?.invalid &&
      this.formRegister.get('password')?.touched
    );
  }

  onSubmitFormRegister() {
    console.log(
      '🚀 ~ file: login.page.ts ~ line 71 ~ LoginPage ~ guardarRegistro ~ this.formRegister',
      this.formRegister
    );

    this.userRegister = {
      ...(this.formRegister.value as RegisterUser),
      rol: '',
    };
    this.registerUser(this.userRegister).subscribe(
      ({ isSuccess, message, result }) => {
        if (isSuccess) {
          // this.message = message;
          // this.isVisible = isSuccess;
          this.onClickSignIn();
        } else {
          this.identityError = result;
        }
      }
    );
  }

  onSubmitFormLogin() {
    this.userLogin = {
      ...(this.formLogin.value as LoginUser),
    };

    this.authService
      .loginUser(this.userLogin)
      .subscribe(({ isSuccess, message, result }) => {
        if (isSuccess) {
          this.router.navigate(['/home']);
        } else {
          this.message = result;
        }
      });
  }

  //#endregion

  //#region Métodos privados

  private buildFormRegister() {
    this.formRegister = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      documento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  private buildFormLogin() {
    this.formLogin = this.formBuilder.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  private async showMessageRegisterSuccessfull() {
    const confirmDialog = custom({
      title: 'BIENVENIDO',
      messageHtml: 'Registro exitoso puede iniciar sesión',
      buttons: [
        {
          text: 'Aceptar',
          type: 'success',
          onClick: (e) => {
            return true;
          },
        },
        {
          text: 'Cancelar',
          type: 'danger',
          onClick: (e) => {
            return false;
          },
        },
      ],
    });
    confirmDialog.show().then(async (dialogResult: boolean) => {
      console.log(
        '🚀 ~ file: login.page.ts ~ line 193 ~ LoginPage ~ confirmDialog.show ~ dialogResult',
        dialogResult
      );
    });
  }

  //#endregion
}
