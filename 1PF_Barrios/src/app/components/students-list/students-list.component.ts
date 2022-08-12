import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students = [
    {
      name: 'Julio',
      lastName: 'Barrios',
      age: 19,
      carrer: 'Software Engineering',
      email: 'Juliobarrios@gmail.com',
    },
    {
      name: 'Cecilia',
      lastName: 'Ortiz',
      age: 22,
      carrer: 'Physiology',
      email: 'CeciliaOrtiz@gmail.com',
    },
    {
      name: 'Javive',
      lastName: 'Pariona',
      age: 18,
      carrer: 'Law',
      email: 'JavivePariona@gmail.com',
    },
    {
      name: 'Juan',
      lastName: 'Perez',
      age: 20,
      carrer: 'Architecture',
      email: 'JuanPerez@gmail.com',
    },
    {
      name: 'Jesus',
      lastName: 'Flores',
      age: 20,
      carrer: 'Physiology',
      email: 'JesusFlores@gmail.com',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
