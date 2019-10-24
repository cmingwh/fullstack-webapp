import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-calendar',
  templateUrl: './mentor-calendar.component.html',
  styleUrls: ['./mentor-calendar.component.css']
})
export class MentorCalendarComponent implements OnInit {
  
  times = [
    {value: '1', viewValue: '1 AM'},
    {value: '2', viewValue: '2 AM'},
    {value: '3', viewValue: '3 AM'},
    {value: '4', viewValue: '4 AM'},
    {value: '5', viewValue: '5 AM'},
    {value: '6', viewValue: '6 AM'},
    {value: '7', viewValue: '7 AM'},
    {value: '8', viewValue: '8 AM'},
    {value: '9', viewValue: '9 AM'},
    {value: '10', viewValue: '10 AM'},
    {value: '11', viewValue: '11 AM'},
    {value: '12', viewValue: '12 AM'},
    {value: '13', viewValue: '1 PM'},
    {value: '14', viewValue: '2 PM'},
    {value: '15', viewValue: '3 PM'},
    {value: '16', viewValue: '4 PM'},
    {value: '17', viewValue: '5 PM'},
    {value: '18', viewValue: '6 PM'},
    {value: '19', viewValue: '7 PM'},
    {value: '20', viewValue: '8 PM'},
    {value: '21', viewValue: '9 PM'},
    {value: '22', viewValue: '10 PM'},
    {value: '23', viewValue: '11 PM'},
    {value: '24', viewValue: '12 PM'},
  ];

  startDate;

  constructor() { }

  ngOnInit() {
  }

}
