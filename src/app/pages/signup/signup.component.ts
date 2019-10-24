import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { AuthService } from '../../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  roles = [
    { value: 'ROLE_user', viewValue: 'Staff' },
    { value: 'ROLE_mentor', viewValue: 'Mentor' },
  ];

  user = {
    userName: '', password: '', firstName: '', lastName: '',
    contactNumber: '', linedinUrl: '', yearsOfExperience: '', role: '', roles: []
  };

  constructor(private app: AppService, private auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    // if (this.user.role) {
    //   this.user.roles.push({role: this.user.role});
    // }
    this.app.signup(this.user).subscribe(
      res => {
        if (res) {
          if (res.error || res.message) {
            console.log(res);
            this.router.navigate(['login'], { queryParams: { signup: 'failed' } });
          } else {
            this.router.navigate(['login'], { queryParams: { signup: res.result } });
          }
        }
      },
      error => {
        console.log('error');
      }
    );
  }
}
