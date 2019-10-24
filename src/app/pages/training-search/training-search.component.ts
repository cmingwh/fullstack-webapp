import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProposeComponent} from '../propose/propose.component';

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
