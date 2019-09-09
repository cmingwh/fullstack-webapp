import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = { userName: '', password: '' };
  authenticated = false;
  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.app.authenticate(this.credentials).subscribe(
      res => {
        if (res.token) {
          this.authenticated = true;
          this.router.navigateByUrl('/home');
        } else {
          this.router.navigateByUrl('/login');
        }
      },
      error => {
        console.log("error");
      }
    );
  }
}
