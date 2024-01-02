import { Component } from '@angular/core';
import { Calendar, CalendarDefaultValue } from 'src/app/models/calendar';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  calendar: Calendar[];

  constructor(private checkinService: CheckinService, calendar: CalendarDefaultValue) {
    this.calendar = calendar.defaultValue;
    this.checkinService.getAllByID(1).subscribe((data) => {
      console.log(data);
      this.filter(data);
    });
  }


  filter(data: any[]) {
    let filteredByAnxiety: any = [];
    let filteredByDay: any = [];
    let filteredByHealth: any = [];
    let filteredByExercise: any = [];
    let filteredByHobby: any = [];
    let filteredBySexual: any = [];
    let filteredBySleep: any = [];
    let filteredByWork: any = [];

    data.forEach((data) => {
      console.log(data)
      const date = new Date(data.insertDate);
      const dayX = date.getDay() + 1;
      const month = date.getMonth() != 11 ? date.getMonth() + 1 : 1;

      filteredByAnxiety.push({
        dayX,
        month,
        anxiety: data.anxietyLog,
      });
      filteredByDay.push({
        dayX,
        month,
        daily: data.dayLog,
      });
      filteredByExercise.push({
        dayX,
        month,
        exercise: data.exerciseLog,
      });
      filteredByHealth.push({
        dayX,
        month,
        health: data.healthLog,
      });
      filteredByHobby.push({
        dayX,
        month,
        hobby: data.hobbyLog,
      });
      filteredBySexual.push({
        dayX,
        month,
        sexual: data.sexualLog,
      });
      filteredBySleep.push({
        dayX,
        month,
        sleep: data.sleepLog,
      });
      filteredByWork.push({
        dayX,
        month,
        work: data.workLog,
      });
    });

    filteredByAnxiety.forEach((element: any) => {
      this.calendar[element.month - 1].days[element.dayX - 1].anxiety = element.anxiety;
    });

    filteredByDay.forEach((element: any) => {
      this.calendar[element.month - 1].days[element.dayX - 1].day = element.day;
    });

    filteredByExercise.forEach((element: any) => {
      this.calendar[element.month - 1].days[element.dayX - 1].exercise = element.exercise;
    });

    filteredByHealth.forEach((element: any) => {
      this.calendar[element.month - 1].days[element.dayX - 1].health = element.health;
    });

    filteredByHobby.forEach((element: any) => {
      this.calendar[element.month - 1].days[element.dayX - 1].hobby = element.hobby;
    });

    filteredBySexual.forEach((element: any) => {
      this.calendar[element.month - 1].days[element.dayX - 1].sexual = element.sexual;
    });

    filteredBySleep.forEach((element: any) => {
      this.calendar[element.month - 1].days[element.dayX - 1].sleep = element.sleep;
    });

    filteredByWork.forEach((element: any) => {
      this.calendar[element.month - 1].days[element.dayX - 1].work = element.work;
    });
  }
}
