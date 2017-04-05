import { Type } from '@angular/core';
import { Action, ActionReducer } from '@ngrx/store';
// import { WizardStepComponent } from '../wizard';
import { StepOneComponent } from '../steps';


// STATE
export interface WizardState {
  component: Type<any>  // StepOneComponent
}

export interface WizardFunction {
  (): any;  // Action || null
}

export interface WizardAction {
  text: string,
  action: any,  // StepOneComponent || WizardFunction
  classes: string[]
  hidden?: boolean,
  disabled?: boolean
}


// INITIAL STATE
const initial: WizardState = {
  component: StepOneComponent
}


// ACTIONS
export const STEP_LOAD = 'STEP_LOAD';


// REDUCER
export function WizardReducer(state: WizardState = initial, action: Action) : WizardState {
  switch (action.type) {

    case STEP_LOAD:
      if (action.payload && action.payload.prototype /*&& action.payload.prototype instanceof WizardStepComponent*/) {
        return {
          component: <any>action.payload
        };
      }
      throw new Error('WizardAction payload should be a WizardStepComponent!');

    default:
      return state;
  }
}
