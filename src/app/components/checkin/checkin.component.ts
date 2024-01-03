import { Component } from '@angular/core';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent {
  today = new Date();
  step = 1;

  nextStep(){
    this.step + 1 == 8 ? this.step = 1 : this.step++;
  }
  previousStep(){
    this.step - 1 == 0 ? this.step = 8 : this.step--;
  }
}
