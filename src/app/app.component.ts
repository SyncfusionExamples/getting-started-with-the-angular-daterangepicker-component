import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  public startDateValue: Date = new Date(2022, 5, 13);
  public endDateValue: Date = new Date(2022, 5, 17);
  public minDate: Date = new Date(2022, 5, 6);
  public maxDate: Date = new Date(2022, 6, 22);
  public minDayValue: Number = 5;
  public maxDayValue: Number = 10;
}
