import { Component, HostBinding, Input  } from '@angular/core';
import { SlideAnimation } from '../../animations';
import { WizardAction } from '../../states';
import { StepTwoComponent } from '../../steps';

@Component({
  selector: 'step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
  animations: [ SlideAnimation ]
})
export class StepOneComponent {
  static componentName = 'StepOneComponent';

  @HostBinding('@slideAnimation') slideAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.padding')   padding = '20px';
  // @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.backgroundColor') backgroundColor = '#563d7c';
  @HostBinding('style.color') color = 'white';

  @Input() exec;

  actions: WizardAction[] = [];
  haveFooter: boolean = true;

  constructor() {
    this.actions = [
      {
        text: 'Next',
        action:  StepTwoComponent,
        classes: ['btn-primary', 'float-right']
      }
    ];
  }

}
