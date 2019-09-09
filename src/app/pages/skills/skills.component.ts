import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  user = {timezone: 'Asia/Shanghai'};
  
  timezones = [
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
  ];
  
  times = [
    {value: '1', viewValue: '1 AM'},
    {value: '2', viewValue: '2 AM'},
    {value: '3', viewValue: '3 AM'},
    {value: '4', viewValue: '4 AM'},
    {value: '5', viewValue: '5 AM'},
    {value: '6', viewValue: '6 AM'},
    {value: '7', viewValue: '7 AM'},
    {value: '8', viewValue: '8 AM'},
    {value: '9', viewValue: '9 AM'},
    {value: '10', viewValue: '10 AM'},
    {value: '11', viewValue: '11 AM'},
    {value: '12', viewValue: '12 AM'},
    {value: '13', viewValue: '1 PM'},
    {value: '14', viewValue: '2 PM'},
    {value: '15', viewValue: '3 PM'},
    {value: '16', viewValue: '4 PM'},
    {value: '17', viewValue: '5 PM'},
    {value: '18', viewValue: '6 PM'},
    {value: '19', viewValue: '7 PM'},
    {value: '20', viewValue: '8 PM'},
    {value: '21', viewValue: '9 PM'},
    {value: '22', viewValue: '10 PM'},
    {value: '23', viewValue: '11 PM'},
    {value: '24', viewValue: '12 PM'},
  ];

  techs = [
    {value: 'Spring', viewValue: 'Spring'},
    {value: 'Angular', viewValue: 'Angular'},
    {value: 'React', viewValue: 'React'}
  ];

  changeTimezone(timezone) {
    this.user.timezone = timezone;
  }

  constructor() { }

  ngOnInit() {
  }

}
