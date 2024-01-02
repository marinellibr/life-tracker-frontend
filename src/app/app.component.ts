import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life-tracker-frontend';

  constructor(private userService: UserService){

    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
    })
  }
}
