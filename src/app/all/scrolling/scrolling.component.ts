import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ScrollingComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit(): void {  }
}