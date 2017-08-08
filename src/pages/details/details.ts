import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CardPage} from "../card/card";

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  public billing() {
    this.navCtrl.push(CardPage);
  }
}
