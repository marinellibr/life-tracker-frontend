import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from 'src/app/models/calendar';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-by-log',
  templateUrl: './by-log.component.html',
  styleUrls: ['./by-log.component.scss'],
})
export class ByLogComponent {
  calendar: Calendar | any;
  show = false;
  step: Number[] = [];

  constructor(private checkinService: CheckinService, private router: Router) {
    this.checkinService.getAllByIDWithBetterResult(1).subscribe((data) => {
      this.calendar = data;
    });
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
