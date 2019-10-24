import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-skills',
  templateUrl: './mentor-skills.component.html',
  styleUrls: ['./mentor-skills.component.css']
})
export class MentorSkillsComponent implements OnInit {
  techs = [
    {value: 'Spring', viewValue: 'Spring'},
    {value: 'Angular', viewValue: 'Angular'},
    {value: 'React', viewValue: 'React'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
