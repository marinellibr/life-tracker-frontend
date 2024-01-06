import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent {
  constructor(private checkinService: CheckinService, private router: Router) {
    this.checkinService.getAllByIDWithBetterResult(1).subscribe((data) => {
      this.alreadyDone =
        data[this.today.getMonth()].days[this.today.getDay() - 1].anxietyLog ===
        '0'
          ? false
          : true;
    });
  }

  today = new Date();
  step = 1;
  alreadyDone = true;
  log = {
    idUser: 1,
    insertDate: this.dateConversion(),
    anxietyLog: '',
    dayLog: '',
    exerciseLog: '',
    healthLog: '',
    hobbyLog: '',
    sleepLog: '',
    sexualLog: '',
    workLog: '',
  };

  nextStep() {
    if (this.step === 8) {
      this.finish();
    } else {
      this.step++;
    }
  }
  previousStep() {
    this.step--;
  }

  addLog(step: number, rate: string) {
    switch (step) {
      case 1:
        this.log.dayLog = rate;
        break;
      case 2:
        this.log.healthLog = rate;
        break;
      case 3:
        this.log.anxietyLog = rate;
        break;
      case 4:
        this.log.exerciseLog = rate;
        break;
      case 5:
        this.log.hobbyLog = rate;
        break;
      case 6:
        this.log.sexualLog = rate;
        break;
      case 7:
        this.log.sleepLog = rate;
        break;
      case 8:
        this.log.workLog = rate;
        break;
      default:
        console.error(step);
        break;
    }

    this.nextStep();
  }

  finish() {
    this.checkinService.sendCheckin(this.log).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/dashboard');
    });
  }

  dateConversion() {
    let convertedDate = `${this.today.getFullYear()}-${
      this.today.getMonth() + 1
    }-${this.today.getDay()}`;

    return convertedDate;
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/index');
  }
}
