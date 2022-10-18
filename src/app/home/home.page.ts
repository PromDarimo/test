import { Component } from '@angular/core';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isShowMore: boolean = false;

  constructor() {}

  btn(){ 
    this.isShowMore = ! this.isShowMore;
  }
}

