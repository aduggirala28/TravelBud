import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {IMyDpOptions} from 'mydatepicker';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDatePickerOptions: IMyDpOptions={
    dateFormat:"mm/dd/yyyy"
  }
  datemodelFrom:Object={ date: { year: 2018, month: 10, day: 9 } };;
  datemodelTo:Object={ date: { year: 2018, month: 10, day: 9 } };;
  title = 'Travel Bud';
  desp='Find your next Budget escape';
 
}
