import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  greeting: string;

  constructor(private welcomeService: WelcomeService) { }

  greetings() {
    this.greeting = this.welcomeService.greeting(new Date().getHours());
  }

  ngOnInit() {
    this.greetings();
  }

}
