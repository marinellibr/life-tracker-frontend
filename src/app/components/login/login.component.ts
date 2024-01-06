import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  username: string = '';
  password: string = '';

  logIn() {
    let body = {
      username: this.username,
      password: this.password,
    };

    this.loginService.sendLogin(body).subscribe((data) => {
      if (data.logged) {
        console.log(data);
        localStorage.setItem('token', '12345678');
        localStorage.setItem('id', data.userId);
        // localStorage.setItem('', '');
        this.router.navigateByUrl('dashboard');
      } else {
        console.warn('Error on login');
      }
    });
  }
}
