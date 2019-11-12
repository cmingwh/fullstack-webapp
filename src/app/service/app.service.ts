import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeArea { value: string; viewValue: string; }

export class AppService {
  constructor(private http: HttpClient) {
  }

  getTimezone(): string[] {
    return [
      "Etc/GMT+12",
      "Pacific/Midway",
      "Pacific/Honolulu",
      "America/Juneau",
      "America/Dawson",
      "America/Boise",
      "America/Chihuahua",
      "America/Phoenix",
      "America/Chicago",
      "America/Regina",
      "America/Mexico_City",
      "America/Belize",
      "America/Detroit",
      "America/Indiana/Indianapolis",
      "America/Bogota",
      "America/Glace_Bay",
      "America/Caracas",
      "America/Santiago",
      "America/St_Johns",
      "America/Sao_Paulo",
      "America/Argentina/Buenos_Aires",
      "America/Godthab",
      "Etc/GMT+2",
      "Atlantic/Azores",
      "Atlantic/Cape_Verde",
      "GMT",
      "Africa/Casablanca",
      "Atlantic/Canary",
      "Europe/Belgrade",
      "Europe/Sarajevo",
      "Europe/Brussels",
      "Europe/Amsterdam",
      "Africa/Algiers",
      "Europe/Bucharest",
      "Africa/Cairo",
      "Europe/Helsinki",
      "Europe/Athens",
      "Asia/Jerusalem",
      "Africa/Harare",
      "Europe/Moscow",
      "Asia/Kuwait",
      "Africa/Nairobi",
      "Asia/Baghdad",
      "Asia/Tehran",
      "Asia/Dubai",
      "Asia/Baku",
      "Asia/Kabul",
      "Asia/Yekaterinburg",
      "Asia/Karachi",
      "Asia/Kolkata",
      "Asia/Kathmandu",
      "Asia/Dhaka",
      "Asia/Colombo",
      "Asia/Almaty",
      "Asia/Rangoon",
      "Asia/Bangkok",
      "Asia/Krasnoyarsk",
      "Asia/Shanghai",
      "Asia/Kuala_Lumpur",
      "Asia/Taipei",
      "Australia/Perth",
      "Asia/Irkutsk",
      "Asia/Seoul",
      "Asia/Tokyo",
      "Asia/Yakutsk",
      "Australia/Darwin",
      "Australia/Adelaide",
      "Australia/Sydney",
      "Australia/Brisbane",
      "Australia/Hobart",
      "Asia/Vladivostok",
      "Pacific/Guam",
      "Asia/Magadan",
      "Pacific/Fiji",
      "Pacific/Auckland",
      "Pacific/Tongatapu"
    ]
  };

  getTimes(): TimeArea[] {
    return [
      { value: '01:00', viewValue: '1 AM' },
      { value: '02:00', viewValue: '2 AM' },
      { value: '03:00', viewValue: '3 AM' },
      { value: '04:00', viewValue: '4 AM' },
      { value: '05:00', viewValue: '5 AM' },
      { value: '06:00', viewValue: '6 AM' },
      { value: '07:00', viewValue: '7 AM' },
      { value: '08:00', viewValue: '8 AM' },
      { value: '09:00', viewValue: '9 AM' },
      { value: '10:00', viewValue: '10 AM' },
      { value: '11:00', viewValue: '11 AM' },
      { value: '12:00', viewValue: '12 AM' },
      { value: '13:00', viewValue: '1 PM' },
      { value: '14:00', viewValue: '2 PM' },
      { value: '15:00', viewValue: '3 PM' },
      { value: '16:00', viewValue: '4 PM' },
      { value: '17:00', viewValue: '5 PM' },
      { value: '18:00', viewValue: '6 PM' },
      { value: '19:00', viewValue: '7 PM' },
      { value: '20:00', viewValue: '8 PM' },
      { value: '21:00', viewValue: '9 PM' },
      { value: '22:00', viewValue: '10 PM' },
      { value: '23:00', viewValue: '11 PM' },
      { value: '24:00', viewValue: '12 PM' },
    ];
  }

  getMentorCalendars(userName): Observable<any> {
    return this.http.get(`/training/calendars/user/${userName}`).pipe(
      map(res => {
        return res;
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }

  saveMentorCalendar(calendar): Observable<any> {
    return this.http.post(`/training/calendars/save`, calendar).pipe(
      map(res => {
        return res;
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }

  deleteCalendar(id): Observable<any> {
    return this.http.delete(`/training/calendars/${id}`).pipe(
      map(res => {
        return res;
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
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

  searchCalendar(calendar): Observable<any> {
    return this.http.post('/training/calendars/search', calendar).pipe(
      map(res => {
        return res;
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }
  
}
