import {Component, Input} from '@angular/core';
import {NgClass, NgIf, NgTemplateOutlet} from "@angular/common";
import {StepModel} from "./step.model";
import {StepIndicatorComponent} from "./step-indicator/step-indicator.component";
import {StepService} from "./step.service";

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
    NgClass,
    StepIndicatorComponent
  ],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input() step: StepModel;
  @Input() selectedStep: number;

  constructor(public stepService: StepService) {
  }

}
