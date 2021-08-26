import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-mat-tooltip-module',
  templateUrl: './mat-tooltip-module.component.html',
  styleUrls: ['./mat-tooltip-module.component.scss']
})
export class MatTooltipModuleComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor() { }

  ngOnInit(): void {}
}