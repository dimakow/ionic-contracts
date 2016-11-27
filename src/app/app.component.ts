import {Component} from '@angular/core';
import {HomeComponent} from '../pages/home/home.component';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class PizzaAppComponent {
  rootPage: any = HomeComponent;
}
