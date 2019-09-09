import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProposeComponent} from '../propose/propose.component';

export interface Tech {
  value: string;
  viewValue: string;
}

export interface TrainElement {
  name: string;
  rating: number;
  completed: number;
  userId: string;
}

const TRAIN_DATA: TrainElement[] = [
  {name: 'Hydrogen', rating: 2.5, completed: 11, userId: 'test@test.com'},
  {name: 'Helium', rating: 4, completed: 2, userId: '222@ibm.com'}
];

@Component({
  selector: 'app-training-search',
  templateUrl: './training-search.component.html',
  styleUrls: ['./training-search.component.css']
})

export class TrainingSearchComponent implements OnInit {

  techs: Tech[] = [
    {value: 'Spring', viewValue: 'Spring'},
    {value: 'Angular', viewValue: 'Angular'},
    {value: 'React', viewValue: 'React'}
  ];

  times: Tech[] = [
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

  displayedColumns: string[] = ['name', 'rating', 'completed', 'userId'];
  dataSource = TRAIN_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(element): void {
    const dialogRef = this.dialog.open(ProposeComponent, {
      width: '450px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
