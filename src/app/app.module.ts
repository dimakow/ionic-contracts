import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { PizzaAppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { DetailComponent } from '../pages/detail/index';
import {DataService} from '../shared/index';

@NgModule({
  declarations: [
    PizzaAppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    IonicModule.forRoot(PizzaAppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PizzaAppComponent,
    HomeComponent,
    DetailComponent
  ],
  providers: [DataService]
})
export class AppModule {}
