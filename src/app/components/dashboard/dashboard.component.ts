import { Component } from '@angular/core';
import { Calendar } from 'src/app/models/calendar';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  calendar: Calendar | any;

  constructor(private checkinService: CheckinService) {
    this.checkinService.getAllByIDWithBetterResult(1).subscribe((data) => {
      this.calendar = data;

      console.log(this.calendar);
    });
  }
}
