import { Component, OnInit } from '@angular/core';

const TRAIN_DATA = [
  {tech: 'SpringBoot', time: 'From 2019/11/12 12:00 AM to 2:00 PM', progress: 0.5, mentorId: 'test@test.com', action: ''},
  {tech: 'Cloud', time: 'From 2019/11/12 12:00 AM to 2:00 PM', progress: 0.75, mentorId: '222@ibm.com', action: ''}
];

@Component({
  selector: 'app-user-trainings',
  templateUrl: './user-trainings.component.html',
  styleUrls: ['./user-trainings.component.css']
})
export class UserTrainingsComponent implements OnInit {

  displayedColumns: string[] = ['tech', 'time', 'progress', 'mentorId', 'action'];
  dataSource = TRAIN_DATA;
  completedColumns: string[] = ['tech', 'time', 'mentorId'];
  completedData = TRAIN_DATA;

  constructor() { }

  ngOnInit() {
  }

}
