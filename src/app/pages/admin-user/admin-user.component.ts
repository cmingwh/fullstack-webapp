import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  
  dataSource = [
    {userId: 'Paris@test.com', userName: 'Paris', role: 'trainee', status: 'unblock', action: ''},
    {userId: 'Neo@test.com', userName: 'Neo', role: 'mentor', status: 'unblock', action: ''}
  ];

  displayedColumns: string[] = ['userId', 'userName', 'role', 'status', 'action'];

  constructor() { }

  ngOnInit() {
  }

  block(element){
    alert(element.userName + ' blocked!');
  }
}
