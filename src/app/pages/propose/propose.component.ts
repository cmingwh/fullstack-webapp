import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AppService } from '../../service/app.service';
import { AuthService } from '../../service/auth.service';

export interface TrainElement {
  calendarId: number;
  endTime: string;
  skillId: number;
  startDate: string;
  startTime: string;
  status: string;
}

@Component({
  selector: 'app-propose',
  templateUrl: './propose.component.html',
  styleUrls: ['./propose.component.css']
})
export class ProposeComponent implements OnInit {
  propose = {userName: '', description: '', calendarId: null, skillId: null, };

  constructor(
    public dialogRef: MatDialogRef<ProposeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TrainElement,
    private app: AppService, private auth: AuthService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.auth.isLogin()) {
      this.propose.userName = localStorage.getItem('userName');
    }
  }

  sendPropose() {
    if (this.propose.userName && this.propose.description) {
      this.propose.calendarId = this.data.calendarId;
      this.propose.skillId = this.data.skillId;
      this.app.sendPropose(this.propose).subscribe(
        res => {
          if (res) {
            console.log(res);
          }
        },
        error => {
          console.log('error:', error);
        }
      );
    }
  }

}
