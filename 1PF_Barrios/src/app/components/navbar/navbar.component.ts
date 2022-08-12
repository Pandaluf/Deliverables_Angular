import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(100, style([{
            transform: 'translateX(-200px)'
          }]
        ))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  @Input() navegationMenu: number = 0;

  data = [
    'Home',
    'Courses',
    'Pays',
    'Tramits',
    'Setting'
  ]
  public courses: any[] = this.data;
  constructor() { }

  ngOnInit(): void {
  }

}
