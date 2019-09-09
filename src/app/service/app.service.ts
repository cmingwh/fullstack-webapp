import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials):Observable<any> {
        // const vheaders = new HttpHeaders(credentials ? {
        //     Authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        // } : {});

        return this.http.post('/api/login', credentials).pipe(
            map(res => {
              return res;
            }),
            catchError((error:any) => {
              return of(error);
            })
        );
    }
}
