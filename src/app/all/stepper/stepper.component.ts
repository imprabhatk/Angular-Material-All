import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
}

@Component({
  selector: 'example-custom-stepper',
  templateUrl: './example-custom-stepper.html',
  styleUrls: ['./example-custom-stepper.css'],
  providers: [{provide: CdkStepper, useExisting: CustomStepper}]
})

export class CustomStepper extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}