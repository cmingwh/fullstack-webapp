import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface TrainElement {
  name: string;
  rating: number;
  completed: number;
  userName: string;
}

@Component({
  selector: 'app-propose',
  templateUrl: './propose.component.html',
  styleUrls: ['./propose.component.css']
})
export class ProposeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProposeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TrainElement) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
