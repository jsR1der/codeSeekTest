import {Component} from '@angular/core';
import {StepService} from "./step/step.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public stepService: StepService) {
  }
}

