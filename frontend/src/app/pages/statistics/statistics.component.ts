import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

User: string="User";

scrollToCalendar(): void {
  const target = document.getElementById('calendarComponent');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  
}

}
