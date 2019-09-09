import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../service/app.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }
  ngOnInit() {
  }
  logout() {
    this.http.post('logout', {}).pipe(finalize(() => {
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');
    })).subscribe();
  }
}
