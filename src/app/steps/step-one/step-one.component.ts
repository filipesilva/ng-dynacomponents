import { Component, HostBinding, Input  } from '@angular/core';
import { slideInDownAnimation } from '../../animations';
import { WizardAction } from '../../states';

@Component({
  selector: 'step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
  animations: [ slideInDownAnimation ]
})
export class StepOneComponent {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.padding')   padding = '20px';
  // @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.backgroundColor') backgroundColor = '#563d7c';
  @HostBinding('style.color') color = 'white';

  @Input() param;

  actions: WizardAction[] = [];
  haveFooter: boolean = true;

  constructor() { }

}
