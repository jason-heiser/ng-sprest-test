import { Component } from '@angular/core';
import { Web } from 'gd-sprest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-sprest-test';
  web = Web('http://localhost/').execute(console.log, console.error);
}
