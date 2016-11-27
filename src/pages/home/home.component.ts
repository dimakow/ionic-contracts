import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import {DetailComponent} from '../detail/index';
import {DataService} from '../../shared/index';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  public items = [];
  detailComponent = DetailComponent

  constructor (
    private nav: NavController,
    private data: DataService
  ) {
    this.items = data.getItems();
  }

  @ViewChild(Content) content: Content;

  scrollToTop() {
    this.content.scrollToTop();
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }

  openDetail() {
    this.nav.push(DetailComponent)
  }
}
