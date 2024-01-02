import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  password: string = "";
  username: string = "";

  constructor(public userService: UserService){}

  signUp(){
    this.userService.insertUser({username: this.username, password: this.password}).subscribe(data => {
      console.log(data);
    })
  }
}
