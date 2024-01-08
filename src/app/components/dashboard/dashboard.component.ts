import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from 'src/app/models/calendar';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/index');
  }
}
