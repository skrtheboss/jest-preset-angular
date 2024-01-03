import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Welcome to {{title}}!</h1>',
  standalone: true,
})
export class AppComponent {
  title = 'app';
}
