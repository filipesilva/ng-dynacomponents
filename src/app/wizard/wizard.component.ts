import { Component, ComponentRef, ComponentFactoryResolver, AfterContentInit, DoCheck, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { WizardStepDirective } from './wizard-step.directive';
import { WizardState } from '../states';
import { StepOneComponent, StepTwoComponent} from '../steps';

@Component({
  selector: 'ng-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements AfterContentInit, DoCheck, OnDestroy {

  private subscription;
  state: WizardState;
  step: ComponentRef<any>;
  @ViewChild(WizardStepDirective) stepHost: WizardStepDirective;

  constructor(
    private _store: Store<WizardState>,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.subscription = this._store
      .select('wizard')
      .subscribe(state => {
        this.state = <WizardState>state;
      });
  }

  exec(action) {
    if (action.prototype/* && action.prototype instanceof WizardStepComponent*/) {
      this._store.dispatch({
        type: 'STEP_LOAD',
        payload: action
      });
    } else if (typeof action == 'function') {
      let result = action();
      if (result) {
        if (result.prototype/* && result.prototype instanceof WizardStepComponent*/) {
          this._store.dispatch({
            type: 'STEP_LOAD',
            payload: result
          });
        } else if (typeof result == 'object' && result.hasOwnProperty('type')) {
          this._store.dispatch(result);
        }
      }
    } else if (typeof action == 'object' && action.hasOwnProperty('type')) {
      this._store.dispatch(action);
    }
  }

  dispatch(action) {
    this._store.dispatch(action);
  }

  ngAfterContentInit() {
    this.loadStep();
  }

  ngDoCheck() {
    // manual check on component change
    if (this.step && this.step.instance.constructor.componentName != this.state.component.componentName) {
      this.loadStep();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadStep() {
    if (this.step) {
      this.step.destroy();
    }

    setTimeout(() => {
      let componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.state.component);

      let viewContainerRef = this.stepHost.viewContainerRef;
      viewContainerRef.clear();

      this.step = viewContainerRef.createComponent(componentFactory);
      (<StepOneComponent>this.step.instance).exec = this.exec.bind(this);
    }, 510);
  }

}
