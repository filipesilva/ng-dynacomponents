import { WizardReducer } from './wizard.store';
// import { InputReducer } from './input.store';
// import { ResultReducer } from './result.store';

export * from './wizard.store';
// export * from './input.store';
// export * from './result.store';

export var Reducers = {
  wizard: WizardReducer,
  // input: InputReducer,
  // result: ResultReducer,
}
// TODO export Wizards Reducers inside a meta-reducer
