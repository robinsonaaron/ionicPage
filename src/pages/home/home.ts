import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPage } from '../my-page/my-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMyPage(detailInfo) {
    this.navCtrl.push('your-page', {
      'id': detailInfo.id
    });
  }
}
