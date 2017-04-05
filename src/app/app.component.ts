import { Component, HostBinding, Input } from '@angular/core';
import { slideInDownAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInDownAnimation ]
})
export class AppComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.padding') padding = '20px';
  @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.backgroundColor') backgroundColor = 'blue';
  @HostBinding('style.color') color = 'white';

  @Input() param;

  title = 'Hi Mateo!';
}
