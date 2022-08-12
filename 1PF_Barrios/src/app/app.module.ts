import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { StudentsFormComponent } from './components/students-form/students-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
