import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {
  newStudentForm!: FormGroup;

  constructor(
    private form: FormBuilder
  ) {
    this.newStudentForm = this.form.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required, Validators.required]),
      age: new FormControl('', [Validators.required]),
      carrer: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  ngOnInit(): void {
  }

  addStudent(){
    console.log(this.newStudentForm);
  }

}
