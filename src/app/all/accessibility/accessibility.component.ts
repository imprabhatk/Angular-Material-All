import { FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})

export class AccessibilityComponent implements OnInit {

  elementOrigin = this.formatOrigin(null);
  subtreeOrigin = this.formatOrigin(null);

  constructor(private _ngZone: NgZone, private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
  markForCheck() {
    this._ngZone.run(() => this._cdr.markForCheck());
  }
}