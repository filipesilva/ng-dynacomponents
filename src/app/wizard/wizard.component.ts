import { Component, AfterContentInit, OnDestroy, HostBinding, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { slideInDownAnimation } from '../animations';

import { WizardState, WizardAction } from '../states';

@Component({
  selector: 'ng-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  animations: [ slideInDownAnimation ]
})
export class WizardComponent implements AfterContentInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
  // @HostBinding('style.backgroundColor') backgroundColor = '#1976D2';
  @HostBinding('style.color') color = 'white';

  @Input() param;

  actions: WizardAction[] = [];
  haveFooter: boolean = true;

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
