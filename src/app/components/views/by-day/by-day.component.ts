import { Component } from '@angular/core';
import { Calendar } from 'src/app/models/calendar';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-by-day',
  templateUrl: './by-day.component.html',
  styleUrls: ['./by-day.component.scss'],
})
export class ByDayComponent {
  calendar: Calendar | any;
  category = 1;
  categoryName = 'day log.';

  constructor(private checkinService: CheckinService) {
    this.checkinService.getAllByIDWithBetterResult(1).subscribe((data) => {
      console.log(data);
      this.calendar = data;
    });
  }

  changeCategory(category: number) {
    this.category = category;

    switch (category) {
      case 1:
        this.categoryName = 'day log.';
        break;
      case 2:
        this.categoryName = 'anxiety log.';
        break;
      case 3:
        this.categoryName = 'health log.';
        break;
      case 4:
        this.categoryName = 'exercise log.';
        break;
      case 5:
        this.categoryName = 'hobby log.';
        break;
      case 6:
        this.categoryName = 'sexual log.';
        break;
      case 7:
        this.categoryName = 'sleep log.';
        break;
      case 8:
        this.categoryName = 'work log.';
        break;
      default:
        this.categoryName = 'day log.';
        break;
    }
  }
}
