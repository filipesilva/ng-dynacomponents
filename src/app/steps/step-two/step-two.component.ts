import { Component, HostBinding, Input  } from '@angular/core';
import { SlideAnimation } from '../../animations';
import { WizardAction } from '../../states';
import { StepOneComponent } from '../../steps';

@Component({
  selector: 'step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
  animations: [ SlideAnimation ]
})
export class StepTwoComponent {

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
        text: 'Previous',
        action:  StepOneComponent,
        classes: ['btn-default', 'float-left']
      }
    ];
  }

}
