import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css'],
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
export class ToolBarComponent implements OnInit {

  data = [
    'Home',
    'Courses',
    'Pays',
    'Tramits',
    'Setting'
  ]
  navegationMenu: number = 1;
  public courses: any[] = this.data;
  constructor() { }

  ngOnInit(): void {
  }

}
