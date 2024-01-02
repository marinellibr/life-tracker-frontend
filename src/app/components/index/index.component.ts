import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  form = 0;
  
  toggleForm(form: number){
    this.form = form;
  }
}
