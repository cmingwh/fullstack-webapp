import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = 'Demo';
  greeting = {};

  constructor(private app: AppService, private http: HttpClient) {
    // http.get('http://localhost:9000/resource').subscribe(data => {
    //   this.greeting = data;
    // });
    http.get('http://localhost:8888/token').subscribe(data => {
      const token = data['token'];
      http.get('http://localhost:9000', {headers : new HttpHeaders().set('X-Auth-Token', token)})
        .subscribe(response => this.greeting = response);
    }, () => {});
  }

  authenticated() { return this.app.authenticated; }

  ngOnInit() {
  }
}
