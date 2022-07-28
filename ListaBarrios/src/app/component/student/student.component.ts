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
      note: 15,
      grade: '1st Primary',
    },
    {
      position: 4,
      firstName: 'Leonardo',
      lastName: 'Mendoza',
      note: 12,
      grade: '1st Primary',
    },
    {
      position: 2,
      firstName: 'Jesus',
      lastName: 'Flores',
      note: 15,
      grade: '1st Primary',
    },
    {
      position: 3,
      firstName: 'Cecilia',
      lastName: 'Ortiz',
      note: 13,
      grade: '1st Primary',
    },
    {
      position: 5,
      firstName: 'Juan',
      lastName: 'Perez',
      note: 5,
      grade: '1st Primary',
    },
    {
      position: 6,
      firstName: 'Pedro',
      lastName: 'Calle',
      note: 1,
      grade: '1st Primary',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
