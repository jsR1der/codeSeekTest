import {Component, Input} from '@angular/core';
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {StepService} from "../step.service";

@Component({
  selector: 'app-step-indicator',
  standalone: true,
  imports: [
    NgSwitchCase,
    NgSwitch,
    NgIf
  ],
  templateUrl: './step-indicator.component.html',
  styleUrls: ['./step-indicator.component.scss']
})
export class StepIndicatorComponent {
  @Input() selectedStep: number;

  constructor(public stepService: StepService) {
  }
}
