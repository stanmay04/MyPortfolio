import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  // Define a boolean variable to control the animation
  isLoaded: boolean = false;

  // Simulate a delay to show the animation
  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 3000); // Adjust the delay as needed
  }
}
