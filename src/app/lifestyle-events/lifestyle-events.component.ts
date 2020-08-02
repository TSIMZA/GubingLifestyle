import { Component, OnInit } from '@angular/core';
import {LifestyleEvent} from '../models/lifestyleevent.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-lifestyle-events',
  templateUrl: './lifestyle-events.component.html',
  styleUrls: ['./lifestyle-events.component.css']
})
export class LifestyleEventsComponent implements OnInit {
  events: LifestyleEvent[];

  constructor() { }

  ngOnInit(): void {
    this.events = [
      { imageName: 'BirthdayEscapade.png', eventNameFirstPart: 'BIRTHDAY', eventNameSecondPart: 'ESCAPADE',  backgroundColor: '#FFFFFF',
      eventDescription: 'This is where the event description goes. Aaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaa v aaaaaaaaaaaaaaaa aa aaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa a    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa.'},

      { imageName: 'All White Invasion.png', eventNameFirstPart: 'ALL WHITE', eventNameSecondPart: 'INVASION', backgroundColor: '#191919',
      eventDescription: 'This is where the event description goes. Aaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaa v aaaaaaaaaaaaaaaa aa aaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa a    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa.'},

      { imageName: 'LifestyleExperience.png', eventNameFirstPart: 'LIFESTYLE', eventNameSecondPart: 'EXPERIENCE', backgroundColor: 'FFFFFF',
      eventDescription: 'This is where the event description goes. Aaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaa v aaaaaaaaaaaaaaaa aa aaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa a    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa.'},
    ];
  }

}
