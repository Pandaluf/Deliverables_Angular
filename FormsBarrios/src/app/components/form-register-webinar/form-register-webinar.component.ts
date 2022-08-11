import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-register-webinar',
  templateUrl: './form-register-webinar.component.html',
  styleUrls: ['./form-register-webinar.component.css']
})
export class FormRegisterWebinarComponent implements OnInit {
  webinarForm !: FormGroup;

  constructor(
    private form: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.webinarForm = this.form.group({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      code: new FormControl('', [Validators.required]),
      country: new FormControl('')
    })
  }

  delivery(){
    console.log(this.webinarForm);
  }

}
