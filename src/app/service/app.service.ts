import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  authenticate(credentials): Observable<any> {
    return this.http.post('/api/login', credentials).pipe(
      map(res => {
        return res;
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }

  signup(user): Observable<any> {
    return this.http.post('/api/signup', user).pipe(
      map(res => {
        return res;
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }

  saveMentor(user): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    const vheaders = new HttpHeaders(accessToken ? { Authorization: 'Basic ' + accessToken } : {});
    return this.http.post('/user/info/saveMentor', user, { headers: vheaders }).pipe(
      map(res => {
        return res;
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }

  getAllSkills(): Observable<any> {
    return this.http.get('/resource/skill/findAll').pipe(
      map(res => {
        return res;
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }

  getMyInfo(): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    const vheaders = new HttpHeaders(accessToken ? { Authorization: 'Basic ' + accessToken } : {});
    return this.http.get('/user/info', { headers: vheaders }).pipe(
      map(res => {
        const obj = JSON.stringify(res);
        localStorage.setItem('userInfo', obj);
        return true;
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }

}
