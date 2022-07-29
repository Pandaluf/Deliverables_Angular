import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']

})
export class StudentComponent implements OnInit {

  students = [
    {
      position: 1,
      firstName: 'Julio',
      lastName: 'Barrios',
      birthday: new Date(2002,4,12),
      note: 15,
      grade: '1st Primary',
    },
    {
      position: 4,
      firstName: 'Leonardo',
      lastName: 'Mendoza',
      birthday: new Date(2002,5,20),
      note: 12,
      grade: '1st Primary',
    },
    {
      position: 2,
      firstName: 'Jesus',
      lastName: 'Flores',
      birthday: new Date(2001,1,4),
      note: 15,
      grade: '1st Primary',
    },
    {
      position: 3,
      firstName: 'Cecilia',
      lastName: 'Ortiz',
      birthday: new Date(2003,10,2),
      note: 13,
      grade: '1st Primary',
    },
    {
      position: 5,
      firstName: 'Juan',
      lastName: 'Perez',
      birthday: new Date(2002,9,6),
      note: 5,
      grade: '1st Primary',
    },
    {
      position: 6,
      firstName: 'Pedro',
      lastName: 'Calle',
      birthday: new Date(2001,7,13),
      note: 1,
      grade: '1st Primary',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
