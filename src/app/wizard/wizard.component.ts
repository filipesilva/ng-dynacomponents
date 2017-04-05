import { Component, AfterContentInit, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';

import { WizardState } from '../states';

@Component({
  selector: 'ng-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements AfterContentInit, OnDestroy {

  private subscription;
  state: WizardState;

  constructor(
    private _store: Store<WizardState>
  ) {
    this.subscription = this._store
      .select('wizard')
      .subscribe(state => {
        this.state = <WizardState>state;
      });
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
