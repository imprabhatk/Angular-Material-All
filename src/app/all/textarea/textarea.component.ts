import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  firstNameAutofilled: boolean;
  lastNameAutofilled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
