import {Injectable} from '@angular/core';
import {StepModel} from "./step.model";

@Injectable({
  providedIn: 'root'
})
export class StepService {
  public selectedStep: number = 0;
  public defaultSteps: StepModel[] = [
    {label: 'Email'},
    {label: 'Settings'},
    {label: 'Role'},
    {label: 'Email'},
    {label: 'Settings'},
    {label: 'Role'},
    {label: 'Email'},
    {label: 'Role'},
  ]

  constructor() {
  }

  public selectStep(index: number): void {
    this.selectedStep = index;
  }

}
