import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('5s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'myportfolio';
  isLoaded: boolean = false;

  // Simulate a delay to show the animation
  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 5000); // Adjust the delay as needed
  }
}
