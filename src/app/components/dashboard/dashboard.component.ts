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
  calendar: Calendar | any;
  show = false;
  step: Number[] = [];

  constructor(private checkinService: CheckinService, private router: Router) {
    this.checkinService.getAllByIDWithBetterResult(1).subscribe((data) => {
      this.calendar = data;
    });
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/index');
  }

  expandSection(step: number) {
    this.step.push(step);
    this.show = true;
    console.log(this.step);
  }

  collapseSection(step: number) {
    const index = this.step.indexOf(step);
    this.step.splice(index, 1);
    if (this.step.length == 0) {
      this.show = false;
    }
    console.log(this.step);
  }
}
